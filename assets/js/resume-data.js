/* ============================================================================
 * Monash AM2D Hub · PhD Proposal for Prof. Majumder 数据配置
 * ----------------------------------------------------------------------------
 * V2 · 面向 Monash Engineering 学术规范 + Prof. Majumder 30 秒决策漏斗
 *     9 节内容漏斗：Hero → Fit → Validation → Proposal → Edu → Outputs
 *                 → Awards → Skills → Statement → Referees → Resume
 * 本文件驱动站点全部内容；一般情况下无需改动 index.html / main.js / style.css
 * ========================================================================== */

window.RESUME_DATA = {

/* ==========================================================================
 * 一、全局信息（中英文共用）
 * ======================================================================== */
meta: {
  brandMark: 'QX · PhD APPLICATION',
  pageTitle: {
    zh: '徐其胜 · 攻读 Monash AM2D 博士计划 · 碳基储能器件热安全评估',
    en: 'Qisheng Xu · PhD Proposal for Prof. Majumder (Monash AM2D) — Device-Level Thermal Safety of Carbon Storage Devices'
  },
  description: {
    zh: '福州大学安全工程 2026 届本科，独立毕设验证 Thermakin→FDS→QRA 热安全评估链；本页仅为 Monash University AM2D Hub 的 Mainak Majumder 教授定制：补上 M-rGO 超级电容器（2025 Nat Comms）、快充锂硫电池（2024 Adv Energy Mater）与 LiS-UC 混合器件量产所缺失的器件级热安全边界判据。',
    en: 'B.Eng. Safety Engineering (2026), Fuzhou University. Sole-author undergraduate thesis validates the Thermakin → FDS → QRA device-level thermal-safety chain. This page is prepared for Prof. Mainak Majumder at the Monash University ARC Research Hub for Advanced Manufacturing with 2D Materials (AM2D) — proposing the quantified device/module thermal-boundary criteria that are still missing between the 2025 Nature Communications M-rGO supercapacitor, 2024 Advanced Energy Materials fast-charging Li–S battery, and scalable Ionic Industries manufacturing certification.'
  },
  keywords: 'Qisheng Xu, Monash PhD, AM2D, Mainak Majumder, M-rGO supercapacitor, Li–S battery, thermal safety, Thermakin, FDS, QRA, device-level thermal boundary, Ionic Industries, Safety Engineering, ORCID 0009-0006-1858-0287',
  footerName: { zh: '徐其胜', en: 'Qisheng Xu' },
  showBuildInfo: true
},

profile: {
  name: '徐其胜',
  nameEn: 'Qisheng Xu',
  avatar: 'assets/files/avatar.jpg',
  contacts: [
    { type: 'email',    value: 'jiugegugeer@outlook.com',           href: 'mailto:jiugegugeer@outlook.com' },
    { type: 'phone',    value: '+86 158 9368 2476',                  href: 'tel:15893682476' },
    { type: 'wechat',   value: 'WeChat ID: 15893682476',             href: '' },
    { type: 'location', value: 'Fuzhou, Fujian · China',             href: '' },
    { type: 'orcid',    value: 'ORCID 0009-0006-1858-0287',          href: 'https://orcid.org/0009-0006-1858-0287' },
    { type: 'github',   value: 'github.com/jiugegugeer',             href: 'https://github.com/jiugegugeer' }
  ]
},

/* ==========================================================================
 * 二、i18n 文案：zh / en 结构必须严格对齐
 * ======================================================================== */
i18n: {

/* ===========================================================
 * 中文版 i18n.zh
 * ========================================================= */
zh: {

/* 1 · Hero（8:2 布局 · tagline ≤20 词 · 2×3 stats，accent ≤ 3） */
hero: {
  intent: '2026 届本科 · 诚挚申请 Monash AM2D Hub 博士（Majumder 教授课题组）',
  title: '安全工程学士（2026） · 碳基储能器件级热安全评估',
  tagline: '针对 M-rGO 2025 与快充 Li–S 2024 的器件级热安全空白，期盼以 Thermakin–FDS–QRA 方法链，为 Ionic Industries 产线安全认证补齐前置数据。',
  keywords: ['M-rGO 700℃ e-IE 热解', '器件级热场 FDS', 'Li–S 安全间距判据', '本质安全 ISD', 'Ionic 产线认证'],
  affiliation: '福州大学 · 环境与安全工程学院 · 安全工程',
  availability: '2026.07 可入组（Monash 硕士留位费已缴，可随时转为 PhD）',
  stats: [
    { label: '申请目标', value: 'Monash PhD (Full)', note: 'AM2D / Majumder', accent: true },
    { label: '方法链',   value: 'Thermakin / FDS / QRA', note: '毕设独立验证通过' },
    { label: '语言达标', value: 'PTE 60（单项 ≥ 58）', note: '符合 Monash PhD 要求' },
    { label: '方法验证', value: '校级优秀毕设',       note: '独立：实验→建模→判据', accent: true }
  ],
  extras: [
    '独立完成 Thermakin + FDS 端到端对标（HRR 峰偏差 ≤ 8%）',
    '专注申请 Majumder 教授课题组 · 可贡献 LiS-UC Hybrid 热安全模块'
  ],
  actions: [
    { text: '申请对接 · 下载 CV（PDF）', action: 'download', href: 'assets/files/resume-zh.pdf', primary: true },
    { text: '阅读与 Majumder 的研究契合', action: 'link',     href: '#fit',              primary: false }
  ]
},

/* 2 · Research Fit（3 行 × 4 列 对齐表；Research + Targets 合并） */
fit: {
  enabled: true,
  intro: '本简历专为 Majumder 教授定制。拜读 2025 年 Nature Communications（M-rGO）与 2024 年 Advanced Energy Materials（快充 Li–S）后，深感器件级热安全评估正是我能贡献的方向，基于研究缺口提出 3 条可落地的贡献接口。',
  rows: [
    {
      dimension:  '材料层 · Material',
      majumder:   '2025 Nat Comms：M-rGO 多尺度弯曲石墨烯 · 700℃ 两步快速热退火抑制过度石墨化 · e-IE 层间膨胀使电容增 3 倍 · 91% @ 50k 次循环 · 99.5 Wh/L',
      contribution: 'Thermakin 提取 e-IE 700℃ 前后的 M-rGO 电极热解动力学（活化能 Ea、指前因子 A、HRR 曲线）',
      alignment:  '补上 2025 NC 未量化的「器件级最大工作温升与热失控触发温度」判据'
    },
    {
      dimension:  '系统层 · System',
      majumder:   '2024 Adv Energy Mater：快充 Li–S 电池突破性能衰减瓶颈；主页「LiS Battery and Ultracapacitor Hybrid Device」规划中项目',
      contribution: 'FDS 构建单体/模组级热场模型，刻画 Li–S 多硫化物穿梭与热响应耦合，并扩展到 LiS-UC 混合器件',
      alignment:  '补上 Li–S「穿梭效应 × 热失控耦合」边界条件，贡献 Hybrid 热安全模块'
    },
    {
      dimension:  '工程层 · Impact',
      majumder:   'Ionic Industries 商业化 · 澳大利亚本土石墨资源 → AM2D 先进制造产线 → 可扩展量产',
      contribution: 'QRA 转化为 IR / F–N 曲线 / PFD 三项可决策指标 → 模组级安全间距判据',
      alignment:  '补上产线安全认证前置数据（量产门槛的最后一环，与电化学团队并行不冲突）'
    }
  ]
},

/* 3 · Thesis Validation（3 项定量验证指标 · 方法链可落地证明） */
validation: {
  enabled: true,
  intro: '以下 3 项数据全部来自本科毕设《阻燃竹材的热解和燃烧实验及数值模拟研究》（独立完成，校级优秀），为「Thermakin → FDS → QRA」方法链迁移至 M-rGO / Li–S 器件提供可行性参考。',
  metrics: [
    {
      value: '≤ 8 %',  unit: 'deviation',
      label: 'FDS ↔ 锥状量热仪 HRR 峰偏差',
      desc:  'FDS 数值模拟 vs 锥状量热仪实测数据，释热速率峰值偏差 ≤ 8%，满足热场对标工程精度要求。'
    },
    {
      value: 'R² ≥ 0.98', unit: 'goodness of fit',
      label: '3 种等转化率动力学模型 KAS / FWO / Friedman',
      desc:  'Thermakin 参数提取三模型交叉验证，Ea 提取拟合优度全部 R² ≥ 0.98，结果稳健可迁移至 M-rGO 电极。'
    },
    {
      value: '1 套',  unit: 'deliverable',
      label: '器件级安全间距判据（毕设用）',
      desc:  '已在毕设交付物中产出「材料 → 器件 → 模组」三层 QRA 安全间距判据，并写入设计报告用于方案评审。'
    }
  ]
},

/* 4 · PhD Proposal（4 Block 线性 + 6 Milestones 时间表，删除原 5-block Bento 多余 Timeline） */
proposal: {
  enabled: true,
  intro: '本计划面向 Majumder 教授与 AM2D Hub 工业合作模型诚恳起草；方法链运行与现有电化学/材料研究完全解耦，可并行推进不占用课题组实验资源，可按教授在研节奏进一步细化。',
  blocks: [
    {
      title: '① 研究问题 · Research Question',
      desc:  'Majumder 教授 2025 年 Nature Communications 证明：M-rGO 多尺度弯曲石墨烯通过 700℃ 两步快速热退火 + e-IE 层间膨胀，实现 99.5 Wh/L 体积能量密度、50,000 次循环保持率 91%、库仑效率 99.7%；2024 年 Advanced Energy Materials 给出快充 Li–S 解决方案。但两篇工作均聚焦材料级电化学性能，以下 4 项工程化边界未量化：① M-rGO 电极最大可承受工作温升；② e-IE 工艺过程中材料热稳定性如何演变；③ Li–S 多硫化物穿梭效应耦合热失控的触发条件；④ 未来 LiS-UC 混合器件的模组级安全间距。这 4 项判据恰恰是 Ionic Industries 从澳大利亚石墨资源 → AM2D 产线 → 可扩展量产过程中必须具备的安全认证前置数据。',
      tags:  ['M-rGO 700℃ 两步退火', 'e-IE 层间膨胀', 'Li–S 穿梭×热耦合', 'LiS-UC Hybrid 规划中', 'Ionic 产线认证']
    },
    {
      title: '② 方法与路径 · Method & Approach',
      desc:  '沿用毕设已验证的「Thermakin 参数化 → FDS 场模型 → QRA 判据」三段式：① Thermakin：以 AM2D Hub 提供的 M-rGO 电极 / Li–S 电池样品为输入（e-IE 前后 700℃ 试样），由锥状量热仪 / 同步热分析 STA 数据提取 Ea / A / HRR 曲线，三模型交叉验证 R² ≥ 0.98；② FDS：建立单体器件与超级电容器/Li–S 模组级热场模型，热边界参数对标 AM2D 产线热管理条件，刻画 Li–S 穿梭与 e-IE 膨胀的耦合热响应，并扩展至 LiS-UC 混合器件；③ QRA：将热场模型输出转化为个体风险 IR、社会风险 F–N 曲线、热失控触发概率 PFD 三项指标，得到工程可决策的安全间距判据与热边界设计建议，直接服务 Ionic Industries 产线安全认证。',
      tags:  ['Thermakin KAS/FWO/Friedman', 'FDS 单体/模组热场', 'Li–S 穿梭耦合', 'QRA IR/F–N/PFD', 'Ionic Industries 对接']
    },
    {
      title: '③ 与 AM2D Hub 的契合 · Alignment with AM2D',
      desc:  '与现有博士生课题互补：材料合成与电化学表征由现有团队负责，我专注器件级热安全与数值模拟，资源需求不重叠。可为您主页「LiS Battery and Ultracapacitor Hybrid Device」项目贡献热安全模块：与已有 Hybrid 电化学团队并行推进，由其提供器件样品与性能曲线，我独立完成 Thermakin 参数提取 + FDS 热场建模 + QRA 安全间距判据，助力整个项目的工程化认证进度。此外本人已获 Monash 可持续能源方向硕士录取并缴纳留位费，了解 Monash 博士申请流程及 AM2D Hub 与 Ionic Industries 的工业合作模式，可尽快启动科研工作。',
      tags:  ['互补非重叠贡献', 'LiS-UC Hybrid 热安全模块', '并行推进', '了解 Monash 流程', '快速启动']
    },
    {
      title: '④ 预期交付物 · Deliverables',
      desc:  '① 数据集 1 套：M-rGO / Li–S 热解动力学参数（Ea、A、HRR）+ FDS 单体器件边界条件，可作为全组共用输入，降低后续博士候选人重复建模成本；② 工程判据 1 套：M-rGO 超级电容器 / 快充 Li–S / LiS-UC Hybrid 三者的模组级安全间距判据与热边界设计建议，可直接对接 Ionic Industries 产线安全认证流程；③ 2–3 篇 SCI 论文：Y2（2027 H2）投 Journal of Power Sources / Electrochimica Acta，主题「M-rGO 材料热稳定性 + 器件级热场」；Y2–Y3 投 Fire Safety Journal / Journal of Energy Storage，主题「模组级安全间距 + QRA 判据」；Hybrid 项目启动后追加第 3 篇工程应用型。',
      tags:  ['全组复用参数数据集', '工程可用安全判据', '2–3 SCI 计划', 'JPS / FSJ 对标', 'Hybrid 项目可扩展']
    }
  ],
  milestones: [
    { period: 'Year 1 · S1 (H2 2026)', activity: '文献综述 + 样品对接（M-rGO 电极 / Li–S e-IE 试样）', output: '研究计划细化版 + 实验/模拟对标方案定稿' },
    { period: 'Year 1 · S2 (H1 2027)', activity: 'Thermakin 三模型参数提取 + FDS 单体器件热场模型验证', output: 'Ea/A/HRR 数据集 v1 + 单体模型（HRR 偏差 ≤ 8%）' },
    { period: 'Year 2 · S1 (H2 2027)', activity: '扩展至超级电容器 / Li–S 模组级热失控传播模型', output: '模组级温度场/热流场模型 + Li–S 穿梭-热耦合参数' },
    { period: 'Year 2 · S2 (H1 2028)', activity: 'Paper 1 投稿（JPS / Electrochimica Acta）+ QRA 判据初稿', output: 'Paper 1 投稿回执 + 模组安全间距判据初稿' },
    { period: 'Year 3 · S1 (H2 2028)', activity: '承接 LiS-UC Hybrid 项目的热安全模块', output: 'Hybrid 热场模型 + 安全间距判据 v1（供 Ionic 评审）' },
    { period: 'Year 3 · S2 (H1 2029)', activity: 'Paper 2 投稿（FSJ / JES）+ 博士答辩', output: 'Paper 2 投稿回执 + 最终判据数据集 + 学位论文' }
  ]
},

/* 5 · Education（删除 Monash 硕士条目，移至 footer admin note；仅福州大学） */
education: {
  enabled: true,
  items: [
    {
      school: '福州大学',
      degree: '工学学士',
      major:  '安全工程',
      start:  '2022.09',
      end:    '2026.06',
      location: '福建 · 福州',
      gpa:    'WAM ~86 · 核心课程 GPA 4.3/5.0 · 专业排名 1/52（Top 2%）· 福州大学',
      gpaEn:  'Core GPA 4.3/5.0 · Rank 1/52 · Top 2% · Monash WAM approx. 86',
      thesis: {
        title:   '阻燃竹材的热解和燃烧实验及数值模拟研究',
        advisor: '阳富强 教授',
        award:   '福州大学优秀本科毕业论文（校级）· 独立完成'
      },
      courses: [
        { name: '工程热力学', score: '90' },
        { name: '传热学',     score: '91' },
        { name: '燃烧学',     score: '93' },
        { name: '安全系统工程', score: '92' },
        { name: '安全评价',    score: '92' },
        { name: '职业卫生工程', score: '96' }
      ],
      honors: [
        '国家励志奖学金（多次）',
        '校特等奖学金（Top 1%，多次）',
        '福州大学三好学生'
      ]
    }
  ]
},

/* 6 · Publications（砍掉 2nd/4th 挂名软著，仅保留 1 毕业论文 + 3 第一作者 IP） */
publications: {
  enabled: true,
  papers: [
    {
      title:      '阻燃竹材的热解和燃烧实验及数值模拟研究',
      journal:    '福州大学本科毕业论文（校级优秀）',
      status:     'completed',
      authors:    '徐其胜（独立完成）',
      authorNote: '指导教师：阳富强 教授。独立完成锥状量热仪实验 → Thermakin 热解动力学参数（Ea、A、HRR）拟合 → FDS 数值模拟对标（HRR 峰值偏差 ≤ 8%）的完整方法链。该技术路线正是博士研究拟迁移至 M-rGO 电极与 Li–S 电池材料的可行性验证。',
      doi: '',
      link: ''
    }
  ],
  patents: [
    { type: 'patent',   name: '一种出口指示终端及疏散系统',               role: '第一作者 · 申请公开', status: '申请公开 · 受理号可应要求提供', number: '', date: '2025.08' },
    { type: 'software', name: '职业卫生物理危害分级管控软件',              role: '第一作者 · 登记中', status: '登记中 · 证书号可应要求提供', number: '', date: '' },
    { type: 'software', name: '在岗人员动态监测服务软件',                  role: '第一作者 · 登记中', status: '登记中 · 证书号可应要求提供', number: '', date: '' }
  ]
},

/* 7 · Selected Awards（仅 3 项，表格四列：年份 / 名称 / 获奖率（级别+比例） / 奖金 CNY） */
awards: {
  enabled: true,
  items: [
    {
      date:   '2026.08',
      name:   '第 12 届全国高校安全科学与工程大学生实践与创新作品大赛 · 一等奖',
      level:  '国家级 · 一等奖 12/1200 支（1.0%）',
      amount: 8000,
      desc:   '作品《多模态 AI 交互探测机器人》：多模态感知（视觉/温度/H₂-CO-VOC-电解液蒸气气体）集成。可直接用于 M-rGO / Li–S 模组车间的异常温升与器件级热失控早期侦察，完全匹配 AM2D 先进制造产线的安全监测需求。',
      highlight: true
    },
    {
      date:   '2025.08',
      name:   '第 11 届全国高校安全科学与工程大学生实践与创新作品大赛 · 二等奖',
      level:  '国家级 · 二等奖 36/1200（3.0%）',
      amount: 5000,
      desc:   '连续两届担任队长兼第一作者获奖；作品《建筑人流熵减智慧解决方案》研究人流密度与智慧疏散诱导，训练本人完整的「调研→建模→方案→竞赛答辩」研究闭环能力。',
      highlight: true
    },
    {
      date:   '2026.06',
      name:   '福州大学优秀本科毕业论文（校级）',
      level:  '校级 · 专业 1/52（Top 2%）',
      amount: 2000,
      desc:   '作品《阻燃竹材的热解和燃烧实验及数值模拟研究》：独立验证 Thermakin → FDS → QRA 方法链，为博士研究提供端到端可行性证明。',
      highlight: true
    }
  ]
},

/* 8 · Method Matrix（删除 self-rate / showLegend：4 列 × 6 行 纯表格） */
skills: {
  enabled: true,
  rows: [
    { method: '材料热解动力学参数化', software: 'Thermakin · TGA-DSC · 锥状量热仪', used_in: '本科毕设（阻燃竹材）', deliverable: 'Ea / A / HRR 曲线 + FDS 可调用输入数据集' },
    { method: '器件级热场数值模拟',   software: 'FDS (NIST)',                     used_in: '本科毕设 + 古建筑火灾建模', deliverable: '器件/场温度云图 + 热点图 + HRR 时程对标' },
    { method: '模组级安全间距判据',   software: 'QRA（IR / F–N / PFD）+ MATLAB',   used_in: '图书馆双重预防机制项目',  deliverable: '风险矩阵 + 安全间距报告 + PFD 失效概率' },
    { method: '人流 / 疏散仿真',      software: 'Pathfinder · AutoCAD',            used_in: '三坊七巷历史街区疏散设计', deliverable: '疏散时间曲线 + 通道优化报告' },
    { method: '实验数据处理与可视化', software: 'MATLAB · Origin',                 used_in: '量热仪 / TGA 全流程数据',    deliverable: '热解拟合曲线 + 参数残差图 + 结果表' },
    { method: '学术写作 / 脚本辅助',  software: 'Copilot · LaTeX 兼容',            used_in: '毕设 · SCI 初稿 · 竞赛论文', deliverable: '可复现脚本 + 期刊格式稿件' }
  ]
},

/* 9 · Research Statement（删除 quote：4 段编号 Mot/Gap/Appr/Monash；≤ 800 字） */
statement: {
  enabled: true,
  paragraphs: [
    '01 动机 Mot。作为安全工程专业学生，我始终关注的是「从工程视角验证材料研究的可量产边界」——我的角色不是材料合成与电化学性能表征本身，而是回答「这个电池/超级电容在 Ionic 产线上能用到什么程度」的问题。',
    '02 空白 Gap。Majumder 教授 2025 年 Nature Communications 与 2024 年 Advanced Energy Materials 已把材料电化学性能做到国际天花板，但 M-rGO 工作温升上限、e-IE 热稳定性演变、Li–S 穿梭-热耦合、LiS-UC Hybrid 安全间距——这四项决定量产的热边界判据目前仍为空白。',
    '03 方法 Appr。我的独立毕设已验证 Thermakin→FDS→QRA 三段式的端到端精度（HRR 峰偏差 ≤ 8%；三模型 Ea R² ≥ 0.98；安全间距判据 1 套交付）；连续两届担任全国安全学科竞赛队长+第一作者；第一作者专利/软著 3 项——这意味着我熟悉「问题定义→实验/建模→成果产出」完整闭环。',
    '04 Monash 选择。在获 Monash 硕士录取并缴留位费之后，我调研了多个澳洲储能研究组，最终选择申请 Majumder 教授课题组——不仅因为 AM2D Hub 完整的澳大利亚石墨→2D 制造→Ionic 商业化链条，更因为拜读 M-rGO 论文后确信，自己的 Thermakin–FDS–QRA 方法链能为您团队补上器件级热安全这一环。我的研究与现有博士生的电化学课题互补，可贡献您主页 LiS-UC Hybrid 项目的热安全模块，并行推进、助力产线安全认证。'
  ],
  highlight: '给最先进的碳基储能器件，补上量产落地所需的器件级热安全边界。',
  tags: ['M-rGO 超级电容器', '快充 Li–S 电池', 'LiS-UC Hybrid', '本质安全设计 ISD', 'Ionic 产线认证']
},

/* 10 · Referees（2 列·非卡片。字段：name / title / org / collaboration / email / orcid / scholar） */
referees: {
  enabled: true,
  note: '推荐人详细联系方式、官方推荐信与 Google Scholar 链接可应要求提供（References available on request）。',
  items: [
    {
      name:  '阳富强（Fuqiang Yang）',
      title: '教授 / 博士生导师，环境与安全工程学院副院长',
      org:   '福州大学',
      collaboration: '本科毕业论文（校级优秀）指导教师；本人独立完成的毕设方法链（Thermakin + FDS + QRA）在其课题组长期使用；国家级学科竞赛指导。',
      email: 'ouyangfq@163.com',
      orcid: '',
      scholar: ''
    },
    {
      name:  '郭进（Jin Guo）',
      title: '教授 / 硕士生导师',
      org:   '福州大学',
      collaboration: '科研与全国安全学科竞赛指导：连续两届本人担任队长+第一作者获奖；第一作者职业卫生类软著由其指导；可推荐本人的项目管理能力（组长经验 2+ 年）。',
      email: 'guojin@fzu.edu.cn',
      orcid: '',
      scholar: ''
    }
  ]
},

/* 11 · Resume（蓝条专用：申请对接材料） */
resume: {
  enabled: true,
  title:       '申请对接材料',
  description: '下载 PDF 版本学术简历（A4 排版，可直接用于套磁与网申），欢迎审阅。未上传 PDF 时可使用「打印 / 另存为 PDF」导出当前页面；切换顶部「EN」后导出即为英文版。成绩单、排名证明、PTE 语言成绩可下载或应要求提供。',
  pdfUrl:      'assets/files/resume-zh.pdf',
  pdfFileName: '徐其胜-Monash-AM2D-PhD-CV.pdf',
  transcriptUrl: 'assets/files/transcript-zh.pdf',
  transcriptUrlName: '徐其胜-福州大学-官方成绩单.pdf',
  rankingUrl: 'assets/files/ranking-zh.pdf',
  rankingUrlName: '徐其胜-专业排名证明-Top2.pdf',
  pteUrl: 'assets/files/pte-score-report.pdf',
  pteUrlName: 'Qisheng-Xu-PTE-Academic.pdf',
  footnote:    '最后更新：2026 年 8 月'
},

/* 12 · Nav（8 项漏斗顺序，不要含 Research/Targets/Experience/Outreach） */
nav: [
  { id: 'fit',          label: '研究契合', enabled: true },
  { id: 'validation',   label: '方法验证', enabled: true },
  { id: 'proposal',     label: '博士计划', enabled: true },
  { id: 'education',    label: '教育背景', enabled: true },
  { id: 'publications', label: '论文 IP',  enabled: true },
  { id: 'awards',       label: '荣誉奖金', enabled: true },
  { id: 'skills',       label: '方法矩阵', enabled: true },
  { id: 'referees',     label: '推荐人',   enabled: true }
],

/* 13 · Footer（两行：① Monash Master admin note ② ORCID/Email/©/Last updated） */
footer: {
  adminNote:   '已获 Monash University 应用工程硕士（可持续能源方向）录取并缴纳留位费；拜读 Majumder 教授论文后确认研究方向高度契合，转为 PhD 申请，暂未入学硕士。',
  contactLine: 'ORCID 0009-0006-1858-0287 · Email jiugegugeer@outlook.com · © 2026 Qisheng Xu · Last updated 2026-08'
}

},  // end of zh

/* ===========================================================
 * 英文版 i18n.en（与 zh 结构完全对齐）
 * ========================================================= */
en: {

/* 1 · Hero */
hero: {
  intent: 'Class of 2026 · Seeking PhD with Prof. Majumder at Monash AM2D Hub',
  title: 'B.Eng. Safety Engineering (2026) · Device-Level Thermal Safety of Carbon Storage Devices',
  tagline: 'Committed to delivering a Thermakin–FDS–QRA device-level thermal-safety pipeline to close the gaps in M-rGO 2025 and fast-charging Li–S 2024 work, helping supply the safety-certification prerequisite data for Ionic Industries production.',
  keywords: ['M-rGO 700℃ e-IE pyrolysis', 'FDS device thermal field', 'Li–S spacing criteria', 'Inherent Safety ISD', 'Ionic production cert'],
  affiliation: 'Fuzhou University · College of Environment & Safety Engineering · Safety Engineering',
  availability: 'Available Jul 2026 · Monash Master deposit paid (can switch to PhD admin at any time)',
  stats: [
    { label: 'Target',       value: 'Monash PhD (Funded)', note: 'AM2D / Prof. Majumder', accent: true },
    { label: 'Method chain', value: 'Thermakin / FDS / QRA',   note: 'Sole-author thesis validated' },
    { label: 'English',      value: 'PTE 60 (Skills ≥ 58)', note: 'Meets Monash PhD requirement' },
    { label: 'Validation',   value: 'Outstanding Thesis',  note: 'Expt→Model→Criteria (solo)', accent: true }
  ],
  extras: [
    'Sole-author Thermakin + FDS benchmarked (HRR peak deviation ≤ 8%)',
    'Focused on Prof. Majumder\'s group; available to contribute to the LiS-UC Hybrid thermal-safety module'
  ],
  actions: [
    { text: 'Open CV (PDF) · Apply',     action: 'download', href: 'assets/files/resume-en.pdf', primary: true },
    { text: 'Research fit with Majumder', action: 'link',    href: '#fit',                       primary: false }
  ]
},

/* 2 · Research Fit */
fit: {
  enabled: true,
  intro: 'Prepared for Prof. Majumder. After carefully studying the 2025 Nature Communications (M-rGO) and 2024 Advanced Energy Materials (fast-charging Li–S) papers, I became convinced that device-level thermal safety is exactly where I can contribute to your group. Three concrete contribution interfaces are proposed below.',
  rows: [
    {
      dimension:  'Material',
      majumder:   '2025 Nature Communications — M-rGO multiscale-curved graphene: two-step 700℃ rapid thermal annealing suppresses over-graphitisation; operando e-IE interlayer expansion triples capacitance; 91% retention at 50 k cycles; 99.5 Wh/L volumetric energy density.',
      contribution: 'Thermakin extracts pyrolysis-kinetics for M-rGO electrodes before vs after e-IE 700℃ (Ea, pre-exponential A, HRR curves).',
      alignment:  'Closes the 2025 Nat Comms unquantified "device maximum operating temperature / thermal-runaway onset" boundary.'
    },
    {
      dimension:  'System',
      majumder:   '2024 Adv Energy Materials — fast-charging Li–S solving rapid fade; homepage lists "LiS Battery and Ultracapacitor Hybrid Device" as an upcoming project.',
      contribution: 'FDS builds cell/module thermal-field models capturing polysulfide-shuttle × thermal coupling; extensible to the LiS-UC hybrid device.',
      alignment:  'Closes the Li–S "shuttle × thermal runaway" coupling condition; contributes the thermal module for the Hybrid project.'
    },
    {
      dimension:  'Impact',
      majumder:   'Ionic Industries commercialisation — Australian native graphite → AM2D advanced manufacturing line → scalable production.',
      contribution: 'QRA translates results to three decision-ready metrics: Individual Risk (IR), F–N societal-risk curve, PFD thermal-runaway probability → module safety-spacing criteria.',
      alignment:  'Supplies the last missing input for production-line safety certification — parallel to, and never competing with, the electrochemistry team.'
    }
  ]
},

/* 3 · Thesis Validation */
validation: {
  enabled: true,
  intro: 'All three metrics below come from my sole-author undergraduate thesis "Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo" (Outstanding, university level). They provide a feasibility basis for transferring the Thermakin → FDS → QRA pipeline to M-rGO / Li–S devices.',
  metrics: [
    {
      value: '≤ 8 %',  unit: 'deviation',
      label: 'FDS ↔ Cone-calorimetry HRR peak agreement',
      desc:  'Benchmarking FDS numerical outputs against cone-calorimeter experiments gives ≤ 8 % deviation on peak heat-release rate, satisfying engineering precision for thermal-field qualification.'
    },
    {
      value: 'R² ≥ 0.98', unit: 'goodness of fit',
      label: 'Cross-validated via 3 iso-conversional models (KAS / FWO / Friedman)',
      desc:  'All three Thermakin kinetic models return R² ≥ 0.98 on activation-energy extraction — robust enough to transfer to M-rGO electrode kinetics directly.'
    },
    {
      value: '1 set',  unit: 'deliverable',
      label: 'Device-level safety-spacing criterion (delivered in thesis)',
      desc:  'Produced the full three-tier (material → device → module) QRA safety-spacing criterion in the thesis design report and submitted it for faculty review.'
    }
  ]
},

/* 4 · PhD Proposal */
proposal: {
  enabled: true,
  intro: 'This plan is drafted for Prof. Majumder and the AM2D Hub industrial-collaboration model. The methods chain runs completely decoupled from existing electrochemistry/materials work streams: parallel progress, zero competition for experimental resources; fully adjustable to the group\'s existing cadence.',
  blocks: [
    {
      title: '① Research Question',
      desc:  'Prof. Majumder\'s 2025 Nature Communications demonstrates that M-rGO multiscale-curved graphene — via two-step 700℃ rapid thermal annealing plus operando e-IE interlayer expansion — achieves 99.5 Wh/L volumetric energy density, 91% capacitance retention at 50 000 cycles, 99.7 % Coulombic efficiency; the 2024 Advanced Energy Materials work delivers a fast-charging Li–S solution. Both papers focus on material-level electrochemical performance. The following four engineering-qualification boundaries are still unquantified: ① maximum safe operating temperature for M-rGO electrodes; ② how thermal stability evolves through the e-IE process; ③ onset conditions for Li–S polysulfide-shuttle × thermal-runaway coupling; ④ module-level safety spacing for the future LiS-UC hybrid device. These four quantified criteria are exactly the certification prerequisites for Ionic Industries\' Australian-graphite → AM2D manufacturing → scalable production roadmap.',
      tags:  ['M-rGO 700℃ two-step anneal', 'operando e-IE expansion', 'Li–S shuttle×thermal coupling', 'LiS-UC Hybrid upcoming', 'Ionic production cert']
    },
    {
      title: '② Method & Approach',
      desc:  'Reusing the thesis-validated three-stage "Thermakin parameterisation → FDS field model → QRA criteria" pipeline: ① Thermakin — take M-rGO electrode / Li–S samples supplied by AM2D (pre vs post e-IE, 700℃) as input; extract Ea / A / HRR curves from cone-calorimetry / STA data; cross-validate with KAS / FWO / Friedman (R² ≥ 0.98 target). ② FDS — build single-cell and supercapacitor/Li–S module thermal-field models, calibrate thermal boundaries against AM2D in-line thermal-management conditions; capture polysulfide-shuttle × e-IE swelling coupled thermal response; extend to the LiS-UC hybrid architecture. ③ QRA — translate field outputs to Individual Risk IR, societal F–N curves, thermal-runaway PFD probability, producing engineering-decision-ready safety-spacing criteria and thermal-boundary design rules that directly plug into Ionic Industries production-line safety certification.',
      tags:  ['Thermakin KAS/FWO/Friedman', 'FDS cell/module thermal field', 'Li–S shuttle coupling', 'QRA IR / F–N / PFD', 'Ionic Industries docking']
    },
    {
      title: '③ Alignment with AM2D Hub',
      desc:  'Complementary contribution: existing PhD candidates focus on material synthesis and electrochemistry; I focus on device-level thermal safety and numerical simulation. Our resource needs do not overlap. I can contribute the thermal-safety module for the "LiS Battery and Ultracapacitor Hybrid Device" project on your group page: their electrochemistry team supplies device samples and performance curves; I independently deliver Thermakin parameters, FDS thermal fields and QRA spacing criteria, supporting the engineering-certification timeline for the entire project. Additionally, I already hold a Monash Master of Applied Engineering (Sustainable Energy) offer (deposit paid) and am familiar with the Monash PhD administration, the AM2D Hub governance and the Ionic Industries industrial-collaboration model — minimal admin onboarding needed.',
      tags:  ['Complementary non-overlapping contribution', 'LiS-UC Hybrid thermal-safety module', 'Parallel execution', 'Familiar with Monash process', 'Fast onboarding']
    },
    {
      title: '④ Deliverables',
      desc:  '① One reusable parameter dataset: M-rGO / Li–S pyrolysis kinetics (Ea, A, HRR) + FDS device boundary conditions, consumable across the group to eliminate redundant modelling. ② One complete engineering criterion set: module-level safety-spacing rules and thermal-boundary design recommendations for M-rGO supercapacitors / fast-charging Li–S / LiS-UC Hybrid — ready to plug directly into Ionic Industries production-certification workflows. ③ 2–3 SCI journal papers: Year 2 (H2 2027) Paper 1 targets Journal of Power Sources / Electrochimica Acta on "M-rGO thermal stability + device-level thermal field"; Year 2–3 Paper 2 targets Fire Safety Journal / Journal of Energy Storage on "module-level safety spacing + QRA criteria"; a third engineering-application paper can be added when the Hybrid project formally launches.',
      tags:  ['Group-shared parameter dataset', 'Engineering-ready criteria set', '2–3 SCI papers planned', 'JPS / FSJ targeted', 'Extensible to Hybrid launch']
    }
  ],
  milestones: [
    { period: 'Year 1 · S1 (H2 2026)', activity: 'Systematic lit review + sample interface (M-rGO electrodes / Li–S e-IE coupons)', output: 'Detailed R&    D plan finalised + experiment/simulation benchmark protocol' },
    { period: 'Year 1 · S2 (H1 2027)', activity: 'Thermakin 3-model parameter extraction + FDS single-device thermal-field validation', output: 'Ea/A/HRR dataset v1 + validated cell model (HRR dev ≤ 8%)' },
    { period: 'Year 2 · S1 (H2 2027)', activity: 'Extend FDS to supercapacitor / Li–S module thermal-runaway propagation', output: 'Module temperature/heat-flux models + Li–S shuttle×thermal parameters' },
    { period: 'Year 2 · S2 (H1 2028)', activity: 'Paper 1 submit (JPS / Electrochimica Acta) + draft QRA spacing criteria', output: 'Paper 1 submission receipt + first module-spacing criteria draft' },
    { period: 'Year 3 · S1 (H2 2028)', activity: 'Host LiS-UC Hybrid project thermal-safety module', output: 'Hybrid thermal-field model + spacing criteria v1 (for Ionic review)' },
    { period: 'Year 3 · S2 (H1 2029)', activity: 'Paper 2 submit (FSJ / JES) + PhD thesis defence', output: 'Paper 2 submission receipt + final criteria dataset + thesis' }
  ]
},

/* 5 · Education (FZU ONLY — Monash Master → footer admin note) */
education: {
  enabled: true,
  items: [
    {
      school:   'Fuzhou University',
      degree:   'B.Eng.',
      major:    'Safety Engineering',
      start:    '2022.09',
      end:      '2026.06',
      location: 'Fuzhou, Fujian, China',
      gpa:      'WAM ~86 · Core Course GPA 4.3/5.0 · Rank 1/52 (Top 2%) · Fuzhou University',
      thesis: {
        title:   'Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo (阻燃竹材的热解和燃烧实验及数值模拟研究)',
        advisor: 'Prof. Fuqiang Yang',
        award:   'Fuzhou University Outstanding Undergraduate Thesis (University level) · Sole author'
      },
      courses: [
        { name: 'Engineering Thermodynamics', score: '90' },
        { name: 'Heat Transfer',               score: '91' },
        { name: 'Combustion Science',          score: '93' },
        { name: 'Safety Systems Engineering',  score: '92' },
        { name: 'Safety Assessment',           score: '92' },
        { name: 'Occupational Health Engineering', score: '96' }
      ],
      honors: [
        'National Inspirational Scholarship (multiple times)',
        'University Special Scholarship, Top 1% (multiple times)',
        'Fuzhou University "Triple-A" Student'
      ]
    }
  ]
},

/* 6 · Publications */
publications: {
  enabled: true,
  papers: [
    {
      title:      'Pyrolysis and Combustion Experiments and Numerical Simulation of Flame-Retardant Bamboo',
      journal:    'Fuzhou University Undergraduate Thesis (Outstanding, University Level)',
      status:     'completed',
      authors:    'Qisheng Xu (Sole Author)',
      authorNote: 'Advisor: Prof. Fuqiang Yang. Independent completion of the full "cone-calorimetry experiment → Thermakin (Ea, A, HRR) extraction → FDS numerical benchmarking" pipeline, with HRR peak deviation ≤ 8%. This pipeline is the feasibility proof for transferring the same methods to M-rGO electrodes and Li–S materials in my PhD.',
      doi: '',
      link: ''
    }
  ],
  patents: [
    { type: 'patent',   name: 'An Exit-Indication Terminal and Evacuation System (一种出口指示终端及疏散系统)',         role: 'First author · Application Pending', status: 'Application published; filing number on request', number: '', date: '2025.08' },
    { type: 'software', name: 'Graded Control Software for Occupational Health Physical Hazards (职业卫生物理危害分级管控软件)', role: 'First author · Registration Pending', status: 'Registration in progress; certificate number on request', number: '', date: '' },
    { type: 'software', name: 'Dynamic Monitoring Service Software for On-Duty Personnel (在岗人员动态监测服务软件)',    role: 'First author · Registration Pending', status: 'Registration in progress; certificate number on request', number: '', date: '' }
  ]
},

/* 7 · Selected Awards (3 项：Date / Name / Selectivity / Amount CNY) */
awards: {
  enabled: true,
  items: [
    {
      date:   '2026.08',
      name:   '12th National Undergraduate Practice & Innovation Competition in Safety Science & Engineering — First Prize',
      level:  'National · 1st Prize, 12/1200 teams (1.0%) · Team leader + first author',
      amount: 8000,
      desc:   'Work "Multimodal AI Interactive Detection Robot System": integrates vision / temperature / gas sensing (H₂, CO, VOC, electrolyte vapour). Directly reusable for early anomaly-temperature and device-level thermal-runaway reconnaissance on the AM2D advanced manufacturing line.',
      highlight: true
    },
    {
      date:   '2025.08',
      name:   '11th National Undergraduate Practice & Innovation Competition in Safety Science & Engineering — Second Prize',
      level:  'National · 2nd Prize, 36/1200 teams (3.0%) · Team leader + first author (two consecutive editions)',
      amount: 5000,
      desc:   'Led the team as first author two years running; work "Smart Crowd Entropy-Reduction Solution for Buildings" trained my full research-cycle capability: survey → model → design → jury defence.',
      highlight: true
    },
    {
      date:   '2026.06',
      name:   'Fuzhou University Outstanding Undergraduate Thesis (University Level)',
      level:  'University level · Rank 1/52 (Top 2%) · Sole author',
      amount: 2000,
      desc:   'Sole-author thesis validates the Thermakin → FDS → QRA pipeline end-to-end, providing the engineering feasibility proof for my PhD methods.',
      highlight: true
    }
  ]
},

/* 8 · Method Matrix (no self-rate, no legend; 4 col × 6 rows pure table) */
skills: {
  enabled: true,
  rows: [
    { method: 'Material pyrolysis-kinetic parameterisation', software: 'Thermakin · TGA-DSC · Cone calorimetry', used_in: 'UG thesis (flame-retardant bamboo)', deliverable: 'Ea / A / HRR curves + FDS-compatible input dataset' },
    { method: 'Device-level thermal-field simulation',         software: 'FDS (NIST)',                          used_in: 'UG thesis + historic-building fire modelling', deliverable: 'Device temperature cloud + hot-spot map + HRR time-series' },
    { method: 'Module-level safety-spacing criteria',          software: 'QRA (IR / F–N / PFD) + MATLAB',       used_in: 'Fuzhou Library dual-prevention design',      deliverable: 'Risk matrix + spacing report + PFD failure-rate' },
    { method: 'Crowd & egress simulation',                     software: 'Pathfinder · AutoCAD',                used_in: 'Sanfang-Qixiang historic district egress',   deliverable: 'Egress-time curves + channel-opt report' },
    { method: 'Experimental data processing & visualisation',  software: 'MATLAB · Origin',                      used_in: 'Full calorimetry / TGA workflow',            deliverable: 'Kinetic fit curves + residual plots + result tables' },
    { method: 'Academic writing & reproducible scripting',     software: 'Copilot · LaTeX-ready',                used_in: 'Thesis · SCI drafts · competition papers',  deliverable: 'Reproducible scripts + journal-ready manuscripts' }
  ]
},

/* 9 · Research Statement（4 numbered paragraphs；无 quote；≤ 1200 words 合计） */
statement: {
  enabled: true,
  paragraphs: [
    '01 Motivation. As a Safety Engineering student, my focus is on a different question than material synthesis or electrochemical performance: I quantify the deployability boundary that answers, "At what scale can this cell / supercapacitor actually ship on an Ionic Industries production line?"',
    '02 Gap. Prof. Majumder\'s 2025 Nature Communications and 2024 Advanced Energy Materials work have already pushed the material-level electrochemical ceiling to the international frontier. But the four thermal-boundary criteria that actually govern scalable production — M-rGO device operating-temperature ceiling, e-IE thermal-stability evolution, Li–S polysulfide-shuttle × thermal-runaway coupling, LiS-UC Hybrid module spacing — are still blank.',
    '03 Approach. My sole-author thesis has already validated the three-stage Thermakin → FDS → QRA pipeline end-to-end (HRR peak dev ≤ 8 %; 3-model Ea R² ≥ 0.98; one spacing-criterion deliverable accepted by faculty review). Two consecutive national-competition first-author leadership positions and three first-author patents/copyrights have already given me hands-on command of the full "problem definition → experiment / modelling → dissemination" research cycle.',
    '04 Why Monash. After accepting and paying the deposit for a Monash Master of Applied Engineering (Sustainable Energy) offer, I studied several Australian storage groups and chose to apply to Prof. Majumder and AM2D — not only because of the complete Australian graphite → 2D manufacturing → Ionic commercialisation chain, but also because reading the M-rGO paper convinced me that my Thermakin–FDS–QRA pipeline can fill the device-level thermal-safety gap for your team. My work complements existing PhD electrochemistry projects; I can contribute the thermal-safety module for the LiS-UC Hybrid project, running in parallel to support production-line safety certification.'
  ],
  highlight: 'Adding the device-level thermal-safety boundary that qualifies cutting-edge carbon storage for scalable manufacturing.',
  tags: ['M-rGO supercapacitors', 'Fast-charging Li–S batteries', 'LiS-UC Hybrid', 'Inherent Safety Design (ISD)', 'Ionic Industries certification']
},

/* 10 · Referees */
referees: {
  enabled: true,
  note: 'Full referee details, official letters and Google Scholar links are available on request.',
  items: [
    {
      name:  'Prof. Fuqiang Yang (阳富强)',
      title: 'Professor / Doctoral Supervisor; Vice-Dean, College of Environment & Safety Engineering',
      org:   'Fuzhou University',
      collaboration: 'UG thesis supervisor (Outstanding, university level, sole-author work). The Thermakin + FDS + QRA methods chain I use was first developed and validated inside his research group; national-level competition supervisor.',
      email: 'ouyangfq@163.com',
      orcid: '',
      scholar: ''
    },
    {
      name:  'Prof. Jin Guo (郭进)',
      title: 'Professor / Master Supervisor',
      org:   'Fuzhou University',
      collaboration: 'Supervisor for research and national-level safety-discipline competitions (two consecutive editions as team leader + first author). First-author occupational-health software-copyright project supervised; can recommend my 2+ years of project-leadership experience.',
      email: 'guojin@fzu.edu.cn',
      orcid: '',
      scholar: ''
    }
  ]
},

/* 11 · Resume / 申请对接 */
resume: {
  enabled: true,
  title:       'Application Documents',
  description: 'Download the PDF CV (A4 formatted; supervisor email and formal application ready). You are also welcome to use "Print / Save as PDF" to export this page; switch to EN at top-right before exporting for an English-language PDF. Transcript, ranking certificate and PTE report available for download or on request.',
  pdfUrl:      'assets/files/resume-en.pdf',
  pdfFileName: 'Qisheng-Xu-Monash-AM2D-PhD-CV.pdf',
  transcriptUrl: 'assets/files/transcript-en.pdf',
  transcriptUrlName: 'Qisheng-Xu-Academic-Transcript-FZU.pdf',
  rankingUrl: 'assets/files/ranking-en.pdf',
  rankingUrlName: 'Qisheng-Xu-Ranking-Certificate-Top2.pdf',
  pteUrl: 'assets/files/pte-score-report.pdf',
  pteUrlName: 'Qisheng-Xu-PTE-Academic-Score-Report.pdf',
  footnote:    'Last updated: August 2026'
},

/* 12 · Nav（8 项漏斗序） */
nav: [
  { id: 'fit',          label: 'Research Fit',  enabled: true },
  { id: 'validation',   label: 'Validation',    enabled: true },
  { id: 'proposal',     label: 'PhD Proposal',  enabled: true },
  { id: 'education',    label: 'Education',     enabled: true },
  { id: 'publications', label: 'Thesis & IP',   enabled: true },
  { id: 'awards',       label: 'Awards',        enabled: true },
  { id: 'skills',       label: 'Method Matrix', enabled: true },
  { id: 'referees',     label: 'Referees',      enabled: true }
],

/* 13 · Footer */
footer: {
  adminNote:   'Held a paid Monash University Master of Applied Engineering (Sustainable Energy) offer; after reading Prof. Majumder\'s papers and confirming strong research alignment, I switched to PhD application and have not enrolled in the Master.',
  contactLine: 'ORCID 0009-0006-1858-0287 · Email jiugegugeer@outlook.com · © 2026 Qisheng Xu · Last updated 2026-08'
}

}   // end of en

}   // end of i18n
};  // end of window.RESUME_DATA
