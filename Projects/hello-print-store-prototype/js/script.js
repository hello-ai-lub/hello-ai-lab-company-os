const INSTAGRAM_CONFIG = {
    accessToken: '',
    limit: 4,
    profileUrl: 'https://instagram.com/helloprintstore/',
    serverEndpoint: '/api/instagram-feed'
};

const INSTAGRAM_APP_CONFIG = {
    canonicalAppId: '1626671125739257',
    deprecatedAppIds: ['1479634687539283'],
    redirectUri: 'https://hello-print-store.vercel.app/instagram-oauth-callback.html',
    scope: 'instagram_basic,pages_show_list,pages_read_engagement,business_management',
    oauthEndpoint: 'https://www.facebook.com/v23.0/dialog/oauth',
    graphApiBase: 'https://graph.facebook.com',
    graphApiVersion: 'v23.0',
    oauthStateStorageKey: 'hps_instagram_oauth_state_v1',
    oauthReturnUrlStorageKey: 'hps_instagram_oauth_return_url_v1',
    accessTokenStorageKey: 'hps_instagram_access_token_v1',
    oauthCodeStorageKey: 'hps_instagram_oauth_code_v1'
};

const INSTAGRAM_CACHE_KEY = 'hps_instagram_feed_cache_v1';
const INSTAGRAM_CACHE_TTL_MS = 15 * 60 * 1000;
const INSTAGRAM_DEBUG_KEY = 'hps_instagram_graph_debug_v1';
const ORDER_CONTACT_FORM_CONFIG = {
    simulatedDelayMs: 950,
    draftStorageKey: 'hps_order_contact_draft_v1'
};

const ORDER_DEFAULT_SIZE_LIST = ['110', '120', '130', '140', '150', '160', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'];
const ORDER_CAP_SIZE_LIST = ['FREE'];
const ORDER_SOCK_SIZE_LIST = ['S(18-21cm)', 'M(23-25cm)', 'L(26-28cm)', 'XL(29-31cm)'];

const ORDER_PRODUCT_MASTER = {
    '01': {
        code: '01',
        name: 'タンクトップ',
        basePriceExcl: 4000,
        minLot: 10,
        unit: '枚',
        minLotNotes: ['上下セット（ノースリーブシャツ＋ハーフパンツ）の場合は5セット〜'],
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 500 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'スタンダード', value: 'standard', add: 0 }, { label: 'アジアフィット', value: 'asiafit', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '02': {
        code: '02',
        name: 'リバーシブル タンクトップ',
        basePriceExcl: 5500,
        minLot: 10,
        unit: '枚',
        minLotNotes: ['上下セット（リバーシブル ノースリーブシャツ＋リバーシブル ハーフパンツ）の場合は5セット〜'],
        specs: [
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'スタンダード', value: 'standard', add: 0 }, { label: 'アジアフィット', value: 'asiafit', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '03': {
        code: '03',
        name: 'Tシャツ',
        basePriceExcl: 3500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 500 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'スタンダード', value: 'standard', add: 0 }, { label: 'ユーロタイプ', value: 'euro', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '04': {
        code: '04',
        name: 'ロングスリーブTシャツ',
        basePriceExcl: 4500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブあり', value: 'rib', add: 0 }, { label: 'リブなし', value: 'no-rib', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '05': {
        code: '05',
        name: 'バスケットパンツ',
        basePriceExcl: 4500,
        minLot: 10,
        unit: '枚',
        minLotNotes: ['上下セット（ノースリーブシャツ＋ハーフパンツ）の場合は5セット〜'],
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 500 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'waist', label: 'ウエスト', options: [{ label: 'ゴム＋調整紐', value: 'elastic-cord', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: '左右サイドポケット付き', value: 'side-pocket', add: 0 }, { label: 'サイドポケットなし', value: 'no-side-pocket', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'スタンダード', value: 'standard', add: 0 }] }
        ],
        paidOptions: [
            { key: 'sideSlit', label: 'サイドスリットカット', add: 300 },
            { key: 'rearPocket', label: '右後ろポケット追加', add: 300 },
            { key: 'pocketZip', label: 'ポケットZIP（1箇所）', add: 150 }
        ]
    },
    '07': {
        code: '07',
        name: 'ハーフパンツ',
        basePriceExcl: 5500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'ポリエステル100%（シャカ系生地）', value: 'poly-shaka', add: 0 }] },
            { key: 'waist', label: 'ウエスト', options: [{ label: 'ゴム＋調整紐', value: 'elastic-cord', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: '左右サイドポケット標準', value: 'side-pocket', add: 0 }] }
        ],
        paidOptions: []
    },
    '08': {
        code: '08',
        name: 'フットボールシャツ',
        basePriceExcl: 5500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 1000 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブなし（基本仕様）', value: 'no-rib', add: 0 }, { label: 'リブあり', value: 'rib', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'ワイドシルエット', value: 'wide', add: 0 }] },
            { key: 'panel', label: '切り返し', options: [{ label: '胸部分に切り返しあり', value: 'chest-panel', add: 0 }] }
        ],
        paidOptions: []
    },
    '09': {
        code: '09',
        name: 'ロングスリーブ フットボールシャツ',
        basePriceExcl: 6000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 500 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブあり', value: 'rib', add: 0 }, { label: 'リブなし', value: 'no-rib', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'ワイドシルエット', value: 'wide', add: 0 }] },
            { key: 'panel', label: '切り返し', options: [{ label: '胸部分に切り返しあり', value: 'chest-panel', add: 0 }] }
        ],
        paidOptions: []
    },
    '10': {
        code: '10',
        name: 'ベースボールシャツ',
        basePriceExcl: 5000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地', options: [{ label: 'スタンダード生地', value: 'standard', add: 0 }, { label: 'メッシュ生地', value: 'mesh', add: 500 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'button', label: 'ボタンカラー', options: [{ label: 'ホワイト', value: 'white', add: 0 }, { label: 'ブラック', value: 'black', add: 0 }, { label: 'クリア', value: 'clear', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '11': {
        code: '11',
        name: 'ポロシャツ',
        basePriceExcl: 4500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'button', label: 'ボタンカラー', options: [{ label: 'ホワイト', value: 'white', add: 0 }, { label: 'ブラック', value: 'black', add: 0 }, { label: 'クリア', value: 'clear', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: []
    },
    '12': {
        code: '12',
        name: 'ロングスリーブ ポロシャツ',
        basePriceExcl: 5000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブあり', value: 'rib', add: 0 }, { label: 'リブなし', value: 'no-rib', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'button', label: 'ボタンカラー', options: [{ label: 'ホワイト', value: 'white', add: 0 }, { label: 'ブラック', value: 'black', add: 0 }, { label: 'クリア', value: 'clear', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス', value: 'box', add: 0 }, { label: 'ラウンド', value: 'round', add: 0 }, { label: '相談したい', value: 'consult', add: 0 }] }
        ],
        paidOptions: [],
        notes: ['選べる生地は要確認（PDF記載が空欄）']
    },
    '13': {
        code: '13',
        name: 'スウェットトップス',
        basePriceExcl: 6000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'neck', label: '首周り', options: [{ label: '丸首', value: 'crew', add: 0 }, { label: 'Vネック', value: 'vneck', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブ仕様', value: 'rib', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ボックス（ラウンド仕様への変更不可）', value: 'box', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: 'ポケットなし', value: 'none', add: 0 }] }
        ],
        paidOptions: []
    },
    '14': {
        code: '14',
        name: 'スウェットロングパンツ',
        basePriceExcl: 6500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'waist', label: 'ウエスト', options: [{ label: 'ゴム仕様 / ウエスト紐あり', value: 'elastic-cord', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'リブ仕様', value: 'rib', add: 0 }] }
        ],
        paidOptions: []
    },
    '15': {
        code: '15',
        name: 'サイドボタンパンツ',
        basePriceExcl: 10000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'waist', label: 'ウエスト', options: [{ label: 'ゴム仕様 / ウエスト紐あり', value: 'elastic-cord', add: 0 }] },
            { key: 'sideButton', label: 'サイドボタン仕様', options: [{ label: 'サイドボタンで開閉可能', value: 'side-button', add: 0 }] }
        ],
        paidOptions: []
    },
    '16': {
        code: '16',
        name: 'プルオーバーパーカー',
        basePriceExcl: 6500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'hood', label: 'フード', options: [{ label: 'プルオーバータイプ（フード付き）', value: 'pullover-hood', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }] },
            { key: 'cuff', label: '袖口', options: [{ label: 'リブ仕様', value: 'rib', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'リブ仕様', value: 'rib', add: 0 }] }
        ],
        paidOptions: []
    },
    '17': {
        code: '17',
        name: 'フルジップジャージ',
        basePriceExcl: 7000,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'neck', label: '首周り', options: [{ label: '立ち襟', value: 'stand-collar', add: 0 }] },
            { key: 'zip', label: '前開き・ファスナー', options: [{ label: 'フルジップ仕様', value: 'full-zip', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: '左右セパレートタイプのカンガルーポケット', value: 'kangaroo-split', add: 0 }] }
        ],
        paidOptions: [{ key: 'hoodChange', label: 'フード仕様への変更', add: 1000 }]
    },
    '18': {
        code: '18',
        name: 'ウインドブレーカージャケット',
        basePriceExcl: 8500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地・裏地', options: [{ label: 'ポリエステル100% / シャカ系生地 / メッシュ裏地付き', value: 'poly-mesh', add: 0 }] },
            { key: 'neck', label: '首周り', options: [{ label: '立ち襟', value: 'stand-collar', add: 0 }] },
            { key: 'zip', label: '前開き・ファスナー', options: [{ label: 'フルジップ仕様', value: 'full-zip', add: 0 }] },
            { key: 'zipColor', label: 'ジップカラー', options: [{ label: 'ホワイト', value: 'white', add: 0 }, { label: 'ブラック', value: 'black', add: 0 }] },
            { key: 'sleeve', label: '袖', options: [{ label: 'セットインスリーブ', value: 'set-in', add: 0 }, { label: 'ラグランスリーブ', value: 'raglan', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: 'ドローコード付き', value: 'draw-cord', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: '左右サイドポケット付き', value: 'side-pocket', add: 0 }] }
        ],
        paidOptions: []
    },
    '19': {
        code: '19',
        name: 'ウインドブレーカーパンツ',
        basePriceExcl: 8500,
        minLot: 10,
        unit: '枚',
        specs: [
            { key: 'fabric', label: '生地・裏地', options: [{ label: 'ポリエステル100% / シャカ系生地 / メッシュ裏地付き', value: 'poly-mesh', add: 0 }] },
            { key: 'waist', label: 'ウエスト', options: [{ label: 'ゴム＋調整紐', value: 'elastic-cord', add: 0 }] },
            { key: 'hem', label: '裾', options: [{ label: '裾ゴム仕様', value: 'elastic-hem', add: 0 }] },
            { key: 'pocket', label: 'ポケット', options: [{ label: '左右サイドポケット（ポケットZIP付き）', value: 'side-pocket-zip', add: 0 }] },
            { key: 'zipColor', label: 'ジップカラー', options: [{ label: 'ホワイト', value: 'white', add: 0 }, { label: 'ブラック', value: 'black', add: 0 }] },
            { key: 'fit', label: 'シルエット', options: [{ label: 'ストレートタイプ（基本仕様）', value: 'straight', add: 0 }, { label: 'テーパードタイプ', value: 'tapered', add: 0 }] }
        ],
        paidOptions: [{ key: 'hemZip', label: '裾ZIP仕様への変更', add: 500 }]
    },
    '20': {
        code: '20',
        name: 'フルメッシュキャップ',
        basePriceExcl: 4000,
        minLot: 20,
        unit: '個',
        sizePreset: 'cap',
        specs: [
            { key: 'material', label: '素材・仕様', options: [{ label: 'フルメッシュ仕様', value: 'full-mesh', add: 0 }] },
            { key: 'adjuster', label: 'サイズ調整', options: [{ label: 'バックアジャスター付き（調整可能）', value: 'adjustable', add: 0 }] },
            { key: 'print', label: 'プリント仕様', options: [{ label: 'フロントプリントのみ（DTF）', value: 'front-dtf', add: 0 }] }
        ],
        paidOptions: []
    },
    '21': {
        code: '21',
        name: 'オリジナルソックス',
        basePriceExcl: 1200,
        minLot: 50,
        unit: '足',
        sizePreset: 'socks',
        minLotBySpec: {
            key: 'sockType',
            map: {
                knit: 50,
                embroidery: 200
            }
        },
        specs: [
            { key: 'sockType', label: '製作タイプ', options: [{ label: '編みタイプ', value: 'knit', add: 0 }, { label: '刺繍タイプ', value: 'embroidery', add: 300 }, { label: '相談したい', value: 'consult', add: 0 }] },
            { key: 'material', label: '素材', options: [{ label: '綿', value: 'cotton', add: 0 }] },
            { key: 'method', label: '製作方法', options: [{ label: '編み込み / 刺繍', value: 'as-designed', add: 0 }] }
        ],
        paidOptions: [{ key: 'longLength', label: '通常より長い丈への変更（要見積もり）', add: 0, quoteOnly: true }],
        minLotNotes: ['編みタイプ: 50足〜（2カラー / 2サイズまで振り分け可能）', '刺繍タイプ: 200足〜（2カラー / 3サイズまで振り分け可能）'],
        notes: ['丈の延長は長さにより要見積もり', 'カラー・デザイン詳細は要相談']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initSkipLink();
    initHeaderThemeSwitch();
    initMobileMenu();
    initSmoothAnchorScroll();
    initNewsSection();
    initRevealAnimation();
    initWorksModal();
    initOrderContactForm();
    initInstagramFeed();
});

