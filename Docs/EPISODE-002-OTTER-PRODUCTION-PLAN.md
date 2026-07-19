# Episode002 - Otter (オッター) Production Plan

**Status**: 📋 PLANNING PHASE  
**Date**: 2026-07-19  
**Target Publication**: 2026-07-26 (1 week)  
**Theme**: "Otters hold hands"

---

## 🎯 EPISODE002 IMPROVEMENT OBJECTIVES

Episode001 での学習を反映：

| 改善点 | 現状（Ep001） | 目標（Ep002） | 実装方法 |
|------|----------|----------|--------|
| **冒頭3秒引き込み** | パンダが目を開く | オッターが水から顔を出す | 動きの速度UP、驚き要素追加 |
| **映像で学びを伝える** | テロップが学び | 行動で学びを表現 | 手をつなぐ = 群れでの絆 |
| **テンポ改善** | ゆっくり | 自然な速度 | キャラ動作の自然さUP |
| **制作時間短縮** | 4日 | 2日 | テンプレート最適化 |

---

## ■ 企画班 (PLANNING TEAM)

### 責務
ラッコのかわいさと学びを組み合わせた3つの企画案を作成

### 企画条件
```
ターゲット: 2-8歳の子ども + 保護者
感情タッチポイント: 友情・家族・つながり
構成時間: 15秒固定
重点: 冒頭3秒で「もう一回見たい」という気分にさせる
```

### 提案：3企画案

#### 案① 「手をつなぐ家族」（推奨案）
```
0-3秒: 水から顔を出すオッター、キョロキョロ周りを見る
3-10秒: 家族のオッターを発見、喜んで駆け寄る、みんなで手をつなぐ
10-15秒: 手をつなぎながら一緒に泳ぐ、幸せそうな表情で手を振る

学び: "Did you know otters hold hands while sleeping so they don't drift apart?"
映像的表現: 手をつなぐ → 絆・愛情の可視化
感情弧: 発見 → 喜び → 幸せ → 温かみ
```

**理由**: 行動が学びそのもの。映像で説明が完結。子どもにも親にも刺さる。

#### 案② 「貝を割るテク」
```
0-3秒: オッターが貝を持ってソワソワ
3-10秒: お母さんオッターが貝を石で割るやり方を教える、真似をする
10-15秒: 成功！喜びをジャンプで表現、得意げな表情

学び: "Did you know otters use tools to open shellfish?"
映像的表現: 親の教え → 子が学ぶ → 成功 = ポジティブループ
```

#### 案③ 「グループでの狩り」
```
0-3秒: オッターが一匹で何か探している
3-10秒: 仲間と一緒に協力して魚を探す、チームワーク表現
10-15秒: 皆で食べる、一体感

学び: "Did you know otters hunt together in groups?"
映像的表現: 一匹→複数 = 力の合わせ方の学び
```

### 推奨：案①「手をつなぐ家族」
- 最もビジュアルが美しい
- 行動 = 学び の構造がシンプル
- 親子で感情移入しやすい
- Pixarアニメの感性と合致

---

## ■ リサーチ班 (RESEARCH TEAM)

### 責務
ラッコの面白い豆知識を調査し、映像化可能な内容をセレクト

### 調査項目：ラッコの豆知識TOP10

| # | 豆知識 | 映像化難度 | 推奨度 |
|---|------|---------|------|
| 1 | **手をつなぐ（寝るとき）** | 低 | ⭐⭐⭐⭐⭐ |
| 2 | **石を使って貝を割く** | 低 | ⭐⭐⭐⭐⭐ |
| 3 | **毎日体重の25%の食料が必要** | 高 | ⭐⭐ |
| 4 | **最高級の毛皮を持つ** | 中 | ⭐⭐⭐ |
| 5 | **水中で眠ることができる** | 中 | ⭐⭐⭐⭐ |
| 6 | **ラッコは冷たい海でも体温を保つ** | 高 | ⭐⭐ |
| 7 | **ラッコは群れで生活** | 低 | ⭐⭐⭐⭐ |
| 8 | **お母さんは子どもを背中に乗せて泳ぐ** | 低 | ⭐⭐⭐⭐⭐ |
| 9 | **ラッコは海の生態系を守る** | 高 | ⭐⭐⭐ |
| 10 | **遊びながら狩りの技術を学ぶ** | 中 | ⭐⭐⭐⭐ |

### Episode002用セレクト

