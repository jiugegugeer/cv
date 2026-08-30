const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const ROOT = '/Users/jiugegugeer/Desktop/未命名文件夹';
const BASE = 'http://127.0.0.1:8123/';

function load(patch, initialLang) {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const data = fs.readFileSync(path.join(ROOT, 'assets/js/resume-data.js'), 'utf8');
  const patched = html.replace(
    '<script src="assets/js/resume-data.js"></script>',
    '<script>' + data + '\n' + (patch || '') + '</script>'
  );
  const vc = new VirtualConsole();
  const errs = [];
  vc.on('jsdomError', (e) => errs.push(e.message));
  vc.on('error', (...a) => errs.push('console.error: ' + a.join(' ')));
  const dom = new JSDOM(patched, {
    runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true,
    url: BASE, virtualConsole: vc,
    beforeParse(w) { if (initialLang) { try { w.localStorage.setItem('cv-lang', initialLang); } catch (e) {} } },
  });
  return new Promise((r) => dom.window.addEventListener('load', () => setTimeout(() => r({ dom, errs }), 300)));
}

(async () => {
  let pass = 0, fail = 0;
  const check = (name, cond, extra) => {
    if (cond) { pass++; console.log('  ✓ ' + name); }
    else { fail++; console.log('  ✗ ' + name + (extra ? '  → ' + extra : '')); }
  };
  const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');

  /* ================= 测试 1：中文版默认渲染 ================= */
  console.log('\n【测试 1】中文版默认渲染');
  const { dom, errs } = await load();
  const doc = dom.window.document;
  const win = dom.window;

  check('无 JS 运行时错误', errs.length === 0, errs.join(' | '));
  check('lang 属性为 zh-CN', doc.documentElement.lang === 'zh-CN', doc.documentElement.lang);
  check('data-lang=zh', doc.documentElement.getAttribute('data-lang') === 'zh');
  check('标题取自数据文件', doc.title === '徐其盛 - 学术简历 - 安全工程 / 火灾动力学与能源安全'.replace('徐其盛', '徐其胜'), doc.title);

  // 图标完整性
  const uses = [...doc.querySelectorAll('use')].map((u) => (u.getAttribute('href') || '').replace('#', ''));
  const symbols = new Set([...doc.querySelectorAll('symbol')].map((s) => s.id));
  const missingIcons = [...new Set(uses)].filter((u) => u && !symbols.has(u));
  check('所有图标引用均可解析', missingIcons.length === 0, missingIcons.join(', '));

  // 首屏
  check('姓名渲染正确', doc.querySelector('#hero-name')?.textContent === '徐其胜');
  check('英文名渲染正确', doc.querySelector('.hero__name-en')?.textContent === 'Qisheng Xu');
  check('申请意向徽章存在', txt(doc.querySelector('.hero__intent')).includes('全奖博士'),
    txt(doc.querySelector('.hero__intent')));
  check('邮箱为 mailto 链接', !!doc.querySelector('.hero__contact[href^="mailto:"]'));
  check('联系方式 4 条', doc.querySelectorAll('.hero__contacts li').length === 4,
    '实际 ' + doc.querySelectorAll('.hero__contacts li').length);
  // 本轮：教授视角补强
  check('hero 主 CTA 始终可用（无 PDF 时退化为打印按钮）',
    !!doc.querySelector('.hero__actions [data-print]'));
  check('hero extras 含 PTE 成绩证据',
    [...doc.querySelectorAll('.hero__extras li')].some((li) => /PTE/i.test(li.textContent)));
  check('推荐人区不外露占位卡片（待补充姓名不出现）',
    [...doc.querySelectorAll('.ref__name')].every((n) => !/待补充|To be completed/i.test(n.textContent)));
  check('targets 模块已启用并渲染两位目标导师（Majumder / Ghodrat）',
    doc.querySelectorAll('#targets .target-list .target').length === 2,
    '实际 ' + doc.querySelectorAll('#targets .target-list .target').length);
  check('研究自述含「为何直申博士」段',
    txt(doc.querySelector('#statement')).includes('选择直接申请博士'));

  // 学术概览（自动统计）
  const statVals = [...doc.querySelectorAll('.stat__value')].map((e) => e.textContent);
  const statLabels = [...doc.querySelectorAll('.stat__label')].map((e) => e.textContent);
  check('学术概览 4 项', statVals.length === 4);
  check('统计值 = 论文1 / 专利1 / 软著5 / 国家级奖项2',
    statVals.join(',') === '1,1,5,2', statVals.join(',') + ' | ' + statLabels.join('/'));

  // 模块完整性
  const secIds = [...doc.querySelectorAll('section[data-section]')].map((s) => s.dataset.section);
  check('渲染出 13 个区块（含 hero / overview / referees）', secIds.length === 13, secIds.join(','));
  ['education', 'research', 'publications', 'experience', 'awards', 'proposal',
   'outreach', 'skills', 'statement', 'referees', 'resume']
    .forEach((id) => check('模块存在：' + id, secIds.includes(id)));
  ['practice', 'leadership'].forEach((id) =>
    check('已移除模块：' + id, !secIds.includes(id)));

  // 导航
  const navLabels = [...doc.querySelectorAll('.nav__link')].map((a) => a.textContent);
  check('导航 10 项（含推荐人）', navLabels.length === 10, navLabels.join('/'));
  check('导航含「推荐人」', navLabels.includes('推荐人'), navLabels.join('/'));
  check('导航标签为中文', navLabels[0] === '教育背景', navLabels.join('/'));
  const orphan = [...doc.querySelectorAll('.nav__link')]
    .map((a) => a.getAttribute('href').replace('#', ''))
    .filter((id) => !doc.querySelector('section[data-section="' + id + '"]'));
  check('每个导航项都有对应区块', orphan.length === 0, orphan.join(','));

  // 教育背景
  check('教育背景 2 条', doc.querySelectorAll('.edu').length === 2,
    '实际 ' + doc.querySelectorAll('.edu').length);
  check('第一条为莫纳什硕士录取',
    txt(doc.querySelectorAll('.edu__school')[0]).includes('莫纳什大学'),
    txt(doc.querySelectorAll('.edu__school')[0]));
  check('莫纳什条目显示「已获录取」金标',
    txt(doc.querySelector('.edu__badge')) === '已获录取', txt(doc.querySelector('.edu__badge')));
  check('录取条目时间只到「2026 年入学」',
    txt(doc.querySelectorAll('.edu__period')[0]) === '2026 年入学',
    txt(doc.querySelectorAll('.edu__period')[0]));
  check('录取条目含留位费说明',
    txt(doc.querySelector('.edu__note')).includes('留位费'), txt(doc.querySelector('.edu__note')));
  check('第二条为福州大学本科',
    txt(doc.querySelectorAll('.edu__school')[1]) === '福州大学',
    txt(doc.querySelectorAll('.edu__school')[1]));
  check('本科时间段正确',
    txt(doc.querySelectorAll('.edu__period')[1]) === '2022 年 9 月 — 2026 年 6 月',
    txt(doc.querySelectorAll('.edu__period')[1]));
  check('GPA 展示', txt(doc.querySelector('.edu__gpa')).includes('4.3/5.0'));
  check('核心课程 5 门带分数', doc.querySelectorAll('.edu__course').length === 5 &&
    txt(doc.querySelector('.edu__course b')) === '96', txt(doc.querySelector('.edu__course')));
  check('在校荣誉 3 项', doc.querySelectorAll('.edu__honors li').length === 3);
  check('首屏 extras 3 条（含莫纳什录取）',
    doc.querySelectorAll('.hero__extras li').length === 3 &&
    txt(doc.querySelector('.hero__extras')).includes('莫纳什'),
    txt(doc.querySelector('.hero__extras')));
  check('定位含直申澳洲博士', txt(doc.querySelector('.hero__intent')).includes('直申澳洲'));
  check('简介提及莫纳什录取', txt(doc.querySelector('.hero__tagline')).includes('莫纳什'));
  check('可持续能源研究兴趣已写实',
    txt(doc.querySelector('#research')).includes('储能') &&
    txt(doc.querySelector('#research')).includes('热失控'));
  check('研究自述说明直博原因', txt(doc.querySelector('#statement')).includes('直接攻读博士'));

  // 研究兴趣
  check('研究兴趣 4 条', doc.querySelectorAll('.interest').length === 4);
  check('研究兴趣含三个目标方向',
    txt(doc.querySelector('.interests')).includes('火灾动力学') &&
    txt(doc.querySelector('.interests')).includes('能源系统风险定量评估') &&
    txt(doc.querySelector('.interests')).includes('可持续能源'));

  // 学术成果 —— 论文（本科毕业论文，校级优秀）
  check('论文卡片存在（.pub）', !!doc.querySelector('.pub'));
  check('论文期刊条目存在（.pub__journal）', !!doc.querySelector('.pub__journal'));
  check('论文标题为阻燃竹材毕业论文', txt(doc.querySelector('.pub__title')).includes('阻燃竹材'));

  // 学术成果 —— 专利 / 软著
  check('知识产权共 6 条', doc.querySelectorAll('.ip').length === 6,
    '实际 ' + doc.querySelectorAll('.ip').length);
  check('第一作者条目 3 条（专利1 + 软著2）', doc.querySelectorAll('.ip--first').length === 3,
    '实际 ' + doc.querySelectorAll('.ip--first').length);
  check('含职业卫生物理危害分级管控软件', txt(doc.querySelector('.ip-list')).includes('职业卫生物理危害分级管控软件'));
  check('含在岗人员动态监测服务软件', txt(doc.querySelector('.ip-list')).includes('在岗人员动态监测服务软件'));
  check('含第二作者遥感监测系统', txt(doc.querySelector('.ip-list')).includes('建筑施工场地生态环境遥感监测与评价系统') &&
    txt(doc.querySelector('.ip-list')).includes('第二作者'));
  check('含第四作者碳排放评估系统', txt(doc.querySelector('.ip-list')).includes('基于遥感影像的区域碳排放估算与环境安全评估系统') &&
    txt(doc.querySelector('.ip-list')).includes('第四作者'));
  check('软著类型标签正确', doc.querySelectorAll('.ip .chip--accent').length >= 5);
  check('含实用新型专利', txt(doc.querySelector('.ip-list')).includes('一种出口指示终端及疏散系统'));

  // 科研经历
  check('科研经历 2 项', doc.querySelectorAll('.timeline__item').length === 2);
  check('含三坊七巷项目', txt(doc.querySelector('#experience')).includes('三坊七巷'));
  check('含研究方法标签', doc.querySelectorAll('.job__methods .chip').length === 8,
    '实际 ' + doc.querySelectorAll('.job__methods .chip').length);

  // 荣誉奖项
  check('奖项 5 项', doc.querySelectorAll('.award').length === 5,
    '实际 ' + doc.querySelectorAll('.award').length);
  check('两项高亮（一等奖 + 优秀毕业论文）', doc.querySelectorAll('.award--highlight').length === 2,
    '实际 ' + doc.querySelectorAll('.award--highlight').length);
  const awardText = txt(doc.querySelector('#awards'));
  check('第12届一等奖作品名已填', awardText.includes('第12届') && awardText.includes('一等奖') &&
    awardText.includes('多模态 AI 交互探测机器人系统'));
  check('第11届二等奖与人流熵减作品', awardText.includes('第11届') &&
    awardText.includes('二等奖') && awardText.includes('建筑人流熵减智慧解决方案'));
  const roles = [...doc.querySelectorAll('#awards .award__role')].map(e => e.textContent);
  check('两个竞赛均标注队长兼第一作者',
    roles.filter(r => r.includes('队长兼第一作者')).length === 2,
    roles.join(' | '));
  check('含校级优秀毕业论文奖', awardText.includes('福州大学优秀本科毕业论文') &&
    awardText.includes('阻燃竹材的热解和燃烧实验及数值模拟研究'));

  // 毕业论文（教育背景内）
  check('教育背景显示毕业论文区块', !!doc.querySelector('.edu__thesis'));
  check('毕业论文题目正确',
    txt(doc.querySelector('.edu__thesis-title')).includes('阻燃竹材的热解和燃烧实验及数值模拟研究'),
    txt(doc.querySelector('.edu__thesis-title')));
  check('毕业论文显示指导教师标签', txt(doc.querySelector('.edu__thesis-meta')).includes('指导教师'));
  check('毕业论文带优秀论文金色标记',
    txt(doc.querySelector('.edu__thesis .chip--gold')).includes('优秀本科毕业论文'),
    txt(doc.querySelector('.edu__thesis .chip--gold')));

  // 推荐人
  check('推荐人区块存在', !!doc.querySelector('#referees') &&
    !doc.querySelector('#referees').hasAttribute('hidden'));
  check('推荐人 3 条', doc.querySelectorAll('.ref').length === 3,
    '实际 ' + doc.querySelectorAll('.ref').length);
  check('推荐人含说明文字', !!doc.querySelector('.section__note'));

  // 头像
  check('首屏显示证件照', !!doc.querySelector('.hero__portrait img'));
  check('证件照路径正确',
    doc.querySelector('.hero__portrait img').getAttribute('src') === 'assets/files/avatar.jpg',
    doc.querySelector('.hero__portrait img').getAttribute('src'));
  check('证件照有 alt 文本', !!doc.querySelector('.hero__portrait img').getAttribute('alt'));

  // 研究计划 / 科普 / 技能 / 自述
  check('研究计划 4 个子块', doc.querySelectorAll('.proposal-item').length === 4,
    '实际 ' + doc.querySelectorAll('.proposal-item').length);
  const planText = txt(doc.querySelector('#proposal'));
  check('研究计划含研究问题', planText.includes('研究问题'));
  check('研究计划含方法与路径', planText.includes('方法与路径'));
  check('研究计划含预期成果', planText.includes('预期成果'));
  check('研究计划含为什么是澳大利亚', planText.includes('为什么是澳大利亚'));
  check('研究计划含储能与热失控关键词',
    planText.includes('储能') && planText.includes('热失控'));
  check('科普传播含 500万+ 播放量', txt(doc.querySelector('.outreach')).includes('500万+'));
  check('学术技能 4 个分类', doc.querySelectorAll('.skill-group').length === 4);
  check('技能条 15 项（1 项 level=0 不显示条）', doc.querySelectorAll('.skill__bar').length === 15,
    '实际 ' + doc.querySelectorAll('.skill__bar').length);
  check('含 FDS / Pathfinder / Thermakin',
    txt(doc.querySelector('#skills')).includes('FDS') &&
    txt(doc.querySelector('#skills')).includes('Pathfinder') &&
    txt(doc.querySelector('#skills')).includes('Thermakin'));
  check('学生工作模块已移除', !doc.querySelector('#leadership'));
  check('中共党员表述已清除', !txt(doc.body).includes('中共党员'));
  check('至诚学院表述已清除', !txt(doc.body).includes('至诚学院'));
  check('研究自述引言正确', txt(doc.querySelector('.statement__quote')).includes('安全工程不仅是防范'));
  // 本轮优化：首屏关键词条 / 金句加粗 / 概览证据后缀 / 导师课题对接
  check('首屏研究关键词条 5 项', doc.querySelectorAll('.hero__keywords li').length === 5,
    '实际 ' + doc.querySelectorAll('.hero__keywords li').length);
  check('关键词条含 FDS 与储能热失控',
    txt(doc.querySelector('.hero__keywords')).includes('FDS') &&
    txt(doc.querySelector('.hero__keywords')).includes('储能热失控'));
  check('研究自述金句独立成段', !!doc.querySelector('.statement__highlight') &&
    txt(doc.querySelector('.statement__highlight')).includes('期刊') &&
    txt(doc.querySelector('.statement__highlight')).includes('工程现场'));
  check('学术概览含 4 条证据后缀（毕业论文恢复后）', doc.querySelectorAll('.stat__sub').length === 4,
    '实际 ' + doc.querySelectorAll('.stat__sub').length);
  check('概览显示论文统计项（毕业论文已计入）',
    [...doc.querySelectorAll('.stat__label')].some((l) => /期刊论文|papers/i.test(txt(l))));
  check('研究计划含导师课题对接', txt(doc.querySelector('#proposal')).includes('导师'));
  check('打印页眉身份条已注入', !!doc.querySelector('.print-header'));

  // 可访问性
  check('存在跳转链接', !!doc.querySelector('.skip-link[href="#main"]'));
  const unlabeled = [...doc.querySelectorAll('button')]
    .filter((b) => !b.textContent.trim() && !b.getAttribute('aria-label'));
  check('所有按钮均有可读名称', unlabeled.length === 0);
  const noHeading = [...doc.querySelectorAll('section[data-section]')]
    .filter((s) => !s.querySelector('h1,h2,h3'));
  check('每个区块都有标题', noHeading.length === 0, noHeading.map((s) => s.dataset.section).join(','));
  check('外链均带 rel=noopener', [...doc.querySelectorAll('a[target="_blank"]')]
    .every((a) => (a.getAttribute('rel') || '').includes('noopener')));

  // —— 本轮：SEO / PWA / LCP 图片属性 ——
  const eyebrows = [...doc.querySelectorAll('.section-head__eyebrow')];
  check('eyebrow 小标签均标注 lang=en',
    eyebrows.length > 0 && eyebrows.every((e) => e.getAttribute('lang') === 'en'),
    '未标注数 ' + eyebrows.filter((e) => e.getAttribute('lang') !== 'en').length);
  check('manifest 链接已引用', !!doc.querySelector('link[rel="manifest"][href$="manifest.webmanifest"]'));
  check('canonical 链接已注入', !!doc.querySelector('link[rel="canonical"]'));
  const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
  check('og:image 为绝对地址', /^https?:\/\//.test(ogImage) && ogImage.includes('og-banner.png'), ogImage);
  check('og:image 尺寸 2400x1260',
    doc.querySelector('meta[property="og:image:width"]')?.getAttribute('content') === '2400' &&
    doc.querySelector('meta[property="og:image:height"]')?.getAttribute('content') === '1260');
  check('og:locale=zh_CN 且 alternate=en_US',
    doc.querySelector('meta[property="og:locale"]')?.getAttribute('content') === 'zh_CN' &&
    doc.querySelector('meta[property="og:locale:alternate"]')?.getAttribute('content') === 'en_US');
  check('twitter:card 为 summary_large_image（name=）',
    doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content') === 'summary_large_image');
  check('twitter:image 为绝对地址',
    /^https?:\/\//.test(doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || ''));
  // Twitter 标签必须用 name=（property= 会被平台忽略），不应出现 property="twitter:*"
  check('无 property=twitter:* 重复标签', !doc.querySelector('meta[property^="twitter:"]'));
  check('srStatus 公告区存在',
    doc.querySelector('#srStatus')?.getAttribute('role') === 'status' &&
    doc.querySelector('#srStatus')?.getAttribute('aria-live') === 'polite');
  check('头像 img 标注 fetchpriority=high',
    doc.querySelector('.hero__portrait img')?.getAttribute('fetchpriority') === 'high' &&
    doc.querySelector('.hero__portrait img')?.getAttribute('decoding') === 'async');
  // JSON-LD 丰富字段
  const ld = JSON.parse(doc.getElementById('ld-json')?.textContent || '{}');
  check('JSON-LD 含 image（头像）',
    typeof ld.image === 'string' && /avatar\.jpg/.test(ld.image), ld.image);
  check('JSON-LD alumniOf 含 2 所学校',
    Array.isArray(ld.alumniOf) && ld.alumniOf.length === 2,
    JSON.stringify(ld.alumniOf));
  check('JSON-LD 含 knowsLanguage 中英',
    Array.isArray(ld.knowsLanguage) && ld.knowsLanguage.includes('en'));
  check('JSON-LD 含 award 奖项列表',
    Array.isArray(ld.award) && ld.award.length >= 3);
  check('JSON-LD 含 nationality 中国',
    ld.nationality && ld.nationality.name === 'China');

  /* ================= 测试 2：切换到英文版 ================= */
  console.log('\n【测试 2】点击语言切换按钮 → 英文版');
  doc.getElementById('langToggle').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 120));

  check('切换后 data-lang=en', doc.documentElement.getAttribute('data-lang') === 'en');
  check('切换后 lang 属性=en', doc.documentElement.lang === 'en', doc.documentElement.lang);
  check('英文版无 JS 错误', errs.length === 0, errs.join('|'));
  const enNav = [...doc.querySelectorAll('.nav__link')].map((a) => a.textContent);
  check('导航切换为英文', enNav[0] === 'Education' && enNav.includes('Publications'), enNav.join('/'));
  check('模块标题为英文', txt(doc.querySelector('#education-heading')) === 'Education',
    txt(doc.querySelector('#education-heading')));
  check('研究兴趣英文第一条为储能安全', txt(doc.querySelector('.interest__title')).includes('Sustainable Energy'),
    txt(doc.querySelector('.interest__title')));
  check('研究兴趣英文含火灾动力学', txt(doc.querySelector('.interests')).includes('Fire Dynamics'));
  check('论文作者注含导师信息', txt(doc.querySelector('.pub__note')).includes('Advisor'));
  check('英文日期格式（Aug 2026）', txt(doc.querySelector('.award__date')).includes('Aug 2026'),
    txt(doc.querySelector('.award__date')));
  check('英文版统计标签', txt(doc.querySelector('.stat__label')) === 'Journal Articles',
    txt(doc.querySelector('.stat__label')));
  check('英文版仍为 6 条知识产权（结构一致）', doc.querySelectorAll('.ip').length === 6);
  check('英文版姓名加粗仍生效',
    doc.querySelector('.pub__authors strong')?.textContent === 'Qisheng Xu',
    txt(doc.querySelector('.pub__authors')));
  check('英文版录取标记为 Admitted', txt(doc.querySelector('.edu__badge')) === 'Admitted',
    txt(doc.querySelector('.edu__badge')));
  check('英文版录取时间为 2026 intake',
    txt(doc.querySelectorAll('.edu__period')[0]) === '2026 intake',
    txt(doc.querySelectorAll('.edu__period')[0]));
  check('英文版研究自述说明直博',
    txt(doc.querySelector('#statement')).includes('direct entry into doctoral research'));
  check('语言选择已持久化', win.localStorage.getItem('cv-lang') === 'en');
  // 英文版社交卡随语言切换
  check('英文版 og:locale=en_US',
    doc.querySelector('meta[property="og:locale"]')?.getAttribute('content') === 'en_US');
  check('英文版 og:locale:alternate=zh_CN',
    doc.querySelector('meta[property="og:locale:alternate"]')?.getAttribute('content') === 'zh_CN');
  check('英文版 og:title 含 Qisheng Xu',
    (doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '').includes('Qisheng Xu'));
  check('英文版 JSON-LD jobTitle 为英文',
    (JSON.parse(doc.getElementById('ld-json').textContent || '{}').jobTitle || '').includes('Safety Engineering'));

  // 切回中文
  doc.getElementById('langToggle').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 120));
  check('再次点击切回中文', doc.documentElement.getAttribute('data-lang') === 'zh' &&
    txt(doc.querySelector('#education-heading')) === '教育背景');
  check('切回后区块数量不变（13 个）', doc.querySelectorAll('section[data-section]').length === 13,
    '实际 ' + doc.querySelectorAll('section[data-section]').length);
  win.close();

  /* ================= 测试 3：默认语言为英文 ================= */
  console.log('\n【测试 3】localStorage 预置英文 → 首屏直接英文');
  const t3 = await load('', 'en');
  check('测试3 无 JS 错误', t3.errs.length === 0, t3.errs.join('|'));
  check('首屏即英文', t3.dom.window.document.documentElement.lang === 'en');
  check('首屏导航为英文',
    t3.dom.window.document.querySelector('.nav__link')?.textContent === 'Education');
  t3.dom.window.close();

  /* ================= 测试 4：配置 PDF 后显示下载按钮 ================= */
  console.log('\n【测试 4】配置 resume.pdfUrl');
  const t4 = await load(
    "window.RESUME_DATA.i18n.zh.resume.pdfUrl='assets/files/cv.pdf';" +
      "window.RESUME_DATA.i18n.zh.resume.pdfFileName='徐其胜-学术CV.pdf';"
  );
  const d4 = t4.dom.window.document;
  check('测试4 无 JS 错误', t4.errs.length === 0, t4.errs.join('|'));
  const dl = d4.querySelector('.cta-card a[download]');
  check('下载卡片出现下载按钮', !!dl);
  check('下载文件名正确', dl?.getAttribute('download') === '徐其胜-学术CV.pdf');
  check('首屏也出现下载按钮', !!d4.querySelector('.hero__actions a[download]'));
  t4.dom.window.close();

  /* ================= 测试 5：关闭部分模块 ================= */
  console.log('\n【测试 5】关闭 proposal / outreach / statement 三个模块');
  const t5 = await load(
    'window.RESUME_DATA.i18n.zh.proposal.enabled=false;' +
      'window.RESUME_DATA.i18n.zh.outreach.enabled=false;' +
      'window.RESUME_DATA.i18n.zh.statement.enabled=false;'
  );
  const d5 = t5.dom.window.document;
  check('测试5 无 JS 错误', t5.errs.length === 0, t5.errs.join('|'));
  check('三个模块已从页面移除',
    !d5.querySelector('section[data-section="proposal"]') &&
    !d5.querySelector('section[data-section="outreach"]') &&
    !d5.querySelector('section[data-section="statement"]'));
  const n5 = [...d5.querySelectorAll('.nav__link')].map((a) => a.textContent);
  // 三个模块都在导航里，关闭后应剩 10 - 3 = 7 项
  check('导航同步移除（剩 7 项）', n5.length === 7 &&
    !n5.includes('研究计划') && !n5.includes('科普传播') && !n5.includes('研究自述'),
    n5.join('/'));
  // 切到英文版，验证另一语言也保持一致
  d5.getElementById('langToggle').dispatchEvent(new t5.dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 120));
  // 仅关闭了中文版，英文版数据未关闭 → 切到英文后模块会恢复，这是预期行为
  check('英文版导航恢复为 10 项（数据需两语言一致）', d5.querySelectorAll('.nav__link').length === 10,
    '实际 ' + d5.querySelectorAll('.nav__link').length);
  t5.dom.window.close();

  console.log('\n=========================');
  console.log(`通过 ${pass} 项，失败 ${fail} 项`);
  console.log('=========================\n');
  process.exit(fail ? 1 : 0);
})();
