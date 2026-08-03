# 🎨 PROJECT 002 - Hello Print Store Website Renewal

**Project Owner**: TAKE  
**Status**: 🟢 PHASE 1 START  
**Target Launch**: 2026-08-31  
**Priority**: Completeness > Speed

---

## 📋 PROJECT OVERVIEW

### Mission
Hello Print Storeをブランドサイト化し、「福岡で一番ブランド力のあるオーダーウェアメーカー」へ進化させる。

**重要**: ホームページ完成 ≠ プロジェクト成功  
**真の目標**: ブランド体験の設計と実装

### Core Concept
```
Design for Teams.
Create for Culture.

Helloは「ユニフォームを売る会社」ではなく、
「ブランドやチームの世界観を一緒に作る会社」
```

### Design Philosophy
```
参考：Nike（ミニマル × ブランド力）
参考：KITH（プレミアム × コミュニティ）
参考：Friends ONLY（カルチャー感）

但し、コピーではなくHelloらしさを優先

常に「Helloだったらどう表現するか」を問い続ける
```

---

## 🏗️ PROJECT STRUCTURE

### 7 Phases

```
Phase 1: ブランド設計
  └─ 目的：ブランドの視覚言語・体験を定義
  └─ 成果物：デザインシステム、トーンアンドマナー
  └─ 納期：2026-08-05

Phase 2: ワイヤーフレーム
  └─ 目的：情報設計・導線設計・スマホ最適化
  └─ 成果物：全ページのワイヤーフレーム
  └─ 納期：2026-08-10

Phase 3: UI/UX デザイン
  └─ 目的：ビジュアルデザイン・インタラクション設計
  └─ 成果物：Figmaデザイン・コンポーネント集
  └─ 納期：2026-08-15

Phase 4: 実装（Elementor + Custom Code）
  └─ 目的：WordPress環境での実装・カスタマイズ
  └─ 成果物：実装済みサイト・HTMLコード
  └─ 納期：2026-08-25

Phase 5: テスト・改善
  └─ 目的：品質確保・ユーザビリティ検証
  └─ 成果物：テストレポート・改善案
  └─ 納期：2026-08-28

Phase 6: 公開
  └─ 目的：本番環境公開・SEO最適化
  └─ 成果物：公開サイト
  └─ 納期：2026-08-31

Phase 7: 運用・改善
  └─ 目的：継続改善・コンテンツ追加
  └─ 成果物：運用マニュアル・改善ログ
```

### Review Points（各フェーズ終了時に必ず実施）

```
✅ Phase1完了時：ブランド設計レビュー
✅ Phase2完了時：ワイヤーフレーム・導線レビュー
✅ Phase3完了時：デザイン・ビジュアルレビュー
✅ Phase4完了時：実装品質・機能レビュー
✅ Phase5完了時：最終チェック
✅ Phase6完了時：公開テスト
```

---

## 🎯 PHASE 1: ブランド設計

**期間**: 2026-08-03 ～ 2026-08-05  
**目標**: Helloらしい世界観を言語化・可視化する

### 1.1 デザインシステム定義

#### カラーシステム

```
【Primary】
- White（背景）：#FFFFFF
- Black（テキスト）：#000000

【Accent】
- Hello Orange：#FF7B3D（すべてのアクセント・CTA）

【Secondary】
- Light Gray：#F5F5F5（背景変化）
- Medium Gray：#999999（補助テキスト）
- Dark Gray：#333333（標準テキスト）

【ルール】
- アクセントカラーはHello Orangeのみ
- 白黒ベースで余白と高級感を表現
- 色数を極力抑える（5色以下）
```

#### タイポグラフィ

