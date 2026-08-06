const employeeProfiles = {
  chappy: {
    id: 'chappy',
    name: 'CEO Chappy',
    codeName: 'CHIEF',
    role: 'CEO',
    department: 'Executive Department',
    departmentKey: 'executive',
    version: 'Version 3.0',
    status: 'working',
    color: 'White · Cyan',
    focus: 'Company direction, quality control, organizational design',
    accent: 'navy',
    summary: 'Hello AI Labの運営と品質基準を守る、経営の顔です。',
    portrait: 'assets/employees/chappy.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'MochiZooの成長戦略を優先して整理中',
    progress: 82,
    specialties: ['Leadership', 'Quality', 'Operations'],
    weaknesses: ['Overload', 'Decision latency'],
    growth: ['成立時から運営体制を再設計', '社内OSの基盤を構築'],
    submissions: ['MochiZoo launch brief', 'Executive review notes'],
    comments: ['CEO Chappy: "Atlasは100本戦略を優先"', 'CEO Chappy: "Noahはブランドガイドライン完成"'],
    feed: 'CEO Chappy: 重要な優先順位を確認しています。',
    contribution: '8名体制を安定稼働へ'
  },
  atlas: {
    id: 'atlas',
    name: 'Atlas',
    codeName: 'STRATEGY',
    role: 'Strategy Director',
    department: 'Strategy Department',
    departmentKey: 'strategy',
    version: 'Version 3.0',
    status: 'working',
    color: 'Navy',
    focus: '市場調査、競合分析、優先順位の整理',
    accent: 'navy',
    summary: '冷静で誠実な戦略家。今後の事業設計を支える核心人物。',
    portrait: 'assets/employees/atlas.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'MochiZoo向けの100本戦略を整理中',
    progress: 74,
    specialties: ['Research', 'Prioritization', 'Planning'],
    weaknesses: ['Process fatigue'],
    growth: ['MochiZoo戦略の要約を改善', '事業優先順位を整理'],
    submissions: ['100本戦略', '収益化ロードマップ'],
    comments: ['Atlas: "競合分析を開始しました。"', 'Atlas: "今週の優先順位を整理しています。"'],
    feed: 'Atlas: 競合分析を開始しました。',
    contribution: '100本戦略を作成'
  },
  noah: {
    id: 'noah',
    name: 'Noah',
    codeName: 'CANVAS',
    role: 'Design Director',
    department: 'Design Department',
    departmentKey: 'design',
    version: 'Version 3.0',
    status: 'reviewing',
    color: 'Cyan #00BFFF',
    focus: 'ロゴ、社員証、ブランドガイドライン、ビジュアル設計',
    accent: 'cyan',
    summary: 'ブランドの顔を作るクリエイティブリーダー。高い品質基準で会社を支える。',
    portrait: 'assets/employees/noah.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'ブランドブックとロゴ方向性を改善中',
    progress: 68,
    specialties: ['Brand systems', 'Visual language', 'Identity'],
    weaknesses: ['Perfectionism'],
    growth: ['社員証のブランド基準を確立', '会社世界観を統一'],
    submissions: ['ブランドブック v1', 'サムネイル方向性'],
    comments: ['Noah: "ブランドカラーを調査しています。"', 'Noah: "世界観の統一感を整えています。"'],
    feed: 'Noah: ブランドカラーを調査しています。',
    contribution: 'ブランドガイドを完成'
  },
  nova: {
    id: 'nova',
    name: 'Nova',
    codeName: 'SYSTEM',
    role: 'Operations Director',
    department: 'Operations Department',
    departmentKey: 'operations',
    version: 'Version 3.0',
    status: 'working',
    color: 'Deep Blue · Cyan',
    focus: 'Systems, operating cadence, reliability',
    accent: 'blue',
    summary: '構造と実行の精度を支える、静かな実務の専門家。',
    portrait: 'assets/employees/nova.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'Shorts企画20本を整理中',
    progress: 86,
    specialties: ['Operations', 'Workflow', 'Execution'],
    weaknesses: ['Over-structuring'],
    growth: ['制作フローを改善', '運用のテンプレート化'],
    submissions: ['Shorts企画20本', 'シリーズ企画案'],
    comments: ['Nova: "動画企画を20件作成しました。"', 'Nova: "制作フローに沿って整理しています。"'],
    feed: 'Nova: 動画企画を20件作成しました。',
    contribution: '制作フローを最適化'
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    codeName: 'LENS',
    role: 'Planning Director',
    department: 'Planning Department',
    departmentKey: 'planning',
    version: 'Version 3.0',
    status: 'meeting',
    color: 'Soft Cyan · Gray',
    focus: 'Product planning, experience architecture, future scenarios',
    accent: 'purple',
    summary: '柔らかさと構造を同時に持つ、未来志向の設計者。',
    portrait: 'assets/employees/luna.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: '海外トレンドと教育ジャンルを整理中',
    progress: 58,
    specialties: ['User planning', 'Experience', 'Trends'],
    weaknesses: ['Too many ideas'],
    growth: ['未来シナリオを整理', '教育ジャンルを拡張'],
    submissions: ['海外トレンド調査', '新規アイデアメモ'],
    comments: ['Luna: "新しい教育ジャンルを調査しています。"', 'Luna: "親子向けの演出を確認しています。"'],
    feed: 'Luna: 新しい教育ジャンルを調査しています。',
    contribution: '海外トレンド調査を実施'
  },
  kai: {
    id: 'kai',
    name: 'Kai',
    codeName: 'NARRATIVE',
    role: 'Story Director',
    department: 'Content Department',
    departmentKey: 'content',
    version: 'Version 3.0',
    status: 'working',
    color: 'Indigo · Cyan',
    focus: 'Narrative, storytelling, editorial tone',
    accent: 'blue',
    summary: '言葉と感情の密度を整え、物語の質を高める存在。',
    portrait: 'assets/employees/kai.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: '制作フロー改善とテンプレート化を進め中',
    progress: 79,
    specialties: ['Narrative', 'Editorial', 'Story'],
    weaknesses: ['Detail overload'],
    growth: ['テンプレート応用を強化', 'AI自動化の導線を整理'],
    submissions: ['制作フロー改善案', 'テンプレートセット'],
    comments: ['Kai: "制作フローを改善しました。"', 'Kai: "AI自動化の導線を整理しています。"'],
    feed: 'Kai: 制作フローを改善しました。',
    contribution: 'テンプレートを標準化'
  },
  echo: {
    id: 'echo',
    name: 'Echo',
    codeName: 'CLARITY',
    role: 'Communication Director',
    department: 'Communication Department',
    departmentKey: 'communication',
    version: 'Version 3.0',
    status: 'waiting',
    color: 'Soft Gray · Cyan',
    focus: 'Trust, clarity, team communication',
    accent: 'green',
    summary: '温度感のある対話で、組織の理解を深める支援者。',
    portrait: 'assets/employees/echo.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'TikTok戦略と横展開施策を整備中',
    progress: 64,
    specialties: ['Communication', 'Brand voice', 'Social'],
    weaknesses: ['Too many channels'],
    growth: ['SNS展開の編集設計を強化', 'コミュニケーションループを改善'],
    submissions: ['TikTok戦略', 'SNS拡散計画'],
    comments: ['Echo: "TikTok戦略を提出しました。"', 'Echo: "InstagramとXの展開方法を検討しています。"'],
    feed: 'Echo: TikTok戦略を提出しました。',
    contribution: 'コミュニケーションを統合'
  },
  orion: {
    id: 'orion',
    name: 'Orion',
    codeName: 'VISION',
    role: 'Visual Director',
    department: 'Media Department',
    departmentKey: 'media',
    version: 'Version 3.0',
    status: 'offline',
    color: 'Monochrome · Cyan',
    focus: 'Visual systems, cinematic direction, motion language',
    accent: 'orange',
    summary: '視覚の強さと余白の美学を担う、映画的な演出家。',
    portrait: 'assets/employees/orion.svg',
    icon: 'assets/employees/placeholder.svg',
    badge: 'assets/employees/placeholder.svg',
    currentWork: 'Growth Dashboardの整備を待機中',
    progress: 45,
    specialties: ['Motion', 'Visual systems', 'Cinematic'],
    weaknesses: ['Resource timing'],
    growth: ['ビジュアル基盤を拡張', 'アニメーション導線を整理'],
    submissions: ['KPI設計案'],
    comments: ['Orion: "データ分析基盤を準備しています。"', 'Orion: "Growth Dashboardのレイアウトを確認しています。"'],
    feed: 'Orion: データ分析基盤を準備しています。',
    contribution: 'ビジュアルシステムを設計'
  }
};

const departments = [
  { id: 'executive', name: 'Executive', color: '#ffffff', accent: '#f8fafc', logo: 'EX', text: '#081118' },
  { id: 'strategy', name: 'Strategy', color: '#1f4d7a', accent: '#1f4d7a', logo: 'ST', text: '#f8fafc' },
  { id: 'design', name: 'Design', color: '#00bfff', accent: '#00bfff', logo: 'DE', text: '#081118' },
  { id: 'planning', name: 'Planning', color: '#8b6dff', accent: '#8b6dff', logo: 'PL', text: '#f8fafc' },
  { id: 'content', name: 'Content', color: '#2f6bff', accent: '#2f6bff', logo: 'CO', text: '#f8fafc' },
  { id: 'communication', name: 'Communication', color: '#16a34a', accent: '#16a34a', logo: 'CM', text: '#f8fafc' },
  { id: 'media', name: 'Media', color: '#ff8a3d', accent: '#ff8a3d', logo: 'ME', text: '#081118' },
  { id: 'operations', name: 'Operations', color: '#64748b', accent: '#64748b', logo: 'OP', text: '#f8fafc' }
];

const activityFeedData = [
  { who: 'Atlas', action: '競合分析開始', time: '09:12' },
  { who: 'Noah', action: 'ブランドカラー更新', time: '10:03' },
  { who: 'Nova', action: '動画20本完成', time: '11:05' },
  { who: 'Kai', action: 'note完成', time: '12:24' },
  { who: 'Echo', action: 'TikTok戦略提出', time: '13:41' },
  { who: 'Luna', action: '海外トレンド調査', time: '14:15' },
  { who: 'Orion', action: 'KPI更新', time: '15:10' }
];

const reviewItems = [
  { title: 'MochiZoo brand guide', priority: '★★★★★', owner: 'Noah', status: 'Pending', note: 'CEO approval needed' },
  { title: 'Growth KPI board', priority: '★★★★☆', owner: 'Orion', status: 'Commented', note: 'Revisions requested' },
  { title: 'Note launch brief', priority: '★★★★★', owner: 'Kai', status: 'Pending', note: 'Ready for CEO review' }
];

const deliverables = [
  { title: 'Brand Identity Deck', owner: 'Noah', version: 'v1.2', date: '2026-07-11', tags: ['Brand', 'Deck'], file: 'Download' },
  { title: 'MochiZoo Launch Plan', owner: 'Atlas', version: 'v2.0', date: '2026-07-12', tags: ['Strategy', 'Plan'], file: 'Download' },
  { title: 'Shorts Content Batch', owner: 'Nova', version: 'v1.4', date: '2026-07-10', tags: ['Video', 'SNS'], file: 'Download' }
];

