import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

function readLocalFile(relativePath) {
    return fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
}

function assertMatch(source, pattern, message) {
    if (!pattern.test(source)) {
        throw new Error(message);
    }
}

function assertOrdered(source, fragments, message) {
    let cursor = -1;

    for (const fragment of fragments) {
        const nextIndex = source.indexOf(fragment, cursor + 1);
        if (nextIndex === -1) {
            throw new Error(message);
        }
        cursor = nextIndex;
    }
}

const indexHtml = readLocalFile('index.html');
const contactHtml = readLocalFile('contact.html');
const scriptJs = readLocalFile('js/script.js');
const vercelConfig = readLocalFile('vercel.json');

assertMatch(indexHtml, /<section class="section section-order" id="order">/, 'ORDER section is missing from index.html.');
assertMatch(indexHtml, /id="orderStartActions"/, 'ORDER CTA action row is missing from index.html.');
assertMatch(indexHtml, /id="orderStartCta"[^>]*href="contact"/s, 'Primary ORDER CTA must link to the contact route.');
assertOrdered(indexHtml, ['id="order"', 'id="orderStartActions"', 'id="original-collab"'], 'ORDER CTA must remain between ORDER and ORIGINAL / COLLAB sections.');

assertMatch(contactHtml, /<form id="orderContactForm"[^>]*data-endpoint="\/api\/order-contact"/s, 'Order contact form endpoint is missing or changed.');
assertMatch(contactHtml, /<link rel="stylesheet" href="\/css\/style\.css">/, 'contact.html must load styles from the site root for rewritten routes.');
assertMatch(contactHtml, /id="productType"/, 'Product selection field is missing from contact.html.');
assertMatch(contactHtml, /id="quantityDecision"/, 'Quantity decision field is missing from contact.html.');
assertMatch(contactHtml, /id="designFeeNotice"/, 'Design fee notice block is missing from contact.html.');
assertMatch(contactHtml, /id="referencePriceBox"/, 'Reference price box is missing from contact.html.');

assertMatch(scriptJs, /const ORDER_PRODUCT_MASTER = \{/, 'ORDER product master is missing from script.js.');
assertMatch(scriptJs, /function calculateReferencePrice\(/, 'Reference price calculation function is missing from script.js.');
assertMatch(scriptJs, /function initOrderContactForm\(/, 'Order contact form initializer is missing from script.js.');
assertMatch(scriptJs, /pushState|replaceState/, 'Confirmation route history handling is missing from script.js.');
assertMatch(scriptJs, /confirmPath:\s*`?\$\{?prefix\}?\/contact\/confirm`?/, 'Confirmation route path is missing from script.js.');
assertMatch(vercelConfig, /"source":\s*"\/contact\/confirm"/, 'Vercel route for /contact/confirm is missing.');

console.log('ORDER CTA regression check passed.');