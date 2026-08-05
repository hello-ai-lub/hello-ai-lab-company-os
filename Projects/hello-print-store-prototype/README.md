# Hello Print Store - Premium Brand Site Prototype

**Phase 3 v2**: プレミアム ブランドサイト リメイク
**Status**: ✅ COMPLETE - Ready for CEO Review  
**Launch Target**: 2026-08-31  
**Date**: 2026-08-03 (Rebuilt)

---

## Instagram Graph API Setup

このサイトは Instagram Graph API で最新投稿を自動表示できます。

### App ID統一方針（重要）

- 採用App ID: `1626671125739257`
- 非採用（廃止予定）App ID: `1479634687539283`

このリポジトリでは、`index.html` の `meta[name="instagram-app-id"]` を単一の参照元として運用します。

注: このプロトタイプは静的サイト構成のため `.env` や `NEXT_PUBLIC_FACEBOOK_APP_ID` は使用していません。
App IDは `meta[name="instagram-app-id"]` で管理します。

1. Meta for Developers でアプリを作成
2. Instagram Business または Creator アカウントを Facebook ページに接続
3. `instagram_basic` 権限でユーザーアクセストークンを発行
4. 長期トークンへ交換（60日）
5. 以下のどちらかでトークンを設定

### 方法 A: meta タグへ設定

`index.html` の `<meta name="instagram-access-token" content="">` にトークンを設定

### 方法 B: JavaScript で設定

`window.__HPS_INSTAGRAM_ACCESS_TOKEN = 'YOUR_TOKEN';`

### OAuth開始時の実値ログ（client_id / redirect_uri / scope）

ブラウザのDevToolsコンソールで次を実行すると、OAuth開始時の実際の値をログ確認できます。

```js
window.HPSInstagramOAuth.logStartParams();
```

実際にOAuth開始まで行う場合は次を実行します。

```js
window.HPSInstagramOAuth.startOAuth();
```

OAuth Callback URL:

- ローカル: `http://localhost:8000/Projects/hello-print-store-prototype/instagram-oauth-callback.html`
- 本番固定: `https://hello-print-store.vercel.app/instagram-oauth-callback.html`

実装では `instagram-redirect-uri` を固定指定しています。Meta Developers の Valid OAuth Redirect URI には以下を **完全一致** で登録してください。

- `https://hello-print-store.vercel.app/instagram-oauth-callback.html`

OAuth開始先は Facebook Login ダイアログを利用します。

- `https://www.facebook.com/v23.0/dialog/oauth`
- scope: `instagram_basic,pages_show_list`

実装は `response_type=token` を使用し、Callbackで `access_token` を受け取り保存します。

### APIエンドポイント統一方針（重要）

- この実装は **Instagram API with Facebook Login** に統一しています。
- 投稿取得・ページ解決・トークン交換は **`graph.facebook.com` のみ** を使用します。
- `graph.instagram.com`（Instagram Basic Display API）はこのフローでは使用しません。

### アクセストークン交換フロー（server-side）

1. Callbackで受け取った `code` を短期ユーザートークンへ交換

`GET https://graph.facebook.com/v23.0/oauth/access_token?client_id=APP_ID&client_secret=APP_SECRET&redirect_uri=CALLBACK_URL&code=CODE`

2. 短期ユーザートークンを長期ユーザートークンへ交換

`GET https://graph.facebook.com/v23.0/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=SHORT_LIVED_USER_TOKEN`

注: `client_secret` を扱うため、上記2ステップは必ずサーバー側で実行してください。

### Callbackでの保存動作

- Callbackファイル: `instagram-oauth-callback.html`
- 受信優先順位:
   1. `access_token`（hash/query）
   2. `code`（query）
- `access_token` 受信時は `localStorage` の `hps_instagram_access_token_v1` に保存し、自動で元ページへ戻ります。
- `code` のみ受信時は `hps_instagram_oauth_code_v1` に保存し、サーバー側交換手順を表示します。
- `state` は `sessionStorage` の `hps_instagram_oauth_state_v1` で検証します。

### business/cancel 調査ポイント

- `business/cancel` は Meta 側で認証フローが完了せず中断された場合に発生します。
- 最優先確認は `redirect_uri` の完全一致（スキーム/ホスト/パス/末尾スラッシュ含む）です。
- Callbackで `error`, `error_reason`, `error_description`, `state` を表示するため、失敗時はその値を確認してください。

### 仕様

- 表示件数: 最新8投稿
- レイアウト: PCは4列、スマートフォンは2列（正方形サムネイル）
- 表示情報: 投稿日、投稿本文冒頭（最大3行）
- クリック: 各カードからInstagram投稿へ遷移
- 導線: `VIEW MORE` ボタンで公式プロフィールへ遷移
- 投稿反映: Instagram更新後、ページ再読み込みで自動反映
- キャッシュ: API失敗時のみ直近15分キャッシュを表示
- トークン未設定時: 連携案内カードを表示

### 認証運用（実運用向け）