function initNewsSection() {
    const newsList = document.getElementById('newsList');
    if (!newsList) {
        return;
    }

    const source = window.HPS_NEWS_DATA && typeof window.HPS_NEWS_DATA === 'object'
        ? window.HPS_NEWS_DATA
        : { items: [], viewAllUrl: '' };
    const items = Array.isArray(source.items) ? source.items.slice(0, 3) : [];
    const viewAllUrl = typeof source.viewAllUrl === 'string' ? source.viewAllUrl.trim() : '';

    newsList.innerHTML = '';

    if (!items.length) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'news-item news-item-empty';
        emptyItem.textContent = '現在お知らせはありません。';
        newsList.appendChild(emptyItem);
    } else {
        items.forEach((item) => {
            const date = formatNewsDate(item && item.date ? item.date : '');
            const title = item && item.title ? String(item.title).trim() : '';
            const url = item && typeof item.url === 'string' ? item.url.trim() : '';

            if (!title) {
                return;
            }

            const listItem = document.createElement('li');
            listItem.className = 'news-item';

            const row = document.createElement(url ? 'a' : 'div');
            row.className = 'news-item-row';
            if (url) {
                row.href = url;
            }

            const dateEl = document.createElement('time');
            dateEl.className = 'news-date';
            if (item && item.date) {
                dateEl.dateTime = item.date;
            }
            dateEl.textContent = date;

            const titleEl = document.createElement('p');
            titleEl.className = 'news-title';
            titleEl.textContent = title;

            row.appendChild(dateEl);
            row.appendChild(titleEl);
            listItem.appendChild(row);
            newsList.appendChild(listItem);
        });
    }

    const viewAllLink = document.getElementById('newsViewAllLink');
    const viewAllText = document.getElementById('newsViewAllText');
    if (viewAllLink) {
        if (viewAllUrl) {
            viewAllLink.href = viewAllUrl;
            viewAllLink.hidden = false;
            if (viewAllText) {
                viewAllText.hidden = true;
            }
        } else {
            viewAllLink.hidden = true;
            if (viewAllText) {
                viewAllText.hidden = false;
            }
        }
    }
}

function formatNewsDate(dateString) {
    if (!dateString) {
        return '';
    }

    const normalized = String(dateString).trim().replace(/\//g, '-');
    const parts = normalized.split('-');
    if (parts.length === 3) {
        const [year, month, day] = parts;
        if (year && month && day) {
            return `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')}`;
        }
    }

    const parsed = new Date(normalized);
    if (Number.isNaN(parsed.getTime())) {
        return dateString;
    }

    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, '0');
    const d = String(parsed.getDate()).padStart(2, '0');
    return `${y}.${m}.${d}`;
}

function initInstagramOAuthDebug() {
    const config = getInstagramAuthConfig();

    window.HPSInstagramOAuth = {
        getConfig: () => ({ ...config }),
        buildUrl: () => buildInstagramOAuthUrl(config),
        logStartParams: () => logInstagramOAuthStart(config),
        startOAuth: () => startInstagramOAuth(config),
        getGraphDebug: () => readInstagramGraphDebug()
    };

    if (config.deprecatedAppIds.includes(config.appId)) {
        console.warn('Deprecated Meta App ID is active. Switch to canonical app ID.', config.appId);
    }
}

function getInstagramAuthConfig() {
    const appId = getMetaContent('instagram-app-id') || INSTAGRAM_APP_CONFIG.canonicalAppId;
    const metaRedirectUri = getMetaContent('instagram-redirect-uri');
    const defaultRedirectUri = buildDefaultRedirectUri();
    const redirectUri = resolveInstagramRedirectUri(metaRedirectUri, defaultRedirectUri);
    const scope = getMetaContent('instagram-oauth-scope') || INSTAGRAM_APP_CONFIG.scope;

    return {
        appId,
        redirectUri,
        scope,
        deprecatedAppIds: INSTAGRAM_APP_CONFIG.deprecatedAppIds,
        oauthEndpoint: INSTAGRAM_APP_CONFIG.oauthEndpoint,
        oauthStateStorageKey: INSTAGRAM_APP_CONFIG.oauthStateStorageKey,
        oauthReturnUrlStorageKey: INSTAGRAM_APP_CONFIG.oauthReturnUrlStorageKey,
        responseType: 'token'
    };
}

function resolveInstagramRedirectUri(metaRedirectUri, fallbackRedirectUri) {
    const fallback = (fallbackRedirectUri || INSTAGRAM_APP_CONFIG.redirectUri || '').trim();
    const metaValue = (metaRedirectUri || '').trim();

    if (typeof window === 'undefined' || !window.location) {
        return metaValue || fallback;
    }

    const host = window.location.hostname || '';
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host === '::1';

    if (!metaValue) {
        return fallback;
    }

    if (!isLocalhost) {
        return metaValue;
    }

    try {
        const parsedMeta = new URL(metaValue);
        const sameOrigin = parsedMeta.origin === window.location.origin;
        return sameOrigin ? metaValue : fallback;
    } catch (_error) {
        return fallback;
    }
}

function buildDefaultRedirectUri() {
    if (typeof window === 'undefined' || !window.location) {
        return 'http://localhost:8000/Projects/hello-print-store-prototype/instagram-oauth-callback.html';
    }

    const url = new URL(window.location.href);
    const path = url.pathname;
    const marker = '/Projects/hello-print-store-prototype/';
    const basePath = path.includes(marker)
        ? path.slice(0, path.indexOf(marker) + marker.length)
        : path.replace(/[^/]*$/, '');

    return `${url.origin}${basePath}instagram-oauth-callback.html`;
}

function buildInstagramOAuthUrl(config, stateValue) {
    const endpoint = new URL(config.oauthEndpoint);
    endpoint.searchParams.set('client_id', config.appId);
    endpoint.searchParams.set('redirect_uri', config.redirectUri);
    endpoint.searchParams.set('scope', config.scope);
    endpoint.searchParams.set('response_type', config.responseType);
    endpoint.searchParams.set('state', stateValue || 'hps_instagram_connect');
    endpoint.searchParams.set('auth_type', 'rerequest');

    return endpoint.toString();
}

function logInstagramOAuthStart(config) {
    console.group('HPS Instagram OAuth Start');
    console.log('client_id:', config.appId);
    console.log('redirect_uri:', config.redirectUri);
    console.log('meta_redirect_uri:', getMetaContent('instagram-redirect-uri'));
    console.log('current_origin:', window.location.origin);
    console.log('current_path:', window.location.pathname);
    console.log('scope:', config.scope);
    console.log('response_type:', config.responseType);
    console.log('oauth_url:', buildInstagramOAuthUrl(config));
    console.groupEnd();
}

function startInstagramOAuth(config) {
    if (!config.appId || !config.redirectUri) {
        console.error('Instagram OAuth configuration is incomplete.', config);
        return;
    }

    const state = createInstagramOAuthState();
    storeInstagramOAuthState(config.oauthStateStorageKey, state);
    storeInstagramOAuthReturnUrl(config.oauthReturnUrlStorageKey);

    logInstagramOAuthStart(config);
    window.location.href = buildInstagramOAuthUrl(config, state);
}

function createInstagramOAuthState() {
    if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.getRandomValues === 'function') {
        const values = new Uint8Array(12);
        window.crypto.getRandomValues(values);
        return Array.from(values, (value) => value.toString(16).padStart(2, '0')).join('');
    }

    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

function storeInstagramOAuthState(storageKey, state) {
    if (!storageKey || typeof sessionStorage === 'undefined') {
        return;
    }

    try {
        sessionStorage.setItem(storageKey, state);
    } catch (error) {
        console.warn('Failed to store OAuth state.', error);
    }
}

function storeInstagramOAuthReturnUrl(storageKey) {
    if (!storageKey || typeof sessionStorage === 'undefined') {
        return;
    }

    try {
        sessionStorage.setItem(storageKey, window.location.href);
    } catch (error) {
        console.warn('Failed to store OAuth return URL.', error);
    }
}

function getMetaContent(name) {
    const element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
        return '';
    }

    return (element.getAttribute('content') || '').trim();
}

function initHeaderThemeSwitch() {
    const header = document.getElementById('header');

    if (!header) {
        return;
    }

    const updateHeaderTheme = () => {
        if (window.scrollY > 56) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    window.addEventListener('resize', updateHeaderTheme);
    updateHeaderTheme();
}

function initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function initSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.textContent = 'Skip to main content';
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = [
        'position:absolute',
        'top:-48px',
        'left:0',
        'padding:10px 12px',
        'z-index:9999',
        'background:#1f5ed8',
        'color:#fff',
        'text-decoration:none',
        'font-family:Barlow,sans-serif',
        'letter-spacing:0.06em'
    ].join(';');

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-48px';
    });

    document.body.prepend(skipLink);
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !headerNav) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        headerNav.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            headerNav.classList.remove('active');
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            menuToggle.classList.remove('active');
            headerNav.classList.remove('active');
        }
    });
}

function initSmoothAnchorScroll() {
    const fixedHeader = document.querySelector('.header');
    const headerHeight = fixedHeader ? fixedHeader.offsetHeight : 0;

    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) {
            return;
        }

        const id = anchor.getAttribute('href');
        if (!id || id === '#') {
            return;
        }

        const target = document.querySelector(id);
        if (!target) {
            return;
        }

        event.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
}

function initRevealAnimation() {
    const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-up]');
    if (!revealTargets.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        revealTargets.forEach((target) => target.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('visible');
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -10% 0px'
    });

    revealTargets.forEach((target) => observer.observe(target));
}

function initWorksModal() {
    const modal = document.getElementById('worksModal');
    const modalImage = document.getElementById('worksModalImage');
    const modalTitle = document.getElementById('worksModalTitle');
    const modalDescription = document.getElementById('worksModalDescription');
    const closeButton = document.getElementById('worksModalClose');
    const prevButton = document.getElementById('worksModalPrev');
    const nextButton = document.getElementById('worksModalNext');
    const triggerLinks = Array.from(document.querySelectorAll('[data-work-item]'));

    if (!modal || !modalImage || !modalTitle || !modalDescription || !triggerLinks.length) {
        return;
    }

    const workItems = triggerLinks.map((link) => ({
        src: link.getAttribute('href') || '',
        title: link.getAttribute('data-work-title') || 'WORK TITLE',
        description: link.getAttribute('data-work-description') || 'WORK DESCRIPTION',
        alt: link.querySelector('img') ? link.querySelector('img').getAttribute('alt') : 'Work image'
    }));

    let activeIndex = 0;

    const updateModal = () => {
        const item = workItems[activeIndex];
        if (!item) {
            return;
        }

        modalImage.src = item.src;
        modalImage.alt = item.alt || item.title;
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
    };

    const open = (index) => {
        activeIndex = index;
        updateModal();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modalImage.removeAttribute('src');
        document.body.style.overflow = '';
    };

    const showPrev = () => {
        activeIndex = (activeIndex - 1 + workItems.length) % workItems.length;
        updateModal();
    };

    const showNext = () => {
        activeIndex = (activeIndex + 1) % workItems.length;
        updateModal();
    };

    triggerLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            open(index);
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', close);
    }

    if (prevButton) {
        prevButton.addEventListener('click', showPrev);
    }

    if (nextButton) {
        nextButton.addEventListener('click', showNext);
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            close();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!modal.classList.contains('open')) {
            return;
        }

        if (event.key === 'Escape') {
            close();
        } else if (event.key === 'ArrowLeft') {
            showPrev();
        } else if (event.key === 'ArrowRight') {
            showNext();
        }
    });
}

