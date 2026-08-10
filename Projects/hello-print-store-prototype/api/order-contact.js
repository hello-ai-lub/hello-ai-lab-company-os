import { IncomingForm } from 'formidable';
import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { put } from '@vercel/blob';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

const quantityDecisionLabelMap = {
    decided: 'サイズ・枚数が決まっている',
    rough: 'おおよそ決まっている',
    undecided: 'まだ決まっていない'
};

const deliveryPreferenceLabelMap = {
    'has-date': '希望日あり',
    'no-preference': '特に指定なし'
};

const designStatusLabelMap = {
    'complete-data': '完成データがある',
    'has-image': 'デザインイメージがある',
    'has-reference': '参考画像がある',
    'request-design': 'HPSにデザイン制作・修正を依頼したい',
    undecided: 'まだ何も決まっていない'
};

export const config = {
    api: {
        bodyParser: false
    }
};

function readEnv(name) {
    return String(process.env[name] || '').trim();
}

function parseForm(request) {
    const form = new IncomingForm({
        multiples: true,
        keepExtensions: true,
        maxFileSize: 20 * 1024 * 1024,
        maxTotalFileSize: 50 * 1024 * 1024,
        allowEmptyFiles: false
    });

    return new Promise((resolve, reject) => {
        form.parse(request, (error, fields, files) => {
            if (error) {
                reject(error);
                return;
            }
            resolve({ fields, files });
        });
    });
}

function pickFirstValue(value) {
    if (Array.isArray(value)) {
        return value[0] || '';
    }
    return value || '';
}

function normalizeFiles(fileValue) {
    if (!fileValue) {
        return [];
    }
    if (Array.isArray(fileValue)) {
        return fileValue;
    }
    return [fileValue];
}

function toJstString(isoString) {
    const date = isoString ? new Date(isoString) : new Date();
    return date.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
}

function formatYen(value) {
    return `${Math.round(Number(value || 0)).toLocaleString('ja-JP')}円`;
}

function safeText(value, fallback = '-') {
    const text = String(value || '').trim();
    return text || fallback;
}

function sanitizeFilename(filename) {
    const base = String(filename || 'attachment').replace(/[^a-zA-Z0-9._-]/g, '_');
    return base || 'attachment';
}

async function uploadAttachments(files) {
    if (!files.length) {
        return [];
    }

    if (!readEnv('BLOB_READ_WRITE_TOKEN')) {
        throw new Error('添付ファイル保存の設定が不足しています。BLOB_READ_WRITE_TOKEN を設定してください。');
    }

    const timestamp = Date.now();
    const uploaded = [];

    for (const file of files) {
        const originalName = sanitizeFilename(file.originalFilename);
        const fileBuffer = await readFile(file.filepath);
        const pathname = `order-attachments/${timestamp}-${randomUUID()}-${originalName}`;
        const blob = await put(pathname, fileBuffer, {
            access: 'public',
            addRandomSuffix: false,
            contentType: file.mimetype || 'application/octet-stream'
        });

        uploaded.push({
            name: originalName,
            size: Number(file.size || 0),
            type: String(file.mimetype || 'application/octet-stream'),
            url: blob.url
        });
    }

    return uploaded;
}

function buildAdminMailText(payload, attachmentLinks) {
    const specsText = Array.isArray(payload.specs) && payload.specs.length
        ? payload.specs.map((spec) => `- ${safeText(spec.label)}: ${safeText(spec.valueLabel)}`).join('\n')
        : '- なし';

    const optionsText = Array.isArray(payload.paidOptions) && payload.paidOptions.length
        ? payload.paidOptions.map((option) => `- ${safeText(option.label)}${option.quoteOnly ? '（要見積もり）' : option.add ? `（+${formatYen(option.add)}）` : ''}`).join('\n')
        : '- なし';

    const sizeText = Array.isArray(payload.sizeBreakdown) && payload.sizeBreakdown.length
        ? payload.sizeBreakdown.map((entry) => `- ${safeText(entry.size)}: ${Number(entry.quantity || 0)}${safeText(payload.quantityUnit, '枚')}`).join('\n')
        : '- 未入力';

    const attachmentText = attachmentLinks.length
        ? attachmentLinks.map((file, index) => `${index + 1}. ${file.name} (${Math.max(1, Math.round(file.size / 1024))}KB)\n   ${file.url}`).join('\n')
        : 'なし';

    const referenceText = payload.referencePrice && payload.referencePrice.isCalculated
        ? [
            `参考単価（税抜）: ${formatYen(payload.referencePrice.unitPriceExcl)}`,
            `参考単価（税込）: ${formatYen(payload.referencePrice.unitPriceIncl)}`,
            `参考合計（税抜）: ${formatYen(payload.referencePrice.totalExcl)}`,
            `参考合計（税込）: ${formatYen(payload.referencePrice.totalIncl)}`
        ].join('\n')
        : '数量未定のため参考合計は未計算';

    return [
        'Hello Print Store 新規お問い合わせ',
        '',
        `受信日時: ${toJstString(payload.submittedAt)}`,
        '',
        '【お客様情報】',
        `お名前: ${safeText(payload.customerName)}`,
        `チーム名 / 団体名: ${safeText(payload.teamName, 'なし')}`,
        `メールアドレス: ${safeText(payload.email)}`,
        `電話番号: ${safeText(payload.phone, 'なし')}`,
        '',
        '【商品・数量】',
        `選択商品: ${safeText(payload.productCode)} ${safeText(payload.productName)}`,
        `最低ロット: ${safeText(payload.minimumLot)}`,
        `数量決定状況: ${safeText(quantityDecisionLabelMap[payload.quantityDecision] || payload.quantityDecision)}`,
        `希望数量: ${payload.requestedQuantity > 0 ? `${payload.requestedQuantity}${safeText(payload.quantityUnit, '枚')}` : '未定'}`,
        'サイズ内訳:',
        sizeText,
        `その他サイズ: ${safeText(payload.otherSizeNote, 'なし')}`,
        '',
        '【仕様・オプション】',
        '選択仕様:',
        specsText,
        '有料オプション:',
        optionsText,
        '',
        '【制作・納期】',
        `デザイン状況: ${safeText(designStatusLabelMap[payload.designStatus] || payload.designStatus)}`,
        `希望納期: ${safeText(deliveryPreferenceLabelMap[payload.deliveryPreference] || payload.deliveryPreference)}${payload.desiredDate ? ` / ${payload.desiredDate}` : ''}`,
        `その他要望: ${safeText(payload.details, 'なし')}`,
        '',
        '【参考価格】',
        referenceText,
        '',
        '【添付ファイル】',
        attachmentText
    ].join('\n');
}

