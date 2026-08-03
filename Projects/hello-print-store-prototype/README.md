# Hello Print Store - Premium Brand Site Prototype

**Phase 3 v2**: プレミアム ブランドサイト リメイク
**Status**: ✅ COMPLETE - Ready for CEO Review  
**Launch Target**: 2026-08-31  
**Date**: 2026-08-03 (Rebuilt)

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