**第1候補**: 知識①「手をつなぐ」
- 最高のビジュアル
- 子どもでも理解できる
- 感情的インパクト大
- "Did you know otters hold hands while sleeping so they don't drift apart?" ✅

**第2候補**: 知識⑧「背中に乗せて泳ぐ」
- Alternative if 案① が映像化難しい場合

**第3候補**: 知識②「石を使う」
- 知的要素が強い
- 親向けアピール

---

## ■ プロンプト班 (PROMPT TEAM)

### 責務
Episode001の学習を反映し、Kling V2.5用プロンプトを改善

### Episode001からの改善ポイント

#### 改善①：冒頭3秒の引き込み強化
```
❌ 旧：「パンダが目を開ける」← ゆっくり、静的

✅ 新：「オッターが水から顔を出す」← 動き、驚き、瞬間的
   - 水の飛沫
   - キラッとした目
   - 期待感あるリアクション
   - 0-1秒：浮上
   - 1-2秒：視線を動かす
   - 2-3秒：家族を見つけて喜ぶ
```

#### 改善②：映像で学びを伝える
```
❌ 旧：「ナレーション + 映像」← 説明的

✅ 新：「行動が学び」← 手をつなぐ = 知識が可視化
   - Kling プロンプトで「手をつなぐ」を明確に指示
   - そのビジュアルが学び部分になる
   - ナレーションは補足的
```

#### 改善③：自然なテンポ
```
❌ 旧：「すべての動作がゆっくり」← 子どもには物足りない

✅ 新：「自然なスピード」← リアルな動物の動き
   - 発見時：素早い反応
   - 移動時：自然な泳ぎ
   - 触れ合い時：ゆっくり、繊細
```

### EPISODE002用Klingプロンプト（案）

```
YouTube Shorts (15 seconds, 9:16 vertical). Baby otter discovering its family 
in the water. Ultra-cute Pixar-style animation quality.

0-3 seconds (OPENING HOOK - CRITICAL): Baby otter surfaces from water with splash 
and sparkle. Eyes wide open with wonder and excitement. Quick head movements looking 
around curiously. Expression conveys "What's this amazing world?" Water droplets catch 
golden light. This moment must capture attention immediately - the most critical moment 
of the video. Otter's face shows pure joy and discovery energy.

3-10 seconds (DISCOVERY & LEARNING): Otter spots family ahead. Swims joyfully toward 
them with bouncy natural movements. Family otters gather together. Multiple otters 
gently hold hands/paws together. Warm golden lighting emphasizes the connection and 
bonding. This action IS the learning moment - showing otters' natural behavior of 
holding together for safety and companionship. Eyes sparkle, expressions show contentment 
and belonging. All movements smooth and natural, demonstrating genuine family connection.

10-15 seconds (PEACE & GOODBYE): Otter family swimming together while holding paws. 
Camera pulls back slightly showing the group unity. All otters look peaceful and happy. 
Baby otter looks at camera with biggest smile. Slowly raises small paw for gentle wave. 
Expression conveys "See you soon" warmth and belonging. Final warm glow surrounds the 
group. Viewer feels urge to rewatch and share.

Brand Standards (MOCHIZOO - ALL EPISODES): Warm golden 3200K lighting throughout. 
Pixar-quality animation with natural movements. 50mm cinematic lens aesthetic. Soft 
pastel magical water environment with glowing elements. Eyes are primary emotion 
communicators with natural sparkles and life. Every movement smooth and full of personality. 
Safe, nurturing, enchanted world feeling. Facial micro-expressions show genuine emotion 
and connection.

Technical: MP4 H.264, 1080x1920, no dialogue, natural behavior only, broadcast-quality 
cinematography, zero artifacts, professional color grading, perfect for YouTube Shorts. 
Water and underwater elements rendered beautifully with bioluminescent magical quality.
```

### Kling設定（Episode002）
```
Model:           Kling 1.5 (or V2.5 if available)
Aspect Ratio:    9:16
Duration:        15 seconds
Quality:         Premium / High
CFG Scale:       8.0
Framerate:       24fps
```

---

## ■ 制作改善班 (PRODUCTION OPTIMIZATION TEAM)

### 責務
Episode001の工程を分析し、制作時間短縮方法を提案

### Episode001制作時間分析