- 推奨: Meta Graph API の長期アクセストークン（60日）を利用
- トークン設置先: `index.html` の `meta[name="instagram-access-token"]`、または `window.__HPS_INSTAGRAM_ACCESS_TOKEN`
- 更新運用: 期限前にトークン再発行し、同じ設定箇所を差し替える
- 注意: 本番ではサーバー側注入または環境変数管理で、トークンの直書きを避ける

### 調査メモ（実装側）

- このプロジェクト本体には、外部で手入力したOAuth URLを生成する旧実装は存在しません
- OAuth URLは `window.HPSInstagramOAuth.startOAuth()` で一元生成されるよう統一済みです
- OAuth `state` は `sessionStorage` に保存し、Callbackで照合します

### セキュリティ注意

- 本番運用では、トークンをHTMLに直書きせず、サーバー側で安全に注入する運用を推奨
- アクセストークンは公開リポジトリへコミットしない

---

## 🎨 プロジェクト概要

Hello Print Store のプレミアム ブランドサイト プロトタイプです。

**Phase 2** で選定された **C案デザイン（94/100 スコア）** を、高級ブランドサイト美学（KITH × Friends ONLY × Nike Journal スタイル）で完全に実装しました。

### ビジュアル特性
- ✅ 大型レスポンシブタイポグラフィ（clamp による流動スケーリング）
- ✅ Unsplash 高品質写真を主要ビジュアルストーリーとして活用
- ✅ スクロール連動 Reveal アニメーション（Intersection Observer）
- ✅ 分割レイアウト（画像＋テキスト混合）
- ✅ ワークス グリッド（マソンリー スタイル）
- ✅ プロセス ステップ カード（ホバー エレベーション）
- ✅ プロダクト ショーケース（グラデーション オーバーレイ）
- ✅ ダークグラデーション CTA セクション
- ✅ フッター（ソーシャル リンク、著作権）

---

## 🚀 サーバー起動状況

### 現在実行中 ✅

```
Port: 8001
Command: python3 -m http.server 8001
Status: Running (Background Terminal)
URL: http://localhost:8001/Projects/hello-print-store-prototype/
```

### 新しい ターミナルで起動する場合

```bash
cd /Users/take/Desktop/Hello-AI-Lab/Projects/hello-print-store-prototype
python3 -m http.server 8001
```

### ブラウザで表示

```
http://localhost:8001/Projects/hello-print-store-prototype/
```

---

## 📁 ファイル構成

```
hello-print-store-prototype/
├── index.html           # HTML マークアップ（8セクション構造）
├── css/
│   └── style.css        # 完全再設計 CSS（1000+ 行、デザインシステム）
├── js/
│   └── script.js        # インタラクティブ機能（Intersection Observer）
├── img/                 # アセット用フォルダ
├── README.md            # このファイル
└── START-DASHBOARD.command  # 起動スクリプト
│   └── script.js        # インタラクション・アニメーション
├── img/                 # 画像ファイル（今後追加）
└── README.md            # このファイル
```

---

## 🎨 デザイン詳細

### 採用デザイン

**C案：Hello Print Store オリジナル**

- **コンセプト**: 洗練 × カルチャー × 福岡ローカル
- **ビジュアル**: 左60%白背景 + 右40%商品配置
- **ロゴ**: 控えめなサイズで中央配置
- **テキスト**: 「Design for Teams. Create for Culture.」
- **CTA**: Hello Orange + 黒ボーダー

### 使用フォント

| 用途 | フォント |
|------|---------|
| 全体 | `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif` |
| 見出し（H1-H3） | SF Pro Display / Inter |
| 本文 | SF Pro Display / Inter |

**注**: 実装では OS のデフォルトフォントシステムスタックを使用しています。  
Phase 4（実装）で、Adobe Fonts または Google Fonts から正式にロードさせます。

### 使用カラー

| 色 | コード | 用途 |
|----|--------|------|
| **White** | `#ffffff` | 背景・テキスト |
| **Black** | `#000000` | テキスト・ボーダー |
| **Hello Orange** | `#FF7B3D` | CTA ボタン（プライマリ） |
| **Light Gray** | `#f5f5f5` | セクション背景 |
| **Medium Gray** | `#999999` | 補助テキスト |
| **Dark Gray** | `#333333` | メインテキスト |
| **Cream** | `#f0ebe3` | ダミー背景ベース |

### スペーシング（8px ベースユニット）

| 変数 | サイズ | 用途 |
|------|--------|------|
| `--space-xs` | 8px | 微調整 |
| `--space-sm` | 16px | 要素間 |
| `--space-md` | 24px | セクション内 |
| `--space-lg` | 32px | 大型要素 |
| `--space-xl` | 48px | メインスペーシング |
| `--space-xxl` | 64px | 大型セクション |

---

## ✨ 実装された機能

### 1. レスポンシブデザイン
- **デスクトップ版**: 1920px 以上対応
- **タブレット版**: 769px - 1023px 対応
- **スマートフォン版**: 768px 以下対応
- **流動的なタイポグラフィ**: `clamp()` で自動スケーリング

### 2. アニメーション
- **ページロード**: ロゴとテキストの段階的フェードイン
- **スクロール**: 背景イメージの Parallax エフェクト（軽め）
- **ボタンホバー**: CTA ボタンのトランスフォーム・シャドウ効果
- **スクロールインジケーター**: バウンスアニメーション＆自動消失