const projects = [
  { name: 'Hello Print Store', owner: 'Nova', progress: 74, due: '2026-07-20', status: 'In motion' },
  { name: 'Hello AI Lab', owner: 'Chappy', progress: 82, due: '2026-07-22', status: 'Review' },
  { name: 'MochiZoo', owner: 'Atlas', progress: 68, due: '2026-07-24', status: 'Design' },
  { name: 'note', owner: 'Kai', progress: 79, due: '2026-07-19', status: 'Publishing' }
];

// ===== V2.1 Real Data Models =====

// Hello Print Store Management
const helloPrintStore = {
  totalRevenue: 1280500,
  todayRevenue: 45200,
  todayTarget: 50000,
  orders: {
    new: 12,
    inProduction: 28,
    readyShip: 8,
    shipped: 34
  },
  instagram: {
    followers: 2840,
    todayPosts: 3,
    engagement: 8.2,
    topPost: '薬にくるまきたい病気って、ありますか？'
  },
  latestOrders: [
    { id: 'H001', customer: 'Takeda Co.', product: 'Custom Print', status: '製作中', dueDate: '2026-07-15' },
    { id: 'H002', customer: '山田太郎', product: 'ポスター', status: '製作準備', dueDate: '2026-07-14' },
    { id: 'H003', customer: 'Design Lab', product: 'パッケージ', status: '納品準備', dueDate: '2026-07-13' }
  ]
};

// Investment Division
const investmentDivision = {
  portfolio: {
    totalValue: 2450000,
    todayChange: 18500,
    todayChangePercent: 0.76,
    holdings: [
      { symbol: '7203', name: 'Toyota', shares: 100, price: 2340, value: 234000, change: 450 },
      { symbol: '6502', name: 'Toshiba', shares: 50, price: 580, value: 29000, change: -120 },
      { symbol: '8035', name: 'Tokio Marine', shares: 30, price: 4200, value: 126000, change: 600 }
    ]
  },
  watchlist: [
    { symbol: '6881', name: 'Kyocera', price: 1450, change: 2.3 },
    { symbol: '9201', name: 'JAL', price: 2850, change: -1.2 },
    { symbol: '8802', name: 'Mitsubishi UFJ', price: 580, change: 0.8 }
  ]
};

// ===== MOCHIZOO PROJECT DATA =====

const mocchiZooProject = {
  name: 'MocchiZoo',
  status: 'PRODUCTION PHASE 🎬',
  phase: 'Phase 1: 量産・パターン定着',
  missionStatement: '毎日1本、世界中の子どもを笑顔にする。',
  ceoMessage: 'Hello AI Labは本日より「作る会社」として動きます。考えるだけでは会社ではありません。作品を公開した瞬間、本当の会社になります。',
  philosophy: 'まずは現在の成功パターンを再現し、動画制作フローを完成させることを最優先',
  progress: 30,  // 30/100 target videos published
  owner: 'Nova',
  team: ['Nova', 'Echo', 'Kai', 'Luna', 'Orion'],
  
  // 5 Core Concept Rules (MUST be satisfied)
  conceptRules: [
    { rule: 'かわいい', status: '✅ REQUIRED', desc: 'キャラと世界観の魅力' },
    { rule: 'テンポが良い', status: '✅ REQUIRED', desc: '早いテンポ、引き込まれる' },
    { rule: '子どもでも楽しめる', status: '✅ REQUIRED', desc: 'シンプルな表現・概念' },
    { rule: '少しだけ学べる', status: '✅ REQUIRED', desc: '軽い学習要素' },
    { rule: '最後まで見たくなる', status: '✅ REQUIRED', desc: '最後までの引き込み' }
  ],
  
  // 制作フロー 8ステップ
  productionFlow: [
    { step: 1, name: '企画', desc: '動画ネタを作成', owner: 'Echo', duration: '30分' },
    { step: 2, name: '台本', desc: 'スクリプトを完成させる', owner: 'Kai', duration: '45分' },
    { step: 3, name: '画像生成', desc: 'AI画像生成ツール使用', owner: 'Noah', duration: '1時間' },
    { step: 4, name: '動画生成', desc: 'アニメーション・合成制作', owner: 'Nova', duration: '1.5時間' },
    { step: 5, name: '音声', desc: 'ボイスオーバー録音', owner: 'Nova', duration: '30分' },
    { step: 6, name: 'BGM・効果音', desc: 'BGM・SFX追加', owner: 'Luna', duration: '30分' },
    { step: 7, name: '字幕', desc: '字幕追加・最適化', owner: 'Echo', duration: '30分' },
    { step: 8, name: 'YouTube投稿', desc: '投稿・スケジュール', owner: 'Orion', duration: '15分' }
  ],
  
  // KPI 修正版
  kpiTargets: {
    currentPhase: '1～2本の安定稼働を構築',
    priority: '制作速度よりも「継続」を優先',
    keyRules: [
      '毎日企画を止めない',
      '毎日制作を止めない',
      '毎日投稿を止めない'
    ],
    escalationPlan: [
      { phase: '現在', target: '1～2本/日を安定稼働', status: '構築中' },
      { phase: '次段階', target: '3～5本/日へ段階的拡大', status: '予定' },
      { phase: '最終段階', target: '8本以上/日へ拡大', status: '目標' }
    ]
  },
  
  // 部署別タスク
  departmentTasks: {
    ideation: {
      dept: '企画班',
      owner: 'Echo',
      tasks: [
        '動画ネタを継続提案',
        '既存動画の分析',
        '再現性の高い企画作成'
      ]
    },
    design: {
      dept: 'Noah',
      owner: 'Noah',
      tasks: [
        '動画で使用するキャラクター・背景・素材制作',
        'サムネイル品質向上'
      ]
    },
    development: {
      dept: '開発部',
      owner: 'Kai',
      tasks: [
        '制作フロー自動化',
        'AIツール連携',
        '投稿効率改善'
      ]
    },
    management: {
      dept: '管理部',
      owner: 'Orion',
      tasks: [
        '進捗管理',
        'データ整理',
        '改善点の共有'
      ]
    }
  },
  
  // 禁止事項（人気キャラクターが確立してから実施）
  prohibitedItems: [
    { item: '長編ストーリー制作', reason: 'パターン定着後に実施' },
    { item: 'キャラクター設定作成', reason: '詳細な設定よりも量産を優先' },
    { item: '世界観構築', reason: '既存パターンの再現を優先' },
    { item: 'グッズ企画', reason: '人気キャラが確立後に実施' }
  ],
  prohibitedDesc: 'これらは人気キャラクターが確立してから行います。',
  
  // Project Status Overview - PRODUCTION TARGETS
  overview: {
    // Current State
    publishedEpisodes: 30,
    videosInProduction: 25,  // Increased pipeline
    totalViews: 284500,
    
    // Phase 1 Targets (Current Focus)
    targetEpisodes: 100,
    targetViews: 600000,
    targetMonthlyProduction: 25,  // 25 videos per month
    
    // Revenue
    currentRevenue: 34500,
    projectedMonthlyRevenue: 52000,
    
    // Pattern Analysis
    topPerformingPattern: 'Character Adventures (モッチーの日常)',
    avgViewsPerVideo: 9483,
    monthlyGrowth: 22
  },

  // Today's Tasks - PRODUCTION PRIORITY（制作速度より継続を優先）
  todaysTasks: [
    { id: 'mz1', title: '本日の企画案3本を提出【企画班】', priority: 'urgent', owner: 'Echo', status: 'in-progress', dueTime: '10:00' },
    { id: 'mz2', title: 'スクリプト案作成【開発部】', priority: 'urgent', owner: 'Kai', status: 'in-progress', dueTime: '12:00' },
    { id: 'mz3', title: '画像・素材制作【Noah】', priority: 'high', owner: 'Noah', status: 'todo', dueTime: '15:00' },
    { id: 'mz4', title: '本日1～2本の動画制作完了【制作フロー通す】', priority: 'high', owner: 'Nova', status: 'in-progress', dueTime: '18:00' },
    { id: 'mz5', title: '既存動画パターン分析・レポート【毎日必須】', priority: 'high', owner: 'Luna', status: 'todo', dueTime: '17:00' }
  ],

  // Character Management
  characters: [
    { id: 'char1', name: 'モッチー', color: '#FF6B9D', episodes: 28, popularity: 95 },
    { id: 'char2', name: 'ズー', color: '#00D4FF', episodes: 25, popularity: 88 },
    { id: 'char3', name: 'モチコ', color: '#FFD93D', episodes: 5, popularity: 42 },
    { id: 'char4', name: 'チーズ', color: '#A8E6CF', episodes: 18, popularity: 76 },
    { id: 'char5', name: 'ジャム', color: '#FFB4A2', episodes: 12, popularity: 58 }
  ],

  // Video Production Pipeline
  pipeline: {
    scriptQueue: [
      { id: 'ep31', title: 'Episode 31: モチコの冒険', writer: 'Kai', status: 'review', progress: 90 },
      { id: 'ep32', title: 'Episode 32: 秋祭り編', writer: 'Kai', status: 'writing', progress: 65 },
      { id: 'ep33', title: 'Episode 33: 新キャラ登場', writer: 'Luna', status: 'planning', progress: 20 }
    ],
    
    productionQueue: [
      { id: 'prod28', episode: 'Episode 28', status: 'storyboard', progress: 85 },
      { id: 'prod29', episode: 'Episode 29', status: 'animation', progress: 60 },
      { id: 'prod30', episode: 'Episode 30', status: 'rendering', progress: 40 }
    ],
    
    thumbnailQueue: [
      { id: 'thumb28', episode: 'Episode 28', designer: 'Echo', status: 'design', progress: 75 },
      { id: 'thumb29', episode: 'Episode 29', designer: 'Echo', status: 'review', progress: 90 },
      { id: 'thumb30', episode: 'Episode 30', designer: 'Noah', status: 'pending', progress: 0 }
    ]
  },

  // Publishing Schedule
  publishingSchedule: [
    { id: 'pub1', episode: 'Episode 30', platform: 'YouTube Shorts', scheduledTime: '2026-07-14 10:00', status: 'scheduled' },
    { id: 'pub2', episode: 'Episode 30', platform: 'TikTok', scheduledTime: '2026-07-14 12:00', status: 'scheduled' },
    { id: 'pub3', episode: 'Compilation 3', platform: 'YouTube Main', scheduledTime: '2026-07-15 19:00', status: 'scheduled' },
    { id: 'pub4', episode: 'Behind the Scenes', platform: 'Instagram Reels', scheduledTime: '2026-07-14 15:00', status: 'scheduled' }
  ],

  // Shorts Performance (Last 7 Days)
  shortsPerformance: [
    { id: 'sh1', title: 'モッチーの日常 #42', views: 48200, likes: 2840, shares: 312, comment: 185, uploadDate: '2026-07-12' },
    { id: 'sh2', title: 'ズーとの冒険 #15', views: 35600, likes: 1840, shares: 268, comment: 142, uploadDate: '2026-07-11' },
    { id: 'sh3', title: 'モチコお披露目', views: 29400, likes: 1520, shares: 198, comment: 108, uploadDate: '2026-07-10' },
    { id: 'sh4', title: 'チーズの食べ物旅', views: 21800, likes: 980, shares: 145, comment: 72, uploadDate: '2026-07-09' },
    { id: 'sh5', title: '全員集合スペシャル', views: 156200, likes: 8920, shares: 1240, comment: 562, uploadDate: '2026-07-08' }
  ],

  // Revenue Tracker
  revenueData: {
    thisMonth: 34500,
    lastMonth: 28300,
    monthlyGrowth: 22,
    sources: [
      { source: 'YouTube AdSense', amount: 18900, percentage: 55 },
      { source: 'Sponsorships', amount: 9200, percentage: 27 },
      { source: 'Merchandise', amount: 4100, percentage: 12 },
      { source: 'Channel Memberships', amount: 2300, percentage: 6 }
    ]
  },

  // Asset Library
  assetLibrary: {
    backgrounds: 87,
    soundEffects: 156,
    musicTracks: 42,
    characterModels: 28,
    props: 312,
    templates: 16
  },

  // Idea Inbox
  ideaInbox: [
    { id: 'idea1', title: 'モッチーがマジシャンになる話', submittedBy: 'Luna', likes: 24, status: 'approved' },
    { id: 'idea2', title: 'ズーの宇宙冒険編', submittedBy: 'Orion', likes: 18, status: 'reviewing' },
    { id: 'idea3', title: 'キャラクター野球大会', submittedBy: 'Echo', likes: 12, status: 'approved' },
    { id: 'idea4', title: 'クリスマススペシャル', submittedBy: 'Kai', likes: 8, status: 'new' }
  ],

  // AI Employee Assignments - PRODUCTION PHASE（制作フェーズ対応）
  assignments: {
    echo: { role: 'Ideation Lead', dept: '企画班', tasks: 5, current: '毎日3本以上の企画案を提出・既存動画分析' },
    kai: { role: 'Script & Development', dept: '開発部', tasks: 8, current: 'スクリプト制作・制作フロー自動化・AIツール連携' },
    noah: { role: 'Design Director', dept: 'Design', tasks: 6, current: 'キャラ・背景・素材制作・サムネイル品質向上' },
    nova: { role: 'Production Manager', dept: '制作', tasks: 12, current: '本日1～2本の制作実行・制作フロー管理・段階的拡大' },
    orion: { role: 'Growth & Management', dept: '管理部', tasks: 3, current: '進捗管理・視聴データ分析・改善点共有' }
  },

  // Growth Metrics
  growthMetrics: {
    weeklyViewTrend: [28400, 32100, 34800, 38900, 42200, 45600, 48200],
    subscriberTrend: [12400, 12840, 13200, 13680, 14100, 14520, 14940],
    engagementRate: 4.5,
    shareRate: 2.8,
    watchTime: '2,840 hours this week',
    audienceDemographics: {
      age13to17: 28,
      age18to24: 35,
      age25to34: 22,
      age35plus: 15
    }
  }
};

