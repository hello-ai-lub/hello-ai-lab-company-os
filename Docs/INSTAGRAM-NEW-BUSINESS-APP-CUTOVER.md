# Instagram Graph API New Business App Cutover

## Goal

Keep the existing app as-is, create a new Meta Business App, and switch production only after `/me/accounts` returns at least one page.

## Current Symptom

- OAuth success
- Access token success
- `/me/accounts` returns `data: []`

This indicates app-side access context mismatch, not a simple token parsing issue.

## Migration Plan (Agreed Flow)

1. Keep existing app unchanged
2. Create a new **Business** App
3. Add **Facebook Login for Business** and **Instagram Graph API**
4. Run OAuth with the new app
5. Switch production app id to the new app
6. Verify `/me/accounts` returns pages, then keep production on the new app

## Meta App Setup (Manual)

### 1) Create App

- App Type: `Business`
- App Name: any (example: `Hello Print Store Instagram Prod`)

### 2) Link Business Portfolio

- Link the same Business Portfolio that owns:
  - Facebook Page: `Hello Print Store`
  - Instagram Business Account: `@helloprintstore`

### 3) Add Products

- `Facebook Login for Business`
- `Instagram Graph API`

### 4) OAuth / Redirect

Set **Valid OAuth Redirect URI** exactly:

- `https://hello-print-store.vercel.app/instagram-oauth-callback.html`

### 5) Permissions

Minimum required:

- `pages_show_list`
- `instagram_basic`

Recommended additionally:

- `pages_read_engagement`

### 6) App Mode / Access

- Prefer production usage path for the new app (access level and review as needed)
- Ensure the login user has role/permission coverage for testing

## OAuth Re-Grant Procedure (Manual)

Before testing the new app:

1. Remove old integration from Facebook account (`Business Integrations`)
2. Start OAuth from the website
3. In page selection, explicitly select `Hello Print Store`
4. Grant all requested permissions for selected assets

## Production Switch in This Repository

Only one value must be changed for app cutover:

- `Projects/hello-print-store-prototype/index.html`
  - `meta[name="instagram-app-id"]`

Current code already reads app id from this meta value first.

## Verification Checklist (Must Pass)

Run after OAuth with new app:

1. `pages_show_list` step
   - `httpStatus: 200`
   - `responseJson.data.length > 0`

2. `pages_debug.pages`
   - contains `pageId` and `pageName` for `Hello Print Store`

3. `pages_debug.pageDetailLookups`
   - `/{page-id}?fields=id,name,instagram_business_account{id,username}` returns non-null `instagram_business_account`

4. `instagram_business_account` step
   - `selectedPageId != null`
   - `igBusinessAccountId != null`

5. `media_endpoint` step
   - `httpStatus: 200`
   - `responseJson.data` contains media

6. UI
   - latest 4 posts visible
   - caption visible
   - click opens target Instagram post

## Rollback Plan

If new app fails:

1. Restore old app id in `meta[name="instagram-app-id"]`
2. Redeploy production

No other code rollback is required for app-id-only switch.

## Notes on App Secret

- Current website flow stores user token client-side and does **not** require app secret in frontend.
- Never expose `App Secret` in client code.
- If server-side token exchange is introduced later, place app secret in Vercel server environment only.