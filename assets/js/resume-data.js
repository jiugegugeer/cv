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
  pageTitle: { zh: '徐其胜 - 学术简历 - 安全工程 / 火灾动力学与能源安全', en: 'Qisheng Xu - Academic CV - Safety Engineering / Fire Dynamics & Energy Safety' },
  description: {
    zh: '徐其胜，福州大学安全工程学士（2026 届），研究方向为火灾动力学数值模拟与储能安全，第一作者专利与软著 3 项、国家级竞赛奖项 2 项，直申澳洲可持续能源方向全奖博士。',
    en: 'Qisheng Xu, B.Eng. in Safety Engineering from Fuzhou University (2026). Research focuses on fire dynamics modelling and energy storage safety; three first-author patents and software copyrights, and two national competition awards. Applying directly for a fully-funded PhD in Sustainable Energy in Australia.'
  },
  keywords: '学术简历,安全工程,火灾动力学,FDS,Pathfinder,定量风险评估,储能安全,数值模拟,MATLAB,Origin',
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
    intent: '2026 届本科 · 直申澳洲可持续能源方向全奖博士',
    title: '安全工程学士（2026 届） · 火灾动力学与能源系统安全',
    tagline: '以火灾动力学数值模拟与定量风险评估为方法底座，研究储能系统热失控的触发、传播与防控边界——从器件级热稳定性到舱级安全间距判据，让模拟结果可直接服务工程设计与标准制定。',
    keywords: ['FDS 火灾场模拟', 'Thermakin 热解建模', 'QRA 定量风险评估', '储能热失控', '安全间距判据'],
    affiliation: '福州大学 · 安全工程',
    // 可入学时间：填入后首屏以 chip 形式展示（如 '2026.07 可入学'），不填则不显示
    availability: '2026.07 可入学',
    extras: ['全国大赛一等奖（2026.08）', '校级优秀本科毕业论文', '莫纳什大学硕士录取（已缴留位费）', 'PTE Academic 60（对标 IELTS 6.5）'],
    actions: [
      { text: '下载学术 CV', action: 'download', href: '', primary: true },
      { text: '查看学术成果', action: 'link', href: '#publications', primary: false }
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
        note: '已获录取并缴纳留位费，入学资格保留中；经评估后决定直接申请博士学位，故暂未注册入学。',
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
        title: '可持续能源与储能安全（主攻方向）',
        desc: '围绕能源转型中的系统安全问题，研究电池储能从器件级热稳定性、模组级热失控传播到舱级安全间距判据的全链条安全评价。结合数值模拟与定量风险评估，构建可直接服务工程设计与标准制定的方法；本科阻燃材料热解建模经验可下探至电池材料释热特性分析。澳大利亚拥有全球领先的可再生能源渗透率与大规模储能部署，是验证该类方法的理想场景。',
        tags: ['储能安全', '热失控传播', '器件级热稳定性', '安全间距判据', '能源转型']
      },
      {
        title: '火灾动力学与数值模拟',
        desc: '基于 FDS 的火灾场模拟与火蔓延机理研究，关注热释放速率预测、烟气输运与控制；结合 Thermakin 开展材料燃烧特性与火灾预测建模。',
        tags: ['FDS', 'Thermakin', '火蔓延机理', '烟气控制']
      },
      {
        title: '能源系统风险定量评估',
        desc: '面向能源与工业系统的定量风险评价（QRA），研究双重预防机制下的风险辨识、分级管控与隐患排查治理闭环，以及安全系统韧性评估。',
        tags: ['QRA', '双重预防机制', '风险分级管控', '系统韧性']
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
        authorNote: '指导教师：阳富强 教授；实验+数值模拟，验证「器件级材料表征 → 数值外推」方法链',
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
        desc: '国内安全科学与工程领域最高水平的大学生学科竞赛。作品将多模态感知（视觉/气体/温度）集成于灾害现场探测机器人，可用于火灾/储能事故现场的先期侦察与风险识别——多模态感知能力与储能热失控早期探测场景直接相关。',
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
    intro: '以下为博士阶段研究计划的初稿框架，可在联系导师时按其课题组在研方向进一步细化；本人方法链（FDS + Thermakin + QRA）可直接承接导师现有的储能安全或火灾科学课题。',
    items: [
      {
        title: '研究问题',
        desc: '储能电站与可再生能源基础设施在规模化部署中，电池热失控的触发机理、传播路径与防控边界仍不清晰。核心问题可归结为：在给定的储能舱布置与热管理条件下，单体电池热失控如何在模组与舱级尺度上传播，以及工程上可承受的最小安全间距与抑制策略是什么。',
        tags: ['储能安全', '热失控传播', '电池火灾']
      },
      {
        title: '方法与路径',
        desc: '先用 Thermakin 表征器件级电池材料的热解与燃烧释热特性，再以 Fire Dynamics Simulator（FDS）构建模组至舱级尺度的火灾场模型，刻画热失控的跨尺度传播；模型参数以缩尺与中等尺度燃烧实验标定，最终以定量风险评估（QRA）把模拟结果转化为可决策的风险指标与安全间距判据。本科毕业论文《阻燃竹材的热解和燃烧实验及数值模拟研究》已验证这条「器件级材料表征 → 数值外推 → 风险量化」技术路线的可行性。',
        tags: ['FDS', 'Thermakin', 'QRA', '器件级表征', '实验标定']
      },
      {
        title: '预期成果',
        desc: '形成一套可复用的储能火灾风险评估方法：给出舱级热失控传播的判据与安全间距建议，拟投稿 SCI 期刊论文，并使方法可直接服务工程设计与标准制定，而不停留在算例层面；方法链可迁移至导师组在研的储能安全或火灾科学课题。',
        tags: ['SCI 论文', '安全间距判据', '工程标准']
      },
      {
        title: '为什么是澳大利亚',
        desc: '澳大利亚拥有全球领先的可再生能源渗透率与大规模储能部署，南澳与西澳的电网侧电池储能项目为热失控传播研究提供了接近真实尺度的数据与验证场景；当地高校在火灾科学与储能安全方向有长期积累，是验证并推广该方法最合适的环境。',
        tags: ['澳洲能源转型', '电网侧储能', '实地验证']
      },
      {
        title: '三年研究时间表',
        desc: '第一年（2026 下半年–2027）：器件级材料热解表征与模型构建。以 Thermakin 表征目标电池/M-rGO 材料热解与释热特性，搭建 FDS 单体电池热失控场模型，完成系统性文献综述并确定缩尺实验方案。第二年（2027–2028）：模组级热失控传播模拟与实验标定。扩展至模组级 FDS 场模型，与导师组实验数据（亚音速燃烧风洞/缩尺燃烧实验）对标验证，拟投稿第一篇 SCI 论文。第三年（2028–2029）：舱级安全间距判据与 QRA 工程化。扩展至舱级尺度，以 QRA 将模拟结果转化为安全间距判据与工程标准建议，拟投稿第二篇 SCI 论文，并将方法迁移至导师在研课题。',
        tags: ['器件级表征', '模组级传播', '舱级判据', '拟投稿 SCI']
      }
    ]
  },

  targets: {
    // ★ 套磁定向模块：填入目标导师后，把 enabled 改为 true 即在「研究计划」之后展示
    //   这是博士申请中"做过功课"的最强信号之一 —— 让目标教授看到你研究过他的课题
    enabled: true,
    intro: '已针对以下课题组的研究方向做过文献调研，方法链（FDS + Thermakin + QRA）可承接其储能安全 / 火灾科学在研课题；具体套磁信可应要求提供。',
    items: [
      {
        name: 'Professor Mainak Majumder',
        lab: 'ARC Research Hub for Advanced Manufacturing with 2D Materials (AM2D) · Department of Mechanical and Aerospace Engineering, Monash University',
        focus: '碳基储能材料与器件：石墨烯基超级电容器、锂硫电池、二维材料先进制造。2025.09 Nature Communications 发表 M-rGO 多尺度弯曲石墨烯超级电容器——700°C 两步快速热退火、e-IE 电化学层间膨胀使电容增 3 倍，5 万次循环保持率 91%、库仑效率 99.7%，体积能量密度 99.5 Wh/L；2024.11 Advanced Energy Materials 发表快充锂硫电池研究。主页列有「LiS Battery and ultracapacitor hybrid device」未启动项目。',
        fit: '已研读您 2025 年 Nature Communications 论文——M-rGO 经 700°C 两步热退火实现高体积能量密度，e-IE 过程使有机铵/离子液体进入弯曲石墨烯层间、电容增 3 倍且 5 万次循环保持率 91%。该论文聚焦材料级电化学性能，器件级热失控边界与安全间距判据尚未建立——这正是我的方法链可补齐的环节：以 Thermakin 表征 M-rGO 电极材料热解与释热特性，以 FDS 构建器件级热失控传播场模型，以 QRA 将模拟结果转化为安全间距与热边界判据。您主页列有「LiS Battery and ultracapacitor hybrid device」未启动项目，我可承接其器件级热安全数值模拟部分。已获 Monash 可持续能源方向硕士录取并缴费，熟悉该校学术生态。'
      },
      {
        name: 'Dr Maryam Ghodrat（Senior Lecturer）',
        lab: 'Advanced Battery Safety Group (ABS) · School of Engineering and Technology, UNSW Canberra',
        focus: 'Li-ion 电池与大规模储能系统安全、热失控机理与传播、火灾 CFD/zone 建模、Wildland Urban Interface 火灾；2021 年创立 Pyrometric Lab 并自建模块化亚音速燃烧风洞，用于可控燃烧流场下的热失控传播实验验证。',
        fit: '已关注您课题组在 Li-ion 电池热失控传播与大规模储能系统安全方向的研究，特别是 2021 年创立 Pyrometric Lab 自建模块化亚音速燃烧风洞——该风洞可产生可控燃烧流场用于热失控传播实验验证。我的方法链与其实验能力高度互补：以 Thermakin 表征电池材料热解释热作为 FDS 输入边界，以 FDS 构建储能舱级热失控传播场模型，模型参数可直接由亚音速燃烧风洞实验数据标定与验证，最终以 QRA 转化为安全间距判据——「实验标定 → 数值外推 → 风险量化」方法链与课题组「实验+CFD」研究范式同构。'
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
        name: '数值模拟与仿真',
        items: [
          { name: 'FDS（火灾场模拟）', level: 4 },
          { name: 'Pathfinder（疏散仿真）', level: 4 },
          { name: 'Thermakin（火灾预测，美国马里兰大学）', level: 3 },
          { name: 'AutoCAD / 3D 建模', level: 3 }
        ]
      },
      {
        name: '研究方法与风险评估',
        items: [
          { name: 'SCL 安全检查表法', level: 4 },
          { name: 'JHA 工作危害分析', level: 4 },
          { name: 'LEC / LS 风险分级法', level: 4 },
          { name: 'QRA 定量风险评价', level: 3 }
        ]
      },
      {
        name: '标准与体系',
        items: [
          { name: 'ISO 9001 内审员资格', level: 4 },
          { name: 'ISO 14001 / ISO 45001', level: 3 },
          { name: 'GB 30871-2022', level: 3 },
          { name: 'GB/T 33000-2016', level: 3 }
        ]
      },
      {
        name: '研究工具与语言',
        items: [
          { name: 'MATLAB（实验数据处理与建模）', level: 4 },
          { name: 'Origin（数据可视化与曲线拟合）', level: 4 },
          { name: 'AI 大模型辅助科研（GPT/Claude 文献综述、Copilot 代码生成）', level: 4 },
          { name: '英语（听说读写熟练，可独立撰写英文报告）', level: 4 },
          { name: 'PTE Academic 总分 60（对标 IELTS 6.5）', level: 3 },
          { name: 'Microsoft Office', level: 4 }
        ]
      }
    ],
    extras: [
      { name: '学术写作', desc: '具备英文文献调研与科技写作基础' },
      { name: '实验与建模', desc: '熟悉火灾场景建模、疏散仿真与定量风险评估的工程流程；熟练运用 MATLAB、Origin 处理实验数据与建模，善用 GPT/Claude 进行英文文献综述与学术写作、GitHub Copilot 辅助 Python/MATLAB 脚本与 FDS 模型参数调试' }
    ]
  },

  statement: {
    enabled: true,
    quote: '安全工程不仅是防范，更是系统性科学研究。',
    paragraphs: [
      '在学习与实践中，我从传统的安全设计思维，逐步转向以数据驱动与模型分析为核心的研究路径，致力于探索安全系统的优化与智能化改造。',
      '本科阶段的研究训练让我为直接攻读博士做好了准备：将研究成果转化为专利与软件著作权、连续两年带队在全国性学科竞赛中获奖，并独立完成校级优秀毕业论文，使我熟悉从问题定义、实验/建模到成果输出的完整研究闭环。',
      '我希望在澳洲能源转型的大背景下，以火灾动力学数值模拟与定量风险评估为方法底座，回应电池储能规模化部署带来的安全挑战。',
      '我已获莫纳什大学可持续能源方向硕士录取并缴纳留位费，但在完成本科研究闭环后，选择直接申请博士：希望以多年期独立研究深入储能安全这一具体问题，而非以课程为主；本科阶段已验证的「实验标定 + 数值外推」方法链，可与目标导师在研的储能安全或火灾科学课题直接衔接。'
    ],
    highlight: '让研究既能在期刊上成立，也能在工程现场落地。',
    tags: ['火灾动力学', '储能安全', '定量风险评估', '数值模拟', '能源系统']
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
    pdfUrl: '',
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
        intent: 'Class of 2026 · Applying directly for a fully-funded PhD in Sustainable Energy (Australia)',
        title: 'B.Eng. (2026) in Safety Engineering · Fire Dynamics & Energy Systems Safety',
        tagline: 'My research uses fire dynamics simulation and quantitative risk assessment to study the initiation, propagation and control boundaries of thermal runaway in energy storage — from device-level thermal stability to enclosure-scale safety-spacing criteria — producing results that can directly inform engineering design and standards.',
        keywords: ['FDS fire modelling', 'Thermakin pyrolysis', 'QRA', 'Battery thermal runaway', 'Safety spacing criteria'],
        affiliation: 'Fuzhou University · Safety Engineering',
        // Availability: shown as a chip when filled (e.g. 'Available from Jul 2026'); empty = hidden
        availability: 'Available from Jul 2026',
        extras: ['First Prize, National Undergraduate Competition (Aug 2026)', 'Outstanding Undergraduate Thesis', 'Monash Master’s offer held', 'PTE Academic 60 (equivalent to IELTS 6.5)'],
        actions: [
          { text: 'Download CV (PDF)', action: 'download', href: '', primary: true },
          { text: 'View Publications', action: 'link', href: '#publications', primary: false }
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
            note: 'Offer received and deposit paid; place currently held. Applying directly for doctoral study and therefore not yet enrolled.',
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
          title: 'Sustainable Energy & Storage Safety (primary focus)',
          desc: 'System safety across the full chain of battery energy storage: from device-level thermal stability and module-scale thermal runaway propagation to enclosure-scale safety-spacing criteria. Combining numerical simulation with quantitative risk assessment to build methods that can directly inform engineering design and standards; my undergraduate flame-retardant pyrolysis modelling can extend down to battery-material heat-release characterisation. Australia, with its world-leading renewable penetration and utility-scale storage rollout, is an ideal setting to validate such methods.',
          tags: ['Energy storage safety', 'Thermal runaway propagation', 'Device-level thermal stability', 'Safety-spacing criteria', 'Energy transition']
        },
        {
          title: 'Fire Dynamics and Numerical Simulation',
          desc: 'Fire field modelling with FDS and fire spread mechanisms, with a focus on heat release rate prediction and smoke transport and control; material combustion characterisation and fire prediction using Thermakin.',
          tags: ['FDS', 'Thermakin', 'Fire spread', 'Smoke control']
        },
        {
          title: 'Quantitative Risk Assessment of Energy Systems',
          desc: 'Quantitative risk assessment (QRA) for energy and industrial systems: hazard identification under the dual-prevention mechanism, risk-graded control, closed-loop hazard screening, and safety system resilience.',
          tags: ['QRA', 'Dual-prevention mechanism', 'Risk grading', 'Resilience']
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
            authorNote: 'Advisor: Prof. Fuqiang Yang; experiments + numerical simulation validating the "device-level characterisation → numerical extrapolation" workflow',
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
            desc: 'The highest-level undergraduate discipline competition in safety science and engineering in China. The work integrates multimodal sensing (vision/gas/temperature) into a disaster-site detection robot, applicable to fire/energy-storage incident reconnaissance and early hazard identification — directly relevant to early-stage thermal runaway detection.',
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
        intro: 'A draft framework for my proposed doctoral research, to be refined with the prospective supervisor against the group\u2019s ongoing work; my methods chain (FDS + Thermakin + QRA) can plug directly into an existing storage-safety or fire-science project in the group.',
        items: [
          {
            title: 'Research Question',
            desc: 'As battery energy storage and renewable-energy infrastructure are deployed at scale, the triggering mechanism, propagation path and control boundary of cell thermal runaway remain poorly defined. The core question is: for a given storage enclosure layout and thermal management regime, how does single-cell thermal runaway propagate at module and enclosure scale, and what minimum safety spacing and mitigation strategy can engineering practice tolerate?',
            tags: ['Storage safety', 'Thermal runaway propagation', 'Battery fire']
          },
          {
            title: 'Methods and Approach',
            desc: 'I will first use Thermakin to characterise the pyrolysis and combustion heat-release behaviour of device-level cell materials, then build module- to enclosure-scale fire field models with the Fire Dynamics Simulator (FDS) to capture the cross-scale propagation of thermal runaway. Model parameters will be calibrated against reduced- and mid-scale combustion experiments, and quantitative risk assessment (QRA) will translate the simulation output into decision-ready risk metrics and safety-spacing criteria. My undergraduate thesis on the pyrolysis and combustion of flame-retardant bamboo already validated this "device-level material characterisation → numerical extrapolation → risk quantification" workflow.',
            tags: ['FDS', 'Thermakin', 'QRA', 'Device-level characterisation', 'Experimental calibration']
          },
          {
            title: 'Expected Outcomes',
            desc: 'A reusable fire risk assessment method for energy storage: criteria for enclosure-scale thermal runaway propagation and defensible safety-spacing recommendations, targeting SCI journal submission, with a method that can serve engineering design and standard-setting rather than remaining a set of numerical case studies; the methods chain can be transferred to the supervisor\u2019s ongoing storage-safety or fire-science projects.',
            tags: ['Journal articles', 'Safety-spacing criteria', 'Engineering standards']
          },
          {
            title: 'Why Australia',
            desc: 'Australia has one of the highest renewable-energy penetration rates in the world together with large-scale storage deployment. Grid-scale battery projects in South Australia and Western Australia offer near full-scale data and validation settings for thermal runaway propagation research, and Australian groups have a long record in fire science and storage safety — making it the most suitable environment in which to validate and extend this method.',
            tags: ['Australian energy transition', 'Grid-scale storage', 'Field validation']
          },
          {
            title: 'Three-year Research Timeline',
            desc: 'Year 1 (H2 2026–2027): device-level material pyrolysis characterisation and model construction. Use Thermakin to characterise the pyrolysis and heat-release behaviour of target battery/M-rGO materials, build an FDS single-cell thermal-runaway field model, complete a systematic literature review and define the reduced-scale experimental plan. Year 2 (2027–2028): module-scale thermal-runaway propagation simulation and experimental calibration. Extend to module-scale FDS field models, calibrate and validate against the supervisor group’s experimental data (subsonic combustion wind tunnel / reduced-scale combustion experiments), and target the first SCI paper submission. Year 3 (2028–2029): enclosure-scale safety-spacing criteria and QRA engineering. Extend to enclosure scale, use QRA to translate simulation results into safety-spacing criteria and engineering-standard recommendations, target the second SCI paper submission, and transfer the method to the supervisor’s ongoing projects.',
            tags: ['Device-level characterisation', 'Module-scale propagation', 'Enclosure-scale criteria', 'SCI submission planned']
          }
        ]
      },

      targets: {
        // ★ Target-supervisor module: fill in PIs, set enabled: true to show after "Research Plan"
        //   Strongest "I've done my homework" signal in PhD outreach — lets a PI see you've read their work
        enabled: true,
        intro: 'I have reviewed the research directions of the groups below; my methods chain (FDS + Thermakin + QRA) can plug into their ongoing storage-safety / fire-science projects. Outreach emails available on request.',
        items: [
          {
            name: 'Professor Mainak Majumder',
            lab: 'ARC Research Hub for Advanced Manufacturing with 2D Materials (AM2D) · Department of Mechanical and Aerospace Engineering, Monash University',
            focus: 'Carbon-based energy storage materials and devices: graphene supercapacitors, lithium–sulfur batteries, 2D-material advanced manufacturing. Published M-rGO multiscale curved graphene supercapacitor work in Nature Communications (Sep 2025) — two-step rapid thermal annealing at 700 °C, operando electrochemical interlayer expansion (e-IE) tripling capacitance, 91% retention over 50,000 cycles at 99.7% Coulombic efficiency, 99.5 Wh/L volumetric energy density; published fast-charging Li–S battery work in Advanced Energy Materials (Nov 2024). A "LiS Battery and ultracapacitor hybrid device" project is listed on his homepage as not yet started.',
            fit: 'I have read your 2025 Nature Communications paper — M-rGO achieves high volumetric energy density via two-step 700 °C thermal annealing, and the e-IE process lets organic ammonium/ionic-liquid ions enter curved graphene galleries, tripling capacitance with 91% retention over 50,000 cycles. The paper focuses on material-level electrochemical performance; device-level thermal-runaway boundaries and safety-spacing criteria are not yet established — exactly the gap my methods chain can fill: Thermakin to characterise the pyrolysis and heat-release behaviour of M-rGO electrode materials, FDS to build a device-level thermal-runaway propagation field model, and QRA to translate the simulation results into safety-spacing and thermal-boundary criteria. The "LiS Battery and ultracapacitor hybrid device" project on your homepage could host my device-level thermal-safety modelling contribution. I already hold a Monash Master’s offer in sustainable energy and have paid the deposit, so I am familiar with the faculty’s research ecosystem.'
          },
          {
            name: 'Dr Maryam Ghodrat (Senior Lecturer)',
            lab: 'Advanced Battery Safety Group (ABS) · School of Engineering and Technology, UNSW Canberra',
            focus: 'Li-ion battery and large-scale energy storage system safety, thermal runaway mechanisms and propagation, fire CFD/zone modelling, Wildland–Urban Interface fires; founded the Pyrometric Lab (2021) and built a modular subsonic combustion wind tunnel for controlled-flow thermal-runaway propagation experiments.',
            fit: 'I have followed your group’s work on Li-ion thermal-runaway propagation and large-scale storage safety, in particular the Pyrometric Lab founded in 2021 with its modular subsonic combustion wind tunnel — which produces controlled combustion flows for thermal-runaway propagation experimental validation. My methods chain is highly complementary to this experimental capability: Thermakin to characterise battery-material pyrolysis heat release as FDS input boundaries, FDS to build enclosure-scale thermal-runaway propagation field models whose parameters can be calibrated and validated directly against subsonic wind-tunnel data, and QRA to convert the results into safety-spacing criteria. The "experimental calibration → numerical extrapolation → risk quantification" chain is isomorphic with the group’s "experiment + CFD" research paradigm.'
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
            name: 'Numerical Simulation',
            items: [
              { name: 'FDS (fire field modelling)', level: 4 },
              { name: 'Pathfinder (evacuation simulation)', level: 4 },
              { name: 'Thermakin (fire prediction, Univ. of Maryland)', level: 3 },
              { name: 'AutoCAD / 3D modelling', level: 3 }
            ]
          },
          {
            name: 'Research Methods & Risk Assessment',
            items: [
              { name: 'SCL (safety check list)', level: 4 },
              { name: 'JHA (job hazard analysis)', level: 4 },
              { name: 'LEC / LS risk grading', level: 4 },
              { name: 'QRA (quantitative risk assessment)', level: 3 }
            ]
          },
          {
            name: 'Standards & Management Systems',
            items: [
              { name: 'ISO 9001 Certified Internal Auditor', level: 4 },
              { name: 'ISO 14001 / ISO 45001', level: 3 },
              { name: 'GB 30871-2022', level: 3 },
              { name: 'GB/T 33000-2016', level: 3 }
            ]
          },
          {
            name: 'Research Tools & Languages',
            items: [
              { name: 'MATLAB (experimental data processing & modelling)', level: 4 },
              { name: 'Origin (data visualisation & curve fitting)', level: 4 },
              { name: 'AI LLMs for research (GPT/Claude literature review, Copilot code generation)', level: 4 },
              { name: 'English (fluent; writes technical reports independently)', level: 4 },
              { name: 'PTE Academic overall 60 (equivalent to IELTS 6.5)', level: 3 },
              { name: 'Microsoft Office', level: 4 }
            ]
          }
        ],
        extras: [
          { name: 'Academic writing', desc: 'Foundation in English literature review and scientific writing' },
          { name: 'Experiment & modelling', desc: 'Familiar with fire scenario modelling, evacuation simulation and quantitative risk assessment workflows; proficient in MATLAB and Origin for experimental data processing and modelling, adept at using GPT/Claude for English literature review and academic writing, and GitHub Copilot for Python/MATLAB scripting and FDS model parameter tuning' }
        ]
      },

      statement: {
        enabled: true,
        quote: 'Safety engineering is not merely prevention — it is systematic scientific research.',
        paragraphs: [
          'Through study and practice, I have moved from a conventional safety-design mindset towards a research path centred on data-driven and model-based analysis, aiming to optimise and intelligentise safety systems.',
          'My undergraduate training has prepared me for direct entry into doctoral research: converting research results into a patent and software copyrights, leading teams to win consecutive national competition prizes, and completing an Outstanding Undergraduate Thesis have given me experience of the full research cycle from problem definition to dissemination.',
          'I want to work in Australia\u2019s energy-transition context, using fire dynamics simulation and quantitative risk assessment to address the safety challenges created by large-scale energy storage.',
          'I hold an offer for Monash\u2019s Master of Applied Engineering in Sustainable Energy and have paid the deposit, but having completed my undergraduate research cycle I am applying for direct doctoral entry: I want to invest in multi-year independent research on a specific problem in storage safety rather than coursework. My undergraduate-validated methods chain (experimental calibration plus numerical extrapolation) can plug directly into a prospective supervisor\u2019s ongoing storage-safety or fire-science project.'
        ],
        highlight: 'Producing research that holds up in journals and can also be deployed in the field.',
        tags: ['Fire dynamics', 'Energy storage safety', 'Quantitative risk assessment', 'Numerical simulation', 'Energy systems']
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
        pdfUrl: '',
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