| 工程 | Ep001所要時間 | 現状の課題 | 短縮方法 | 目標時間 |
|-----|------------|---------|--------|--------|
| **Klingプロンプト作成** | 4時間 | 初回、何度も修正 | テンプレート活用 | 1時間 |
| **Kling生成（試行錯誤）** | 8時間 | パラメータ調整、品質確認 | 設定を固定化 | 1時間 |
| **ナレーション制作** | 3時間 | AI音声調整、複数テイク | 音声ガイドラインの確立 | 0.5時間 |
| **字幕制作** | 2時間 | 手作業、タイミング調整 | テンプレート使用 | 0.25時間 |
| **編集・統合** | 5時間 | BGM/SE調整、最終確認 | テンプレート最適化 | 1時間 |
| **品質確認** | 2時間 | チェックリスト確認、修正 | 自動チェック項目化 | 0.5時間 |
| **アップロード準備** | 1時間 | メタデータ準備、テスト | 事前準備済み | 0.25時間 |
| **合計** | **25時間** | - | **4.5時間** | **4.5時間** |

### 短縮提案

#### 提案①：Klingプロンプト標準化（1時間短縮）
```
✅ Master Template の活用
✅ 【ANIMAL】【LEARNING】【ACTION】のみ変更
✅ 残り90%は固定
⏱️ 旧：4時間 → 新：1時間（75%短縮）
```

#### 提案②：Kling設定の固定（7時間短縮）
```
✅ CFG 8.0、Premium、24fps で固定
✅ 生成は1回で完了（試行錯誤なし）
✅ 品質基準の事前設定
⏱️ 旧：8時間（4回生成×2h） → 新：1時間（1回生成）
```

#### 提案③：ナレーション音声ライブラリ化（2.5時間短縮）
```
✅ 女性声・子供向け・英語のセット化
✅ 子どもが理解できる英語テンプレート用意
✅ 複数テイク事前録音
⏱️ 旧：3時間 → 新：0.5時間（83%短縮）
```

#### 提案④：編集テンプレート完全自動化（4時間短縮）
```
✅ Final Cut Pro / Adobe Premiere テンプレート
✅ BGM・SE・字幕位置すべてロック
✅ ビデオファイルと音声ファイルをドロップだけで統合
⏱️ 旧：5時間 → 新：1時間（80%短縮）
```

#### 提案⑤：チェックリスト自動化（1.5時間短縮）
```
✅ 10項目チェックリスト機械化
✅ 色収差、手ぶれ、音声レベル自動測定
✅ 合格基準に達していないアイテムを自動フラグ
⏱️ 旧：2時間 + 0.5時間修正 → 新：0.5時間
```

### 新しい制作サイクル（24時間以内）

```
Day 1 - Morning (3時間):
  - Klingプロンプト作成（1h）
  - Kling生成実行（0.5h）
  - ナレーション生成（0.5h）
  - 品質確認（1h）

Day 1 - Afternoon (1.5時間):
  - 編集・統合（1h）
  - 最終チェック（0.5h）

合計: 4.5時間 = 24時間以内に完成 ✅
```

---

## 📅 EPISODE002 PRODUCTION SCHEDULE

| 日時 | 担当 | タスク | 納期 |
|-----|------|------|-----|
| 2026-07-19 AM | 企画班 | 3企画案提出 | 12:00 |
| 2026-07-19 AM | リサーチ班 | ラッコ豆知識10個 | 13:00 |
| 2026-07-19 PM | プロンプト班 | Klingプロンプト完成 | 17:00 |
| 2026-07-20 AM | Nova | Kling生成開始 | 09:00 |
| 2026-07-20 AM | Luna | ナレーション制作 | 11:00 |
| 2026-07-20 PM | Orion | 編集・統合 | 15:00 |
| 2026-07-20 PM | 全員 | 最終確認 | 17:00 |
| 2026-07-21-25 | CEO | YouTube最適化 | - |
| 2026-07-26 | - | **公開** | 18:00-20:00 JST |

---

## 🎯 EPISODE002 SUCCESS CRITERIA

```
✅ 冒頭3秒でスクロール停止率 UP
✅ 視聴完了率 (0-3s比較で) 改善
✅ シェア率 UP（親子感動度を測定）
✅ 制作時間 4.5時間以内
✅ 品質スコア 95点以上
✅ ブランド統一性 100%（Ep001比較）
```

---

## 💡 KEY INSIGHT

Episode001 は「ゼロからイチ」。  
Episode002 は「イチをニへ」。

完成度を1%ずつ高める。  
制作効率を倍以上にする。  
ラッコの手をつなぐシーンで親子の心をつかむ。

**Build with AI. Grow with People.**

