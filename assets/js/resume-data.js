/* ============================================================================
 * 学术简历（Academic CV）数据配置文件 —— 【这是你唯一需要修改的文件】
 * ----------------------------------------------------------------------------
 * 站点所有内容都由本文件驱动，index.html / style.css / main.js 都不需要改动。
 *
 * ★ 双语结构说明
 *   本文件分三块：
 *     1) profile —— 中英共用的信息（姓名、联系方式、头像）
 *     2) i18n.zh —— 中文版全部文案
 *     3) i18n.en —— 英文版全部文案
 *   两个语言块的「结构必须保持一致」：在 zh 里加了一条论文，就要在 en 里对应加一条，
 *   否则另一语言版本会少显示该项。
 *
 * ★ 标记为【待补充】的地方，是我在你的 Word 简历里没有找到、必须你来填的信息，
 *   请搜索 "待补充" 逐项替换。填完前页面会原样显示这些占位文字。
 *
 * ★ 修改注意事项
 *   1. 文本用英文单引号 ' 包裹；文本里出现单引号要写成 \'
 *   2. 数组（[] 包裹的列表）最后一项后面不要加逗号
 *   3. 时间统一写成 'YYYY.MM'（如 '2025.08'），进行中写 '至今'
 * ========================================================================== */

window.RESUME_DATA = {

/* ==========================================================================
 * 一、全局信息
 * ======================================================================== */
meta: {
  pageTitle: { zh: '徐其胜 - 学术简历 - 安全工程 / 碳基储能器件热安全评估', en: 'Qisheng Xu - Academic CV - Safety Engineering / Thermal Safety of Carbon-Based Energy Storage Devices' },
  description: {
    zh: '徐其胜，福州大学安全工程学士（2026 届），专攻碳基储能器件（石墨烯超级电容器、锂硫电池）的材料热解表征与器件级热安全评估；方法链（Thermakin + FDS + QRA）可直接承接 Monash AM2D Hub 的 2D 材料先进制造在研课题。第一作者专利与软著 3 项、国家级竞赛奖项 2 项，已获莫纳什大学硕士录取并缴费，直申澳洲可持续能源方向全奖博士。',
    en: 'Qisheng Xu, B.Eng. in Safety Engineering from Fuzhou University (2026), specialising in pyrolysis characterisation and device-level thermal safety assessment of carbon-based energy storage devices (graphene supercapacitors, Li-S batteries). His Thermakin + FDS + QRA methods chain can plug directly into ongoing 2D-material advanced manufacturing projects at Monash\'s AM2D Hub. Three first-author patents/software copyrights, two national competition awards; holds a paid Monash Master\'s offer, applying directly for a fully-funded Australian PhD in Sustainable Energy.'
  },
  keywords: '学术简历,安全工程,超级电容器热安全,石墨烯材料热解,M-rGO,锂硫电池,本质安全设计,AM2D,Monash,碳基储能,定量风险评估,FDS,Thermakin,MATLAB,Origin',
  footerName: { zh: '徐其胜', en: 'Qisheng Xu' },
  showBuildInfo: true
},

profile: {
  name: '徐其胜',
  nameEn: 'Qisheng Xu',
  avatar: 'assets/files/avatar.jpg',
  contacts: [
    { type: 'email',    value: 'jiugegugeer@outlook.com', href: 'mailto:jiugegugeer@outlook.com' },
    { type: 'phone',    value: '158 9368 2476',           href: 'tel:15893682476' },
    { type: 'wechat',   value: '微信同号 15893682476',     href: '' },
    { type: 'location', value: '福建 · 福州',              href: '' },
    // 建议补充：Google Scholar（注册后填入）
    // { type: 'scholar', value: 'Google Scholar', href: 'https://scholar.google.com/citations?user=XXXX' },
    { type: 'orcid',   value: 'ORCID: 0009-0006-1858-0287', href: 'https://orcid.org/0009-0006-1858-0287' },
    { type: 'github',  value: 'github.com/jiugegugeer', href: 'https://github.com/jiugegugeer' }
  ]
},

i18n: {

  zh: {

  hero: {
    intent: '2026 届本科 · 主攻 Monash AM2D Hub 碳基储能全奖博士',
    title: '安全工程学士（2026 届） · 碳基储能器件材料热安全评估',
    // Hero Tagline Rule：≤20 词 / ≤4 行 / 1 句完成
    tagline: 'M-rGO / Li–S 三级评估链（Thermakin→FDS→QRA），直接对接 Ionic Industries 产线热安全认证。',
    keywords: ['M-rGO 热解表征', '超级电容器热场', 'Li–S 边界判据', '本质安全设计', 'Ionic 产线认证'],
    affiliation: '福州大学 · 安全工程',
    availability: '2026.07 可入学',
    // ★ 3×3 Hero 关键参数面板（stat 9 格；单值 ≤8 字，note ≤12 字，accent 高亮 ≤3 卡）
    stats: [
      { label: '申请目标', value: 'Monash PhD (Full-Fund)', note: 'AM2D Hub / Majumder', accent: true },
      { label: '目标课题', value: 'M-rGO / Li–S',            note: '碳基储能器件热安全' },
      { label: '方法链',     value: 'Thermakin·FDS·QRA',      note: '端到端验证（毕设级）' },
      { label: 'Monash',    value: '硕士 Offer',             note: '已缴留位费（熟悉生态）', accent: true },
      { label: '语言达标',   value: 'PTE 60',                 note: 'PhD 门槛 PTE 58 ✅' },
      { label: '本科院校',   value: '211 / 双一流',           note: '福州大学 · 安全工程' },
      { label: '第一作者',   value: '3 项 IP',                note: '专利 1 + 软著 2' },
      { label: '国家级奖',   value: '2× 一等奖',              note: '队长 + 第一作者（连 2 年）' },
      { label: '方法验证',   value: '毕业论文 校级优秀',       note: '独立实验+建模完整链', accent: true }
    ],
    // extras → 改为 hero contact 下方 chip 排列；维持 4 项（不显示在 hero stack 主区内部，避免 >4 text elements）
    extras: ['已缴 Monash 硕士留位费', '国家级一等奖 2 项（队长一作）', '优秀毕业论文（独立）', 'PTE 60（≥ Monash 58 门槛）'],
    actions: [
      // CTA ONE-label RULE：同一 intent 全站同一文案（申请对接 intent = 唯一 primary）
      { text: '申请对接（下载 CV）', action: 'download', href: 'assets/files/resume-zh.pdf', primary: true },
      { text: '查看 Monash 契合点',  action: 'link',     href: '#targets', primary: false }
    ]
  },

  education: {
    enabled: true,
    items: [
      {
        school: '莫纳什大学（Monash University）',
        degree: '应用工程硕士（已获录取，未入学）',
        major: '可持续能源方向',
        start: '2026',
        end: '',
        location: '澳大利亚 · 墨尔本',
        status: 'admitted',
        note: '已获录取并缴纳留位费，入学资格保留中；已调研 Monash AM2D Hub（2D 材料先进制造研究中心）的超级电容器与锂硫电池课题，评估后认为自己的方法链可直接承接 Majumder 教授器件级热安全评估的工程化环节，故决定直接申请博士学位，暂未注册硕士入学。',
        gpa: '',
        courses: [],
        honors: []
      },
      {
        school: '福州大学',
        degree: '工学学士',
        major: '安全工程',
        start: '2022.09',
        end: '2026.06',
        location: '福建 · 福州',
        gpa: '核心专业课 GPA 4.3/5.0，专业排名 1/52',
        thesis: {
          title: '阻燃竹材的热解和燃烧实验及数值模拟研究',
          advisor: '阳富强 教授',
          award: '福州大学优秀本科毕业论文（校级）'
        },
        courses: [
          { name: '高等数学', score: '' },
          { name: '大学物理', score: '' },
          { name: '流体力学', score: '' },
          { name: '工程热力学', score: '' },
          { name: '传热学', score: '' },
          { name: '燃烧学', score: '' },
          { name: '职业卫生工程', score: '96' },
          { name: '安全教育与培训', score: '95' },
          { name: '安全系统工程', score: '92' },
          { name: '安全评价', score: '92' },
          { name: '建筑安全', score: '92' }
        ],
        honors: [
          '国家励志奖学金（多次）',
          '校特等奖学金（Top 1%，多次）',
          '福州大学三好学生'
        ]
      }
    ]
  },

  research: {
    enabled: true,
    items: [
      {
        title: '碳基储能器件材料热安全评估（主攻方向）',
        desc: '面向石墨烯基超级电容器（M-rGO 多尺度弯曲石墨烯）与锂硫电池，从材料热解动力学参数（活化能 Ea、指前因子 A、释热速率 HRR）表征入手，建立「材料热解表征 → 器件级热场模拟 → 模组级安全间距判据」的全链条评价方法，直接填补碳基储能器件电化学性能研究中器件级热安全边界缺失的工程化环节。Monash AM2D Hub 拥有澳大利亚石墨资源与 2D 材料先进制造的全球领先平台，是开展此类研究的最佳载体。',
        tags: ['石墨烯/M-rGO 超级电容器', '锂硫电池热稳定性', '本质安全设计', '材料热解动力学', '2D 材料制造安全认证']
      },
      {
        title: '火灾动力学与数值模拟',
        desc: '基于 FDS 的火灾场模拟与火蔓延机理研究，关注热释放速率预测、烟气输运与控制；结合 Thermakin 开展材料燃烧特性与火灾预测建模。方法可直接迁移至碳基储能器件的热失控场模拟与跨尺度传播刻画。',
        tags: ['FDS', 'Thermakin', '火蔓延机理', '热释放速率 HRR']
      },
      {
        title: '能源系统风险定量评估',
        desc: '面向储能系统与能源制造产线的定量风险评价（QRA），研究本质安全设计（Inherent Safety）下的风险辨识、分级管控与安全间距判据建立，使模拟结果可直接服务工程设计与标准/认证制定。',
        tags: ['QRA', '本质安全设计 ISD', '风险分级管控', '安全间距判据']
      },
      {
        title: '人员疏散与应急优化',
        desc: '基于 Pathfinder 的多场景应急疏散仿真，研究人流组织与智慧疏散诱导；相关成果获全国性学科竞赛一等奖与二等奖。',
        tags: ['Pathfinder', '疏散仿真', '人流组织']
      }
    ]
  },

  publications: {
    enabled: true,
    papers: [
      {
        title: '阻燃竹材的热解和燃烧实验及数值模拟研究',
        journal: '福州大学本科毕业论文（校级优秀）',
        status: 'completed',
        authors: '徐其胜（独立完成）',
        authorNote: '指导教师：阳富强 教授；独立完成锥状量热仪实验 + Thermakin 热解动力学参数（Ea、A、HRR）拟合 + FDS 数值模拟对标。建立的「器件级材料热解表征→数值外推→风险量化」技术路线可直接迁移至 M-rGO 石墨烯电极与锂硫电池材料的热稳定性评估，是博士研究拟承接方法链的可行性验证。',
        doi: '',
        link: ''
      }
    ],
    patents: [
      { type: 'patent',   name: '一种出口指示终端及疏散系统',       role: '第一作者', number: '', date: '2025.08' },
      { type: 'software', name: '职业卫生物理危害分级管控软件',      role: '第一作者', number: '', date: '' },
      { type: 'software', name: '在岗人员动态监测服务软件',          role: '第一作者', number: '', date: '' },
      { type: 'software', name: '高危作业人员资质与身份双验证系统',  role: '', number: '', date: '2025.10' },
      { type: 'software', name: '建筑施工场地生态环境遥感监测与评价系统',        role: '第二作者', number: '', date: '' },
      { type: 'software', name: '基于遥感影像的区域碳排放估算与环境安全评估系统', role: '第四作者', number: '', date: '' }
    ]
  },

  experience: {
    enabled: true,
    items: [
      {
        name: '福州市图书馆双重预防机制设计',
        role: '项目组长',
        period: '2025.04 - 2025.06',
        org: '福州市图书馆',
        description: '面向公共文化场馆的安全管理体系优化，构建风险辨识与隐患排查的双重预防机制。',
        points: [
          '担任项目组长，负责方案统筹、任务分工与跨部门协同，带领团队按期交付成果。',
          '带领团队设计并实施双重预防机制（风险辨识与隐患排查），优化图书馆安全管理体系，降低安全隐患。',
          '设计风险分级管控与隐患排查治理方案，形成「辨识—评估—响应」闭环管理模型。',
          '运用 SCL、JHA 识别风险，借助 LS、LEC 法进行风险分级，协同各职能部门推动方案落地实施。'
        ],
        methods: ['SCL 安全检查表', 'JHA 工作危害分析', 'LS 法', 'LEC 法']
      },
      {
        name: '福州三坊七巷塔巷历史文化街区消防安全疏散设计',
        role: '项目组长',
        period: '2024.12 - 2025.01',
        org: '福州市三坊七巷历史文化街区',
        description: '针对历史文化街区的火灾风险与疏散难题，开展消防疏散建模与方案设计。',
        points: [
          '担任项目组长，统筹调研、建模与方案设计全流程，协调街区管理部门推动成果落地。',
          '负责街区消防疏散模型搭建，绘制建筑 CAD 及 3D 模型，利用 Pathfinder 模拟多场景应急疏散。',
          '依据《建筑防火通用规范》等标准，通过调研与数据分析，优化街区内各类人员的逃生路线与安全设施配置。',
          '开展火灾风险定性与定量分析，设计疏散通道优化方案并协调相关部门，确保方案高效落地执行。'
        ],
        methods: ['Pathfinder', 'AutoCAD / 3D 建模', '《建筑防火通用规范》', '定量风险分析']
      }
    ]
  },

  awards: {
    enabled: true,
    items: [
      {
        name: '第12届全国高校安全科学与工程大学生实践与创新作品大赛 一等奖',
        level: '国家级',
        date: '2026.08',
        role: '队长兼第一作者',
        work: '《多模态 AI 交互探测机器人系统》',
        desc: '国内安全科学与工程领域最高水平的大学生学科竞赛。作品将多模态感知（视觉 / 温度 / 气体（H₂、CO、VOC、电解液蒸气））集成于灾害现场探测机器人——可直接用于超级电容器 / 锂硫电池模组车间的异常温升与器件级热失控早期侦察与风险识别，与 Majumder 教授 AM2D Hub 先进制造产线的安全监测需求完全对应。',
        highlight: true
      },
      {
        name: '第11届全国高校安全科学与工程大学生实践与创新作品大赛 二等奖',
        level: '国家级',
        date: '2025.08',
        role: '队长兼第一作者',
        work: '《建筑人流熵减智慧解决方案》',
        desc: '同一赛事系列的上一届；本人连续两届担任队长兼第一作者并获奖。作品聚焦建筑人流密度监测与智慧疏散诱导，与应急疏散仿真研究一脉相承。',
        highlight: false
      },
      {
        name: '福州大学优秀本科毕业论文',
        level: '校级',
        date: '2026.06',
        role: '独立完成',
        work: '《阻燃竹材的热解和燃烧实验及数值模拟研究》',
        desc: '实验与数值模拟相结合，研究阻燃竹材的热解特性与燃烧行为。',
        highlight: true
      },
      { name: '国家励志奖学金 / 校特等奖学金', level: '多次获得（Top 1%）', date: '2022 - 2025', role: '', work: '', desc: '表彰学业成绩与科研表现突出。', highlight: false },
      { name: '福州大学三好学生',       level: '校级', date: '', role: '', work: '', desc: '', highlight: false }
    ]
  },

  proposal: {
    enabled: true,
    intro: '以下博士研究计划专为 Monash AM2D Hub 的碳基储能器件研究（M-rGO 超级电容器 / 快充锂硫电池 / LiS-ultracapacitor 混合器件）起草，可按 Majumder 教授在研课题进一步细化；我的 Thermakin+FDS+QRA 方法链可并行推进而不干预其现有电化学实验节奏。',
    items: [
      {
        title: '研究问题',
        desc: 'AM2D Hub 在 2025 年 Nature Communications 证明 M-rGO 多尺度弯曲石墨烯超级电容器可实现 99.5 Wh/L 体积能量密度、5 万次循环保持率 91%，2024 年 Advanced Energy Materials 发表快充锂硫电池；但目前研究聚焦材料级电化学性能，从「材料级」到「器件级/模组级」的关键工程化环节仍缺失：M-rGO 电极材料的最大可承受工作温升、e-IE 过程对应的热稳定性变化、Li-S 多硫化物穿梭效应耦合热失控的边界条件、以及混合器件的模组布置安全间距等均未建立量化判据。这些数据是 Ionic Industries 商业化量产（澳大利亚石墨资源可扩展产线）必须通过的安全认证前置条件。',
        tags: ['M-rGO 超级电容器', '快充 Li-S 电池', 'LiS-ultracapacitor 混合器件', '器件级热边界缺失', '可扩展量产安全认证']
      },
      {
        title: '方法与路径',
        desc: '以「材料热解参数化 → 器件热场模拟 → 模组安全判据」为技术路径：① Thermakin 表征 M-rGO 电极/Li-S 电池材料的热解动力学（锥状量热仪/同步热分析输入实验数据 → 拟合活化能 Ea、指前因子 A、释热速率 HRR 曲线）；② FDS 构建单体器件与超级电容器模组级热场模型，刻画 e-IE 膨胀过程与 Li-S 多硫化物穿梭的耦合热响应，热边界参数对标 AM2D 在产线已有条件；③ QRA 以量化风险指标（个体风险 IR、社会风险 F-N 曲线、热失控触发概率 PFD）转化为工程可决策的安全间距判据与热边界设计建议，可直接服务 Ionic Industries 的产线认证。本科《阻燃竹材的热解和燃烧实验及数值模拟研究》已验证该方法链的端到端可行性。',
        tags: ['Thermakin 热解参数化', 'FDS 器件级热场', 'M-rGO 电极 Ea/A/HRR 提取', 'Li-S 穿梭-热耦合', 'Ionic Industries 产线认证']
      },
      {
        title: '预期成果与交付物',
        desc: '面向 Majumder 教授 AM2D Hub / Ionic Industries 的实际需求交付三类成果：① 1 套 M-rGO/Li-S 材料热解动力学参数数据集（可直接作为 FDS 输入，降低全组后续研究的重复建模成本）；② 1 套 M-rGO 超级电容器单体/模组级安全间距判据与热边界设计建议（直接对接 LiS-ultracapacitor 混合器件的结构设计与产线认证）；③ 2–3 篇 SCI 期刊论文：第一篇（Y2）面向 Journal of Power Sources / Electrochimica Acta 投 M-rGO 材料热稳定性表征；第二篇（Y2-Y3）面向 Journal of Energy Storage / Fire Safety Journal 投 模组级安全间距判据；若 LiS-ultracapacitor 混合器件项目启动可追加第三篇。',
        tags: ['M-rGO/Li-S 参数数据集', '安全间距判据（工程可用）', '拟投 2–3 篇 SCI', 'Journal of Power Sources', 'Fire Safety Journal']
      },
      {
        title: '为什么是 Monash AM2D Hub',
        desc: '全球范围内，只有 AM2D Hub 同时具备「澳大利亚本土石墨资源供应链 + 2D 材料先进制造产线 + Ionic Industries 商业化落地 + Nature Communications 级 M-rGO/Li-S 器件研究」的完整链条。Majumder 教授的研究已经把「材料电化学性能」做到了极致，我的核心贡献在于补上「器件级热安全」这一工程化认证环节——这不是与现有博士生竞争重叠课题（他们做材料/电化学，我做热安全/数值模拟），而是为其现有材料研究「加持可量化的安全认证背书」，直接加速 Ionic Industries 的商业化进程。这也是我在已获 Monash 硕士录取并缴费后、评估了多个澳洲储能研究组后，选择直接申请 Majumder 教授组博士的核心原因。',
        tags: ['AM2D Hub 独有链条', '澳大利亚石墨资源', 'Ionic Industries 商业化加速', '非重叠互补贡献', 'Monash 生态熟悉']
      },
      {
        title: '三年研究时间表（可按教授节奏调整）',
        desc: '第一年（2026 下半年–2027 上半年）：材料热解表征与模型构建。对接 AM2D 的 M-rGO 电极与 Li-S 电池样品，完成 Thermakin 热解动力学参数提取（Ea、A、HRR）并验证 FDS 单体器件场模型；同步完成系统性文献综述（聚焦碳基储能器件热稳定性），明确对标实验方案并与 LiS-ultracapacitor 混合器件项目接口对齐。第二年（2027 下半年–2028 上半年）：模组级热失控传播与安全间距。扩展 FDS 模型至超级电容器/Li-S 模组级，参数对标 AM2D 在产线的热管理条件，完成第一篇 SCI 投稿（M-rGO 材料热稳定性 + 单体器件热场，目标 Journal of Power Sources）。第三年（2028 下半年–2029 上半年）：LiS-ultracapacitor 混合器件安全判据与工程化。承接未启动的 LiS-ultracapacitor 项目，完成模组级安全间距判据并通过 QRA 转化为工程标准建议，投第二篇 SCI（目标 Fire Safety Journal / Journal of Energy Storage）。博士答辩。',
        tags: ['Year1 材料热解参数化', 'Year2 模组级传播 + 第 1 篇 SCI', 'Year3 LiS-UC 混合判据 + 第 2 篇 SCI', '衔接 Ionic Industries 商业化']
      }
    ]
  },

  targets: {
    // ★ 套磁定向模块：专属 Monash AM2D Hub Majumder 教授
    enabled: true,
    intro: '本简历专为对接 Monash AM2D Hub 的碳基储能器件研究定制。已完整查阅 Professor Majumder 2025 年 Nature Communications 超级电容论文及 2024 年 Advanced Energy Materials 快充锂硫电池论文，并基于其研究缺口提出器件级热安全评估的具体贡献接口。套磁信可应要求提供。',
    items: [
      {
        name: 'Professor Mainak Majumder',
        lab: 'ARC Research Hub for Advanced Manufacturing with 2D Materials (AM2D) · Department of Mechanical and Aerospace Engineering, Monash University',
        focus: '碳基储能材料与器件：① 石墨烯基超级电容器（2025.09 Nature Communications——M-rGO 多尺度弯曲石墨烯，700°C 两步快速热退火工艺、e-IE 电化学层间膨胀使电容增 3 倍，5 万次循环保持率 91%、库仑效率 99.7%，体积能量密度 99.5 Wh/L，工艺兼容澳大利亚石墨资源可扩展量产）；② 锂硫电池（2024.11 Advanced Energy Materials 快充 Li-S 研究，解决性能快速降解问题）；③ 2D 材料先进制造；④ 主页列有「LiS Battery and ultracapacitor hybrid device」未启动项目。',
        fit: '已逐段研读您 2025 年 Nature Communications 论文，对 M-rGO 通过 700°C 两步热退火（抑制过度石墨化以保留离子可及微观结构）、e-IE 过程使 TEABF₄ / EMIMBF₄ 进入弯曲石墨烯层间从而电容增 3 倍且 50,000 次循环保持率 91% / 库仑效率 99.7% 的核心结论完全认同。该论文聚焦材料级电化学性能（BET 归一化电容 85 μF/cm² 有机 / 135 μF/cm² 离子液体），但器件级热安全边界（最大工作温升、热失控触发温度、模组级安全间距）尚未建立——而这是该技术从材料级走向可扩展量产（Ionic Industries 商业化）不可或缺的工程化认证环节。我已验证过的 Thermakin 热解动力学参数化方法可迁移至 M-rGO 电极材料（活化能 Ea、指前因子 A、释热速率 HRR 提取），FDS 可建立器件至模组级热失控传播场模型，QRA 则把结果转化为可决策的安全间距判据与热边界设计建议。您主页列有「LiS Battery and ultracapacitor hybrid device」未启动项目，我可直接承接其器件级热安全数值模拟部分（与其电化学性能研究并行推进，节省研发时间成本）。我已获 Monash 可持续能源方向硕士录取并缴纳留位费，熟悉 Monash 学术生态与 AM2D Hub 的工业合作模式（Ionic Industries、Australian graphite resources）。'
      }
    ]
  },

  outreach: {
    enabled: true,
    items: [
      {
        title: '安全科学公众传播',
        role: '光合计划教育类签约作者',
        period: '2022.09 - 至今',
        org: '快手平台（光合计划教育类签约作者）',
        desc: '依托短视频平台开展安全科学公众传播，围绕消防安全、储能安全、日常风险防范等主题制作科普内容，将安全工程研究与风险评估方法转化为公众可理解的安全教育内容；光合计划教育类签约作者身份体现平台对其内容专业性的认可。',
        metrics: [
          { value: '500万+', label: '累计播放量' },
          { value: '30万+',  label: '点赞' },
          { value: '近3万',  label: '粉丝' }
        ],
        link: ''
      }
    ]
  },

  skills: {
    enabled: true,
    showLegend: true,
    categories: [
      {
        name: '碳基储能材料热稳定性评估',
        items: [
          { name: 'Thermakin 热解动力学参数（Ea、A、HRR）提取', level: 4 },
          { name: 'FDS 器件级热场模拟与跨尺度耦合', level: 4 },
          { name: '锥状量热仪 / TGA-DSC 数据处理与参数拟合', level: 3 },
          { name: '本质安全设计 ISD（Inherent Safety Design）', level: 4 }
        ]
      },
      {
        name: '数值模拟与仿真',
        items: [
          { name: 'FDS（NIST 火灾场模拟 / 储能器件热失控场）', level: 4 },
          { name: 'Pathfinder（疏散仿真）', level: 4 },
          { name: 'AutoCAD / 3D 建模', level: 3 }
        ]
      },
      {
        name: '定量风险评估与安全判据',
        items: [
          { name: 'QRA 定量风险评价（IR/F-N/PFD 指标）', level: 4 },
          { name: 'LEC / LS 风险分级', level: 4 },
          { name: '安全间距判据建立（工程标准对接）', level: 4 }
        ]
      },
      {
        name: '研究工具与语言',
        items: [
          { name: 'MATLAB（TGA/量热实验数据处理与建模）', level: 4 },
          { name: 'Origin（热解动力学曲线拟合 & 可视化）', level: 4 },
          { name: 'AI 大模型辅助科研（GPT/Claude 英文文献、Copilot 参数调试）', level: 4 },
          { name: '英语（可独立撰写英文报告与 SCI 初稿）', level: 4 },
          { name: 'PTE Academic 总分 60（Monash 工程博士 PTE≥58 已达标）', level: 3 },
          { name: 'Microsoft Office', level: 4 }
        ]
      }
    ],
    extras: [
      { name: '学术写作', desc: '具备 SCI 目标期刊（Journal of Power Sources、Fire Safety Journal）的英文文献调研与写作基础，善用 GPT/Claude 辅助英文稿件打磨' },
      { name: '实验-数值一体化流程', desc: '熟悉「锥状量热仪实验 → Thermakin 热解参数化 → FDS 场模型 → QRA 判据」端到端工程流程；熟练运用 MATLAB、Origin 处理实验数据与建模、GitHub Copilot 辅助脚本与 FDS 模型参数调试' },
      { name: '标准与认证基础', desc: '了解 ISO 9001/14001/45001 体系、GB 30871-2022、GB/T 33000-2016 等安全标准；可衔接 Ionic Industries 商业化量产所需的安全认证流程' }
    ]
  },

  statement: {
    enabled: true,
    quote: '电化学性能决定器件能做什么，热安全边界决定器件能用在哪里。',
    paragraphs: [
      '作为安全工程专业学生，我的研究切入点始终是「从工程视角验证材料研究的可落地边界」——而非单纯的材料合成与电化学性能表征。',
      '本科阶段的训练让我为直接攻读博士做好了准备：独立完成锥状量热仪实验、Thermakin 热解参数拟合与 FDS 对标（校级优秀毕业论文），连续两年带队拿下全国安全科学与工程学科竞赛一/二等奖，将研究成果转化为第一作者专利与软著 3 项——使我熟悉「问题定义 → 实验/建模 → 成果输出」的完整研究闭环。',
      'Majumder 教授 2025 年 Nature Communications 的 M-rGO 超级电容器论文、2024 年 Advanced Energy Materials 的快充 Li-S 电池论文，已经证明了碳基储能器件「材料级电化学性能」的天花板高度；但决定这些器件能否真正落地 Ionic Industries 可扩展量产产线的关键工程化数据——器件级最大工作温升、热失控触发温度、模组级安全间距——目前仍属空白。',
      '我已获 Monash 可持续能源方向硕士录取并缴纳留位费，但评估了 AM2D Hub 的完整研究链条后，选择直接申请博士：以多年期独立研究补上「材料热解参数化 → 器件热场模拟 → 模组安全判据」这一缺口，并承接您主页「LiS Battery and ultracapacitor hybrid device」未启动项目的热安全部分——并行推进，不干预现有电化学研究节奏，直接加速商业化认证。',
    ],
    highlight: '给最先进的碳基储能器件，补上决定量产落地的热安全边界。',
    tags: ['M-rGO 超级电容器', '快充 Li-S 电池', 'AM2D Hub', '本质安全设计', '量产安全认证']
  },

  referees: {
    enabled: true,
    note: '推荐人详细信息可应要求提供（References available upon request）。',
    items: [
      {
        name: '阳富强',
        title: '教授 / 博士生导师，环境与安全工程学院副院长',
        org: '福州大学',
        relation: '本科毕业论文指导教师',
        email: 'ouyangfq@163.com',
        phone: ''
      },
      {
        name: '郭进',
        title: '教授 / 硕士生导师',
        org: '福州大学',
        relation: '科研与学科竞赛指导教师',
        email: 'guojin@fzu.edu.cn',
        phone: ''
      }
    ]
  },

  resume: {
    enabled: true,
    title: '下载完整学术 CV',
    description: '点击下载 PDF 版本学术简历（A4 排版，可直接用于套磁与网申）。若暂未上传 PDF，可使用「打印 / 另存为 PDF」导出当前页面；切换顶部「EN」后再导出即为英文版。',
    pdfUrl: 'assets/files/resume-zh.pdf',
    pdfFileName: '徐其胜-学术CV.pdf',
    footnote: '最后更新：2026 年 8 月'
  },

  nav: [
    { id: 'education',    label: '教育背景', enabled: true },
    { id: 'research',     label: '研究兴趣', enabled: true },
    { id: 'proposal',     label: '研究计划', enabled: true },
    { id: 'targets',      label: '目标导师', enabled: true },
    { id: 'publications', label: '学术成果', enabled: true },
    { id: 'experience',   label: '科研经历', enabled: true },
    { id: 'awards',       label: '荣誉奖项', enabled: true },
    { id: 'outreach',     label: '科普传播', enabled: true },
    { id: 'skills',       label: '学术技能', enabled: true },
    { id: 'statement',    label: '研究自述', enabled: true },
    { id: 'referees',     label: '推荐人',   enabled: true }
  ]
},

en: {

      hero: {
        intent: 'Class of 2026 · Targeting fully-funded PhD, Monash AM2D Hub (carbon storage thermal safety)',
        title: 'B.Eng. Safety Engineering (2026) · Thermal Safety of Carbon-Based Energy Storage Devices',
        // Hero tagline rule: ≤20 words, ≤4 lines, single-sentence
        tagline: '3-stage M-rGO / Li–S assessment chain (Thermakin → FDS → QRA) — qualified to dock Ionic Industries manufacturing safety certification.',
        keywords: ['M-rGO pyrolysis', 'Supercapacitor thermal field', 'Li–S safety criteria', 'Inherent safety design', 'Ionic production-line cert'],
        affiliation: 'Fuzhou University · Safety Engineering',
        availability: 'Available from Jul 2026',
        // 3×3 Snapshot panel (9 cells; accent ≤3 for visual hierarchy)
        stats: [
          { label: 'Target',        value: 'Monash PhD (Funded)', note: 'AM2D Hub / Majumder',  accent: true },
          { label: 'Topic',         value: 'M-rGO / Li–S',         note: 'Carbon storage thermal safety' },
          { label: 'Method chain',  value: 'Thermakin · FDS · QRA', note: 'Thesis-level end-to-end' },
          { label: 'Monash',        value: 'Master offer held',    note: 'Deposit paid · ecosystem OK', accent: true },
          { label: 'English',       value: 'PTE 60',               note: '≥ Monash Eng PhD 58 ✅' },
          { label: 'Institution',   value: '211 / Double First',   note: 'Fuzhou U · Safety Eng' },
          { label: '1st author IP', value: '3 pieces',             note: '1 patent + 2 copyright' },
          { label: 'National prize',value: '2× 1st place',         note: 'Team leader & 1st author × 2y' },
          { label: 'Validation',    value: 'Outstanding Thesis',   note: 'Sole-author experiment+model', accent: true }
        ],
        extras: ['Monash Master offer (deposit paid)', '2× national 1st prize (leader + 1st author)', 'Outstanding undergrad thesis (sole author)', 'PTE 60 — meets Monash Eng PhD threshold'],
        actions: [
          // CTA ONE-label rule: same label per intent across the whole page
          { text: 'Open CV (PDF) — Apply',   action: 'download', href: 'assets/files/resume-en.pdf', primary: true },
          { text: 'Monash fit & research hook', action: 'link', href: '#targets', primary: false }
        ]
      },

      education: {
        enabled: true,
        items: [
          {
            school: 'Monash University',
            degree: 'Master of Applied Engineering (admitted, not enrolled)',
            major: 'Sustainable Energy',
            start: '2026',
            end: '',
            location: 'Melbourne, Australia',
            status: 'admitted',
            note: 'Offer received and deposit paid; place currently held. After reviewing the supercapacitor and Li–S battery projects at Monash\'s AM2D Hub and concluding my methods chain can directly serve Prof. Majumder\'s device-level thermal-safety qualification work, I am applying directly for doctoral entry and therefore not yet enrolling in the master\'s programme.',
            gpa: '',
            courses: [],
            honors: []
          },
          {
            school: 'Fuzhou University',
            degree: 'B.Eng.',
            major: 'Safety Engineering',
            start: '2022.09',
            end: '2026.06',
            location: 'Fuzhou, Fujian, China',
            gpa: 'Core-course GPA 4.3/5.0, ranked 1/52',
            thesis: {
              title: 'Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo (阻燃竹材的热解和燃烧实验及数值模拟研究)',
              advisor: 'Prof. Fuqiang Yang',
              award: 'Fuzhou University Outstanding Undergraduate Thesis'
            },
            courses: [
              { name: 'Advanced Mathematics', score: '' },
              { name: 'University Physics', score: '' },
              { name: 'Fluid Mechanics', score: '' },
              { name: 'Engineering Thermodynamics', score: '' },
              { name: 'Heat Transfer', score: '' },
              { name: 'Combustion Science', score: '' },
              { name: 'Occupational Health Engineering', score: '96' },
              { name: 'Safety Education and Training', score: '95' },
              { name: 'Safety Systems Engineering', score: '92' },
              { name: 'Safety Assessment', score: '92' },
              { name: 'Building Safety', score: '92' }
            ],
            honors: [
              'National Inspirational Scholarship (multiple times)',
              'University Special Scholarship, Top 1% (multiple times)',
              'Fuzhou University "Triple-A" Student'
            ]
          }
        ]
      },

      research: {
        enabled: true,
        items: [
        {
          title: 'Thermal Safety Assessment of Carbon-Based Energy Storage Devices (primary focus)',
          desc: 'Targeting graphene-based supercapacitors (multiscale curved graphene M-rGO) and Li–S batteries, starting from pyrolysis-kinetic parameter characterisation (activation energy Ea, pre-exponential factor A, heat-release-rate HRR) to build a complete evaluation chain: material pyrolysis characterisation → device-level thermal field simulation → module-scale safety-spacing criteria. This directly fills the engineering qualification gap between material-level electrochemical performance and device-level thermal-runaway boundaries in carbon-based storage device R&D. Monash\'s AM2D Hub — with its globally leading platform in Australian-graphite resources and advanced 2D-material manufacturing — is the ideal environment for such work.',
          tags: ['Graphene / M-rGO supercapacitors', 'Li–S battery thermal stability', 'Inherent Safety Design (ISD)', 'Material pyrolysis kinetics', '2D-material manufacturing safety certification']
        },
        {
          title: 'Fire Dynamics and Numerical Simulation',
          desc: 'Fire field modelling with FDS and fire spread mechanisms, with a focus on heat-release-rate prediction and smoke transport and control; material combustion characterisation and fire prediction using Thermakin. The methods transfer directly to thermal-runaway field simulation and cross-scale propagation characterisation of carbon-based storage devices.',
          tags: ['FDS', 'Thermakin', 'Fire spread mechanisms', 'Heat release rate (HRR)']
        },
        {
          title: 'Quantitative Risk Assessment of Energy Systems',
          desc: 'QRA for storage systems and energy-manufacturing production lines, studying hazard identification, risk-graded control and safety-spacing criteria under the Inherent Safety Design (ISD) paradigm so simulation outputs can directly serve engineering design and standard/certification setting.',
          tags: ['QRA', 'Inherent Safety Design (ISD)', 'Risk grading', 'Safety-spacing criteria']
        },
        {
          title: 'Occupant Egress and Emergency Optimisation',
          desc: 'Multi-scenario emergency evacuation simulation with Pathfinder, focusing on crowd organisation and smart egress guidance; related work won first and second prizes at national competitions.',
          tags: ['Pathfinder', 'Evacuation simulation', 'Crowd dynamics']
        }
      ]
      },

      publications: {
        enabled: true,
        papers: [
          {
            title: 'Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo',
            journal: 'Fuzhou University Undergraduate Thesis (Outstanding, university level)',
            status: 'completed',
            authors: 'Qisheng Xu (sole author)',
            authorNote: 'Advisor: Prof. Fuqiang Yang; sole-author cone-calorimetry experiments + Thermakin pyrolysis-kinetic parameter (Ea, A, HRR) fitting + FDS numerical calibration. The validated "material pyrolysis characterisation → numerical extrapolation → risk quantification" pipeline transfers directly to thermal-stability assessment of M-rGO graphene electrodes and Li–S battery materials — feasibility proof for the proposed doctoral methods chain.',
            doi: '',
            link: ''
          }
        ],
        patents: [
          { type: 'patent',   name: 'An Exit-Indication Terminal and Evacuation System (一种出口指示终端及疏散系统)', role: 'First author', number: '', date: '2025.08' },
          { type: 'software', name: 'Graded Control Software for Occupational Health Physical Hazards (职业卫生物理危害分级管控软件)', role: 'First author', number: '', date: '' },
          { type: 'software', name: 'Dynamic Monitoring Service Software for On-Duty Personnel (在岗人员动态监测服务软件)', role: 'First author', number: '', date: '' },
          { type: 'software', name: 'Dual Verification System for High-Risk Operator Qualification and Identity (高危作业人员资质与身份双验证系统)', role: '', number: '', date: '2025.10' },
          { type: 'software', name: 'Remote-Sensing Monitoring and Assessment System for the Ecological Environment of Construction Sites (建筑施工场地生态环境遥感监测与评价系统)', role: 'Second author', number: '', date: '' },
          { type: 'software', name: 'Regional Carbon Emission Estimation and Environmental Safety Assessment System Based on Remote Sensing Imagery (基于遥感影像的区域碳排放估算与环境安全评估系统)', role: 'Fourth author', number: '', date: '' }
        ]
      },

      experience: {
        enabled: true,
        items: [
          {
            name: 'Design of a Dual-Prevention Mechanism for Fuzhou Library',
            role: 'Project Leader',
            period: '2025.04 - 2025.06',
            org: 'Fuzhou Library',
            description: 'Safety management system optimisation for a public cultural venue, establishing a dual-prevention mechanism of hazard identification and risk screening.',
            points: [
              'Served as project leader: overall planning, task allocation and cross-department coordination, delivering all outputs on schedule.',
              'Led the team in designing and implementing the dual-prevention mechanism (hazard identification and risk screening), improving the library safety management system and reducing latent hazards.',
              'Designed a risk-graded control and hazard-screening scheme, forming a closed-loop "identification – assessment – response" management model.',
              'Applied SCL and JHA for hazard identification and the LS and LEC methods for risk grading, coordinating with functional departments to implement the scheme.'
            ],
            methods: ['SCL', 'JHA', 'LS method', 'LEC method']
          },
          {
            name: 'Fire Safety Evacuation Design for the Ta Lane Historic District, Three Lanes and Seven Alleys, Fuzhou',
            role: 'Project Leader',
            period: '2024.12 - 2025.01',
            org: 'Three Lanes and Seven Alleys Historic District, Fuzhou',
            description: 'Fire evacuation modelling and scheme design addressing fire risk and egress difficulties in a historic district.',
            points: [
              'Served as project leader: oversaw the full workflow of field survey, modelling and scheme design, and coordinated with district authorities to put the results into practice.',
              'Built the district evacuation model, produced building CAD drawings and 3D models, and simulated multi-scenario emergency evacuation with Pathfinder.',
              'Following the General Code for Fire Protection of Buildings and other standards, optimised escape routes and safety facilities for different occupant groups through field survey and data analysis.',
              'Conducted qualitative and quantitative fire risk analysis, designed an evacuation route optimisation scheme, and coordinated with relevant departments to ensure implementation.'
            ],
            methods: ['Pathfinder', 'AutoCAD / 3D modelling', 'Building fire codes', 'Quantitative risk analysis']
          }
        ]
      },

      awards: {
        enabled: true,
        items: [
          {
        name: 'First Prize, 12th National Undergraduate Practice and Innovation Works Competition in Safety Science and Engineering',
            level: 'National',
            date: '2026.08',
            role: 'Team leader and first author',
            work: '"Multimodal AI-Interactive Detection Robot System" (多模态 AI 交互探测机器人系统)',
            desc: 'The highest-level undergraduate discipline competition in Chinese safety science & engineering. The robot integrates multimodal sensing — vision / temperature / gas (H₂, CO, VOC, electrolyte vapour) — for on-site reconnaissance. It can directly serve early anomaly-temperature detection and device-level thermal-runaway identification on M-rGO supercapacitor / Li–S battery module manufacturing lines, fully matching the in-line safety-monitoring needs of Prof. Majumder’s AM2D Hub advanced manufacturing facility.',
            highlight: true
          },
          {
            name: 'Second Prize, 11th National Undergraduate Practice and Innovation Works Competition in Safety Science and Engineering',
            level: 'National',
            date: '2025.08',
            role: 'Team leader and first author',
            work: '"Smart Solution for Building Crowd Entropy Reduction" (建筑人流熵减智慧解决方案)',
            desc: 'The preceding edition of the same competition series; led the team as first author and won awards in two consecutive editions. The work focused on crowd-density monitoring and smart egress guidance, consistent with the research line on emergency evacuation simulation.',
            highlight: false
          },
          {
            name: 'Fuzhou University Outstanding Undergraduate Thesis',
            level: 'University',
            date: '2026.06',
            role: 'Sole author',
            work: '"Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo" (阻燃竹材的热解和燃烧实验及数值模拟研究)',
            desc: 'Combined experiments with numerical simulation to study the pyrolysis characteristics and combustion behaviour of flame-retardant bamboo.',
            highlight: true
          },
          { name: 'National Inspirational Scholarship / University Special Scholarship', level: 'Multiple awards (Top 1%)', date: '2022 - 2025', role: '', work: '', desc: 'Recognising outstanding academic and research performance.', highlight: false },
          { name: 'Fuzhou University "Triple-A" Student', level: 'University', date: '', role: '', work: '', desc: '', highlight: false }
        ]
      },

      proposal: {
        enabled: true,
        intro: 'This doctoral research plan is tailored specifically for Monash AM2D Hub carbon-based storage device research (M-rGO supercapacitors / fast-charging Li–S batteries / LiS–ultracapacitor hybrid device) and can be refined with Prof. Majumder against the group’s ongoing projects. My Thermakin + FDS + QRA methods chain runs in parallel and does not disrupt the group’s existing electrochemistry cadence.',
        items: [
          {
            title: 'Research Question',
            desc: 'In 2025 the AM2D Hub demonstrated in Nature Communications that M-rGO multiscale curved-graphene supercapacitors achieve 99.5 Wh/L volumetric energy density with 91 % retention over 50,000 cycles; in 2024 Advanced Energy Materials the group published a fast-charging Li–S battery solution. Both works focus on material-level electrochemical performance, but the critical step from material-level to device/module-level engineering qualification is still missing: maximum acceptable device operating temperature for M-rGO electrodes, thermal-stability evolution during the e-IE (operando interlayer expansion) process, coupling conditions between Li–S polysulfide shuttle and thermal-runaway onset, and module-level safety-spacing for the hybrid device — none of these have a quantified criterion. These data are prerequisites for the safety certification needed by the Ionic Industries commercialisation roadmap (scalable manufacturing from Australian graphite resources).',
            tags: ['M-rGO supercapacitor', 'Fast-charging Li–S battery', 'LiS–ultracapacitor hybrid device', 'Device-level thermal boundary gap', 'Scale-up safety certification']
          },
          {
            title: 'Methods and Approach',
            desc: 'The technical path is "material pyrolysis parameterisation → device thermal-field simulation → module safety-spacing criteria". ① Thermakin characterises pyrolysis kinetics for M-rGO electrodes and Li–S cell materials (cone-calorimetry / STA experimental data as input → fit activation energy Ea, pre-exponential factor A, heat-release-rate HRR curves). ② FDS builds single-device and supercapacitor-module thermal-field models, capturing the coupled thermal response of the e-IE expansion and Li–S polysulfide shuttle; thermal boundaries are calibrated against the AM2D Hub’s in-line manufacturing thermal-management conditions. ③ QRA translates the results into engineering-decision-ready safety-spacing criteria and thermal-boundary design recommendations via risk metrics (individual risk IR, societal risk F–N curves, thermal-runaway onset probability PFD), directly serving Ionic Industries production-line certification. My undergraduate thesis validated this end-to-end pipeline.',
            tags: ['Thermakin pyrolysis parameterisation', 'FDS device-level thermal field', 'M-rGO electrode Ea/A/HRR extraction', 'Li–S shuttle–thermal coupling', 'Ionic Industries production-line certification']
          },
          {
            title: 'Expected Outcomes & Deliverables',
            desc: 'Three deliverables aligned with the real needs of the AM2D Hub / Ionic Industries: ① One M-rGO / Li–S material pyrolysis-kinetic parameter dataset (reusable as FDS inputs across the group, reducing redundant modelling work). ② One set of safety-spacing criteria and thermal-boundary design rules for M-rGO supercapacitor cells and modules (docking directly to the LiS–ultracapacitor hybrid device structure design and production certification). ③ 2–3 SCI journal papers: Paper 1 (Y2) targets Journal of Power Sources / Electrochimica Acta for M-rGO material thermal stability characterisation; Paper 2 (Y2–Y3) targets Journal of Energy Storage / Fire Safety Journal for the module-level safety-spacing criterion; a third paper can be added if the LiS–ultracapacitor hybrid project launches.',
            tags: ['M-rGO / Li–S parameter dataset', 'Engineering-ready safety-spacing criteria', '2–3 SCI papers planned', 'Journal of Power Sources', 'Fire Safety Journal']
          },
          {
            title: 'Why Monash AM2D Hub',
            desc: 'Globally, only the AM2D Hub simultaneously brings together the complete chain of Australian native graphite resources → advanced 2D-material manufacturing → Ionic Industries commercialisation → Nature Communications–grade M-rGO / Li–S device science. Prof. Majumder’s group has already taken the material-level electrochemical performance to the ceiling; my core contribution is to add the device-level thermal-safety engineering qualification layer — not competing with existing PhD candidates (they work on materials / electrochemistry; I work on thermal safety / numerical simulation), but instead adding quantified safety certification endorsement to the group’s existing material results, directly accelerating Ionic Industries commercialisation. This is why — after receiving a paid Monash Master’s offer and surveying multiple Australian storage groups — I have chosen to apply directly to Prof. Majumder’s group for a doctorate.',
            tags: ['AM2D Hub unique chain', 'Australian graphite resources', 'Ionic Industries commercialisation accelerator', 'Non-overlapping complementary contribution', 'Monash ecosystem familiarity']
          },
          {
            title: 'Three-year Research Timeline (adjustable to the supervisor’s cadence)',
            desc: 'Year 1 (H2 2026 – H1 2027): material pyrolysis characterisation and model construction. Interface with AM2D M-rGO electrode and Li–S cell samples, complete Thermakin pyrolysis-kinetic extraction (Ea, A, HRR) and validate the FDS single-device thermal-field model; systematic literature review focused on carbon-based storage device thermal stability; align the benchmark plan with the LiS–ultracapacitor hybrid device project interface. Year 2 (H2 2027 – H1 2028): module-scale thermal-runaway propagation and safety spacing. Extend FDS models to supercapacitor / Li–S module scale; calibrate parameters against AM2D in-line thermal-management conditions; submit Paper 1 (M-rGO thermal stability + device-level thermal field, target Journal of Power Sources). Year 3 (H2 2028 – H1 2029): LiS–ultracapacitor hybrid device safety criteria and engineering roll-out. Contribute the thermal-safety module for the not-yet-started LiS–ultracapacitor hybrid project, finalise module-level safety-spacing criteria via QRA as engineering standard recommendations, submit Paper 2 (target Fire Safety Journal / Journal of Energy Storage), thesis defence.',
            tags: ['Year 1 material pyrolysis parameterisation', 'Year 2 module propagation + Paper 1', 'Year 3 LiS–UC hybrid criterion + Paper 2', 'Ionic Industries commercialisation bridge']
          }
        ]
      },

      targets: {
        // ★ Target-supervisor module — dedicated to Monash AM2D Hub / Prof. Majumder
        enabled: true,
        intro: 'This CV is customised for Monash AM2D Hub carbon-based storage device R&D. I have read Prof. Majumder’s 2025 Nature Communications supercapacitor paper and 2024 Advanced Energy Materials fast-charging Li–S paper in full, and propose a concrete contribution interface around device-level thermal safety assessment gaps identified in the work. Outreach email available on request.',
        items: [
          {
            name: 'Professor Mainak Majumder',
            lab: 'ARC Research Hub for Advanced Manufacturing with 2D Materials (AM2D) · Department of Mechanical and Aerospace Engineering, Monash University',
            focus: 'Carbon-based energy storage materials and devices: ① Graphene-based supercapacitors (Nature Communications Sep 2025: M-rGO multiscale curved graphene, two-step rapid thermal annealing @ 700 °C, e-IE tripling capacitance, 91 % retention @ 50 k cycles, 99.7 % Coulombic efficiency, 99.5 Wh/L, process compatible with Australian-graphite scale-up); ② Li–S batteries (Advanced Energy Materials Nov 2024: fast-charging Li–S solution overcoming rapid performance fade); ③ Advanced 2D-material manufacturing; ④ "LiS Battery and ultracapacitor hybrid device" listed on his homepage as a not-yet-started project.',
            fit: 'I have read your 2025 Nature Communications paper line by line. I fully appreciate the core result: M-rGO achieves high volumetric energy density via two-step 700 °C thermal annealing (suppressing over-graphitisation to preserve ion-accessible microstructure), and the e-IE (operando electrochemical interlayer expansion) process drives TEABF₄ / EMIMBF₄ into the curved graphene galleries — tripling capacitance with 91 % retention at 99.7 % Coulombic efficiency over 50,000 cycles, together with BET-normalised capacitances of 85 µF/cm² (organic) and 135 µF/cm² (ionic liquid). The paper focuses on material-level electrochemical performance; device-level thermal-safety boundaries (maximum operating temperature, thermal-runaway onset temperature, module-level safety spacing) remain unestablished — and this is the exact engineering-qualification gap required before Ionic Industries can commercialise scale-up from Australian graphite. My validated Thermakin pyrolysis-kinetic pipeline transfers directly to M-rGO electrode materials (activation energy Ea, pre-exponential factor A, heat-release-rate HRR extraction), FDS can build device-to-module level thermal-runaway propagation field models, and QRA converts the results into engineering-decision-ready safety-spacing and thermal-boundary design criteria. The "LiS Battery and ultracapacitor hybrid device" not-yet-started project on your homepage can host my device-level thermal-safety modelling contribution in parallel to your electrochemistry work stream, saving overall R&D cycle time for commercialisation. I already hold a paid Monash Master’s offer in Sustainable Energy and am familiar with the Monash research ecosystem plus the AM2D Hub industrial collaboration model (Ionic Industries, Australian graphite resources).'
          }
        ]
      },

      outreach: {
        enabled: true,
        items: [
          {
            title: 'Safety Science Public Communication',
            role: 'Contracted Creator, Guanghe Programme (Education)',
            period: '2022.09 - Present',
            org: 'Kuaishou platform (Guanghe Programme education-signed creator)',
            desc: 'Conducted safety science public communication via short-video platform, producing science content on fire safety, energy-storage safety, and everyday risk prevention, translating safety-engineering research and risk-assessment methods into public-facing safety education; the Guanghe Programme education-signed creator status reflects the platform\u2019s recognition of content professionalism.',
            metrics: [
              { value: '5M+', label: 'Total views' },
              { value: '300K+', label: 'Likes' },
              { value: '~30K', label: 'Followers' }
            ],
            link: ''
          }
        ]
      },

      skills: {
        enabled: true,
        showLegend: true,
        categories: [
          {
            name: 'Thermal Stability of Carbon-Based Storage Materials',
            items: [
              { name: 'Thermakin pyrolysis-kinetic extraction (Ea, A, HRR)', level: 4 },
              { name: 'FDS device-level thermal-field & cross-scale coupling', level: 4 },
              { name: 'Cone-calorimetry / TGA–DSC data processing & parameter fitting', level: 3 },
              { name: 'Inherent Safety Design (ISD)', level: 4 }
            ]
          },
          {
            name: 'Numerical Simulation',
            items: [
              { name: 'FDS (NIST fire field modelling / storage-device thermal-runaway field)', level: 4 },
              { name: 'Pathfinder (evacuation simulation)', level: 4 },
              { name: 'AutoCAD / 3D modelling', level: 3 }
            ]
          },
          {
            name: 'Quantitative Risk Assessment & Safety Criteria',
            items: [
              { name: 'QRA (IR, F–N curve, PFD metrics)', level: 4 },
              { name: 'LEC / LS risk grading', level: 4 },
              { name: 'Safety-spacing criteria (engineering standard linkage)', level: 4 }
            ]
          },
          {
            name: 'Research Tools & Languages',
            items: [
              { name: 'MATLAB (TGA / calorimetric data processing & modelling)', level: 4 },
              { name: 'Origin (pyrolysis-kinetic curve fitting & visualisation)', level: 4 },
              { name: 'AI LLMs for research (GPT/Claude literature, Copilot parameter tuning)', level: 4 },
              { name: 'English (writes technical reports + SCI drafts independently)', level: 4 },
              { name: 'PTE Academic 60 — meets Monash Engineering PhD threshold of 58', level: 3 },
              { name: 'Microsoft Office', level: 4 }
            ]
          }
        ],
        extras: [
          { name: 'Academic writing', desc: 'Foundation in SCI-target journals (Journal of Power Sources, Fire Safety Journal); uses GPT/Claude to polish English manuscripts and literature surveys' },
          { name: 'Experiment–simulation pipeline', desc: 'Comfortable with the end-to-end "cone-calorimetry experiment → Thermakin pyrolysis parameterisation → FDS field model → QRA criteria" engineering workflow; MATLAB / Origin for experimental data processing & modelling, GitHub Copilot assists scripting and FDS model parameter tuning' },
          { name: 'Standards & certification foundation', desc: 'Familiar with ISO 9001 / 14001 / 45001 management systems, GB 30871-2022, GB/T 33000-2016; can plug into the safety-certification pipeline required for Ionic Industries commercial scale-up.' }
        ]
      },

      statement: {
        enabled: true,
        quote: 'Electrochemical performance sets what a device can do — thermal-safety boundaries set where it can be deployed.',
        paragraphs: [
          'As a Safety Engineering student, my research entry point is always "verifying the deployability boundary of materials research from an engineering perspective" — not material synthesis or electrochemical performance characterisation itself.',
          'My undergraduate training has prepared me for direct doctoral entry: sole-author cone-calorimetry experiments, Thermakin pyrolysis-parameter fitting and FDS calibration (Outstanding Undergraduate Thesis), two consecutive national-level first/second prizes as team leader and first author, and three first-author patents/software copyrights — giving me hands-on experience of the full "problem definition → experiment / modelling → dissemination" research cycle.',
          'Prof. Majumder’s 2025 Nature Communications paper on M-rGO supercapacitors and his 2024 Advanced Energy Materials fast-charging Li–S work have already set the ceiling for material-level electrochemical performance in carbon-based storage devices. But the critical engineering data that will decide whether these devices can ship on the Ionic Industries scalable manufacturing line — device-level maximum operating temperature, thermal-runaway onset temperature, and module-level safety spacing — are still blank.',
          'Holding a paid Monash Master’s offer in Sustainable Energy, I reviewed the full AM2D Hub research chain and chose direct doctoral entry: investing multi-year independent work to close the "material pyrolysis parameterisation → device thermal-field simulation → module safety-spacing criteria" gap, and hosting the thermal-safety portion of your homepage’s "LiS Battery and ultracapacitor hybrid device" not-yet-started project — running in parallel, without disrupting the group’s existing electrochemistry cadence, to directly accelerate commercialisation certification.'
        ],
        highlight: 'Adding the thermal-safety boundary that qualifies cutting-edge carbon-based storage devices for scalable production.',
        tags: ['M-rGO supercapacitors', 'Fast-charging Li–S batteries', 'AM2D Hub', 'Inherent Safety Design', 'Scale-up safety certification']
      },

      referees: {
        enabled: true,
        note: 'Full referee details are available on request.',
        items: [
          {
            name: 'Fuqiang Yang',
            title: 'Professor / Doctoral Supervisor; Vice-Dean, College of Environment & Safety Engineering',
            org: 'Fuzhou University',
            relation: 'Undergraduate thesis supervisor',
            email: 'ouyangfq@163.com',
            phone: ''
          },
          {
            name: 'Jin Guo',
            title: 'Professor / Master Supervisor',
            org: 'Fuzhou University',
            relation: 'Supervisor for research and competition projects',
            email: 'guojin@fzu.edu.cn',
            phone: ''
          }
        ]
      },

      resume: {
        enabled: true,
        title: 'Download Full Academic CV',
        description: 'Download the PDF version (A4 layout, ready for supervisor outreach and online applications). If no PDF is uploaded yet, use "Print / Save as PDF" to export this page.',
        pdfUrl: 'assets/files/resume-en.pdf',
        pdfFileName: 'Qisheng-Xu-Academic-CV.pdf',
        footnote: 'Last updated: August 2026'
      },

      nav: [
        { id: 'education',    label: 'Education',   enabled: true },
        { id: 'research',     label: 'Research',    enabled: true },
        { id: 'proposal',     label: 'Plan',        enabled: true },
        { id: 'targets',      label: 'Supervisors', enabled: true },
        { id: 'publications', label: 'Publications', enabled: true },
        { id: 'experience',   label: 'Experience',  enabled: true },
        { id: 'awards',       label: 'Awards',      enabled: true },
        { id: 'outreach',     label: 'Outreach',    enabled: true },
        { id: 'skills',       label: 'Skills',      enabled: true },
        { id: 'statement',    label: 'Statement',   enabled: true },
        { id: 'referees',     label: 'Referees',    enabled: true }
      ]
    }
  }
};
