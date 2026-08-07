const GRAPH_BASE = 'https://graph.facebook.com';
const GRAPH_VERSION = 'v23.0';
const DEFAULT_LIMIT = 4;

function logGraphApiError(httpStatus, metaError) {
    const errorObject = metaError && typeof metaError === 'object' ? metaError : {};

    console.error('[instagram-feed] Graph API error', {
        httpStatus,
        code: Object.prototype.hasOwnProperty.call(errorObject, 'code') ? errorObject.code : null,
        type: Object.prototype.hasOwnProperty.call(errorObject, 'type') ? errorObject.type : null,
        message: Object.prototype.hasOwnProperty.call(errorObject, 'message') ? errorObject.message : null,
        error_subcode: Object.prototype.hasOwnProperty.call(errorObject, 'error_subcode') ? errorObject.error_subcode : null,
        fbtrace_id: Object.prototype.hasOwnProperty.call(errorObject, 'fbtrace_id') ? errorObject.fbtrace_id : null
    });
}

function toInt(value, fallback) {
    const parsed = Number.parseInt(String(value || ''), 10);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return fallback;
    }
    return parsed;
}

function getHandleFromProfileUrl(urlValue) {
    try {
        const parsed = new URL(urlValue || '');
        const name = parsed.pathname.replace(/\//g, '').trim();
        return name ? `@${name}` : '@helloprintstore';
    } catch (_error) {
        return '@helloprintstore';
    }
}

function buildMediaEndpoint(accountId, accessToken, limit) {
    const endpoint = new URL(`${GRAPH_BASE}/${GRAPH_VERSION}/${accountId}/media`);
    endpoint.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
    endpoint.searchParams.set('limit', String(limit));
    endpoint.searchParams.set('access_token', accessToken);
    return endpoint;
}

function toPublicPost(post, handle, profileUrl) {
    return {
        id: post && post.id ? post.id : '',
        image: post && (post.media_url || post.thumbnail_url) ? (post.media_url || post.thumbnail_url) : '',
        caption: post && post.caption ? post.caption : '',
        permalink: post && post.permalink ? post.permalink : profileUrl,
        timestamp: post && post.timestamp ? post.timestamp : '',
        handle
    };
}

export default async function handler(request, response) {
    const token = process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN || '';
    const businessAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID || '';
    const profileUrl = process.env.INSTAGRAM_PROFILE_URL || 'https://instagram.com/helloprintstore/';
    const limit = toInt(request.query && request.query.limit, DEFAULT_LIMIT);

    response.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    if (!token || !businessAccountId) {
        response.status(503).json({
            ok: false,
            message: 'Instagram feed is not configured on the server.',
            data: []
        });
        return;
    }

    try {
        const endpoint = buildMediaEndpoint(businessAccountId, token, limit);
        const apiResponse = await fetch(endpoint.toString(), {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        const rawText = await apiResponse.text();
        let json = null;

        try {
            json = rawText ? JSON.parse(rawText) : null;
        } catch (_parseError) {
            logGraphApiError(apiResponse.status, null);
            response.status(502).json({
                ok: false,
                message: 'Failed to fetch Instagram feed from Graph API.',
                data: []
            });
            return;
        }

        if (!apiResponse.ok || (json && json.error)) {
            logGraphApiError(apiResponse.status, json && json.error ? json.error : null);
            response.status(502).json({
                ok: false,
                message: 'Failed to fetch Instagram feed from Graph API.',
                data: []
            });
            return;
        }

        const items = json && Array.isArray(json.data) ? json.data : [];
        const handle = getHandleFromProfileUrl(profileUrl);
        const posts = items
            .filter((post) => post && (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'))
            .map((post) => toPublicPost(post, handle, profileUrl))
            .filter((post) => Boolean(post.image));

        response.status(200).json({
            ok: true,
            data: posts
        });
    } catch (_error) {
        console.error('[instagram-feed] Request failed before Graph response', {
            httpStatus: null,
            code: null,
            type: null,
            message: _error && _error.message ? _error.message : 'Unknown fetch error',
            error_subcode: null,
            fbtrace_id: null
        });
        response.status(502).json({
            ok: false,
            message: 'Instagram feed request failed.',
            data: []
        });
    }
}