```
【Font Family】
- Heading：SFProDisplay / Inter（モダン、高級感）
- Body：SFProText / Inter（読みやすさ）

【Font Scale】
H1: 56px / 48px (SP)
H2: 40px / 32px (SP)
H3: 28px / 24px (SP)
H4: 20px / 18px (SP)
Body: 16px / 14px (SP)
Caption: 12px / 11px (SP)

【ルール】
- 文字は少なく
- 余白を活用して高級感を演出
- 行間：1.6～1.8（読みやすさ）
```

#### スペーシング

```
Base unit: 8px

xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
xxl: 64px

【ルール】
- 余白を多く使う
- セクション間隔：xxl以上
- 要素間隔：lg以上
- 高級感 = 余白の豊富さ
```

#### グリッドシステム

```
【デスクトップ】
- 12列グリッド
- カラム幅：1/12
- ガター：24px

【タブレット】
- 8列グリッド

【スマートフォン】
- 4列グリッド
```

#### Imagery Style

```
【写真の扱い】
- 大きく（セクション高さ：60-80vh）
- 最小加工（Helloらしさを損なわない）
- 被写体：ユニフォーム・制作風景・着用シーン・オリジナル商品
- 色：カラーバランスを白黒背景に合わせる

【アニメーション】
- Entrance animation: fade in, subtle slide
- Scroll animation: 上品に、控えめに
- CTA animation: Hoverで目立つが邪魔にならない
- Transition: 300-400ms（快適さ）

【ホワイトスペース】
- 背景に負の空間を作る
- 余白を使って注目度を上げる
- 写真と文字の間隔：lg以上
```

### 1.2 トーンアンドマナー

#### Voice & Tone

```
【Brand Voice】
- Modern（モダン）
- Premium（プレミアム）
- Collaborative（協業的）
- Authentic（本物感）

【Tone】
- 堅くない（カジュアルでない）
- 上から目線でない
- チーム・コミュニティを感じさせる
- 作り込みすぎない自然感

【Examples】
❌「世界最高級のユニフォーム」
✅「チームの世界観を形にする」

❌「当社の製造技術は優秀です」
✅「制作するとき、大切にしていること」
```

#### Copywriting Guidelines

```
【原則】
- 1行20文字以下
- 短く、明確に
- 写真が主役なので文字は補助
- 説明的にならない

【例】

❌ 長い説明文
「Hello Print Storeではお客様のブランドやチームの世界観を
理解した上で、最高品質のユニフォームをカスタマイズして
製作いたします。」

✅ 短く、Helloらしく
「チームの世界観を、
一緒に作る。」

【セクションごとのコピー】
- TOP: 1-2行（写真がメイン）
- WORKS: タイトル + 短い説明
- FLOW: ステップ名のみ
- ITEMS: 商品名 + 1行説明
- ORIGINALS: 1-2行コンセプト
- ABOUT: 3-4行のストーリー
```

### 1.3 デザイン参考

#### 参考にすること

```
Nike
→ ミニマルな美しさ
→ 強烈なブランド世界観
→ 写真を最大限活用

KITH
→ プレミアム感
→ コミュニティ構築
→ ビジュアルの高質化

Friends ONLY
→ カルチャー感
→ チーム感
→ 世界観の一貫性
```

#### 参考にしないこと

```
❌ デザインの直接的なコピー
❌ レイアウトの流用
❌ 色彩の模倣
❌ アニメーションの真似
```

#### Helloオリジナリティの軸

```
Helloは「福岡」「オーダーメイド」「ブランド＝文化」

この3要素を写真・デザイン・コピーで一貫表現する
```

### 1.4 コンポーネント一覧

```
【レイアウトコンポーネント】
- Hero Section（大写真 + CTA）
- Text Block（テキスト + オプション画像）
- Image Block（写真単体）
- Card Grid（複数カード配置）
- Section Divider（セクション区切り）

【交互型コンポーネント】
- Text Left Image Right
- Image Left Text Right
- Full Width Image
- Carousel（作品一覧用）

【フォームコンポーネント】
- CTA Button（Hello Orange）
- Input Field（ミニマル）
- Dropdown（カスタム）

【ナビゲーション】
- Header（固定 or 非固定）
- Footer
- Breadcrumb（PC版のみ）
- Mobile Menu

【その他】
- Icon Set（オーダーフロー用）
- Badge（新商品等）
- Testimony Card（将来用）
```