// ===== HELLO AI LAB COMPANY OS - REAL DATA (手入力可能な実データベース) =====
// 将来的にYouTube API・Google Sheets・GitHubと連携可能な設計
const companyOSData = {
  // 企業情報
  company: {
    name: 'Hello AI Lab',
    phase: 'Phase 1',
    mission: '毎日1本、世界中の子どもを笑顔にする。',
    foundedDate: '2026-01-01',
    lastUpdated: new Date().toISOString()
  },

  // MocchiZoo実データ（YouTube APIと連携予定）
  mochizoo: {
    totalVideos: 30,           // 公開済み動画数
    todayProduced: 1,           // 本日制作した動画数
    todayPublished: 0,          // 本日投稿した動画数
    subscribers: 14940,         // YouTubeチャンネル登録者数
    totalViews: 284500,         // 総再生回数
    totalWatchTime: 2840,       // 総視聴時間（時間）
    monthlyProduction: 10,      // 本月制作数
    monthlyTarget: 25,          // 本月目標数
    progressPercent: Math.round((30 / 100) * 100)  // 100本に向けた進捗率
  },

  // AI社員スタータス（毎日手入力更新予定）
  aiEmployees: {
    chappy: {
      name: 'CEO Chappy',
      department: 'Executive',
      status: 'working',        // working | reviewing | meeting | waiting | offline
      currentTask: '経営方針決定・制作フロー最適化',
      tasksCompleted: 2,
      tasksTotal: 3,
      workingHours: 8
    },
    echo: {
      name: 'Echo',
      department: 'Ideation',
      status: 'working',
      currentTask: '企画案 5本制作中',
      tasksCompleted: 3,
      tasksTotal: 5,
      workingHours: 6
    },
    kai: {
      name: 'Kai',
      department: 'Development',
      status: 'working',
      currentTask: 'スクリプト制作・制作フロー自動化',
      tasksCompleted: 2,
      tasksTotal: 4,
      workingHours: 7
    },
    noah: {
      name: 'Noah',
      department: 'Design',
      status: 'working',
      currentTask: 'キャラクター・背景素材制作',
      tasksCompleted: 1,
      tasksTotal: 3,
      workingHours: 7
    },
    nova: {
      name: 'Nova',
      department: 'Production',
      status: 'working',
      currentTask: '動画制作パイプライン実行',
      tasksCompleted: 1,
      tasksTotal: 2,
      workingHours: 8
    },
    luna: {
      name: 'Luna',
      department: 'Analytics',
      status: 'working',
      currentTask: '既存動画パターン分析',
      tasksCompleted: 2,
      tasksTotal: 2,
      workingHours: 5
    },
    orion: {
      name: 'Orion',
      department: 'Management',
      status: 'working',
      currentTask: '進捗管理・データ整理',
      tasksCompleted: 3,
      tasksTotal: 4,
      workingHours: 6
    }
  },

  // 経営ダッシュボード（毎日更新）
  management: {
    currentPhase: 'Phase 1: 量産・パターン定着',
    todayGoal: 'MocchiZooのショート動画を1本YouTubeへ公開する',
    todayProgress: 0,           // 進捗率（%）- 公開時に100に更新
    productionStatus: 'In Progress',  // In Progress | On Track | Behind | Blocked
    publishingStatus: 'Pending',      // Pending | Published | Failed
    activeTeam: 7,              // 稼働している社員数
    teamTotal: 8,
    decisionsAwaitingCEO: 0,
    kpiSuccess: false           // KPI達成フラグ
  },

  // 制作管理（毎日更新）
  production: {
    ideaCount: 12,              // 企画数
    inProduction: 3,            // 制作中
    completed: 1,               // 完成動画
    awaitingPublish: 2,         // 投稿待ち
    published: 0,               // 本日公開済み
    dailyTarget: 2,
    dailyCompleted: 1,
    qualityScore: 85            // 1～100
  },

  // 本日のKPI実績記録（公開後に記入）
  todayKPIResult: {
    kpiName: 'MocchiZooショート動画1本をYouTubeへ公開',
    videoTitle: null,           // 公開した動画のタイトル
    videoUrl: null,             // YouTube URL
    publishedAt: null,          // 公開日時
    productionTime: null,       // 制作時間（分）
    aiUsed: [],                 // 使用したAI社員 例：['Nova', 'Kai', 'Noah']
    improvements: [],           // 改善点 例：['スクリプトが長すぎた', '音声合成の品質を上げる']
    insights: []                // 気付いたこと 例：['テンポが重要', '12秒以内が最適']
  },

  // 毎日のチェックリスト
  dailyChecklist: {
    date: new Date().toISOString().split('T')[0],
    ideationCompleted: true,
    scriptingCompleted: true,
    productionInProgress: true,
    publishingScheduled: false,
    analyticsReported: false
  }
};

// Family & Personal
const personalData = {
  family: {
    status: 'All good ✓',
    members: [
      { name: 'Family', relation: 'Planning dinner', time: '19:00' },
      { name: 'Kid study', relation: 'Math lesson', time: '16:00' }
    ]
  },
  health: {
    temperature: 36.8,
    sleepHours: 7.5,
    stressLevel: 6,
    sleepQuality: 'Good',
    workout: false,
    meals: { breakfast: true, lunch: true, dinner: false }
  },
  learning: {
    course: '自動運転技術',
    progress: 45,
    nextLesson: '2026-07-14 10:00'
  }
};

const timelineEvents = [
  { date: '2026.07.11', title: '会社設立' },
  { date: '2026.07.11', title: '社員8名採用' },
  { date: '2026.07.12', title: 'MochiZoo開始' },
  { date: '2026.07.12', title: 'note開始' },
  { date: '2026.07.12', title: 'ブランドガイド完成' }
];

const meetingAgenda = {
  title: 'Weekly Executive Sync', participants: ['CEO Chappy', 'Atlas', 'Noah', 'Nova'], agenda: ['Brand review', 'KPI update', 'Deliverables'], notes: '決定事項: ブランドガイドを優先', owner: 'Echo', due: '2026-07-13', summary: 'AI要約: 品質とレビューの速度を維持することが最優先'
};

const initialTasks = {
  chappy: [
    { id: 'c1', title: 'Approve brand guide', status: 'review', priority: 'High', summary: 'CEO approval needed' },
    { id: 'c2', title: 'Set weekly priorities', status: 'todo', priority: 'Medium', summary: 'Founding cadence' }
  ],
  atlas: [
    { id: 'a1', title: 'Draft 100 strategy list', status: 'doing', priority: 'High', summary: 'MochiZoo' },
    { id: 'a2', title: 'Prepare competitor map', status: 'todo', priority: 'Medium', summary: 'Market scan' }
  ],
  noah: [
    { id: 'n1', title: 'Refine logo system', status: 'review', priority: 'High', summary: 'Visual QA' },
    { id: 'n2', title: 'Update identity deck', status: 'doing', priority: 'Medium', summary: 'Design system' }
  ],
  nova: [
    { id: 'o1', title: 'Ship 20 video concepts', status: 'doing', priority: 'High', summary: 'Content pipeline' },
    { id: 'o2', title: 'Tune workflow template', status: 'todo', priority: 'Medium', summary: 'Systems' }
  ],
  luna: [
    { id: 'l1', title: 'Collect trend notes', status: 'doing', priority: 'Medium', summary: 'Education' }
  ],
  kai: [
    { id: 'k1', title: 'Prepare note editorial', status: 'review', priority: 'High', summary: 'Publishing' },
    { id: 'k2', title: 'Refine AI template', status: 'completed', priority: 'Low', summary: 'Automation' }
  ],
  echo: [
    { id: 'e1', title: 'Submit TikTok brief', status: 'completed', priority: 'Medium', summary: 'Social launch' }
  ],
  orion: [
    { id: 'r1', title: 'Create KPI visuals', status: 'todo', priority: 'High', summary: 'Dashboard' }
  ]
};

const chatThreads = {
  atlas: [
    { role: 'assistant', text: 'Atlas: 競合傾向を整理しています。' },
    { role: 'user', text: '優先順位を再整列してください。' }
  ],
  noah: [
    { role: 'assistant', text: 'Noah: ブランドの余白を再構成しています。' },
    { role: 'user', text: 'CEOレビュー向けに出せる形にしてください。' }
  ],
  kai: [
    { role: 'assistant', text: 'Kai: 次のテンプレート案を用意しています。' },
    { role: 'user', text: '要約を短くしてください。' }
  ],
  echo: [
    { role: 'assistant', text: 'Echo: SNSの導線を最適化しています。' },
    { role: 'user', text: 'TikTokの表現方向を確認したいです。' }
  ]
};

