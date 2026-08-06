const INSTAGRAM_CONFIG = {
    accessToken: '',
    limit: 4,
    profileUrl: 'https://instagram.com/helloprintstore/'
};

const INSTAGRAM_APP_CONFIG = {
    canonicalAppId: '1626671125739257',
    deprecatedAppIds: ['1479634687539283'],
    redirectUri: 'https://hello-print-store.vercel.app/instagram-oauth-callback.html',
    scope: 'instagram_basic,pages_show_list,pages_read_engagement',
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

document.addEventListener('DOMContentLoaded', () => {
    hydrateInstagramTokenFromUrl();
    initLucideIcons();
    initSkipLink();
    initHeaderThemeSwitch();
    initMobileMenu();
    initSmoothAnchorScroll();
    initRevealAnimation();
    initWorksModal();
    initInstagramOAuthDebug();
    initInstagramFeed();
});

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
    const redirectUri = getMetaContent('instagram-redirect-uri') || INSTAGRAM_APP_CONFIG.redirectUri || buildDefaultRedirectUri();
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

async function initInstagramFeed() {
    const feed = document.getElementById('instagramFeed');
    if (!feed) {
        return;
    }

    const tokenInfo = getInstagramTokenInfo();
    const accessToken = tokenInfo.token;
    const authConfig = getInstagramAuthConfig();
    writeInstagramGraphDebug({
        startedAt: new Date().toISOString(),
        token: {
            source: tokenInfo.source,
            type: tokenInfo.tokenType,
            oauthGrantedScopes: tokenInfo.grantedScopes,
            requestedScopes: parseScopeList(authConfig.scope),
            present: Boolean(accessToken),
            preview: accessToken ? `${accessToken.slice(0, 10)}...` : ''
        },
        steps: [{ stage: 'init', ok: true }]
    });

    if (!accessToken) {
        renderInstagramStatus(feed, 'Instagram連携トークンが未設定です。設定後に最新投稿が自動表示されます。', {
            showConnectButton: true
        });
        return;
    }

    try {
        const posts = await fetchInstagramGraphPosts(tokenInfo, INSTAGRAM_CONFIG.limit);
        if (!posts.length) {
            renderInstagramStatus(feed, '表示できる投稿が見つかりませんでした。Instagramをご確認ください。');
            appendInstagramGraphDebugStep({ stage: 'media', ok: true, message: 'No media posts returned.' });
            return;
        }

        writeInstagramCache(posts);
        appendInstagramGraphDebugStep({ stage: 'media', ok: true, message: `Fetched ${posts.length} posts.` });
        renderInstagramPosts(feed, posts);
        initLucideIcons();
    } catch (error) {
        console.warn('Instagram API fetch failed. Trying cache.', error);
        const cachedPosts = readInstagramCache();

        if (cachedPosts.length) {
            renderInstagramPosts(feed, cachedPosts);
            initLucideIcons();
            return;
        }

        const graphDebug = readInstagramGraphDebug();
        renderInstagramStatus(feed, 'Instagram投稿の取得に失敗しました。時間をおいて再読み込みしてください。', {
            debugPayload: graphDebug
        });
    }
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
    endpoint.searchParams.set('fields', 'id,name,access_token,tasks,instagram_business_account{id,username}');
    endpoint.searchParams.set('limit', '50');
    endpoint.searchParams.set('access_token', userAccessToken);

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
    const pages = data && Array.isArray(data.data) ? data.data : [];
    const pageListSummary = pages.map((page) => ({
        pageId: page && page.id ? page.id : null,
        pageName: page && page.name ? page.name : null,
        hasPageAccessToken: Boolean(page && page.access_token),
        pageTokenPreview: page && page.access_token ? `${String(page.access_token).slice(0, 10)}...` : '',
        tasks: page && Array.isArray(page.tasks) ? page.tasks : [],
        instagram_business_account: page && Object.prototype.hasOwnProperty.call(page, 'instagram_business_account')
            ? page.instagram_business_account
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
        const listInstagramAccount = Object.prototype.hasOwnProperty.call(page, 'instagram_business_account')
            ? page.instagram_business_account
            : null;
        const detailInstagramAccount = detail && Object.prototype.hasOwnProperty.call(detail, 'instagram_business_account')
            ? detail.instagram_business_account
            : null;

        const instagram_business_account = listInstagramAccount && listInstagramAccount.id
            ? listInstagramAccount
            : detailInstagramAccount;

        return {
            ...page,
            instagram_business_account
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
            igBusinessAccountId: null,
            message: 'No page with instagram_business_account.id found.'
        });
        throw new Error('No Facebook Page linked to an Instagram Business account was found for this access token.');
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
    endpoint.searchParams.set('fields', 'id,name,instagram_business_account{id,username}');
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
            error: error && error.graph ? error.graph : { message: error.message || 'Unknown page detail lookup error' }
        };
    }
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
    const { showConnectButton = false, debugPayload = null } = options;

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
            connectButton.textContent = 'Instagramと連携する';
            connectButton.addEventListener('click', triggerInstagramOAuthStart);

            actionRow.appendChild(connectButton);
            captionRow.appendChild(actionRow);
        }
    }

    if (debugPayload) {
        const captionRow = card.querySelector('.instagram-caption-row');
        if (captionRow) {
            const debugPre = document.createElement('pre');
            debugPre.style.marginTop = '12px';
            debugPre.style.padding = '10px';
            debugPre.style.background = '#f2f5fb';
            debugPre.style.borderRadius = '8px';
            debugPre.style.whiteSpace = 'pre-wrap';
            debugPre.style.wordBreak = 'break-word';
            debugPre.style.fontSize = '12px';
            debugPre.style.color = '#222';
            debugPre.textContent = JSON.stringify(debugPayload, null, 2);
            captionRow.appendChild(debugPre);
        }
    }

    feed.appendChild(card);
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