### 1.5 ページ構成

```
【メインページ】
1. TOP
   - Hero Section
   - CTA（VIEW WORKS / START ORDER）

2. WORKS
   - 製作実績一覧
   - Instagram連携
   - フィルター機能

3. MAKE YOUR OWN（FLOW）
   - 5ステップの流れ
   - アイコン・イラスト表現

4. ITEMS
   - 商品カテゴリー
   - カード表示
   - 詳細ページへの遷移

5. HPS ORIGINALS
   - オリジナル商品専用
   - EC化前提の設計
   - メイン：Overlay Shorts

6. ABOUT
   - ブランド紹介
   - "Design for Teams. Create for Culture."
   - 短文 + 大写真

7. CONTACT / FOOTER
   - 問い合わせCTA
   - SNS連携
   - 基本情報

【サブページ】
- 商品詳細ページ
- 制作実績詳細ページ
- ブログ/News（将来用）
```

### 1.6 スマートフォン対応

```
【最優先】
- スマホでの見易さ
- タッチサイズ（最小48px × 48px）
- スクロール体験の快適さ

【実装】
- レスポンシブグリッド
- タッチフレンドリーなCTA
- 縦方向の流れを自然に
- 写真はスマホに最適化

【ルール】
- スマホ版が完璧でなければ、デスクトップは無意味
- スマホ ⊇ デスクトップ ではなく
- スマホ最適 ← → デスクトップ最適
```

---

## 📸 ビジュアル資産

### 写真素材の分類

```
【Category 1: ユニフォーム単体】
- フラット撮影
- 着用シーン
- 製品バリエーション

【Category 2: 制作風景】
- プリント作業
- 品質チェック
- 梱包・納品

【Category 3: チーム・着用シーン】
- チーム全体
- グラウンド・フィールド
- イベント

【Category 4: オリジナル商品】
- Overlay Shorts
- クローズアップ
- 着用イメージ

【管理】
- フォルダ分け
- ファイル命名ルール統一
- 高解像度（最小2000px）
- 複数アングル保管
```

---

## 🔄 データ構造（WordPress/Elementor）

### 必要なカスタムポスト

```
1. Works（製作実績）
   - タイトル
   - サムネイル
   - 説明文
   - カテゴリー
   - Instagram リンク
   - 公開日

2. Items（商品）
   - 商品名
   - 画像
   - 説明
   - カテゴリー
   - 価格（将来用）
   - 詳細ページへのリンク

3. HPS Originals（オリジナル商品）
   - 商品名
   - 画像
   - 説明
   - 仕様
   - 価格
   - EC連携（将来）
```

### 必要なカスタムメタ

```
- Hero Image
- Hero Title
- Hero Subtitle
- Section Color Variant
- Animation Type
```

---

## ✅ PHASE 1 チェックリスト

```
☑ デザインシステム定義完了
☑ トーンアンドマナー確定
☑ コンポーネント一覧作成
☑ ページ構成確定
☑ WordPress データ構造設計
☑ リソース確認（写真素材等）
☑ CEOレビュー完了
☑ Phase 2 準備完了
```

---

## 🎬 Next Phase Preview

**Phase 2（ワイヤーフレーム）**では以下を実施：

```
1. 全ページのワイヤーフレーム作成
2. スマホ・デスクトップ両対応
3. ユーザーフロー図
4. インタラクション仕様書
5. CEOレビュー
```

---

**Build with AI. Grow with People.**

**PROJECT 002 - Phase 1 Design System**  
**Status**: 🟢 READY FOR REVIEW  
**Target**: Design Excellence + Helloらしさ