### 3. インタラクション
- **モバイルメニュー**: ハンバーガーメニュー切り替え
- **スクロール検出**: インジケーター自動消失
- **ヘッダースタイル**: スクロール時にシャドウ追加
- **キーボード操作**: スペースキー・矢印キーでスクロール

### 4. アクセシビリティ
- **セマンティック HTML**: 正しいランドマーク・見出し構造
- **ARIA ラベル**: フォーカス管理・アクセシビリティ対応
- **フォーカススタイル**: キーボードナビゲーション対応
- **コントラスト**: WCAG AA 以上のテキストコントラスト

---

## 🎯 現在の状態

### ✅ 完成している部分

- HTML セマンティックマークアップ
- レスポンシブ CSS（PC・タブレット・スマートフォン対応）
- インタラクティブ JavaScript
- アニメーション・トランジション
- モバイルメニュー
- スクロール検出機構
- アクセシビリティ対応

### ⚠️ 改善予定の部分

1. **背景写真の差し替え**
   - 現在：SVG ダミー背景を使用
   - 予定：実際の商品写真（Phase 4）

2. **ロゴの高度化**
   - 現在：テキストベースの簡易ロゴ
   - 予定：公式ロゴ SVG または PNG（Phase 4）

3. **フォント最適化**
   - 現在：システムフォントスタック
   - 予定：Adobe Fonts または Google Fonts で最適化（Phase 4）

4. **パフォーマンス最適化**
   - 画像の WebP 変換
   - CSS/JS の最小化
   - Lazy Loading 実装

5. **追加機能**
   - 次のセクション（WORKS など）の設計
   - フッター実装
   - CTA ボタンのリンク先設定

---

## 🔧 技術スタック

| 技術 | バージョン | 用途 |
|------|----------|------|
| **HTML5** | - | セマンティック構造 |
| **CSS3** | - | レスポンシブデザイン・アニメーション |
| **JavaScript (ES6+)** | - | インタラクション |
| **No Frameworks** | - | 軽量・高速実装 |
| **No Build Tools** | - | シンプル・すぐに起動可能 |

---

## 📱 ブラウザ対応

- ✅ Chrome/Edge 最新版
- ✅ Firefox 最新版
- ✅ Safari 最新版
- ✅ モバイルブラウザ（iOS Safari, Chrome Mobile）

---

## 🚀 Phase 4 実装予定

1. **背景写真の実装**
   - 商品写真の撮影・編集
   - 最適な配置・トリミング

2. **ロゴの正式実装**
   - 公式ロゴ SVG 化
   - 複数サイズ対応

3. **フォントの最適化**
   - Google Fonts または Adobe Fonts ロード
   - フォント読み込み最適化

4. **他セクションの実装**
   - WORKS セクション
   - FLOW セクション
   - ITEMS セクション
   - その他ページ

5. **WordPress 統合**
   - Elementor での実装
   - Custom CSS/JS の統合
   - データベース連携

6. **SEO 最適化**
   - メタタグ最適化
   - スキーママークアップ
   - サイトマップ生成

7. **パフォーマンス最適化**
   - 画像最適化
   - CDN 配置
   - キャッシング戦略

---

## 📝 CSS 変数（カスタマイズ可能）

`css/style.css` の `:root` セクションで、すべてのデザインシステム変数を管理しています。

```css
:root {
    /* Colors */
    --color-hello-orange: #FF7B3D;
    
    /* Fonts */
    --font-primary: /* font stack */;
    
    /* Spacing */
    --space-lg: 2rem; /* 32px */
    
    /* Animations */
    --transition-normal: 300ms ease-out;
}
```

---

## 🔍 デバッグ・トラブルシューティング

### サーバーが起動しない場合

```bash
# ポートが既に使用されている可能性
# 異なるポートで起動
python3 -m http.server 9000  # ポート 9000

# または Node.js を使用
npm install -g http-server
http-server
```

### スタイルが反映されない場合

- ブラウザキャッシュをクリア（Ctrl+Shift+Delete / Cmd+Shift+Delete）
- ハードリロード（Ctrl+F5 / Cmd+Shift+R）

### アニメーションが動作しない場合

- ブラウザのハードウェアアクセラレーションを有効化
- DevTools で JavaScript エラーを確認

---

## 📊 パフォーマンスメトリクス

目標値（Phase 4）:

- **Lighthouse Performance**: 90+
- **First Contentful Paint (FCP)**: < 1.0s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

---

## 📞 サポート

質問や問題が発生した場合は、以下の情報をお知らせください：

1. ブラウザ名・バージョン
2. 発生している問題の詳細
3. ブラウザのコンソールエラー（F12 で確認）

---

## 📄 ライセンス

このプロジェクトは Hello Print Store の内部プロジェクトです。

---

**Build with AI. Grow with People.**

**Hello Print Store - PHASE 3 Prototype**  
**Status**: 🟢 Ready for CEO Review  
**Next**: Background Photo Shoot & Phase 4 Implementation