function initOrderContactForm() {
    const form = document.getElementById('orderContactForm');
    if (!form) {
        return;
    }

    const submitButton = document.getElementById('orderSubmitButton');
    const previewButton = document.getElementById('previewButton');
    const editButton = document.getElementById('editButton');
    const statusElement = document.getElementById('orderFormStatus');
    const fileInput = document.getElementById('attachments');
    const filePreview = document.getElementById('attachmentPreview');
    const productSelect = document.getElementById('productType');
    const quantityDecision = document.getElementById('quantityDecision');
    const designStatus = document.getElementById('designStatus');
    const deliveryPreference = document.getElementById('deliveryPreference');
    const desiredDateWrap = document.getElementById('desiredDateWrap');
    const desiredDateInput = document.getElementById('desiredDate');
    const quantityKnownFields = document.getElementById('quantityKnownFields');
    const quantityRoughFields = document.getElementById('quantityRoughFields');
    const totalQuantityKnown = document.getElementById('totalQuantityKnown');
    const roughQuantity = document.getElementById('roughQuantity');
    const unitPreview = document.getElementById('unitPreview');
    const designFeeNotice = document.getElementById('designFeeNotice');
    const confirmationSection = document.getElementById('confirmationSection');
    const completionSection = document.getElementById('completionSection');
    const previewActionRow = document.getElementById('previewActionRow');
    const routeState = getOrderContactRouteState();

    let isConfirmed = false;
    let isSubmitting = false;
    let currentProductCode = '';

    renderSizeInputs(null);
    renderProductDependentUi();
    refreshQuantitySection();
    refreshDeliverySection();
    refreshDesignNotice();
    refreshPriceEstimate();
    restoreOrderDraft(form);

    if (routeState.isConfirmPath) {
        const restoredDraft = readOrderDraft();
        if (restoredDraft && restoredDraft.payload) {
            showOrderConfirmation(restoredDraft.payload, {
                confirmationSection,
                statusElement,
                routeState,
                previewActionRow
            });
            isConfirmed = true;
        } else {
            updateOrderContactRoute(routeState.formPath, true);
            updateOrderFormStatus(statusElement, 'error', '確認データが見つかりません。入力画面から再度お進みください。');
        }
    }

    if (fileInput && filePreview) {
        fileInput.addEventListener('change', () => {
            renderAttachmentPreview(fileInput.files, filePreview);
            refreshPriceEstimate();
        });
    }

    form.addEventListener('change', (event) => {
        if (event.target === productSelect) {
            renderProductDependentUi();
        }

        const product = ORDER_PRODUCT_MASTER[String(productSelect && productSelect.value ? productSelect.value : '').trim()];
        renderProductMeta(product);
        refreshQuantitySection();
        refreshDeliverySection();
        refreshDesignNotice();
        refreshPriceEstimate();
        syncKnownQuantityFromSize();
    });

    form.addEventListener('input', () => {
        syncKnownQuantityFromSize();
        refreshMinimumLotNotice();
        refreshPriceEstimate();
    });

    if (previewButton) {
        previewButton.addEventListener('click', () => {
            clearFormErrors(form);
            const validation = validateOrderContactForm(form);

            if (!validation.ok) {
                applyFormErrors(form, validation.errors);
                updateOrderFormStatus(statusElement, 'error', '入力内容をご確認ください。必須項目が未入力です。');
                return;
            }

            const payload = buildOrderContactPayload(form);
            persistOrderDraft(form, payload);
            showOrderConfirmation(payload, {
                confirmationSection,
                statusElement,
                routeState,
                previewActionRow
            });
            isConfirmed = true;
        });
    }

    if (editButton) {
        editButton.addEventListener('click', () => {
            isConfirmed = false;
            hideOrderConfirmation({
                confirmationSection,
                statusElement,
                routeState,
                previewActionRow
            });
        });
    }

    window.addEventListener('popstate', () => {
        const nextRouteState = getOrderContactRouteState();
        const restoredDraft = readOrderDraft();

        if (nextRouteState.isConfirmPath && restoredDraft && restoredDraft.payload) {
            showOrderConfirmation(restoredDraft.payload, {
                confirmationSection,
                statusElement,
                routeState: nextRouteState,
                previewActionRow
            });
            isConfirmed = true;
            return;
        }

        hideOrderConfirmation({
            confirmationSection,
            statusElement,
            routeState: nextRouteState,
            previewActionRow,
            replaceHistory: true
        });
        isConfirmed = false;
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        if (!isConfirmed) {
            if (previewButton) {
                previewButton.click();
            }
            return;
        }

        clearFormErrors(form);
        const validation = validateOrderContactForm(form);

        if (!validation.ok) {
            applyFormErrors(form, validation.errors);
            updateOrderFormStatus(statusElement, 'error', '入力内容をご確認ください。必須項目が未入力です。');
            return;
        }

        isSubmitting = true;
        setFormSubmittingState(submitButton, true);
        updateOrderFormStatus(statusElement, 'loading', '送信中です。しばらくお待ちください...');

        const payload = buildOrderContactPayload(form);
        const endpoint = (form.getAttribute('data-endpoint') || '').trim();

        try {
            if (endpoint) {
                await submitOrderContactToEndpoint(endpoint, form, payload);
            } else {
                await simulateOrderContactSubmit();
            }

            if (completionSection) {
                completionSection.classList.remove('is-hidden');
                completionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (previewActionRow) {
                previewActionRow.classList.add('is-hidden');
            }

            if (confirmationSection) {
                confirmationSection.classList.add('is-hidden');
            }

            form.querySelectorAll('.form-block').forEach((block) => {
                if (block.id === 'completionSection') {
                    return;
                }

                block.classList.add('is-muted');
            });

            form.querySelectorAll('input, select, textarea, button').forEach((control) => {
                if (control.id === 'editButton') {
                    return;
                }

                control.disabled = true;
            });

            updateOrderFormStatus(
                statusElement,
                'success',
                endpoint
                    ? '送信が完了しました。担当者よりご連絡いたします。'
                    : 'お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。'
            );

            clearOrderDraft();

            console.log('Order contact payload preview', payload);
        } catch (error) {
            console.error('Order contact submit failed', error);
            updateOrderFormStatus(statusElement, 'error', error && error.message ? error.message : '送信に失敗しました。時間をおいて再度お試しください。');
        } finally {
            isSubmitting = false;
            setFormSubmittingState(submitButton, false);
        }
    });

    function renderSizeInputs(product) {
        const sizeGrid = document.getElementById('sizeInputsGrid');
        if (!sizeGrid) {
            return;
        }

        const sizes = getSizeListForProduct(product);

        sizeGrid.innerHTML = sizes.map((size) => {
            const key = toSizeKey(size);
            return `
            <label class="size-field" for="size_${key}">
                <span>${size}</span>
                <input id="size_${key}" name="size_${key}" data-size-key="${key}" data-size-qty type="number" min="0" step="1" inputmode="numeric" value="0" aria-label="${size} サイズ数量">
            </label>
        `;
        }).join('');
    }

    function renderProductDependentUi() {
        const code = String(productSelect && productSelect.value ? productSelect.value : '').trim();
        const product = ORDER_PRODUCT_MASTER[code];
        if (code !== currentProductCode) {
            currentProductCode = code;
            renderSizeInputs(product);
        }
        renderProductMeta(product);
        renderProductSpecs(product);
        renderPaidOptions(product);
        refreshUnitPreview(product);
        refreshMinimumLotNotice();
    }

    function renderProductMeta(product) {
        const card = document.getElementById('productPriceCard');
        if (!card) {
            return;
        }

        if (!product) {
            card.innerHTML = '<h3 class="product-meta-title">参考価格・最低ロット</h3><p class="product-meta-empty">商品を選択すると表示されます。</p>';
            return;
        }

        const unitPriceTaxIncl = Math.round(product.basePriceExcl * 1.1);
        const selectedSpecs = readSelectedSpecs(product);
        const effectiveMinLot = getEffectiveMinLot(product, selectedSpecs);
        const priceLines = renderPriceLines(product);
        const minLotNote = Array.isArray(product.minLotNotes) && product.minLotNotes.length
            ? `<p class="form-hint">${product.minLotNotes.map((note) => escapeHtml(note)).join('<br>')}</p>`
            : '';
        const productNotes = Array.isArray(product.notes) && product.notes.length
            ? `<p class="form-hint">${product.notes.map((note) => escapeHtml(note)).join('<br>')}</p>`
            : '';

        card.innerHTML = `
            <h3 class="product-meta-title">${product.code} ${product.name}</h3>
            <dl class="product-meta-list">
                <div><dt>基本価格（税抜）</dt><dd>${formatYen(product.basePriceExcl)}</dd></div>
                <div><dt>税込価格</dt><dd>${formatYen(unitPriceTaxIncl)}</dd></div>
                <div><dt>最低ロット</dt><dd>${effectiveMinLot}${product.unit}</dd></div>
            </dl>
            ${priceLines}
            ${minLotNote}
            ${productNotes}
            <p class="form-hint">価格は参考価格です。内容確認後に正式見積もりをご案内します。</p>
        `;
    }

    function renderPriceLines(product) {
        if (!product) {
            return '';
        }

        const fabricSpec = Array.isArray(product.specs)
            ? product.specs.find((spec) => spec.key === 'fabric' || spec.key === 'sockType')
            : null;

        if (!fabricSpec || !Array.isArray(fabricSpec.options)) {
            return '';
        }

        const priced = fabricSpec.options.filter((option) => !option.quoteOnly && option.value !== 'consult');
        if (priced.length <= 1) {
            return '';
        }

        return `<div class="product-meta-list">${priced.map((option) => {
            const excl = product.basePriceExcl + Math.max(0, Number(option.add || 0));
            const incl = Math.round(excl * 1.1);
            return `<div><dt>${escapeHtml(option.label)}</dt><dd>${formatYen(excl)} / ${formatYen(incl)}</dd></div>`;
        }).join('')}</div>`;
    }

    function renderProductSpecs(product) {
        const specsContainer = document.getElementById('productSpecsContainer');
        if (!specsContainer) {
            return;
        }

        if (!product || !Array.isArray(product.specs) || !product.specs.length) {
            specsContainer.innerHTML = '<p class="dynamic-empty">商品選択後に仕様項目が表示されます。</p>';
            return;
        }

        specsContainer.innerHTML = product.specs.map((spec) => `
            <label class="form-field" for="spec_${spec.key}">
                <span class="form-label">${spec.label}</span>
                <select id="spec_${spec.key}" name="spec_${spec.key}" data-spec-key="${spec.key}">
                    ${spec.options.map((option) => `<option value="${option.value}">${option.label}${option.quoteOnly ? '（要見積もり）' : option.add > 0 ? `（+${formatYen(option.add)}）` : ''}</option>`).join('')}
                </select>
            </label>
        `).join('');
    }

    function renderPaidOptions(product) {
        const optionsContainer = document.getElementById('paidOptionsContainer');
        if (!optionsContainer) {
            return;
        }

        if (!product || !Array.isArray(product.paidOptions) || !product.paidOptions.length) {
            optionsContainer.innerHTML = '';
            return;
        }

        optionsContainer.innerHTML = `
            <fieldset class="form-fieldset">
                <legend class="form-label">有料オプション <small>任意</small></legend>
                <div class="chip-grid">
                    ${product.paidOptions.map((option) => `
                        <label class="chip-option">
                            <input type="checkbox" name="paidOption" value="${option.key}" data-option-key="${option.key}">
                            <span>${option.label}<br><small>${option.quoteOnly ? '要見積もり' : `+${formatYen(option.add)} / ${product.unit}`}</small></span>
                        </label>
                    `).join('')}
                </div>
                <p class="form-hint">要見積もり項目はこの参考価格に含まれない場合があります。</p>
            </fieldset>
        `;
    }

    function refreshUnitPreview(product) {
        const resolvedProduct = product || ORDER_PRODUCT_MASTER[String(productSelect && productSelect.value ? productSelect.value : '').trim()];
        if (unitPreview) {
            unitPreview.textContent = resolvedProduct ? resolvedProduct.unit : '枚';
        }
    }

    function refreshQuantitySection() {
        const mode = String(quantityDecision && quantityDecision.value ? quantityDecision.value : '');

        if (quantityKnownFields) {
            quantityKnownFields.classList.toggle('is-hidden', mode !== 'decided');
        }

        if (quantityRoughFields) {
            quantityRoughFields.classList.toggle('is-hidden', mode !== 'rough');
        }

        refreshMinimumLotNotice();
    }

    function refreshDeliverySection() {
        const hasDate = deliveryPreference && deliveryPreference.value === 'has-date';
        if (desiredDateWrap) {
            desiredDateWrap.classList.toggle('is-hidden', !hasDate);
        }

        if (desiredDateInput && !hasDate) {
            desiredDateInput.value = '';
        }
    }

    function refreshDesignNotice() {
        const isRequest = designStatus && designStatus.value === 'request-design';
        if (designFeeNotice) {
            designFeeNotice.classList.toggle('is-hidden', !isRequest);
        }
    }

    function syncKnownQuantityFromSize() {
        const mode = String(quantityDecision && quantityDecision.value ? quantityDecision.value : '');
        if (mode !== 'decided' || !totalQuantityKnown) {
            return;
        }

        const sizeInputs = Array.from(form.querySelectorAll('[data-size-qty]'));
        const sum = sizeInputs.reduce((acc, input) => acc + Math.max(0, Number(input.value || 0)), 0);

        if (document.activeElement !== totalQuantityKnown) {
            totalQuantityKnown.value = String(sum);
        }
    }

    function refreshMinimumLotNotice() {
        const notice = document.getElementById('minimumLotNotice');
        const product = ORDER_PRODUCT_MASTER[String(productSelect && productSelect.value ? productSelect.value : '').trim()];

        if (!notice || !product) {
            return;
        }

        const quantity = resolveRequestedQuantity();
        const selectedSpecs = readSelectedSpecs(product);
        const effectiveMinLot = getEffectiveMinLot(product, selectedSpecs);
        if (quantity > 0 && quantity < effectiveMinLot) {
            notice.textContent = `通常の最低ロット（${effectiveMinLot}${product.unit}）を下回っています。内容確認後にご案内します。`;
            notice.classList.remove('is-hidden');
        } else {
            notice.textContent = '';
            notice.classList.add('is-hidden');
        }
    }

    function getSizeListForProduct(product) {
        if (!product || !product.sizePreset) {
            return ORDER_DEFAULT_SIZE_LIST;
        }

        if (product.sizePreset === 'cap') {
            return ORDER_CAP_SIZE_LIST;
        }

        if (product.sizePreset === 'socks') {
            return ORDER_SOCK_SIZE_LIST;
        }

        return ORDER_DEFAULT_SIZE_LIST;
    }

    function toSizeKey(sizeLabel) {
        return String(sizeLabel).replace(/[^a-zA-Z0-9]/g, '_');
    }

    function getEffectiveMinLot(product, selectedSpecs) {
        if (!product) {
            return 0;
        }

        const baseMinLot = Number(product.minLot || 0);
        if (!product.minLotBySpec || !product.minLotBySpec.key || !product.minLotBySpec.map) {
            return baseMinLot;
        }

        const selected = (selectedSpecs || []).find((spec) => spec.key === product.minLotBySpec.key);
        if (!selected) {
            return baseMinLot;
        }

        const mapped = product.minLotBySpec.map[selected.value];
        return Number(mapped || baseMinLot);
    }

    function resolveRequestedQuantity() {
        const mode = String(quantityDecision && quantityDecision.value ? quantityDecision.value : '');

        if (mode === 'decided') {
            return Math.max(0, Number(totalQuantityKnown && totalQuantityKnown.value ? totalQuantityKnown.value : 0));
        }

        if (mode === 'rough') {
            return Math.max(0, Number(roughQuantity && roughQuantity.value ? roughQuantity.value : 0));
        }

        return 0;
    }

    function refreshPriceEstimate() {
        const box = document.getElementById('referencePriceBox');
        if (!box) {
            return;
        }

        const product = ORDER_PRODUCT_MASTER[String(productSelect && productSelect.value ? productSelect.value : '').trim()];
        if (!product) {
            box.innerHTML = '<p class="price-estimate-empty">商品と数量を入力すると参考価格を表示します。</p>';
            return;
        }

        const quantity = resolveRequestedQuantity();
        const selectedSpecs = readSelectedSpecs(product);
        const selectedPaidOptions = readSelectedPaidOptions(product);
        const unitPriceExcl = calculateUnitPriceExcl(product, selectedSpecs, selectedPaidOptions);
        const unitPriceIncl = Math.round(unitPriceExcl * 1.1);
        const effectiveMinLot = getEffectiveMinLot(product, selectedSpecs);

        if (quantity <= 0) {
            box.innerHTML = `
                <p><strong>${product.name}</strong></p>
                <p class="form-hint">数量未定のため合計金額は未計算です。</p>
                <p class="form-hint">最低ロット: ${effectiveMinLot}${product.unit}</p>
                <div class="price-pair">
                    <p>参考単価（税抜）: ${formatYen(unitPriceExcl)}</p>
                    <p>参考単価（税込）: ${formatYen(unitPriceIncl)}</p>
                </div>
            `;
            return;
        }

        const totalExcl = unitPriceExcl * quantity;
        const totalIncl = Math.round(totalExcl * 1.1);

        box.innerHTML = `
            <p><strong>${product.name}</strong> / ${quantity}${product.unit}</p>
            <div class="price-pair">
                <p>参考単価: ${formatYen(unitPriceExcl)}（税抜） / ${formatYen(unitPriceIncl)}（税込）</p>
                <p>参考合計: ${formatYen(totalExcl)}（税抜） / ${formatYen(totalIncl)}（税込）</p>
                <p>最低ロット目安: ${effectiveMinLot}${product.unit}</p>
            </div>
        `;
    }
}

function getOrderContactRouteState() {
    if (typeof window === 'undefined' || !window.location) {
        return {
            formPath: '/contact',
            confirmPath: '/contact/confirm',
            isConfirmPath: false
        };
    }

    const pathname = window.location.pathname || '/contact';
    const match = pathname.match(/^(.*?)(?:\/contact(?:\.html)?(?:\/confirm)?\/?)$/);
    const basePath = match && typeof match[1] === 'string' ? match[1].replace(/\/$/, '') : '';
    const prefix = basePath || '';

    return {
        formPath: `${prefix}/contact`,
        confirmPath: `${prefix}/contact/confirm`,
        isConfirmPath: /\/contact(?:\.html)?\/confirm\/?$/.test(pathname) || /\/contact\/confirm\/?$/.test(pathname)
    };
}

function updateOrderContactRoute(nextPath, replaceHistory = false) {
    if (typeof window === 'undefined' || !window.history || !nextPath) {
        return;
    }

    const method = replaceHistory ? 'replaceState' : 'pushState';
    window.history[method]({}, document.title, nextPath);
}

function persistOrderDraft(form, payload) {
    if (typeof window === 'undefined' || !window.sessionStorage || !form) {
        return;
    }

    const draftFields = {};

    Array.from(form.elements).forEach((element) => {
        if (!element || !element.name || element.type === 'file' || element.disabled) {
            return;
        }

        if ((element.type === 'checkbox' || element.type === 'radio')) {
            draftFields[element.name] = Boolean(element.checked);
            return;
        }

        draftFields[element.name] = element.value;
    });

    const fileInput = form.elements.attachments;
    const attachmentNames = fileInput && fileInput.files ? Array.from(fileInput.files).map((file) => file.name) : [];
    const draft = {
        fields: draftFields,
        payload,
        attachmentNames,
        savedAt: Date.now()
    };

    window.sessionStorage.setItem(ORDER_CONTACT_FORM_CONFIG.draftStorageKey, JSON.stringify(draft));
}

function readOrderDraft() {
    if (typeof window === 'undefined' || !window.sessionStorage) {
        return null;
    }

    const raw = window.sessionStorage.getItem(ORDER_CONTACT_FORM_CONFIG.draftStorageKey);
    if (!raw) {
        return null;
    }

    try {
        return JSON.parse(raw);
    } catch (_error) {
        return null;
    }
}

function clearOrderDraft() {
    if (typeof window === 'undefined' || !window.sessionStorage) {
        return;
    }

    window.sessionStorage.removeItem(ORDER_CONTACT_FORM_CONFIG.draftStorageKey);
}

function restoreOrderDraft(form) {
    const draft = readOrderDraft();
    if (!draft || !draft.fields || !form) {
        return;
    }

    const fields = draft.fields;
    Object.entries(fields).forEach(([name, value]) => {
        const element = form.elements.namedItem(name);
        if (!element) {
            return;
        }

        if (element instanceof RadioNodeList) {
            Array.from(element).forEach((control) => {
                if ((control.type === 'checkbox' || control.type === 'radio')) {
                    control.checked = control.value === value || value === true;
                } else {
                    control.value = value;
                }
            });
            return;
        }

        if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = Boolean(value);
            return;
        }

        element.value = value;
    });
}