function buildCustomerMailText(payload) {
    const summarySpecs = Array.isArray(payload.specs) && payload.specs.length
        ? payload.specs.map((spec) => `${safeText(spec.label)}: ${safeText(spec.valueLabel)}`).join(' / ')
        : 'なし';

    const summaryOptions = Array.isArray(payload.paidOptions) && payload.paidOptions.length
        ? payload.paidOptions.map((option) => safeText(option.label)).join(' / ')
        : 'なし';

    const summaryPrice = payload.referencePrice && payload.referencePrice.isCalculated
        ? `参考合計: ${formatYen(payload.referencePrice.totalIncl)}（税込）`
        : '参考合計: 数量未定のため未計算';

    return [
        'お問い合わせありがとうございます。',
        '内容を確認後、Hello Print Storeよりご連絡いたします。',
        '',
        '※このメールはお問い合わせ受付の自動返信です。',
        '',
        '------ お問い合わせ内容（要約）------',
        `お名前: ${safeText(payload.customerName)}`,
        `商品: ${safeText(payload.productCode)} ${safeText(payload.productName)}`,
        `数量: ${payload.requestedQuantity > 0 ? `${payload.requestedQuantity}${safeText(payload.quantityUnit, '枚')}` : '未定'}`,
        `仕様: ${summarySpecs}`,
        `有料オプション: ${summaryOptions}`,
        `納期: ${safeText(deliveryPreferenceLabelMap[payload.deliveryPreference] || payload.deliveryPreference)}${payload.desiredDate ? ` / ${payload.desiredDate}` : ''}`,
        `その他要望: ${safeText(payload.details, 'なし')}`,
        summaryPrice
    ].join('\n');
}

async function sendResendEmail(apiKey, email) {
    const response = await fetch(RESEND_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Resend API failed (${response.status}): ${text}`);
    }

    return response.json();
}

function validatePayload(payload) {
    if (!payload || typeof payload !== 'object') {
        throw new Error('不正な送信データです。');
    }

    if (!safeText(payload.customerName, '')) {
        throw new Error('お名前が未入力です。');
    }

    if (!safeText(payload.email, '')) {
        throw new Error('メールアドレスが未入力です。');
    }

    if (!safeText(payload.productCode, '') || !safeText(payload.productName, '')) {
        throw new Error('商品情報が不足しています。');
    }
}

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        response.status(405).json({ ok: false, message: 'Method Not Allowed' });
        return;
    }

    try {
        const resendApiKey = readEnv('RESEND_API_KEY');
        const contactToEmail = readEnv('HPS_CONTACT_TO_EMAIL');
        const fromEmail = readEnv('HPS_MAIL_FROM');

        if (!resendApiKey || !contactToEmail || !fromEmail) {
            response.status(500).json({
                ok: false,
                message: 'メール送信設定が不足しています。RESEND_API_KEY / HPS_CONTACT_TO_EMAIL / HPS_MAIL_FROM を設定してください。'
            });
            return;
        }

        const { fields, files } = await parseForm(request);
        const payloadRaw = pickFirstValue(fields.payload);
        const payload = JSON.parse(String(payloadRaw || '{}'));
        validatePayload(payload);

        const attachments = normalizeFiles(files.attachments);
        const uploadedAttachments = await uploadAttachments(attachments);

        const adminText = buildAdminMailText(payload, uploadedAttachments);
        const customerText = buildCustomerMailText(payload);

        await sendResendEmail(resendApiKey, {
            from: fromEmail,
            to: [contactToEmail],
            reply_to: payload.email,
            subject: `Hello Print Store｜新規お問い合わせ (${safeText(payload.productCode)} ${safeText(payload.productName)})`,
            text: adminText
        });

        await sendResendEmail(resendApiKey, {
            from: fromEmail,
            to: [payload.email],
            subject: 'Hello Print Store｜お問い合わせを受け付けました',
            text: customerText
        });

        response.status(200).json({
            ok: true,
            message: '問い合わせ送信が完了しました。',
            attachmentCount: uploadedAttachments.length
        });
    } catch (error) {
        console.error('[order-contact] send failed', {
            message: error && error.message ? error.message : 'Unknown error'
        });
        response.status(500).json({
            ok: false,
            message: '送信に失敗しました。時間をおいて再度お試しください。'
        });
    }
}