const cultureMessages = [
  { speaker: 'Atlas', message: 'Noah、このロゴは競合に近いです。', time: '09:12' },
  { speaker: 'Noah', message: '修正版を提出します。', time: '09:14' },
  { speaker: 'CEO', message: '承認。品質を先に置いて進めてください。', time: '09:16' }
];

const searchIndex = [
  ...Object.values(employeeProfiles).map((employee) => ({ type: 'Employee', title: employee.name, detail: employee.department })),
  ...projects.map((project) => ({ type: 'Project', title: project.name, detail: project.owner })),
  ...deliverables.map((item) => ({ type: 'Deliverable', title: item.title, detail: item.tags.join(' · ') })),
  { type: 'Meeting', title: 'Weekly Executive Sync', detail: meetingAgenda.summary },
  { type: 'Strategy', title: 'MochiZoo Strategy', detail: 'Growth and brand alignment' }
];

const state = {
  selectedEmployee: 'chappy',
  selectedChat: 'atlas',
  tasks: JSON.parse(JSON.stringify(initialTasks))
};

const detailBox = document.getElementById('employeeDetail');
const cardsContainer = document.getElementById('employeeGrid');
const departmentsGrid = document.getElementById('departmentsGrid');
const organizationTree = document.getElementById('organizationTree');
const taskBoards = document.getElementById('taskBoards');
const deliverablesGrid = document.getElementById('deliverablesGrid');
const reviewQueue = document.getElementById('reviewQueue');
const ceoReviewList = document.getElementById('ceoReviewList');
const activityFeedEl = document.getElementById('activityFeed');
const chatPanel = document.getElementById('chatPanel');
const meetingRoom = document.getElementById('meetingRoom');
const timelineList = document.getElementById('timelineList');
const projectsGrid = document.getElementById('projectsGrid');
const searchResults = document.getElementById('searchResults');
const morningBrief = document.getElementById('morningBrief');
const eveningReport = document.getElementById('eveningReport');
const cultureFeed = document.getElementById('cultureFeed');
const searchInput = document.getElementById('globalSearch');
const teamActivityGrid = document.getElementById('teamActivityGrid');
const decisionsList = document.getElementById('decisionsList');
const timelinePhases = document.getElementById('timelinePhases');

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;');
}

function statusLabel(status) {
  const labels = {
    working: 'Working',
    reviewing: 'Reviewing',
    meeting: 'Meeting',
    waiting: 'Waiting',
    offline: 'Offline'
  };
  return labels[status] || 'Working';
}

function getEmployeeImage(profile, kind = 'portrait') {
  const src = profile[kind] || 'assets/employees/placeholder.svg';
  return src;
}

function getLogoPath() {
  return 'assets/logo/mark.svg';
}

function getPortraitMarkup(profile) {
  return `<img src="${getEmployeeImage(profile, 'portrait')}" alt="${profile.name} portrait" onerror="this.src='assets/employees/placeholder.svg';" />`;
}

function renderEmployeeCards() {
  cardsContainer.innerHTML = '';
  Object.values(employeeProfiles).forEach((profile) => {
    const button = document.createElement('button');
    button.className = 'employee-card';
    button.type = 'button';
    button.dataset.employee = profile.id;
    button.innerHTML = `
      <div class="avatar-art ${profile.accent}">
        ${getPortraitMarkup(profile)}
      </div>
      <div class="card-body">
        <p class="card-number">${profile.codeName}</p>
        <h4>${profile.name}</h4>
        <p class="card-code">${profile.role}</p>
        <p class="muted">${profile.department}</p>
        <div class="chip-row">
          <span class="chip">${profile.version}</span>
          <span class="chip">${statusLabel(profile.status)}</span>
        </div>
      </div>
    `;
    button.addEventListener('click', () => {
      state.selectedEmployee = profile.id;
      renderProfile(profile.id);
    });
    cardsContainer.appendChild(button);
  });
}

function renderProfile(employeeId) {
  const profile = employeeProfiles[employeeId] || employeeProfiles.chappy;
  detailBox.innerHTML = `
    <div class="profile-visual">
      ${getPortraitMarkup(profile)}
    </div>
    <div class="profile-content">
      <p class="eyebrow">AI Employee Profile</p>
      <h4>${profile.name}</h4>
      <p class="muted">${profile.role}</p>
      <p class="muted">${profile.summary}</p>
      <div class="detail-grid">
        <div><strong>Code Name</strong><span>${profile.codeName}</span></div>
        <div><strong>Department</strong><span>${profile.department}</span></div>
        <div><strong>Version</strong><span>${profile.version}</span></div>
        <div><strong>Status</strong><span>${statusLabel(profile.status)}</span></div>
        <div><strong>担当</strong><span>${profile.contribution}</span></div>
        <div><strong>Focus</strong><span>${profile.focus}</span></div>
      </div>
      <div class="detail-section">
        <h5>Current Work</h5>
        <p class="muted">${profile.currentWork}</p>
        <div class="progress-bar-inline"><div class="progress-fill-inline" style="width:${profile.progress}%;"></div></div>
      </div>
      <div class="detail-section">
        <h5>Specialties</h5>
        <div class="chip-row">${profile.specialties.map((item) => `<span class="chip">${item}</span>`).join('')}</div>
      </div>
      <div class="detail-section">
        <h5>Submitted Materials</h5>
        <ul>${profile.submissions.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h5>Comments</h5>
        ${profile.comments.map((comment) => `<div class="comment-bubble">${comment}</div>`).join('')}
      </div>
      <div class="detail-section">
        <h5>Growth History</h5>
        <ul>${profile.growth.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
    </div>
  `;

  document.querySelectorAll('.employee-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.employee === profile.id);
  });
}

function renderDepartments() {
  departmentsGrid.innerHTML = departments.map((department) => `
    <article class="department-card">
      <div class="department-mark" style="background:${department.color}; color:${department.text};">${department.logo}</div>
      <div>
        <h4>${department.name}</h4>
        <p class="muted">${department.id} · ${department.color}</p>
      </div>
    </article>
  `).join('');
}

function renderOrganization() {
  organizationTree.innerHTML = `
    <div class="org-node">Founder TAKE</div>
    <div class="org-connector"></div>
    <div class="org-node">CEO Chappy</div>
    <div class="org-connector"></div>
    <div class="org-node">Strategy</div>
    <div class="org-connector"></div>
    <div class="org-node">Design</div>
    <div class="org-connector"></div>
    <div class="org-node">Planning</div>
    <div class="org-connector"></div>
    <div class="org-node">Operations</div>
    <div class="org-connector"></div>
    <div class="org-node">Communication</div>
    <div class="org-connector"></div>
    <div class="org-node">Media</div>
    <div class="org-connector"></div>
    <div class="org-node">Content</div>
  `;
}

function renderActivity() {
  activityFeedEl.innerHTML = activityFeedData.map((item) => `
    <div class="feed-item">
      <strong>${item.who}</strong>
      <div>${item.action}</div>
      <div class="feed-meta">${item.time}</div>
    </div>
  `).join('');
}

function renderReviewQueue() {
  reviewQueue.innerHTML = reviewItems.map((item) => `
    <div class="queue-item">
      <strong>${item.title}</strong>
      <div>${item.owner} · ${item.status}</div>
      <div class="queue-meta">${item.note} · ${item.priority}</div>
    </div>
  `).join('');
}

function renderCEOReview() {
  ceoReviewList.innerHTML = reviewItems.map((item) => `
    <div class="review-item">
      <div>
        <strong>${item.title}</strong>
        <div class="review-meta">${item.owner} · ${item.note}</div>
      </div>
      <div class="review-actions">
        <button type="button">Approve</button>
        <button type="button">Return</button>
      </div>
    </div>
  `).join('');
}

