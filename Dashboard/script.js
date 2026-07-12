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

function renderAll() {
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