function showOrderConfirmation(payload, context) {
    const { confirmationSection, statusElement, routeState } = context;
    renderConfirmationSummary(payload);

    if (confirmationSection) {
        confirmationSection.classList.remove('is-hidden');
        confirmationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    updateOrderContactRoute(routeState.confirmPath);
    updateOrderFormStatus(statusElement, 'loading', '確認画面を表示しました。内容をご確認ください。');
}

function hideOrderConfirmation(context) {
    const { confirmationSection, statusElement, routeState, replaceHistory = false } = context;

    if (confirmationSection) {
        confirmationSection.classList.add('is-hidden');
    }

    updateOrderContactRoute(routeState.formPath, replaceHistory);
    updateOrderFormStatus(statusElement, 'loading', '入力画面に戻りました。必要な項目を修正してください。');
}

function validateOrderContactForm(form) {
    const errors = {};
    const name = form.elements.customerName;
    const email = form.elements.email;
    const productType = form.elements.productType;
    const quantityDecision = form.elements.quantityDecision;
    const totalQuantityKnown = form.elements.totalQuantityKnown;
    const roughQuantity = form.elements.roughQuantity;
    const designStatus = form.elements.designStatus;
    const deliveryPreference = form.elements.deliveryPreference;
    const desiredDate = form.elements.desiredDate;

    if (!name || !String(name.value || '').trim()) {
        errors.customerName = 'お名前を入力してください。';
    }

    if (!email || !String(email.value || '').trim()) {
        errors.email = 'メールアドレスを入力してください。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email.value).trim())) {
        errors.email = '有効なメールアドレスを入力してください。';
    }

    if (!productType || !String(productType.value || '').trim()) {
        errors.productType = '商品を選択してください。';
    }

    if (!quantityDecision || !String(quantityDecision.value || '').trim()) {
        errors.quantityDecision = 'サイズ・数量の決定状況を選択してください。';
    }

    if (quantityDecision && quantityDecision.value === 'decided') {
        const knownValue = Math.max(0, Number(totalQuantityKnown && totalQuantityKnown.value ? totalQuantityKnown.value : 0));
        if (knownValue <= 0) {
            errors.totalQuantityKnown = '合計数量を1以上で入力してください。';
        }
    }

    if (quantityDecision && quantityDecision.value === 'rough') {
        const roughValue = Number(roughQuantity && roughQuantity.value ? roughQuantity.value : 0);
        if (roughValue < 0) {
            errors.roughQuantity = '数量は0以上で入力してください。';
        }
    }

    if (!designStatus || !String(designStatus.value || '').trim()) {
        errors.designStatus = 'デザイン状況を選択してください。';
    }

    if (!deliveryPreference || !String(deliveryPreference.value || '').trim()) {
        errors.deliveryPreference = '納期希望を選択してください。';
    }

    if (deliveryPreference && deliveryPreference.value === 'has-date' && (!desiredDate || !String(desiredDate.value || '').trim())) {
        errors.desiredDate = '希望日を入力してください。';
    }

    return {
        ok: Object.keys(errors).length === 0,
        errors
    };
}

function applyFormErrors(form, errors) {
    Object.entries(errors).forEach(([field, message]) => {
        const input = form.elements[field];
        if (input && input.closest('.form-field')) {
            input.closest('.form-field').classList.add('field-error');
        }

        const errorNode = form.querySelector(`[data-error-for="${field}"]`);
        if (errorNode) {
            errorNode.textContent = message;
        }
    });
}

function clearFormErrors(form) {
    form.querySelectorAll('.field-error').forEach((node) => node.classList.remove('field-error'));
    form.querySelectorAll('.form-error').forEach((node) => {
        node.textContent = '';
    });
}

function buildOrderContactPayload(form) {
    const product = ORDER_PRODUCT_MASTER[String(form.elements.productType.value || '').trim()];
    const requestedQuantity = resolvePayloadQuantity(form);
    const selectedSpecs = readSelectedSpecs(product, form);
    const effectiveMinLot = getProductEffectiveMinLot(product, selectedSpecs);
    const selectedPaidOptions = readSelectedPaidOptions(product, form);
    const unitPriceExcl = product ? calculateUnitPriceExcl(product, selectedSpecs, selectedPaidOptions) : 0;
    const unitPriceIncl = Math.round(unitPriceExcl * 1.1);
    const totalExcl = requestedQuantity > 0 ? unitPriceExcl * requestedQuantity : 0;
    const totalIncl = requestedQuantity > 0 ? Math.round(totalExcl * 1.1) : 0;
    const fileInput = form.elements.attachments;
    const files = fileInput && fileInput.files ? Array.from(fileInput.files).map((file) => file.name) : [];
    const sizeBreakdown = getProductSizeList(product)
        .map((size) => {
            const key = toSizeKeyGlobal(size);
            return { size, quantity: Number(form.elements[`size_${key}`] ? form.elements[`size_${key}`].value : 0) };
        })
        .filter((entry) => Number.isFinite(entry.quantity) && entry.quantity > 0);

    return {
        customerName: String(form.elements.customerName.value || '').trim(),
        teamName: String(form.elements.teamName.value || '').trim(),
        email: String(form.elements.email.value || '').trim(),
        phone: String(form.elements.phone.value || '').trim(),
        productCode: product ? product.code : '',
        productName: product ? product.name : '',
        minimumLot: product ? `${effectiveMinLot}${product.unit}` : '',
        quantityDecision: String(form.elements.quantityDecision.value || '').trim(),
        requestedQuantity,
        quantityUnit: product ? product.unit : '枚',
        sizeBreakdown,
        otherSizeNote: String(form.elements.otherSizeNote.value || '').trim(),
        roughQuantity: Number(form.elements.roughQuantity.value || 0),
        specs: selectedSpecs,
        paidOptions: selectedPaidOptions,
        designStatus: String(form.elements.designStatus.value || '').trim(),
        deliveryPreference: String(form.elements.deliveryPreference.value || '').trim(),
        desiredDate: String(form.elements.desiredDate.value || '').trim(),
        details: String(form.elements.details.value || '').trim(),
        attachmentNames: files,
        referencePrice: {
            unitPriceExcl,
            unitPriceIncl,
            totalExcl,
            totalIncl,
            isCalculated: requestedQuantity > 0 && Boolean(product)
        },
        submittedAt: new Date().toISOString()
    };
}

function resolvePayloadQuantity(form) {
    const mode = String(form.elements.quantityDecision.value || '').trim();

    if (mode === 'decided') {
        return Math.max(0, Number(form.elements.totalQuantityKnown.value || 0));
    }

    if (mode === 'rough') {
        return Math.max(0, Number(form.elements.roughQuantity.value || 0));
    }

    return 0;
}

function readSelectedSpecs(product, formReference) {
    const form = formReference || document.getElementById('orderContactForm');
    if (!product || !Array.isArray(product.specs) || !form) {
        return [];
    }

    return product.specs.map((spec) => {
        const input = form.elements[`spec_${spec.key}`];
        const value = String(input && input.value ? input.value : '');
        const option = spec.options.find((item) => item.value === value) || spec.options[0];

        return {
            key: spec.key,
            label: spec.label,
            value: option ? option.value : '',
            valueLabel: option ? option.label : '',
            add: option ? option.add : 0
        };
    });
}

function readSelectedPaidOptions(product, formReference) {
    const form = formReference || document.getElementById('orderContactForm');
    if (!product || !Array.isArray(product.paidOptions) || !form) {
        return [];
    }

    const selectedKeys = new Set(Array.from(form.querySelectorAll('input[data-option-key]:checked')).map((input) => input.value));
    return product.paidOptions
        .filter((option) => selectedKeys.has(option.key))
        .map((option) => ({ key: option.key, label: option.label, add: option.add, quoteOnly: Boolean(option.quoteOnly) }));
}

function calculateUnitPriceExcl(product, selectedSpecs, selectedPaidOptions) {
    if (!product) {
        return 0;
    }

    const specAdd = (selectedSpecs || []).reduce((sum, spec) => sum + Math.max(0, Number(spec.add || 0)), 0);
    const optionAdd = (selectedPaidOptions || []).reduce((sum, option) => {
        if (option.quoteOnly) {
            return sum;
        }

        return sum + Math.max(0, Number(option.add || 0));
    }, 0);
    return product.basePriceExcl + specAdd + optionAdd;
}

function getProductSizeList(product) {
    if (!product || !product.sizePreset) {
        return ORDER_DEFAULT_SIZE_LIST;
    }

    if (product.sizePreset === 'cap') {
        return ORDER_CAP_SIZE_LIST;
    }

    if (product.sizePreset === 'socks') {
        return ORDER_SOCK_SIZE_LIST;
    }

    return ORDER_DEFAULT_SIZE_LIST;
}

function toSizeKeyGlobal(sizeLabel) {
    return String(sizeLabel).replace(/[^a-zA-Z0-9]/g, '_');
}

function getProductEffectiveMinLot(product, selectedSpecs) {
    if (!product) {
        return 0;
    }

    const baseMinLot = Number(product.minLot || 0);
    if (!product.minLotBySpec || !product.minLotBySpec.key || !product.minLotBySpec.map) {
        return baseMinLot;
    }

    const selected = (selectedSpecs || []).find((spec) => spec.key === product.minLotBySpec.key);
    if (!selected) {
        return baseMinLot;
    }

    const mapped = product.minLotBySpec.map[selected.value];
    return Number(mapped || baseMinLot);
}

function renderConfirmationSummary(payload) {
        const quantityDecisionLabelMap = {
            decided: 'サイズ・枚数が決まっている',
            rough: 'おおよそ決まっている',
            undecided: 'まだ決まっていない'
        };

        const designStatusLabelMap = {
            'complete-data': '完成データがある',
            'has-image': 'デザインイメージがある',
            'has-reference': '参考画像がある',
            'request-design': 'HPSにデザイン制作・修正を依頼したい',
            undecided: 'まだ何も決まっていない'
        };

        const deliveryPreferenceLabelMap = {
            'has-date': '希望日あり',
            'no-preference': '特に指定なし'
        };

    const summary = document.getElementById('confirmationSummary');
    if (!summary) {
        return;
    }

    const specsText = payload.specs.length
        ? payload.specs.map((spec) => `${spec.label}: ${spec.valueLabel}`).join('<br>')
        : '未選択';
    const optionsText = payload.paidOptions.length
        ? payload.paidOptions.map((option) => `${option.label}${option.quoteOnly ? '（要見積もり）' : `（+${formatYen(option.add)}）`}`).join('<br>')
        : 'なし';
    const sizeText = payload.sizeBreakdown.length
        ? payload.sizeBreakdown.map((entry) => `${entry.size}: ${entry.quantity}${payload.quantityUnit}`).join('<br>')
        : '未入力';
    const referencePriceText = payload.referencePrice.isCalculated
        ? `参考単価: ${formatYen(payload.referencePrice.unitPriceExcl)}（税抜） / ${formatYen(payload.referencePrice.unitPriceIncl)}（税込）<br>参考合計: ${formatYen(payload.referencePrice.totalExcl)}（税抜） / ${formatYen(payload.referencePrice.totalIncl)}（税込）`
        : '数量未定のため参考合計は未計算';

    summary.innerHTML = `
        <dl class="confirmation-list">
            <div><dt>お客様情報</dt><dd>${escapeHtml(payload.customerName)} / ${escapeHtml(payload.email)}<br>${escapeHtml(payload.teamName || 'チーム名なし')} / ${escapeHtml(payload.phone || '電話番号なし')}</dd></div>
            <div><dt>商品</dt><dd>${escapeHtml(payload.productCode)} ${escapeHtml(payload.productName)}<br>最低ロット: ${escapeHtml(payload.minimumLot || '-')}</dd></div>
            <div><dt>数量</dt><dd>${escapeHtml(quantityDecisionLabelMap[payload.quantityDecision] || payload.quantityDecision)}<br>希望数量: ${payload.requestedQuantity > 0 ? `${payload.requestedQuantity}${payload.quantityUnit}` : '未定'}</dd></div>
            <div><dt>サイズ</dt><dd>${sizeText}<br>${escapeHtml(payload.otherSizeNote || '')}</dd></div>
            <div><dt>仕様</dt><dd>${specsText}</dd></div>
            <div><dt>オプション</dt><dd>${optionsText}</dd></div>
            <div><dt>デザイン状況</dt><dd>${escapeHtml(designStatusLabelMap[payload.designStatus] || payload.designStatus)}</dd></div>
            <div><dt>希望納期</dt><dd>${escapeHtml(deliveryPreferenceLabelMap[payload.deliveryPreference] || payload.deliveryPreference)}${payload.desiredDate ? ` / ${escapeHtml(payload.desiredDate)}` : ''}</dd></div>
            <div><dt>その他要望</dt><dd>${escapeHtml(payload.details || 'なし')}</dd></div>
            <div><dt>参考価格</dt><dd>${referencePriceText}<br>表示価格は参考価格です。最終金額は内容確認後のご案内となります。</dd></div>
        </dl>
    `;
}

function formatYen(value) {
    return `${Math.round(Number(value || 0)).toLocaleString('ja-JP')}円`;
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function submitOrderContactToEndpoint(endpoint, form, payload) {
    const body = new FormData();
    body.append('payload', JSON.stringify(payload));

    const fileInput = form.elements.attachments;
    if (fileInput && fileInput.files) {
        Array.from(fileInput.files).forEach((file) => {
            body.append('attachments', file, file.name);
        });
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        body
    });

    if (!response.ok) {
        let message = '';
        try {
            const data = await response.json();
            message = data && data.message ? String(data.message) : '';
        } catch (_error) {
            message = '';
        }
        throw new Error(message || `送信に失敗しました。（status: ${response.status}）`);
    }

    return response;
}

function simulateOrderContactSubmit() {
    return new Promise((resolve) => {
        window.setTimeout(resolve, ORDER_CONTACT_FORM_CONFIG.simulatedDelayMs);
    });
}

function renderAttachmentPreview(fileList, container) {
    const files = Array.from(fileList || []);
    container.innerHTML = '';

    if (!files.length) {
        return;
    }

    files.forEach((file) => {
        const item = document.createElement('li');
        item.textContent = `${file.name} (${Math.max(1, Math.round(file.size / 1024))}KB)`;
        container.appendChild(item);
    });
}

function setFormSubmittingState(button, isSubmitting) {
    if (!button) {
        return;
    }

    const defaultLabel = button.getAttribute('data-default-label') || 'SEND REQUEST';
    const loadingLabel = button.getAttribute('data-loading-label') || 'SENDING...';

    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? loadingLabel : defaultLabel;
}

function updateOrderFormStatus(statusElement, type, message) {
    if (!statusElement) {
        return;
    }

    statusElement.className = `form-status visible ${type}`;
    statusElement.textContent = message;
}

async function initInstagramFeed() {
    const feed = document.getElementById('instagramFeed');
    if (!feed) {
        return;
    }

    ensureInstagramFeedVisible(feed);

    try {
        const posts = await fetchInstagramPostsFromServer(INSTAGRAM_CONFIG.limit);
        if (!posts.length) {
            renderInstagramStatus(feed, '現在表示できるInstagram投稿がありません。しばらくしてから再読み込みしてください。');
            return;
        }

        writeInstagramCache(posts);
        renderInstagramPosts(feed, posts);
        initLucideIcons();
    } catch (error) {
        console.warn('Instagram feed API fetch failed. Trying cache.', error);
        const cachedPosts = readInstagramCache();

        if (cachedPosts.length) {
            renderInstagramPosts(feed, cachedPosts);
            initLucideIcons();
            return;
        }

        renderInstagramStatus(feed, 'Instagram投稿を準備中です。最新情報は公式Instagramをご確認ください。');
    }
}

async function fetchInstagramPostsFromServer(limit) {
    const endpoint = new URL(INSTAGRAM_CONFIG.serverEndpoint, window.location.origin);
    endpoint.searchParams.set('limit', String(limit));

    const response = await fetch(endpoint.toString(), {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Instagram feed endpoint failed with status ${response.status}.`);
    }

    const json = await response.json();
    if (!json || !Array.isArray(json.data)) {
        return [];
    }

    return json.data
        .map((post) => ({
            image: post && post.image ? post.image : '',
            caption: post && post.caption ? post.caption : '',
            permalink: post && post.permalink ? post.permalink : INSTAGRAM_CONFIG.profileUrl,
            timestamp: post && post.timestamp ? post.timestamp : '',
            handle: post && post.handle ? post.handle : '@helloprintstore'
        }))
        .filter((post) => Boolean(post.image));
}

function getInstagramToken() {
    return getInstagramTokenInfo().token;
}

function hydrateInstagramTokenFromUrl() {
    if (typeof window === 'undefined' || !window.location) {
        return;
    }

    const url = new URL(window.location.href);
    const queryToken = url.searchParams.get('hps_ig_access_token') || '';
    const queryExpires = Number(url.searchParams.get('hps_ig_expires_in') || 0);
    const queryGrantedScopes = url.searchParams.get('hps_ig_granted_scopes') || '';
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const hashToken = hashParams.get('hps_ig_access_token') || '';
    const hashExpires = Number(hashParams.get('hps_ig_expires_in') || 0);
    const hashGrantedScopes = hashParams.get('hps_ig_granted_scopes') || '';

    const accessToken = queryToken || hashToken;
    const expiresIn = queryToken ? queryExpires : hashExpires;
    const grantedScopes = parseScopeList(queryToken ? queryGrantedScopes : hashGrantedScopes);

    if (!accessToken) {
        return;
    }

    const expiresAt = Number.isFinite(expiresIn) && expiresIn > 0
        ? Date.now() + (expiresIn * 1000)
        : 0;

    try {
        localStorage.setItem(INSTAGRAM_APP_CONFIG.accessTokenStorageKey, JSON.stringify({
            accessToken,
            expiresAt,
            savedAt: Date.now(),
            source: 'oauth-redirect-url',
            tokenType: 'user_access_token_implicit',
            grantedScopes
        }));
    } catch (error) {
        console.warn('Failed to hydrate access token from URL.', error);
    }

    // Remove temporary token parameters from URL to avoid leaks through copy/share.
    url.searchParams.delete('hps_ig_access_token');
    url.searchParams.delete('hps_ig_expires_in');
    url.searchParams.delete('hps_ig_granted_scopes');
    hashParams.delete('hps_ig_access_token');
    hashParams.delete('hps_ig_expires_in');
    hashParams.delete('hps_ig_granted_scopes');

    const nextHash = hashParams.toString();
    const nextUrl = `${url.pathname}${url.search}${nextHash ? `#${nextHash}` : ''}`;
    window.history.replaceState({}, document.title, nextUrl);
}

function getInstagramTokenInfo() {
    const tokenFromWindow = typeof window !== 'undefined' ? window.__HPS_INSTAGRAM_ACCESS_TOKEN : '';
    const tokenFromMeta = document.querySelector('meta[name="instagram-access-token"]');
    const metaValue = tokenFromMeta ? tokenFromMeta.getAttribute('content') : '';
    const tokenRecord = readStoredInstagramTokenRecord();

    if (INSTAGRAM_CONFIG.accessToken) {
        return {
            token: INSTAGRAM_CONFIG.accessToken,
            source: 'config',
            tokenType: 'static_config_token',
            grantedScopes: []
        };
    }

    if (tokenFromWindow) {
        return {
            token: tokenFromWindow,
            source: 'window',
            tokenType: 'runtime_window_token',
            grantedScopes: []
        };
    }

    if (metaValue) {
        return {
            token: metaValue,
            source: 'meta',
            tokenType: 'meta_token',
            grantedScopes: []
        };
    }

    if (tokenRecord && tokenRecord.accessToken) {
        return {
            token: tokenRecord.accessToken,
            source: tokenRecord.source || 'localStorage',
            tokenType: tokenRecord.tokenType || 'stored_user_access_token',
            grantedScopes: parseScopeList(tokenRecord.grantedScopes)
        };
    }

    return {
        token: '',
        source: 'none',
        tokenType: 'none',
        grantedScopes: []
    };
}

function readStoredInstagramTokenRecord() {
    try {
        const raw = localStorage.getItem(INSTAGRAM_APP_CONFIG.accessTokenStorageKey);
        if (!raw) {
            return null;
        }

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed.accessToken !== 'string') {
            return null;
        }

        if (typeof parsed.expiresAt === 'number' && parsed.expiresAt > 0 && Date.now() >= parsed.expiresAt) {
            localStorage.removeItem(INSTAGRAM_APP_CONFIG.accessTokenStorageKey);
            return null;
        }

        return {
            accessToken: parsed.accessToken.trim(),
            expiresAt: typeof parsed.expiresAt === 'number' ? parsed.expiresAt : 0,
            savedAt: typeof parsed.savedAt === 'number' ? parsed.savedAt : 0,
            source: typeof parsed.source === 'string' ? parsed.source : 'localStorage',
            tokenType: typeof parsed.tokenType === 'string' ? parsed.tokenType : 'stored_user_access_token',
            grantedScopes: parseScopeList(parsed.grantedScopes)
        };
    } catch (error) {
        console.warn('Failed to read stored Instagram access token.', error);
        return null;
    }
}

async function fetchInstagramGraphPosts(tokenInfo, limit) {
    const accessToken = tokenInfo && tokenInfo.token ? tokenInfo.token : '';
    const account = await resolveInstagramBusinessAccount(tokenInfo);
    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/${account.igUserId}/media`);
    endpoint.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
    endpoint.searchParams.set('limit', String(limit));
    endpoint.searchParams.set('access_token', accessToken);

    appendInstagramGraphDebugStep({
        stage: 'media',
        ok: true,
        endpoint: sanitizeGraphEndpoint(endpoint)
    });

    const data = await fetchGraphJson(endpoint, 'media_endpoint');
    if (!data || !Array.isArray(data.data)) {
        return [];
    }

    return data.data
        .filter((post) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
        .map((post) => ({
            image: post.media_url || post.thumbnail_url,
            caption: post.caption || '',
            permalink: post.permalink || INSTAGRAM_CONFIG.profileUrl,
            timestamp: post.timestamp || '',
            handle: account.handle
        }))
        .filter((post) => Boolean(post.image));
}

async function resolveInstagramBusinessAccount(accessToken) {
    const tokenInfo = typeof accessToken === 'string'
        ? { token: accessToken, source: 'direct', tokenType: 'direct_token', grantedScopes: [] }
        : accessToken;
    const userAccessToken = tokenInfo && tokenInfo.token ? tokenInfo.token : '';
    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/me/accounts`);
    endpoint.searchParams.set('fields', 'id,name,access_token,tasks,instagram_business_account{id,username},connected_instagram_account{id,username}');
    endpoint.searchParams.set('limit', '50');
    endpoint.searchParams.set('access_token', userAccessToken);

    const permissionsSummary = await fetchGrantedFacebookPermissions(userAccessToken);

    appendInstagramGraphDebugStep({
        stage: 'token_permissions',
        ok: true,
        requiredPermissions: ['pages_show_list', 'instagram_basic', 'pages_read_engagement', 'business_management'],
        hasPagesShowList: Boolean(permissionsSummary && permissionsSummary.granted.includes('pages_show_list')),
        hasInstagramBasic: Boolean(permissionsSummary && permissionsSummary.granted.includes('instagram_basic')),
        hasPagesReadEngagement: Boolean(permissionsSummary && permissionsSummary.granted.includes('pages_read_engagement')),
        hasBusinessManagement: Boolean(permissionsSummary && permissionsSummary.granted.includes('business_management')),
        granted: permissionsSummary ? permissionsSummary.granted : [],
        declined: permissionsSummary ? permissionsSummary.declined : []
    });

    appendInstagramGraphDebugStep({
        stage: 'pages_show_list',
        ok: true,
        tokenSource: tokenInfo && tokenInfo.source ? tokenInfo.source : 'unknown',
        tokenType: tokenInfo && tokenInfo.tokenType ? tokenInfo.tokenType : 'unknown',
        tokenPreview: userAccessToken ? `${userAccessToken.slice(0, 10)}...` : '',
        oauthGrantedScopes: tokenInfo && Array.isArray(tokenInfo.grantedScopes) ? tokenInfo.grantedScopes : [],
        endpoint: sanitizeGraphEndpoint(endpoint)
    });

    const data = await fetchGraphJson(endpoint, 'pages_show_list');
    const primaryPages = data && Array.isArray(data.data) ? data.data : [];
    const fallbackResult = !primaryPages.length
        ? await fetchAccountsViaMeFields(userAccessToken)
        : { pages: [], responseJson: null, endpoint: null };
    const businessFallbackResult = !primaryPages.length && !fallbackResult.pages.length
        ? await fetchPagesViaBusinessAssets(userAccessToken)
        : { pages: [], businesses: [], lookups: [] };
    const pagesById = new Map();

    primaryPages.forEach((page) => {
        if (page && page.id) {
            pagesById.set(page.id, page);
        }
    });

    fallbackResult.pages.forEach((page) => {
        if (page && page.id && !pagesById.has(page.id)) {
            pagesById.set(page.id, page);
        }
    });

    businessFallbackResult.pages.forEach((page) => {
        if (page && page.id && !pagesById.has(page.id)) {
            pagesById.set(page.id, page);
        }
    });

    const pages = Array.from(pagesById.values());

    appendInstagramGraphDebugStep({
        stage: 'pages_show_list_result',
        ok: true,
        primaryCount: primaryPages.length,
        fallbackCount: fallbackResult.pages.length,
        businessFallbackCount: businessFallbackResult.pages.length,
        mergedCount: pages.length,
        fallbackEndpoint: fallbackResult.endpoint
    });

    const pageListSummary = pages.map((page) => ({
        pageId: page && page.id ? page.id : null,
        pageName: page && page.name ? page.name : null,
        hasPageAccessToken: Boolean(page && page.access_token),
        pageTokenPreview: page && page.access_token ? `${String(page.access_token).slice(0, 10)}...` : '',
        tasks: page && Array.isArray(page.tasks) ? page.tasks : [],
        instagram_business_account: page && Object.prototype.hasOwnProperty.call(page, 'instagram_business_account')
            ? page.instagram_business_account
            : null,
        connected_instagram_account: page && Object.prototype.hasOwnProperty.call(page, 'connected_instagram_account')
            ? page.connected_instagram_account
            : null
    }));

    const pageDetails = await Promise.all(pages
        .filter((page) => page && page.id)
        .map((page) => {
            const pageAccessToken = typeof page.access_token === 'string' ? page.access_token.trim() : '';
            const tokenContext = pageAccessToken
                ? {
                    token: pageAccessToken,
                    tokenType: 'page_access_token',
                    tokenSource: '/me/accounts.access_token'
                }
                : {
                    token: userAccessToken,
                    tokenType: tokenInfo && tokenInfo.tokenType ? `${tokenInfo.tokenType}_fallback` : 'user_access_token_fallback',
                    tokenSource: tokenInfo && tokenInfo.source ? `${tokenInfo.source}_fallback` : 'oauth_user_token_fallback'
                };

            return fetchPageInstagramBusinessAccount(page.id, tokenContext, page.name || null);
        }));

    appendInstagramGraphDebugStep({
        stage: 'pages_debug',
        ok: true,
        meAccountsResponse: sanitizeMeAccountsResponse(data),
        meFieldsFallbackResponse: sanitizeMeAccountsResponse(fallbackResult.responseJson),
        businessPagesFallbackResponse: sanitizeMeAccountsResponse({ data: businessFallbackResult.pages }),
        businesses: businessFallbackResult.businesses,
        businessLookups: businessFallbackResult.lookups,
        pages: pageListSummary,
        pageDetailLookups: pageDetails
    });

    const detailById = new Map(pageDetails
        .filter((detail) => detail && detail.pageId)
        .map((detail) => [detail.pageId, detail]));

    const enrichedPages = pages.map((page) => {
        if (!page || !page.id) {
            return page;
        }

        const detail = detailById.get(page.id);
        const listInstagramBusinessAccount = Object.prototype.hasOwnProperty.call(page, 'instagram_business_account')
            ? page.instagram_business_account
            : null;
        const detailInstagramBusinessAccount = detail && Object.prototype.hasOwnProperty.call(detail, 'instagram_business_account')
            ? detail.instagram_business_account
            : null;
        const listConnectedInstagramAccount = Object.prototype.hasOwnProperty.call(page, 'connected_instagram_account')
            ? page.connected_instagram_account
            : null;
        const detailConnectedInstagramAccount = detail && Object.prototype.hasOwnProperty.call(detail, 'connected_instagram_account')
            ? detail.connected_instagram_account
            : null;

        const resolvedAccount = pickInstagramLinkedAccount([
            listInstagramBusinessAccount,
            detailInstagramBusinessAccount,
            listConnectedInstagramAccount,
            detailConnectedInstagramAccount
        ]);

        const instagram_business_account = resolvedAccount && resolvedAccount.id
            ? resolvedAccount
            : null;

        return {
            ...page,
            instagram_business_account,
            connected_instagram_account: listConnectedInstagramAccount && listConnectedInstagramAccount.id
                ? listConnectedInstagramAccount
                : detailConnectedInstagramAccount
        };
    });

    const pagesWithInstagram = enrichedPages.filter((page) => page && page.instagram_business_account && page.instagram_business_account.id);

    if (!pagesWithInstagram.length) {
        const firstPage = enrichedPages[0] || null;
        appendInstagramGraphDebugStep({
            stage: 'instagram_business_account',
            ok: false,
            selectedPageId: firstPage && firstPage.id ? firstPage.id : null,
            selectedPageName: firstPage && firstPage.name ? firstPage.name : null,
            instagram_business_account: firstPage && Object.prototype.hasOwnProperty.call(firstPage, 'instagram_business_account')
                ? firstPage.instagram_business_account
                : null,
            connected_instagram_account: firstPage && Object.prototype.hasOwnProperty.call(firstPage, 'connected_instagram_account')
                ? firstPage.connected_instagram_account
                : null,
            igBusinessAccountId: null,
            message: 'No page with instagram_business_account.id or connected_instagram_account.id found.'
        });
        throw new Error('No Facebook Page linked to an Instagram account was found for this access token.');
    }

    const preferredUsername = getConfiguredInstagramUsername();
    const matchedPage = preferredUsername
        ? pagesWithInstagram.find((page) => {
            const username = page.instagram_business_account && page.instagram_business_account.username;
            return username && username.toLowerCase() === preferredUsername.toLowerCase();
        })
        : null;

    const selectedPage = matchedPage || pagesWithInstagram[0];
    const businessAccount = selectedPage.instagram_business_account;
    const handle = businessAccount.username ? `@${businessAccount.username}` : '@helloprintstore';

    appendInstagramGraphDebugStep({
        stage: 'instagram_business_account',
        ok: true,
        selectedPageId: selectedPage.id || null,
        selectedPageName: selectedPage.name || null,
        instagram_business_account: Object.prototype.hasOwnProperty.call(selectedPage, 'instagram_business_account')
            ? selectedPage.instagram_business_account
            : null,
        connected_instagram_account: Object.prototype.hasOwnProperty.call(selectedPage, 'connected_instagram_account')
            ? selectedPage.connected_instagram_account
            : null,
        igBusinessAccountId: businessAccount.id || null,
        igUsername: businessAccount.username || null
    });

    return {
        igUserId: businessAccount.id,
        handle
    };
}

async function fetchPageInstagramBusinessAccount(pageId, accessToken, pageName) {
    const tokenContext = typeof accessToken === 'string'
        ? { token: accessToken, tokenType: 'direct_token', tokenSource: 'direct' }
        : accessToken;
    const tokenToUse = tokenContext && tokenContext.token ? tokenContext.token : '';
    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/${pageId}`);
    endpoint.searchParams.set('fields', 'id,name,instagram_business_account{id,username},connected_instagram_account{id,username}');
    endpoint.searchParams.set('access_token', tokenToUse);

    try {
        const responseJson = await fetchGraphJson(endpoint, `page_detail_lookup_${pageId}`);
        return {
            pageId,
            pageName: responseJson && responseJson.name ? responseJson.name : pageName,
            tokenTypeUsed: tokenContext && tokenContext.tokenType ? tokenContext.tokenType : 'unknown',
            tokenSourceUsed: tokenContext && tokenContext.tokenSource ? tokenContext.tokenSource : 'unknown',
            tokenPreviewUsed: tokenToUse ? `${tokenToUse.slice(0, 10)}...` : '',
            usedPageToken: Boolean(tokenContext && tokenContext.tokenType === 'page_access_token'),
            endpoint: sanitizeGraphEndpoint(endpoint),
            responseJson,
            instagram_business_account: responseJson && Object.prototype.hasOwnProperty.call(responseJson, 'instagram_business_account')
                ? responseJson.instagram_business_account
                : null,
            connected_instagram_account: responseJson && Object.prototype.hasOwnProperty.call(responseJson, 'connected_instagram_account')
                ? responseJson.connected_instagram_account
                : null
        };
    } catch (error) {
        return {
            pageId,
            pageName,
            tokenTypeUsed: tokenContext && tokenContext.tokenType ? tokenContext.tokenType : 'unknown',
            tokenSourceUsed: tokenContext && tokenContext.tokenSource ? tokenContext.tokenSource : 'unknown',
            tokenPreviewUsed: tokenToUse ? `${tokenToUse.slice(0, 10)}...` : '',
            usedPageToken: Boolean(tokenContext && tokenContext.tokenType === 'page_access_token'),
            endpoint: sanitizeGraphEndpoint(endpoint),
            responseJson: null,
            instagram_business_account: null,
            connected_instagram_account: null,
            error: error && error.graph ? error.graph : { message: error.message || 'Unknown page detail lookup error' }
        };
    }
}

async function fetchAccountsViaMeFields(accessToken) {
    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/me`);
    endpoint.searchParams.set('fields', 'id,name,accounts{id,name,access_token,tasks,instagram_business_account{id,username},connected_instagram_account{id,username}}');
    endpoint.searchParams.set('access_token', accessToken || '');

    try {
        const responseJson = await fetchGraphJson(endpoint, 'pages_show_list_fallback');
        const pages = responseJson && responseJson.accounts && Array.isArray(responseJson.accounts.data)
            ? responseJson.accounts.data
            : [];

        return {
            pages,
            responseJson: responseJson && responseJson.accounts ? responseJson.accounts : { data: [] },
            endpoint: sanitizeGraphEndpoint(endpoint)
        };
    } catch (error) {
        appendInstagramGraphDebugStep({
            stage: 'pages_show_list_fallback',
            ok: false,
            endpoint: sanitizeGraphEndpoint(endpoint),
            message: error && error.message ? error.message : 'Failed to fetch /me fields fallback.',
            error: error && error.graph ? error.graph : null
        });

        return {
            pages: [],
            responseJson: { data: [] },
            endpoint: sanitizeGraphEndpoint(endpoint)
        };
    }
}

async function fetchPagesViaBusinessAssets(accessToken) {
    const businesses = await fetchBusinesses(accessToken);
    const lookups = [];
    const pagesById = new Map();

    for (const business of businesses) {
        const businessId = business && business.id ? business.id : '';
        if (!businessId) {
            continue;
        }

        const ownedPages = await fetchBusinessPagesByEdge(accessToken, businessId, 'owned_pages');
        const clientPages = await fetchBusinessPagesByEdge(accessToken, businessId, 'client_pages');

        lookups.push({
            businessId,
            businessName: business && business.name ? business.name : null,
            ownedPagesCount: ownedPages.pages.length,
            clientPagesCount: clientPages.pages.length,
            ownedPagesEndpoint: ownedPages.endpoint,
            clientPagesEndpoint: clientPages.endpoint,
            ownedPagesError: ownedPages.error,
            clientPagesError: clientPages.error
        });

        [...ownedPages.pages, ...clientPages.pages].forEach((page) => {
            if (page && page.id && !pagesById.has(page.id)) {
                pagesById.set(page.id, page);
            }
        });
    }

    return {
        pages: Array.from(pagesById.values()),
        businesses,
        lookups
    };
}

async function fetchBusinesses(accessToken) {
    if (!accessToken) {
        return [];
    }

    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/me/businesses`);
    endpoint.searchParams.set('fields', 'id,name');
    endpoint.searchParams.set('limit', '50');
    endpoint.searchParams.set('access_token', accessToken);

    try {
        const responseJson = await fetchGraphJson(endpoint, 'businesses');
        return responseJson && Array.isArray(responseJson.data) ? responseJson.data : [];
    } catch (error) {
        appendInstagramGraphDebugStep({
            stage: 'businesses',
            ok: false,
            endpoint: sanitizeGraphEndpoint(endpoint),
            message: error && error.message ? error.message : 'Failed to fetch /me/businesses.',
            error: error && error.graph ? error.graph : null
        });
        return [];
    }
}

async function fetchBusinessPagesByEdge(accessToken, businessId, edgeName) {
    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/${businessId}/${edgeName}`);
    endpoint.searchParams.set('fields', 'id,name,access_token,tasks,instagram_business_account{id,username},connected_instagram_account{id,username}');
    endpoint.searchParams.set('limit', '50');
    endpoint.searchParams.set('access_token', accessToken || '');

    try {
        const responseJson = await fetchGraphJson(endpoint, `${edgeName}_${businessId}`);
        const pages = responseJson && Array.isArray(responseJson.data) ? responseJson.data : [];

        return {
            endpoint: sanitizeGraphEndpoint(endpoint),
            pages,
            error: null
        };
    } catch (error) {
        return {
            endpoint: sanitizeGraphEndpoint(endpoint),
            pages: [],
            error: error && error.graph ? error.graph : { message: error && error.message ? error.message : `Failed to fetch ${edgeName}.` }
        };
    }
}

async function fetchGrantedFacebookPermissions(accessToken) {
    if (!accessToken) {
        return { granted: [], declined: [] };
    }

    const endpoint = new URL(`${INSTAGRAM_APP_CONFIG.graphApiBase}/${INSTAGRAM_APP_CONFIG.graphApiVersion}/me/permissions`);
    endpoint.searchParams.set('access_token', accessToken);

    try {
        const responseJson = await fetchGraphJson(endpoint, 'permissions');
        const rows = responseJson && Array.isArray(responseJson.data) ? responseJson.data : [];
        const granted = rows
            .filter((row) => row && row.permission && row.status === 'granted')
            .map((row) => row.permission);
        const declined = rows
            .filter((row) => row && row.permission && row.status !== 'granted')
            .map((row) => row.permission);

        return {
            granted,
            declined
        };
    } catch (error) {
        appendInstagramGraphDebugStep({
            stage: 'permissions',
            ok: false,
            endpoint: sanitizeGraphEndpoint(endpoint),
            message: error && error.message ? error.message : 'Failed to fetch /me/permissions.',
            error: error && error.graph ? error.graph : null
        });

        return { granted: [], declined: [] };
    }
}

function pickInstagramLinkedAccount(candidates) {
    if (!Array.isArray(candidates)) {
        return null;
    }

    for (const candidate of candidates) {
        if (candidate && candidate.id) {
            return candidate;
        }
    }

    return null;
}

function getConfiguredInstagramUsername() {
    try {
        const profileUrl = new URL(INSTAGRAM_CONFIG.profileUrl);
        return profileUrl.pathname.replace(/\//g, '').trim();
    } catch (_error) {
        return '';
    }
}

async function fetchGraphJson(endpoint, debugStage = 'graph_call') {
    const response = await fetch(endpoint.toString());
    const rawBody = await response.text();
    let data = null;

    try {
        data = rawBody ? JSON.parse(rawBody) : null;
    } catch (_error) {
        data = null;
    }

    if (!response.ok || (data && data.error)) {
        const apiMessage = data && data.error && data.error.message ? data.error.message : '';
        const message = apiMessage || `Graph API request failed with status ${response.status}.`;
        const errorPayload = {
            ok: false,
            stage: debugStage,
            endpoint: sanitizeGraphEndpoint(endpoint),
            httpStatus: response.status,
            httpStatusText: response.statusText || '',
            responseJson: sanitizeGraphResponse(debugStage, data),
            responseText: data ? '' : rawBody
        };

        writeInstagramGraphDebug({
            ...readInstagramGraphDebug(),
            lastError: errorPayload
        });

        const error = new Error(message);
        error.graph = errorPayload;
        throw error;
    }

    appendInstagramGraphDebugStep({
        stage: debugStage,
        ok: true,
        endpoint: sanitizeGraphEndpoint(endpoint),
        httpStatus: response.status,
        responseJson: sanitizeGraphResponse(debugStage, data)
    });

    return data;
}

function sanitizeGraphResponse(debugStage, data) {
    if (!data || typeof data !== 'object') {
        return data;
    }

    if (debugStage === 'pages_show_list' && Array.isArray(data.data)) {
        return {
            ...data,
            data: data.data.map((page) => sanitizePageForDebug(page))
        };
    }

    if (debugStage.startsWith('page_detail_lookup_')) {
        return sanitizePageForDebug(data);
    }

    return data;
}

function sanitizePageForDebug(page) {
    if (!page || typeof page !== 'object') {
        return page;
    }

    const accessToken = typeof page.access_token === 'string' ? page.access_token : '';

    return {
        ...page,
        access_token: accessToken ? `${accessToken.slice(0, 10)}...` : undefined
    };
}

function sanitizeMeAccountsResponse(data) {
    if (!data || !Array.isArray(data.data)) {
        return { count: 0, data: [] };
    }

    return {
        count: data.data.length,
        data: data.data.map((page) => ({
            id: page && page.id ? page.id : null,
            name: page && page.name ? page.name : null,
            tasks: page && Array.isArray(page.tasks) ? page.tasks : [],
            pageAccessToken: page && page.access_token ? `${String(page.access_token).slice(0, 10)}...` : null,
            instagram_business_account: page && Object.prototype.hasOwnProperty.call(page, 'instagram_business_account')
                ? page.instagram_business_account
                : null,
            connected_instagram_account: page && Object.prototype.hasOwnProperty.call(page, 'connected_instagram_account')
                ? page.connected_instagram_account
                : null
        }))
    };
}

function parseScopeList(scopeValue) {
    if (Array.isArray(scopeValue)) {
        return scopeValue
            .map((scope) => String(scope || '').trim())
            .filter((scope, index, list) => scope && list.indexOf(scope) === index);
    }

    if (typeof scopeValue !== 'string') {
        return [];
    }

    return scopeValue
        .split(/[\s,]+/)
        .map((scope) => scope.trim())
        .filter((scope, index, list) => scope && list.indexOf(scope) === index);
}

function renderInstagramPosts(feed, posts) {
    feed.innerHTML = '';
    ensureInstagramFeedVisible(feed);

    posts.forEach((post) => {
        const card = document.createElement('a');
        card.className = 'instagram-card';
        card.href = post.permalink || INSTAGRAM_CONFIG.profileUrl;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        const mediaWrap = document.createElement('div');
        mediaWrap.className = 'instagram-media-wrap';

        const image = document.createElement('img');
        image.className = 'instagram-media';
        image.src = post.image;
        image.alt = 'Instagram post';
        mediaWrap.appendChild(image);

        const overlay = document.createElement('span');
        overlay.className = 'instagram-overlay-label';
        overlay.textContent = 'Instagramで見る';
        mediaWrap.appendChild(overlay);

        const captionRow = document.createElement('div');
        captionRow.className = 'instagram-caption-row';
        const safeCaption = escapeHtml(getExcerpt(post.caption || '', 100));
        const publishedAt = escapeHtml(formatJapaneseDate(post.timestamp));
        const handle = escapeHtml(post.handle || '@helloprintstore');
        captionRow.innerHTML = [
            `<span class="instagram-handle">${handle}</span>`,
            `<p class="instagram-date">${publishedAt}</p>`,
            `<p class="instagram-caption">${safeCaption || '詳細はInstagramでご覧ください。'}</p>`
        ].join('');

        card.appendChild(mediaWrap);
        card.appendChild(captionRow);
        feed.appendChild(card);
    });
}

function renderInstagramStatus(feed, message, options = {}) {
    feed.innerHTML = '';
    ensureInstagramFeedVisible(feed);
    const { showConnectButton = false, connectButtonLabel = 'Instagramと連携する', debugPayload = null } = options;

    const card = document.createElement('div');
    card.className = 'instagram-card instagram-card-status';
    card.innerHTML = [
        '<div class="instagram-media-wrap"></div>',
        '<div class="instagram-caption-row">',
        '<span class="instagram-handle">@helloprintstore</span>',
        '<p class="instagram-date">Instagram</p>',
        `<p class="instagram-caption">${escapeHtml(message)}</p>`,
        '</div>'
    ].join('');

    if (showConnectButton) {
        const captionRow = card.querySelector('.instagram-caption-row');
        if (captionRow) {
            const actionRow = document.createElement('div');
            actionRow.className = 'button-row';

            const connectButton = document.createElement('button');
            connectButton.type = 'button';
            connectButton.className = 'button button-primary';
            connectButton.textContent = connectButtonLabel;
            connectButton.addEventListener('click', triggerInstagramOAuthStart);

            actionRow.appendChild(connectButton);
            captionRow.appendChild(actionRow);
        }
    }

    void connectButtonLabel;
    void debugPayload;

    feed.appendChild(card);
}

function ensureInstagramFeedVisible(feed) {
    if (!feed) {
        return;
    }

    feed.classList.add('visible');
    feed.style.opacity = '1';
    feed.style.transform = 'none';
}

function analyzeInstagramFailure(error, debugPayload) {
    const tokenPermissionsStep = getLatestInstagramDebugStep(debugPayload, 'token_permissions');
    if (tokenPermissionsStep && tokenPermissionsStep.hasBusinessManagement === false) {
        return {
            code: 'missing_business_management',
            message: '権限不足のため再連携が必要です（business_management が未付与です）。'
        };
    }

    const message = error && error.message ? error.message : '';
    if (message.includes('No Facebook Page linked')) {
        return {
            code: 'page_not_found',
            message: 'Facebookページ取得に失敗しました。再連携してページ選択をやり直してください。'
        };
    }

    return {
        code: 'generic_fetch_error',
        message: 'Instagram投稿の取得に失敗しました。再連携してもう一度お試しください。'
    };
}

function buildInstagramDebugSummary(debugPayload) {
    const source = debugPayload || readInstagramGraphDebug() || {
        startedAt: new Date().toISOString(),
        token: null,
        steps: []
    };
    const tokenPermissions = getLatestInstagramDebugStep(source, 'token_permissions');
    const pagesShowListResult = getLatestInstagramDebugStep(source, 'pages_show_list_result');
    const pagesDebug = getLatestInstagramDebugStep(source, 'pages_debug');
    const accountStep = getLatestInstagramDebugStep(source, 'instagram_business_account');
    const connectedAccount = accountStep && Object.prototype.hasOwnProperty.call(accountStep, 'connected_instagram_account')
        ? accountStep.connected_instagram_account
        : null;

    return {
        startedAt: source.startedAt || null,
        token: source.token || null,
        token_permissions: tokenPermissions || null,
        hasBusinessManagement: tokenPermissions ? Boolean(tokenPermissions.hasBusinessManagement) : null,
        pages_show_list_result: pagesShowListResult || null,
        pages_debug: pagesDebug || null,
        instagram_business_account: accountStep || null,
        connected_instagram_account: connectedAccount,
        lastError: source.lastError || null
    };
}

function getLatestInstagramDebugStep(debugPayload, stageName) {
    if (!debugPayload || !Array.isArray(debugPayload.steps)) {
        return null;
    }

    for (let index = debugPayload.steps.length - 1; index >= 0; index -= 1) {
        const step = debugPayload.steps[index];
        if (step && step.stage === stageName) {
            return step;
        }
    }

    return null;
}

function safeJsonStringify(value) {
    const seen = new WeakSet();
    return JSON.stringify(value, (key, currentValue) => {
        if (currentValue && typeof currentValue === 'object') {
            if (seen.has(currentValue)) {
                return '[Circular]';
            }
            seen.add(currentValue);
        }
        return currentValue;
    }, 2);
}

function sanitizeGraphEndpoint(endpoint) {
    const url = new URL(endpoint.toString());
    if (url.searchParams.has('access_token')) {
        url.searchParams.set('access_token', '[REDACTED]');
    }
    return url.toString();
}

function readInstagramGraphDebug() {
    try {
        const raw = localStorage.getItem(INSTAGRAM_DEBUG_KEY);
        if (!raw) {
            return null;
        }
        return JSON.parse(raw);
    } catch (_error) {
        return null;
    }
}

function writeInstagramGraphDebug(debugObject) {
    try {
        localStorage.setItem(INSTAGRAM_DEBUG_KEY, JSON.stringify(debugObject));
    } catch (_error) {
        // Ignore debug storage failures.
    }
}

function appendInstagramGraphDebugStep(step) {
    const current = readInstagramGraphDebug() || {};
    const steps = Array.isArray(current.steps) ? current.steps : [];
    steps.push({ at: new Date().toISOString(), ...step });
    writeInstagramGraphDebug({ ...current, steps });
}

function triggerInstagramOAuthStart() {
    if (window.HPSInstagramOAuth && typeof window.HPSInstagramOAuth.startOAuth === 'function') {
        window.HPSInstagramOAuth.startOAuth();
        return;
    }

    console.error('HPSInstagramOAuth.startOAuth is not available.');
}

function formatJapaneseDate(value) {
    if (!value) {
        return '日付未設定';
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '日付未設定';
    }

    return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date);
}

function getExcerpt(text, maxLength) {
    const normalized = String(text || '').replace(/\s+/g, ' ').trim();
    if (!normalized) {
        return '';
    }

    if (normalized.length <= maxLength) {
        return normalized;
    }

    return `${normalized.slice(0, maxLength).trimEnd()}...`;
}

function readInstagramCache() {
    try {
        const raw = localStorage.getItem(INSTAGRAM_CACHE_KEY);
        if (!raw) {
            return [];
        }

        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.posts) || typeof parsed.savedAt !== 'number') {
            return [];
        }

        if (Date.now() - parsed.savedAt > INSTAGRAM_CACHE_TTL_MS) {
            return [];
        }

        return parsed.posts;
    } catch (error) {
        console.warn('Instagram cache read failed.', error);
        return [];
    }
}

function writeInstagramCache(posts) {
    try {
        localStorage.setItem(INSTAGRAM_CACHE_KEY, JSON.stringify({
            savedAt: Date.now(),
            posts
        }));
    } catch (error) {
        console.warn('Instagram cache write failed.', error);
    }
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

console.log('Hello Print Store: Phase3 polish active');