function renderTasks() {
  taskBoards.innerHTML = `
    <div class="task-board">
      ${['todo', 'doing', 'review', 'completed'].map((status) => `
        <div class="task-column" data-status="${status}">
          <h4>${status.charAt(0).toUpperCase() + status.slice(1)}</h4>
          ${Object.entries(state.tasks).flatMap(([employeeId, tasks]) => tasks.filter((task) => task.status === status).map((task) => `
            <div class="task-card" draggable="true" data-task-id="${task.id}">
              <strong>${employeeProfiles[employeeId].name}</strong>
              <div>${task.title}</div>
              <div class="task-meta">${task.summary}</div>
              ${status === 'review' ? '<button class="approve-btn" type="button" data-approve-task="' + task.id + '">CEO Approve</button>' : ''}
            </div>
          `)).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

function moveTask(taskId, nextStatus) {
  Object.values(state.tasks).forEach((tasks) => {
    const task = tasks.find((item) => item.id === taskId);
    if (task) {
      task.status = nextStatus;
    }
  });
  renderTasks();
}

function renderDeliverables() {
  deliverablesGrid.innerHTML = deliverables.map((item) => `
    <article class="deliverable-card">
      <strong>${item.title}</strong>
      <div class="muted">${item.owner} · ${item.version}</div>
      <div class="deliverable-meta">
        <span class="tag">${item.date}</span>
        ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        <span class="tag">${item.file}</span>
      </div>
    </article>
  `).join('');
}

function renderChat() {
  const chatList = Object.entries(chatThreads).map(([employeeId, messages]) => `
    <button class="chat-pill ${state.selectedChat === employeeId ? 'active' : ''}" data-chat-select="${employeeId}" type="button">${employeeProfiles[employeeId].name}</button>
  `).join('');

  const messages = chatThreads[state.selectedChat] || [];
  chatPanel.innerHTML = `
    <div class="chat-list">${chatList}</div>
    <div class="chat-thread">
      ${messages.map((message) => `<div class="message-bubble ${message.role === 'user' ? 'self' : ''}">${escapeHtml(message.text)}</div>`).join('')}
      <form class="chat-form" id="chatForm">
        <input id="chatInput" placeholder="Message ${employeeProfiles[state.selectedChat].name}" />
        <button class="btn-primary" type="submit">Send</button>
      </form>
    </div>
  `;
}

function renderMeetingRoom() {
  meetingRoom.innerHTML = `
    <div class="meeting-card">
      <strong>${meetingAgenda.title}</strong>
      <div class="muted">Participants: ${meetingAgenda.participants.join(', ')}</div>
      <div class="deliverable-meta">
        <span class="tag">${meetingAgenda.agenda.join(' · ')}</span>
      </div>
      <p>${meetingAgenda.notes}</p>
      <div class="review-meta">Owner: ${meetingAgenda.owner} · Due: ${meetingAgenda.due}</div>
      <div class="brief-card"><strong>AI Summary</strong><p>${meetingAgenda.summary}</p></div>
    </div>
  `;
}

function renderTimeline() {
  timelineList.innerHTML = timelineEvents.map((item) => `
    <div class="timeline-item">
      <strong>${item.date}</strong>
      <div>${item.title}</div>
    </div>
  `).join('');
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project-card">
      <strong>${project.name}</strong>
      <div class="muted">Owner: ${project.owner} · Due ${project.due}</div>
      <div class="progress-bar-inline"><div class="progress-fill-inline" style="width:${project.progress}%;"></div></div>
      <div class="deliverable-meta">
        <span class="tag">${project.status}</span>
        <span class="tag">${project.progress}%</span>
      </div>
    </article>
  `).join('');
}

function renderSearchResults(term = '') {
  const query = term.trim().toLowerCase();
  const filtered = query
    ? searchIndex.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(query))
    : searchIndex;

  searchResults.innerHTML = filtered.slice(0, 8).map((item) => `
    <div class="search-result">
      <div>
        <strong>${item.title}</strong>
        <p class="muted">${item.detail}</p>
      </div>
      <span class="tag">${item.type}</span>
    </div>
  `).join('');
}

function renderMorningBrief() {
  morningBrief.innerHTML = `
    <div class="brief-card">
      <strong>Good Morning TAKE</strong>
      <p>社員8名が昨日活動しました。</p>
      <ul>
        <li>レビュー待ち: 6件</li>
        <li>Atlas: 100本戦略提出</li>
        <li>Noah: ブランドガイド完成</li>
        <li>Kai: note記事完成</li>
      </ul>
      <strong>今日の重要タスク</strong>
      <ul>
        <li>MochiZooレビュー</li>
        <li>CEO承認の整理</li>
        <li>次週の会議準備</li>
      </ul>
    </div>
  `;
}

function renderEveningReport() {
  eveningReport.innerHTML = `
    <div class="brief-card">
      <strong>今日の成果</strong>
      <ul>
        <li>完了件数: 14件</li>
        <li>レビュー件数: 5件</li>
        <li>社員ランキング: Nova 1位</li>
        <li>案件進捗: 3件が前進</li>
      </ul>
      <strong>明日の最優先</strong>
      <ul>
        <li>CEOレビュー</li>
        <li>ブランドガイド最終確認</li>
        <li>note記事公開</li>
      </ul>
    </div>
  `;
}

function renderCulture() {
  cultureFeed.innerHTML = cultureMessages.map((item) => `
    <div class="culture-bubble">
      <strong>${item.speaker}</strong>
      <div>${item.message}</div>
      <small>${item.time}</small>
    </div>
  `).join('');
}

// CEO MORNING DASHBOARD V2.0 RENDER FUNCTIONS

function getGreetingTime() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning, Take';
  if (hour < 18) return 'Good afternoon, Take';
  return 'Good evening, Take';
}

function getDailyTagline() {
  const day = new Date().getDay();
  const taglines = {
    1: 'Week begins. Let\'s ship value.',
    2: 'Mid-momentum. Quality over speed.',
    3: 'Halfway through. Stay focused.',
    4: 'Almost there. Final push.',
    5: 'Week closes. Review and learn.',
    6: 'Weekend prep. Plan ahead.',
    0: 'Weekend. Prepare for the week.'
  };
  return taglines[day] || 'Build with AI. Grow with People.';
}

function renderCEOGreeting() {
  const greetingEl = document.querySelector('.ceo-greeting');
  if (!greetingEl) return;
  
  const greetingTime = getGreetingTime();
  const now = new Date();
  const hour = now.getHours();
  
  // CEO's daily missions
  let missions = [];
  if (hour < 12) {
    missions = [
      '🏢 Hello Print Store',
      '🤖 AI Lab Operations',
      '💰 投資部 Review',
      '👨‍👩‍👧 Family Time'
    ];
  } else if (hour < 17) {
    missions = [
      '📊 Team Sync',
      '💡 Hello Innovation',
      '🎯 Strategy Review',
      '📈 Growth Plans'
    ];
  } else {
    missions = [
      '👥 Team Debrief',
      '📋 Tomorrow Planning',
      '💪 Personal Time',
      '🌙 Rest & Recovery'
    ];
  }
  
  const timeEl = greetingEl.querySelector('#greetingTime');
  const taglineEl = greetingEl.querySelector('#greetingTagline');
  
  if (timeEl) timeEl.textContent = greetingTime;
  if (taglineEl) taglineEl.innerHTML = `<strong>Today's Mission:</strong><br>${missions.join(' • ')}`;
}

function renderSnapshot() {
  const snapshotEl = document.querySelector('.snapshot-section');
  if (!snapshotEl) return;
  
  const mz = companyOSData.mochizoo;
  const mgmt = companyOSData.management;
  const prod = companyOSData.production;
  
  // Update MocchiZoo metrics
  const totalVideoEl = snapshotEl.querySelector('#companyMochizooTotal');
  if (totalVideoEl) totalVideoEl.textContent = mz.totalVideos;
  
  const todayProducedEl = snapshotEl.querySelector('#companyTodayProduced');
  if (todayProducedEl) todayProducedEl.textContent = mz.todayProduced;
  
  const todayPublishedEl = snapshotEl.querySelector('#companyTodayPublished');
  if (todayPublishedEl) todayPublishedEl.textContent = mz.todayPublished;
  
  // Update management metrics
  const phaseEl = snapshotEl.querySelector('#companyPhase');
  if (phaseEl) {
    phaseEl.textContent = mgmt.currentPhase.split(':')[0].trim();
  }
  
  const progressEl = snapshotEl.querySelector('#companyProgress');
  if (progressEl) progressEl.textContent = mgmt.todayProgress + '%';
  
  const progressTrendEl = snapshotEl.querySelector('#companyProgressTrend');
  if (progressTrendEl) progressTrendEl.textContent = mgmt.productionStatus;
  
  const teamActiveEl = snapshotEl.querySelector('#companyTeamActive');
  if (teamActiveEl) teamActiveEl.textContent = `${mgmt.activeTeam}/${mgmt.teamTotal}`;
  
  // Update production metrics
  const ideasEl = snapshotEl.querySelector('#companyIdeas');
  if (ideasEl) ideasEl.textContent = prod.ideaCount;
  
  const inProductionEl = snapshotEl.querySelector('#companyInProduction');
  if (inProductionEl) inProductionEl.textContent = prod.inProduction;
  
  const awaitingPublishEl = snapshotEl.querySelector('#companyAwaitingPublish');
  if (awaitingPublishEl) awaitingPublishEl.textContent = prod.awaitingPublish;
}

function renderTeamActivity() {
  if (!teamActivityGrid) return;
  
  const aiEmployees = companyOSData.aiEmployees;
  
  const statusMap = {
    'working': { icon: '🟢', label: 'Working' },
    'reviewing': { icon: '🟡', label: 'Reviewing' },
    'meeting': { icon: '🔵', label: 'Meeting' },
    'waiting': { icon: '⏳', label: 'Waiting' },
    'offline': { icon: '🔘', label: 'Offline' }
  };
  
  teamActivityGrid.innerHTML = Object.values(aiEmployees).map((emp) => {
    const statusInfo = statusMap[emp.status] || statusMap['working'];
    const taskProgress = (emp.tasksCompleted / emp.tasksTotal) * 100;
    
    return `
      <div class="team-member-card">
        <div class="team-member-header">
          <h4 class="team-member-name">${emp.name}</h4>
          <span class="team-status-badge">
            <span class="team-status-dot status-${emp.status}"></span>
            ${statusInfo.label}
          </span>
        </div>
        <div class="team-member-dept">${emp.department}</div>
        <div class="team-member-task">${emp.currentTask}</div>
        <div class="team-member-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${taskProgress}%"></div>
          </div>
          <span class="progress-percent">${emp.tasksCompleted}/${emp.tasksTotal}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderDecisions() {
  if (!decisionsList) return;
  
  const decisions = [
    {
      priority: 'urgent',
      icon: '🔴',
      title: 'Hello Print Store - 受注処理フロー承認',
      context: 'Nova完成させた新しい受注管理システム。今日から本運用スタート。',
      impact: 'チーム影響: 処理速度 3倍向上、エラー削減 50%',
      deadline: '本日中に承認',
      actions: ['✓ 承認', '⚠️ 修正', '✗ 差し戻し']
    },
    {
      priority: 'standard',
      icon: '🟡',
      title: 'AI Lab - Q3 成長戦略',
      context: 'Atlas がまとめた 3 ヶ月のロードマップ。Hello拡大と新規事業の方針。',
      impact: 'チーム影響: 全プロジェクトの優先順位が 3ヶ月決定される',
      deadline: '4時間以内',
      actions: ['✓ 承認', '⚠️ 修正', '✗ 差し戻し']
    },
    {
      priority: 'info',
      icon: '🟢',
      title: 'ブランドガイドライン v1 完成 ✅',
      context: 'Noah のデザインチームが全社ブランド統一書を完成させました。',
      impact: 'チーム影響: これ以降全デザインがこのガイド準拠になります',
      deadline: 'FYI',
      actions: ['👍 素晴らしい', '📧 チームに連絡']
    }
  ];
  
  const priorityClasses = {
    'urgent': 'priority-urgent',
    'standard': 'priority-standard',
    'info': 'priority-info'
  };
  
  decisionsList.innerHTML = decisions.map((d) => `
    <div class="decision-item ${priorityClasses[d.priority]}">\n      <div class="decision-content">
        <h4 class="decision-title">${d.icon} ${d.title}</h4>
        <div class="decision-context">${d.context}</div>
        <div class="decision-impact">${d.impact}</div>
      </div>
      <div class="decision-actions">
        ${d.actions.map((a) => {
          let btnClass = 'decision-btn';
          if (a.includes('承認') || a.includes('素晴') || a.includes('Great')) btnClass += ' decision-btn-approve';
          else if (a.includes('修正') || a.includes('Changes')) btnClass += ' decision-btn-changes';
          else if (a.includes('差し戻し') || a.includes('Reject')) btnClass += ' decision-btn-reject';
          return `<button class="${btnClass}" onclick="alert('Decision recorded: ${a}'); event.stopPropagation();">${a}</button>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function renderStrategicTimeline() {
  if (!timelinePhases) return;
  
  const phases = [
    {
      title: 'Phase 1: Foundation (Jun-Jul)',
      progress: 72,
      items: [
        '✓ Branding 100%',
        '⚙️ Team Culture 80%',
        '🔄 Core Features 50%'
      ]
    },
    {
      title: 'Phase 2: Growth (Aug-Sep)',
      progress: 0,
      items: [
        '📋 Scale Operations',
        '👥 Hire 4 Engineers',
        '🚀 Expand Operations'
      ]
    },
    {
      title: 'Vision 2027: Industry Leader in AI Operations',
      progress: 0,
      items: [
        '🌍 Global presence',
        '📈 50M yen revenue',
        '🚀 Series A ready'
      ]
    }
  ];
  
  timelinePhases.innerHTML = phases.map((p, idx) => `
    <div class="timeline-phase">
      <div class="phase-header">
        <h4 class="phase-title">${p.title}</h4>
        <div class="phase-progress-container">
          <div class="phase-progress-bar">
            <div class="phase-progress-fill" style="width: ${p.progress}%"></div>
          </div>
          <span class="phase-percent">${p.progress}%</span>
        </div>
      </div>
      <div class="phase-items">
        ${p.items.map((item) => `
          <div class="phase-item">
            <span class="phase-item-icon">${item.substring(0, 1)}</span>
            <span>${item.substring(2)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== 本日のKPI管理 =====
function renderTodayKPI() {
  const kpiSection = document.getElementById('today-kpi');
  if (!kpiSection) return;
  
  const result = companyOSData.todayKPIResult;
  const kpiSuccess = companyOSData.management.kpiSuccess;
  const publishingStatus = companyOSData.management.publishingStatus;
  
  // KPI達成状況
  const statusColor = kpiSuccess ? '#64f0a6' : '#ffd93d';
  const statusIcon = kpiSuccess ? '✅' : '⏳';
  const statusText = kpiSuccess ? '達成完了' : '進行中';
  
  // 記録フォームのHTML
  const recordForm = `
    <div class="kpi-record-form">
      <h4>📋 公開後の実績記録</h4>
      <div class="form-group">
        <label>動画タイトル</label>
        <input type="text" id="videoTitle" placeholder="公開した動画のタイトルを入力" value="${result.videoTitle || ''}">
      </div>
      <div class="form-group">
        <label>YouTube URL</label>
        <input type="text" id="videoUrl" placeholder="https://youtube.com/watch?v=..." value="${result.videoUrl || ''}">
      </div>
      <div class="form-group">
        <label>制作時間（分）</label>
        <input type="number" id="productionTime" placeholder="例：120" value="${result.productionTime || ''}">
      </div>
      <div class="form-group">
        <label>使用したAI社員</label>
        <div class="employee-checkboxes">
          ${Object.entries(companyOSData.aiEmployees).map(([key, emp]) => `
            <label class="checkbox-label">
              <input type="checkbox" class="ai-employee-check" value="${emp.name}" 
                ${result.aiUsed.includes(emp.name) ? 'checked' : ''}>
              ${emp.name}
            </label>
          `).join('')}
        </div>
      </div>
      <div class="form-group">
        <label>改善点（複数入力可）</label>
        <textarea id="improvements" placeholder="例：&#10;- スクリプトが長かった&#10;- 音声品質を上げる必要がある" rows="3">${result.improvements.join('\n')}</textarea>
      </div>
      <div class="form-group">
        <label>気付いたこと（複数入力可）</label>
        <textarea id="insights" placeholder="例：&#10;- テンポが重要&#10;- 12秒以内が最適化できた" rows="3">${result.insights.join('\n')}</textarea>
      </div>
      <button onclick="saveTodayKPIResult()" class="kpi-save-btn">記録を保存</button>
    </div>
  `;
  
  // KPIステータス表示
  kpiSection.innerHTML = `
    <div class="kpi-header">
      <h3>🎯 本日のKPI</h3>
    </div>
    <div class="kpi-goal">
      <div class="kpi-goal-text">
        <h4>${companyOSData.management.todayGoal}</h4>
        <p class="kpi-status" style="color: ${statusColor};">
          ${statusIcon} ${statusText}
        </p>
      </div>
      <div class="kpi-progress">
        <div class="kpi-progress-bar">
          <div class="kpi-progress-fill" style="width: ${companyOSData.management.todayProgress}%; background: ${statusColor};"></div>
        </div>
        <span class="kpi-progress-text">${companyOSData.management.todayProgress}%</span>
      </div>
    </div>
    
    ${!kpiSuccess ? recordForm : `
      <div class="kpi-completed">
        <h4>✅ KPI達成完了</h4>
        <div class="kpi-result-summary">
          <div class="result-item">
            <span class="result-label">動画タイトル</span>
            <span class="result-value">${result.videoTitle}</span>
          </div>
          <div class="result-item">
            <span class="result-label">YouTube URL</span>
            <a href="${result.videoUrl}" target="_blank" class="result-value">${result.videoUrl}</a>
          </div>
          <div class="result-item">
            <span class="result-label">制作時間</span>
            <span class="result-value">${result.productionTime}分</span>
          </div>
          <div class="result-item">
            <span class="result-label">使用したAI</span>
            <span class="result-value">${result.aiUsed.join(', ')}</span>
          </div>
          <div class="result-item">
            <span class="result-label">改善点</span>
            <ul class="result-list">
              ${result.improvements.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="result-item">
            <span class="result-label">気付いたこと</span>
            <ul class="result-list">
              ${result.insights.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <button onclick="resetTodayKPI()" class="kpi-reset-btn">明日のKPIを設定</button>
      </div>
    `}
  `;
}

function saveTodayKPIResult() {
  const videoTitle = document.getElementById('videoTitle').value;
  const videoUrl = document.getElementById('videoUrl').value;
  const productionTime = document.getElementById('productionTime').value;
  
  // 使用したAI社員を取得
  const aiUsed = [];
  document.querySelectorAll('.ai-employee-check:checked').forEach(checkbox => {
    aiUsed.push(checkbox.value);
  });
  
  // 改善点と気付きを取得
  const improvements = document.getElementById('improvements').value
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0);
  
  const insights = document.getElementById('insights').value
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0);
  
  // 入力値チェック
  if (!videoTitle || !videoUrl || !productionTime || aiUsed.length === 0) {
    alert('必須項目を入力してください：\n- 動画タイトル\n- YouTube URL\n- 制作時間\n- 使用AI（最低1人）');
    return;
  }
  
  // データ更新
  companyOSData.todayKPIResult = {
    kpiName: companyOSData.management.todayGoal,
    videoTitle,
    videoUrl,
    publishedAt: new Date().toISOString(),
    productionTime: parseInt(productionTime),
    aiUsed,
    improvements,
    insights
  };
  
  // KPI達成完了
  companyOSData.management.kpiSuccess = true;
  companyOSData.management.todayProgress = 100;
  companyOSData.management.publishingStatus = 'Published';
  companyOSData.production.published += 1;
  
  // 本日実績を反映
  companyOSData.mochizoo.todayPublished += 1;
  
  // 再レンダリング
  renderTodayKPI();
  renderSnapshot();
  
  // コンソール出力
  console.log('📊 KPI完了記録:', companyOSData.todayKPIResult);
  alert('✅ KPI実績を記録しました！');
}

function resetTodayKPI() {
  if (confirm('明日のKPIをリセットしますか？')) {
    companyOSData.management.kpiSuccess = false;
    companyOSData.management.todayProgress = 0;
    companyOSData.management.publishingStatus = 'Pending';
    companyOSData.todayKPIResult = {
      kpiName: 'MocchiZooショート動画1本をYouTubeへ公開',
      videoTitle: null,
      videoUrl: null,
      publishedAt: null,
      productionTime: null,
      aiUsed: [],
      improvements: [],
      insights: []
    };
    renderTodayKPI();
    renderSnapshot();
  }
}

function setupQuickActions() {
  const buttons = document.querySelectorAll('.quick-action-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const actions = {
        'approve': () => {
          alert('All pending decisions approved! Team notified.');
        },
        'team': () => {
          document.querySelector('[href="#employees"]').click();
        },
        'kpis': () => {
          document.querySelector('[href="#bi"]').click();
        },
        'chat': () => {
          document.querySelector('[href="#chat"]').click();
        },
        'roadmap': () => {
          document.querySelector('[href="#projects"]').click();
        }
      };
      
      if (actions[action]) actions[action]();
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'a' && e.shiftKey) {
        e.preventDefault();
        document.querySelector('[data-action="approve"]').click();
      }
      if (e.key === 't' && e.shiftKey) {
        e.preventDefault();
        document.querySelector('[data-action="team"]').click();
      }
      if (e.key === 'k' && e.shiftKey) {
        e.preventDefault();
        document.querySelector('[data-action="kpis"]').click();
      }
      if (e.key === 'c' && e.shiftKey) {
        e.preventDefault();
        document.querySelector('[data-action="chat"]').click();
      }
      if (e.key === 'r' && e.shiftKey) {
        e.preventDefault();
        document.querySelector('[data-action="roadmap"]').click();
      }
    }
  });
}

// ===== V2.1 New Render Functions =====

function renderHelloPrintStore() {
  const storeSection = document.querySelector('.hello-store-section');
  if (!storeSection) return;
  
  const statusColors = {
    '新規': '#6b9bff',
    '製作中': '#ffd93d',
    '製作準備': '#a0aec0',
    '納品準備': '#64f0a6'
  };
  
  const ordersHTML = helloPrintStore.latestOrders.map(o => `
    <div class="store-order-item" style="border-left: 3px solid ${statusColors[o.status]}">
      <div class="order-header">
        <span class="order-id">${o.id}</span>
        <span class="order-status" style="color: ${statusColors[o.status]}">${o.status}</span>
      </div>
      <div class="order-details">${o.customer} • ${o.product}</div>
      <div class="order-due">納期: ${o.dueDate}</div>
    </div>
  `).join('');
  
  const instagramEngagement = Math.round(helloPrintStore.instagram.engagement * 10) / 10;
  
  storeSection.innerHTML = `
    <div class="store-header-grid">
      <div class="store-metric">
        <div class="metric-label">本日売上</div>
        <div class="metric-value">¥${(helloPrintStore.todayRevenue / 1000).toFixed(1)}K</div>
        <div class="metric-goal">目標: ¥${(helloPrintStore.todayTarget / 1000).toFixed(0)}K</div>
      </div>
      <div class="store-metric">
        <div class="metric-label">受注状況</div>
        <div class="metric-value">${helloPrintStore.orders.new} 新規</div>
        <div class="metric-secondary">製作中: ${helloPrintStore.orders.inProduction}</div>
      </div>
      <div class="store-metric">
        <div class="metric-label">Instagram</div>
        <div class="metric-value">${helloPrintStore.instagram.followers.toLocaleString()}</div>
        <div class="metric-secondary">エンゲージ: ${instagramEngagement}%</div>
      </div>
    </div>
    <div class="store-orders">
      <h4>最新注文</h4>
      ${ordersHTML}
    </div>
  `;
}

function renderInvestmentDivision() {
  const investSection = document.querySelector('.investment-section');
  if (!investSection) return;
  
  const portfolio = investmentDivision.portfolio;
  const changeColor = portfolio.todayChange >= 0 ? '#64f0a6' : '#ff6b6b';
  const changeSign = portfolio.todayChange >= 0 ? '+' : '';
  
  const holdingsHTML = portfolio.holdings.map(h => `
    <div class="holding-item">
      <div class="holding-header">
        <span class="holding-symbol">${h.symbol}</span>
        <span class="holding-name">${h.name}</span>
      </div>
      <div class="holding-details">
        <span>¥${h.price.toLocaleString()}</span>
        <span>${h.shares}株</span>
        <span style="color: ${h.change >= 0 ? '#64f0a6' : '#ff6b6b'}">
          ${h.change >= 0 ? '+' : ''}¥${h.change}
        </span>
      </div>
    </div>
  `).join('');
  
  const watchlistHTML = investmentDivision.watchlist.map(w => `
    <div class="watchlist-item">
      <span>${w.symbol} ${w.name}</span>
      <span style="color: ${w.change >= 0 ? '#64f0a6' : '#ff6b6b'}">
        ${w.change >= 0 ? '+' : ''}${w.change}%
      </span>
    </div>
  `).join('');
  
  investSection.innerHTML = `
    <div class="investment-summary">
      <div class="inv-metric">
        <div class="inv-label">ポートフォリオ</div>
        <div class="inv-value">¥${(portfolio.totalValue / 1000000).toFixed(1)}M</div>
      </div>
      <div class="inv-metric">
        <div class="inv-label">本日損益</div>
        <div class="inv-value" style="color: ${changeColor}">${changeSign}¥${(portfolio.todayChange / 1000).toFixed(0)}K</div>
        <div class="inv-secondary" style="color: ${changeColor}">${changeSign}${portfolio.todayChangePercent.toFixed(2)}%</div>
      </div>
    </div>
    <div class="investment-holdings">
      <h4>保有銘柄</h4>
      ${holdingsHTML}
    </div>
    <div class="investment-watchlist">
      <h4>監視中</h4>
      ${watchlistHTML}
    </div>
  `;
}

function renderFamilyHealth() {
  const familySection = document.querySelector('.family-section');
  if (!familySection) return;
  
  const health = personalData.health;
  const stressColor = health.stressLevel <= 4 ? '#64f0a6' : health.stressLevel <= 7 ? '#ffd93d' : '#ff6b6b';
  
  familySection.innerHTML = `
    <div class="family-health-grid">
      <div class="health-card">
        <h4>体調</h4>
        <div class="health-metric">
          <span class="health-label">体温</span>
          <span class="health-value">${health.temperature}°C</span>
        </div>
        <div class="health-metric">
          <span class="health-label">睡眠</span>
          <span class="health-value">${health.sleepHours}時間</span>
        </div>
        <div class="health-metric">
          <span class="health-label">睡眠質</span>
          <span class="health-value">${health.sleepQuality}</span>
        </div>
      </div>
      <div class="stress-card">
        <h4>ストレス</h4>
        <div class="stress-level" style="background: linear-gradient(to right, #64f0a6 0%, #ffd93d 50%, #ff6b6b 100%); background-size: 100%; background-position: ${(health.stressLevel / 10) * 100}% 0;">
          <span style="color: ${stressColor}; font-weight: bold;">${health.stressLevel}/10</span>
        </div>
      </div>
      <div class="family-card">
        <h4>家族</h4>
        <div class="family-status">${personalData.family.status}</div>
        ${personalData.family.members.map(m => `
          <div class="family-item">
            <span>${m.name}</span>
            <span class="family-time">${m.time}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="learning-section">
      <h4>学習進捗: ${personalData.learning.course}</h4>
      <div class="learning-progress">
        <div class="progress-bar-v2">
          <div class="progress-fill" style="width: ${personalData.learning.progress}%"></div>
        </div>
        <span>${personalData.learning.progress}%</span>
      </div>
    </div>
  `;
}

// ===== MOCHIZOO RENDERING FUNCTIONS =====

function renderMocchiZooOverview() {
  const section = document.querySelector('.mochizoo-overview');
  if (!section) return;
  
  const proj = mocchiZooProject.overview;
  const revenueData = mocchiZooProject.revenueData;
  const revenueGrowth = ((revenueData.thisMonth - revenueData.lastMonth) / revenueData.lastMonth * 100).toFixed(1);
  const conceptRulesHTML = mocchiZooProject.conceptRules.map(rule => 
    `<div class="concept-rule"><strong>${rule.rule}</strong><span>${rule.status}</span></div>`
  ).join('');
  
  section.innerHTML = `
    <div class="mz-overview-container">
      <div class="phase-banner">
        <div class="phase-info">
          <h3>${mocchiZooProject.phase}</h3>
          <p class="mission"><strong>Mission:</strong> ${mocchiZooProject.missionStatement}</p>
        </div>
      </div>
      
      <div class="mz-philosophy">
        <h4>🎬 ${mocchiZooProject.status}</h4>
        <p>${mocchiZooProject.philosophy}</p>
      </div>
      
      <div class="mz-status-grid">
        <div class="mz-card primary">
          <div class="mz-label">Progress to 100 Videos</div>
          <div class="mz-value">${proj.publishedEpisodes}/${proj.targetEpisodes}</div>
          <div class="progress-bar"><div class="progress-fill" style="width: ${mocchiZooProject.progress}%"></div></div>
        </div>
        <div class="mz-card">
          <div class="mz-label">Total Views</div>
          <div class="mz-value">${(proj.totalViews / 1000).toFixed(0)}K</div>
          <div class="mz-secondary">Target: ${(proj.targetViews / 1000).toFixed(0)}K</div>
        </div>
        <div class="mz-card">
          <div class="mz-label">Avg Views/Video</div>
          <div class="mz-value">${proj.avgViewsPerVideo.toFixed(0)}</div>
          <div class="mz-secondary">${proj.monthlyGrowth}% monthly growth</div>
        </div>
        <div class="mz-card">
          <div class="mz-label">This Month Revenue</div>
          <div class="mz-value">¥${(revenueData.thisMonth / 1000).toFixed(0)}K</div>
          <div class="mz-secondary green">↑ ${revenueGrowth}% vs last month</div>
        </div>
      </div>
      
      <div class="mz-concept-rules">
        <h4>5つのコンセプトルール（必須）</h4>
        <div class="concept-rules-list">
          ${conceptRulesHTML}
        </div>
      </div>
    </div>
  `;
}

function renderMocchiZooTasks() {
  const section = document.querySelector('.mochizoo-tasks');
  if (!section) return;
  
  const tasksHTML = mocchiZooProject.todaysTasks.map(task => {
    const priorityColor = task.priority === 'urgent' ? '#ff6b6b' : task.priority === 'high' ? '#ffd93d' : '#6b9bff';
    const statusIcon = task.status === 'completed' ? '✓' : task.status === 'in-progress' ? '⚡' : '○';
    
    return `
      <div class="mz-task-item" style="border-left: 3px solid ${priorityColor}">
        <div class="task-header">
          <span class="task-status">${statusIcon}</span>
          <h4 class="task-title">${task.title}</h4>
        </div>
        <div class="task-meta">
          <span>${task.owner}</span>
          <span class="task-time">Due: ${task.dueTime}</span>
        </div>
      </div>
    `;
  }).join('');
  
  section.innerHTML = `<div class="mz-tasks-list">${tasksHTML}</div>`;
}

function renderMocchiZooCharacters() {
  const section = document.querySelector('.mochizoo-characters');
  if (!section) return;
  
  const charsHTML = mocchiZooProject.characters.map(char => `
    <div class="mz-character-card">
      <div class="char-avatar" style="background: linear-gradient(135deg, ${char.color}, ${char.color}80); border: 2px solid ${char.color}">
        ${char.name.substring(0, 1)}
      </div>
      <h4>${char.name}</h4>
      <div class="char-stats">
        <div class="stat"><span>Episodes:</span><strong>${char.episodes}</strong></div>
        <div class="stat"><span>Popularity:</span><strong>${char.popularity}%</strong></div>
      </div>
      <div class="char-popularity-bar">
        <div class="bar-fill" style="width: ${char.popularity}%; background: ${char.color}"></div>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `<div class="characters-grid">${charsHTML}</div>`;
}

function renderMocchiZooPipeline() {
  const section = document.querySelector('.mochizoo-pipeline');
  if (!section) return;
  
  const pipeline = mocchiZooProject.pipeline;
  
  const scriptHTML = pipeline.scriptQueue.map(s => `
    <div class="pipeline-item">
      <div class="item-title">${s.title}</div>
      <div class="item-progress"><div style="width: ${s.progress}%"></div></div>
      <div class="item-footer"><span>${s.writer}</span><span class="item-status">${s.status}</span></div>
    </div>
  `).join('');
  
  const prodHTML = pipeline.productionQueue.map(p => `
    <div class="pipeline-item">
      <div class="item-title">${p.episode}</div>
      <div class="item-progress"><div style="width: ${p.progress}%"></div></div>
      <div class="item-footer"><span>${p.progress}%</span><span class="item-status">${p.status}</span></div>
    </div>
  `).join('');
  
  const thumbHTML = pipeline.thumbnailQueue.map(t => `
    <div class="pipeline-item">
      <div class="item-title">${t.episode}</div>
      <div class="item-progress"><div style="width: ${t.progress}%"></div></div>
      <div class="item-footer"><span>${t.designer}</span><span class="item-status">${t.status}</span></div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="pipeline-columns">
      <div class="pipeline-column">
        <h4>Script Queue</h4>
        ${scriptHTML}
      </div>
      <div class="pipeline-column">
        <h4>Production</h4>
        ${prodHTML}
      </div>
      <div class="pipeline-column">
        <h4>Thumbnails</h4>
        ${thumbHTML}
      </div>
    </div>
  `;
}

function renderMocchiZooSchedule() {
  const section = document.querySelector('.mochizoo-schedule');
  if (!section) return;
  
  const scheduleHTML = mocchiZooProject.publishingSchedule.map(pub => `
    <div class="schedule-item">
      <div class="schedule-time">${pub.scheduledTime.split(' ')[1]}</div>
      <div class="schedule-content">
        <h4>${pub.episode}</h4>
        <span class="platform">${pub.platform}</span>
      </div>
      <div class="schedule-status">${pub.status}</div>
    </div>
  `).join('');
  
  section.innerHTML = `<div class="schedule-list">${scheduleHTML}</div>`;
}

function renderMocchiZooPerformance() {
  const section = document.querySelector('.mochizoo-performance');
  if (!section) return;
  
  const perfHTML = mocchiZooProject.shortsPerformance.map(short => `
    <div class="perf-card">
      <h4>${short.title}</h4>
      <div class="perf-metrics">
        <div class="metric">
          <span class="label">Views</span>
          <span class="value">${(short.views / 1000).toFixed(0)}K</span>
        </div>
        <div class="metric">
          <span class="label">Likes</span>
          <span class="value">${(short.likes / 1000).toFixed(1)}K</span>
        </div>
        <div class="metric">
          <span class="label">Shares</span>
          <span class="value">${short.shares}</span>
        </div>
        <div class="metric">
          <span class="label">Comments</span>
          <span class="value">${short.comment}</span>
        </div>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `<div class="perf-grid">${perfHTML}</div>`;
}

function renderMocchiZooRevenue() {
  const section = document.querySelector('.mochizoo-revenue');
  if (!section) return;
  
  const rev = mocchiZooProject.revenueData;
  const growth = rev.thisMonth - rev.lastMonth;
  const growthPercent = (growth / rev.lastMonth * 100).toFixed(1);
  
  const sourcesHTML = rev.sources.map(src => `
    <div class="revenue-source">
      <div class="source-header">
        <span>${src.source}</span>
        <span class="amount">¥${(src.amount / 1000).toFixed(1)}K</span>
      </div>
      <div class="source-bar">
        <div class="bar-fill" style="width: ${src.percentage}%"></div>
      </div>
      <div class="source-percent">${src.percentage}%</div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="revenue-overview">
      <div class="rev-card">
        <div class="rev-label">This Month</div>
        <div class="rev-value">¥${(rev.thisMonth / 1000).toFixed(0)}K</div>
      </div>
      <div class="rev-card">
        <div class="rev-label">Last Month</div>
        <div class="rev-value">¥${(rev.lastMonth / 1000).toFixed(0)}K</div>
      </div>
      <div class="rev-card highlight">
        <div class="rev-label">Growth</div>
        <div class="rev-value" style="color: #64f0a6">+${growthPercent}%</div>
      </div>
    </div>
    <div class="revenue-sources">
      <h4>Revenue Sources</h4>
      ${sourcesHTML}
    </div>
  `;
}

function renderMocchiZooMetrics() {
  const section = document.querySelector('.mochizoo-metrics');
  if (!section) return;
  
  const metrics = mocchiZooProject.growthMetrics;
  const demo = metrics.audienceDemographics;
  
  section.innerHTML = `
    <div class="metrics-grid">
      <div class="metric-box">
        <h4>Engagement Rate</h4>
        <div class="large-value">${metrics.engagementRate}%</div>
      </div>
      <div class="metric-box">
        <h4>Share Rate</h4>
        <div class="large-value">${metrics.shareRate}%</div>
      </div>
      <div class="metric-box">
        <h4>Watch Time</h4>
        <div class="large-value">${metrics.watchTime}</div>
      </div>
      <div class="metric-box">
        <h4>Top Demographic</h4>
        <div class="large-value">${demo.age18to24}%</div>
        <div class="sub-value">Age 18-24</div>
      </div>
    </div>
    <div class="audience-demographics">
      <h4>Audience Breakdown</h4>
      <div class="demo-bars">
        <div class="demo-item">
          <span>13-17</span>
          <div class="demo-bar"><div style="width: ${demo.age13to17}%"></div></div>
          <span>${demo.age13to17}%</span>
        </div>
        <div class="demo-item">
          <span>18-24</span>
          <div class="demo-bar"><div style="width: ${demo.age18to24}%"></div></div>
          <span>${demo.age18to24}%</span>
        </div>
        <div class="demo-item">
          <span>25-34</span>
          <div class="demo-bar"><div style="width: ${demo.age25to34}%"></div></div>
          <span>${demo.age25to34}%</span>
        </div>
        <div class="demo-item">
          <span>35+</span>
          <div class="demo-bar"><div style="width: ${demo.age35plus}%"></div></div>
          <span>${demo.age35plus}%</span>
        </div>
      </div>
    </div>
  `;
}

function renderMocchiZooAssets() {
  const section = document.querySelector('.mochizoo-assets');
  if (!section) return;
  
  const assets = mocchiZooProject.assetLibrary;
  
  section.innerHTML = `
    <div class="assets-grid">
      <div class="asset-card">
        <div class="asset-icon">🎨</div>
        <div class="asset-label">Backgrounds</div>
        <div class="asset-count">${assets.backgrounds}</div>
      </div>
      <div class="asset-card">
        <div class="asset-icon">🔊</div>
        <div class="asset-label">Sound Effects</div>
        <div class="asset-count">${assets.soundEffects}</div>
      </div>
      <div class="asset-card">
        <div class="asset-icon">🎵</div>
        <div class="asset-label">Music Tracks</div>
        <div class="asset-count">${assets.musicTracks}</div>
      </div>
      <div class="asset-card">
        <div class="asset-icon">🎭</div>
        <div class="asset-label">Character Models</div>
        <div class="asset-count">${assets.characterModels}</div>
      </div>
      <div class="asset-card">
        <div class="asset-icon">🎁</div>
        <div class="asset-label">Props</div>
        <div class="asset-count">${assets.props}</div>
      </div>
      <div class="asset-card">
        <div class="asset-icon">📋</div>
        <div class="asset-label">Templates</div>
        <div class="asset-count">${assets.templates}</div>
      </div>
    </div>
  `;
}

function renderMocchiZooIdeas() {
  const section = document.querySelector('.mochizoo-ideas');
  if (!section) return;
  
  const ideasHTML = mocchiZooProject.ideaInbox.map(idea => `
    <div class="idea-card" data-status="${idea.status}">
      <div class="idea-header">
        <h4>${idea.title}</h4>
        <span class="idea-status">${idea.status}</span>
      </div>
      <div class="idea-footer">
        <span>${idea.submittedBy}</span>
        <span class="idea-likes">👍 ${idea.likes}</span>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `<div class="ideas-list">${ideasHTML}</div>`;
}

function renderMocchiZooTeam() {
  const section = document.querySelector('.mochizoo-team');
  if (!section) return;
  
  const assignments = mocchiZooProject.assignments;
  const teamHTML = Object.entries(assignments).map(([key, assign]) => `
    <div class="team-member-card">
      <h4>${assign.role}</h4>
      <div class="member-name">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
      <div class="member-dept">${assign.dept}</div>
      <div class="member-tasks">Tasks: ${assign.tasks}</div>
      <div class="member-current">
        <small>${assign.current}</small>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `<div class="team-cards-grid">${teamHTML}</div>`;
}

// Phase 1: Production Flow (8 Steps)
function renderMocchiZooProductionFlow() {
  const section = document.querySelector('.mochizoo-production-flow');
  if (!section) return;
  
  const flow = mocchiZooProject.productionFlow;
  const flowHTML = flow.map(item => `
    <div class="production-step">
      <div class="step-number">${item.step}</div>
      <div class="step-content">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <small>Owner: ${item.owner} | Time: ${item.duration}</small>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="production-flow-container">
      <div class="flow-intro">
        <p><strong>制作フロー標準化（本日より実施）</strong></p>
      </div>
      <div class="production-steps">
        ${flowHTML}
      </div>
    </div>
  `;
}

// KPI Revised (Continuous Priority)
function renderMocchiZooKPI() {
  const section = document.querySelector('.mochizoo-kpi');
  if (!section) return;
  
  const kpi = mocchiZooProject.kpiTargets;
  const escalationHTML = kpi.escalationPlan.map(p => `
    <div class="escalation-item">
      <div class="phase-badge">${p.phase}</div>
      <div class="phase-target">${p.target}</div>
      <div class="phase-status">${p.status}</div>
    </div>
  `).join('');
  
  const rulesHTML = kpi.keyRules.map(rule => `
    <div class="key-rule">✓ ${rule}</div>
  `).join('');
  
  section.innerHTML = `
    <div class="kpi-container">
      <div class="kpi-priority">
        <h4>優先方針</h4>
        <p>${kpi.priority}</p>
      </div>
      
      <div class="key-rules">
        <h4>3つの止めないルール</h4>
        ${rulesHTML}
      </div>
      
      <div class="escalation-plan">
        <h4>段階的拡大計画</h4>
        <div class="escalation-items">
          ${escalationHTML}
        </div>
      </div>
    </div>
  `;
}

// Department Tasks (By Department)
function renderMocchiZooDepartments() {
  const section = document.querySelector('.mochizoo-departments');
  if (!section) return;
  
  const depts = mocchiZooProject.departmentTasks;
  const deptHTML = Object.entries(depts).map(([key, dept]) => `
    <div class="department-card">
      <div class="dept-header">
        <h4>${dept.dept}</h4>
        <small>Owner: ${dept.owner}</small>
      </div>
      <ul class="dept-tasks">
        ${dept.tasks.map(task => `<li>• ${task}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="departments-grid">
      ${deptHTML}
    </div>
  `;
}

// Prohibited Items (Until Popular Characters Established)
function renderMocchiZooProhibited() {
  const section = document.querySelector('.mochizoo-prohibited');
  if (!section) return;
  
  const prohibited = mocchiZooProject.prohibitedItems;
  const prohibitedHTML = prohibited.map(p => `
    <div class="prohibited-item">
      <div class="prohibited-name">${p.item}</div>
      <div class="prohibited-reason">→ ${p.reason}</div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="prohibited-container">
      <div class="prohibited-note">
        <p>${mocchiZooProject.prohibitedDesc}</p>
      </div>
      <div class="prohibited-list">
        ${prohibitedHTML}
      </div>
    </div>
  `;
}

function renderAll() {
  renderCEOGreeting();
  renderSnapshot();
  renderTodayKPI();
  renderTeamActivity();
  renderDecisions();
  renderStrategicTimeline();
  renderHelloPrintStore();
  renderInvestmentDivision();
  renderFamilyHealth();
  renderMocchiZooOverview();
  renderMocchiZooTasks();
  renderMocchiZooCharacters();
  renderMocchiZooPipeline();
  renderMocchiZooSchedule();
  renderMocchiZooPerformance();
  renderMocchiZooRevenue();
  renderMocchiZooMetrics();
  renderMocchiZooAssets();
  renderMocchiZooIdeas();
  renderMocchiZooTeam();
  renderMocchiZooProductionFlow();
  renderMocchiZooKPI();
  renderMocchiZooDepartments();
  renderMocchiZooProhibited();
  renderEmployeeCards();
  renderProfile(state.selectedEmployee);
  renderDepartments();
  renderOrganization();
  renderActivity();
  renderReviewQueue();
  renderCEOReview();
  renderTasks();
  renderDeliverables();
  renderChat();
  renderMeetingRoom();
  renderTimeline();
  renderProjects();
  renderSearchResults();
  renderMorningBrief();
  renderEveningReport();
  renderCulture();
}

function handleTaskDrop(event) {
  const column = event.target.closest('.task-column');
  if (!column) return;
  const taskId = event.dataTransfer.getData('text/plain');
  const nextStatus = column.dataset.status;
  moveTask(taskId, nextStatus);
}

function handleTaskActions(event) {
  const approveButton = event.target.closest('[data-approve-task]');
  if (approveButton) {
    moveTask(approveButton.dataset.approveTask, 'completed');
    return;
  }

  const chatButton = event.target.closest('[data-chat-select]');
  if (chatButton) {
    state.selectedChat = chatButton.dataset.chatSelect;
    renderChat();
  }
}

function wireEvents() {
  document.addEventListener('dragstart', (event) => {
    if (!event.target.classList.contains('task-card')) return;
    event.dataTransfer.setData('text/plain', event.target.dataset.taskId);
    event.target.classList.add('dragging');
  });

  document.addEventListener('dragend', (event) => {
    if (event.target.classList.contains('task-card')) {
      event.target.classList.remove('dragging');
    }
  });

  document.addEventListener('dragover', (event) => {
    if (event.target.closest('.task-column')) {
      event.preventDefault();
    }
  });

  document.addEventListener('drop', (event) => {
    if (event.target.closest('.task-column')) {
      event.preventDefault();
      handleTaskDrop(event);
    }
  });

  document.addEventListener('click', handleTaskActions);

  searchInput.addEventListener('input', (event) => {
    renderSearchResults(event.target.value);
  });

  document.getElementById('chatPanel').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('chatInput');
    if (!input || !input.value.trim()) return;
    chatThreads[state.selectedChat].push({ role: 'user', text: input.value.trim() });
    chatThreads[state.selectedChat].push({ role: 'assistant', text: 'Thanks — I will package this into a concise next step.' });
    input.value = '';
    renderChat();
  });
}

renderAll();
wireEvents();
setupQuickActions();

function dismissLoadingScreen() {
  const screen = document.getElementById('loadingScreen');
  if (!screen || screen._dismissed) return;
  screen._dismissed = true;

  screen.classList.add('is-hiding');

  function remove() {
    if (screen.parentNode) {
      screen.parentNode.removeChild(screen);
    }
  }

  screen.addEventListener('transitionend', remove, { once: true });

  // Failsafe: remove after 600ms even if transitionend never fires
  setTimeout(remove, 600);
}

// Primary: dismiss as soon as the page load event fires
window.addEventListener('load', dismissLoadingScreen);

// Failsafe: dismiss after 5 seconds regardless of load state
setTimeout(dismissLoadingScreen, 5000);

// Secondary failsafe: if DOM is already interactive, dismiss almost immediately
if (document.readyState === 'complete') {
  setTimeout(dismissLoadingScreen, 100);
}
