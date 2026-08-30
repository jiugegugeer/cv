/* ============================================================================
 * 学术简历（Academic CV）渲染与交互脚本
 * ----------------------------------------------------------------------------
 * 职责：读取 assets/js/resume-data.js → 按当前语言渲染各模块 → 绑定交互
 * 一般情况下【无需修改本文件】，改内容请改 resume-data.js
 * 若要调整模块标题等界面文案，请修改下方的 UI 字典
 * ========================================================================== */
(function () {
  'use strict';

  var DATA = window.RESUME_DATA || {};

  /* ==========================================================================
   * 界面文案字典（属于界面框架，不属于个人信息，如需调整在此处修改）
   * eyebrow 统一使用英文小标签，中英文版本共用
   * ======================================================================== */
  var SECTION_COPY = {
    education:    { eyebrow: 'Education' },
    research:     { eyebrow: 'Research Interests' },
    publications: { eyebrow: 'Publications' },
    experience:   { eyebrow: 'Research Experience' },
    awards:       { eyebrow: 'Honors & Awards' },
    proposal:     { eyebrow: 'Research Plan' },
    outreach:     { eyebrow: 'Outreach & Impact' },
    skills:       { eyebrow: 'Skills' },
    statement:    { eyebrow: 'Research Statement' },
    referees:     { eyebrow: 'Referees' },
    targets:      { eyebrow: 'Target Supervisors' },
    resume:       { eyebrow: 'Download CV' }
  };

  var UI = {
    zh: {
      sectionTitles: {
        education: '教育背景', research: '研究兴趣', publications: '学术成果',
        experience: '科研经历', awards: '荣誉奖项', proposal: '研究计划',
        outreach: '科普传播与社会影响', skills: '学术技能',
        statement: '研究自述', referees: '推荐人', targets: '目标导师', resume: '下载 CV'
      },
      stat_papers: '期刊论文', stat_patents: '专利', stat_software: '软件著作权',
      stat_awards: '国家级奖项',
      overviewLabel: '学术概览',
      papersBlock: '期刊论文', ipBlock: '专利与软件著作权',
      status: { published: '已发表', 'in-press': '已接收待出版', 'under-review': '外审中', preprint: '预印本', 'in-prep': '撰写中' },
      type: { patent: '专利', software: '软著' },
      vol: '卷', pp: '页', doi: 'DOI', paperLink: '查看全文',
      admitted: '已获录取',
      core: '核心课程', honors: '在校荣誉', gpa: '成绩', methods: '方法与工具',
      thesis: '本科毕业论文', thesisAdvisor: '指导教师',
      total: '共', items: '项',
      download: '下载学术 CV（PDF）', print: '打印 / 另存为 PDF',
      toTop: '返回顶部', skip: '跳转到主要内容', themeToDark: '切换到深色模式', themeToLight: '切换到浅色模式',
      langToEn: 'Switch to English', langToZh: '切换为中文',
      openMenu: '打开导航菜单', closeMenu: '关闭导航菜单',
      buildInfo: '本站为纯静态站点，使用 HTML / CSS / JavaScript 构建，未依赖任何第三方库',
      copyright: '· 学术简历'
    },
    en: {
      sectionTitles: {
        education: 'Education', research: 'Research Interests', publications: 'Publications',
        experience: 'Research Experience', awards: 'Honors & Awards', proposal: 'Research Plan',
        outreach: 'Outreach & Societal Impact', skills: 'Skills',
        statement: 'Research Statement', referees: 'Referees', targets: 'Target Supervisors', resume: 'Download CV'
      },
      stat_papers: 'Journal Articles', stat_patents: 'Patents', stat_software: 'Software Copyrights',
      stat_awards: 'National Awards',
      overviewLabel: 'At a Glance',
      papersBlock: 'Journal Articles', ipBlock: 'Patents & Software Copyrights',
      status: { published: 'Published', 'in-press': 'In Press', 'under-review': 'Under Review', preprint: 'Preprint', 'in-prep': 'In Preparation' },
      type: { patent: 'Patent', software: 'Software' },
      vol: 'Vol.', pp: 'pp.', doi: 'DOI', paperLink: 'View article',
      admitted: 'Admitted',
      core: 'Core Coursework', honors: 'Academic Honors', gpa: 'GPA', methods: 'Methods & Tools',
      thesis: 'Undergraduate Thesis', thesisAdvisor: 'Supervisor',
      total: '', items: '',
      download: 'Download CV (PDF)', print: 'Print / Save as PDF',
      toTop: 'Back to top', skip: 'Skip to main content', themeToDark: 'Switch to dark mode', themeToLight: 'Switch to light mode',
      langToEn: 'Switch to English', langToZh: 'Switch to Chinese',
      openMenu: 'Open navigation menu', closeMenu: 'Close navigation menu',
      buildInfo: 'A fully static site built with HTML / CSS / JavaScript — no third-party libraries',
      copyright: '· Academic CV'
    }
  };

  /* 联系方式 type → 图标与双语标签 */
  var CONTACT_META = {
    email:    { icon: 'i-mail',      zh: '邮箱',           en: 'Email' },
    phone:    { icon: 'i-phone',     zh: '电话',           en: 'Tel' },
    wechat:   { icon: 'i-wechat',    zh: '微信',           en: 'WeChat' },
    location: { icon: 'i-location',  zh: '所在地',         en: 'Location' },
    github:   { icon: 'i-github',    zh: 'GitHub',         en: 'GitHub' },
    scholar:  { icon: 'i-scholar',   zh: 'Google Scholar', en: 'Google Scholar' },
    orcid:    { icon: 'i-orcid',     zh: 'ORCID',          en: 'ORCID' },
    linkedin: { icon: 'i-linkedin',  zh: 'LinkedIn',       en: 'LinkedIn' },
    website:  { icon: 'i-website',   zh: '个人主页',       en: 'Website' },
    blog:     { icon: 'i-blog',      zh: '博客',           en: 'Blog' },
    custom:   { icon: 'i-custom',    zh: '其他',           en: 'Other' }
  };

  /* 英文月份 */
  var MONTH_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* ==========================================================================
   * 状态
   * ======================================================================== */
  var LANG = 'zh';
  var MAIN_HTML = '';
  var revealObserver = null;

  function T(key) { return (UI[LANG] || UI.zh)[key]; }
  function cur() { return (DATA.i18n && DATA.i18n[LANG]) || {}; }

  /* ==========================================================================
   * 工具函数
   * ======================================================================== */
  function esc(v) {
    if (v === null || v === undefined) return '';
    return String(v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function icon(id, cls) {
    if (!id) return '';
    var key = String(id).trim();
    if (key.indexOf('i-') !== 0) key = 'i-' + key;
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#' + esc(key) + '"></use></svg>';
  }

  /** 日期格式化：zh → '2025 年 8 月'；en → 'Aug 2025' */
  function fmtDate(s) {
    if (!s) return '';
    var str = String(s).trim();
    if (/^至今$/i.test(str) || /^present$/i.test(str) || /^now$/i.test(str)) {
      return LANG === 'en' ? 'Present' : '至今';
    }
    var m = /^(\d{4})[-/.]?(\d{1,2})?/.exec(str);
    if (!m) return str;
    if (LANG === 'en') {
      return m[2] ? MONTH_EN[parseInt(m[2], 10) - 1] + ' ' + m[1] : m[1];
    }
    return m[2] ? m[1] + ' 年 ' + parseInt(m[2], 10) + ' 月' : m[1] + ' 年';
  }

  function fmtRange(a, b) {
    var s = fmtDate(a), e = fmtDate(b || '至今');
    if (!s) return e;
    if (!e) return s;
    return s + ' — ' + e;
  }

  function isOn(obj) { return !!(obj && obj.enabled !== false); }

  /** 用户是否在系统层面要求减少动效 */
  function prefersReducedMotion() {
    return !!(window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /** 通过 aria-live 区向屏幕阅读器朗读状态变化（语言/主题切换等） */
  function announce(msg) {
    var el = document.getElementById('srStatus');
    if (!el || !msg) return;
    el.textContent = '';
    // 异步写入，确保读屏器捕获到状态变化
    setTimeout(function () { el.textContent = msg; }, 0);
  }

  function sectionHead(id) {
    var c = SECTION_COPY[id] || { eyebrow: '' };
    var title = T('sectionTitles')[id] || '';
    return '' +
      '<header class="section-head reveal">' +
        // eyebrow 在中英文版均为英文小标签，标注 lang="en" 防止读屏器用中文语音错读
        '<p class="section-head__eyebrow" lang="en">' + esc(c.eyebrow) + '</p>' +
        '<h2 class="section-head__title" id="' + id + '-heading">' + esc(title) + '</h2>' +
      '</header>';
  }

  function slot(id) { return document.querySelector('[data-slot="' + id + '"]'); }

  function disableSection(id) {
    var sec = document.querySelector('section[data-section="' + id + '"]');
    if (sec) sec.remove();
  }

  /** 把作者列表中本人的名字加粗 */
  function boldSelf(authors) {
    if (!authors) return '';
    var html = esc(authors);
    var names = [DATA.profile && DATA.profile.name, DATA.profile && DATA.profile.nameEn];
    names.forEach(function (n) {
      var e = esc(n);
      if (e && html.indexOf(e) !== -1) {
        html = html.split(e).join('<strong>' + e + '</strong>');
      }
    });
    return html;
  }

  /* ==========================================================================
   * 渲染：元信息
   * ======================================================================== */
  function renderMeta() {
    var meta = DATA.meta || {};
    function pick(v) {
      if (!v) return '';
      return (typeof v === 'string') ? v : (v[LANG] || v.zh || '');
    }
    var title = pick(meta.pageTitle);
    if (title) document.title = title;

    function setMeta(attr, key, val) {
      if (!val) return;
      var el = document.querySelector('meta[' + attr + '="' + key + '"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    }
    var desc = pick(meta.description);
    setMeta('name', 'description', desc);
    setMeta('name', 'keywords', meta.keywords);
    setMeta('name', 'author', (DATA.profile && DATA.profile.name) || '');

    // —— 社交分享卡：标题/描述随语言切换 ——
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    // Twitter Card 使用 name=（非 property=），否则会被社交平台忽略
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:card', 'summary_large_image');

    var locale = LANG === 'en' ? 'en_US' : 'zh_CN';
    setMeta('property', 'og:locale', locale);
    setMeta('property', 'og:locale:alternate', LANG === 'en' ? 'zh_CN' : 'en_US');

    // —— 把相对地址升级为绝对地址（爬虫与社交平台需要绝对 URL） ——
    function absUrl(rel) {
      try { return new URL(rel, location.href).href; } catch (e) { return rel; }
    }
    var canonical = (function () {
      try { return location.href.split('#')[0].split('?')[0]; } catch (e) { return location.href; }
    })();

    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', absUrl('assets/files/og-banner.png'));
    setMeta('property', 'og:image:width', '2400');
    setMeta('property', 'og:image:height', '1260');
    setMeta('property', 'og:image:type', 'image/png');
    setMeta('property', 'og:image:alt',
      (DATA.profile && DATA.profile.name ? DATA.profile.name + ' · ' : '') +
      (LANG === 'en' ? 'Academic CV share card' : '学术简历分享卡'));
    setMeta('name', 'twitter:image', absUrl('assets/files/og-banner.png'));

    // canonical：声明本页规范地址
    var canonLink = document.querySelector('link[rel="canonical"]');
    if (!canonLink) {
      canonLink = document.createElement('link');
      canonLink.rel = 'canonical';
      document.head.appendChild(canonLink);
    }
    canonLink.href = canonical;

    document.documentElement.lang = LANG === 'en' ? 'en' : 'zh-CN';

    // 结构化数据（Schema.org Person）
    var p = DATA.profile || {};
    var email = '', phone = '', site = '', sameAs = [], orcid = '';
    (p.contacts || []).forEach(function (c) {
      if (c.type === 'email') email = c.value;
      if (c.type === 'phone') phone = c.value;
      if (c.href && /^https?:/i.test(c.href)) {
        sameAs.push(c.href);
        if (c.type === 'website') site = c.href;
      }
      if (c.type === 'orcid' && c.href) orcid = c.href;
    });

    var knowsAbout = [];
    (cur().research && cur().research.items || []).forEach(function (r) {
      if (r.title) knowsAbout.push(r.title);
    });
    ((cur().skills && cur().skills.categories) || []).forEach(function (g) {
      (g.items || []).forEach(function (it) { knowsAbout.push(it.name); });
    });

    // 奖项名称用于结构化数据（学术身份可信度）
    var awards = ((cur().awards && cur().awards.items) || [])
      .map(function (a) { return a.name; }).filter(Boolean);
    var almaMater = ((cur().education && cur().education.items) || [])
      .map(function (e) { return { '@type': 'CollegeOrUniversity', name: e.school }; });

    var ld = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: p.name || '',
      alternateName: p.nameEn || undefined,
      jobTitle: (cur().hero && cur().hero.title) || '',
      description: desc,
      image: p.avatar ? absUrl(p.avatar) : undefined,
      email: email ? 'mailto:' + email : undefined,
      telephone: phone || undefined,
      url: site || canonical,
      sameAs: sameAs.length ? sameAs : undefined,
      identifier: orcid || undefined,
      alumniOf: almaMater.length ? almaMater : undefined,
      knowsAbout: knowsAbout.length ? knowsAbout : undefined,
      knowsLanguage: ['zh-CN', 'en'],
      award: awards.length ? awards : undefined,
      nationality: { '@type': 'Country', name: 'China' }
    };

    var old = document.getElementById('ld-json');
    if (old) old.remove();
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ld-json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    // 打印专用页眉：导出 PDF 时首页顶部出现姓名·方向·邮箱身份条
    var printHeader = document.querySelector('.print-header');
    if (!printHeader) {
      printHeader = document.createElement('div');
      printHeader.className = 'print-header';
      document.body.insertBefore(printHeader, document.body.firstChild);
    }
    printHeader.innerHTML =
      '<span class="print-header__name">' + esc(p.name || '') + '</span>' +
      '<span class="print-header__role">' + esc((cur().hero && cur().hero.title) || '') + '</span>' +
      '<span class="print-header__contact">' + esc(email || '') + '</span>';
  }

  /* ==========================================================================
   * 渲染：首屏
   * ======================================================================== */
  function renderHero() {
    var h = cur().hero || {};
    var p = DATA.profile || {};
    var el = slot('hero');
    if (!el) return;

    var name = p.name || '';
    var brandName = document.getElementById('brandName');
    var brandAvatar = document.getElementById('brandAvatar');
    if (brandName) brandName.textContent = name;
    if (brandAvatar) {
      brandAvatar.innerHTML = p.avatar
        ? '<img src="' + esc(p.avatar) + '" alt="" loading="eager" decoding="async">'
        : esc(name.charAt(0));
    }

    var contacts = (p.contacts || []).filter(function (c) {
      // 英文 CV 不显示微信，因为国际导师不会使用微信联系
      return LANG !== 'en' || c.type !== 'wechat';
    }).map(function (c) {
      var m = CONTACT_META[c.type] || CONTACT_META.custom;
      var label = '<span class="sr-only">' + esc(m[LANG] || m.zh) + '：</span>';
      var value = label + '<span>' + esc(c.value) + '</span>';
      if (c.href) {
        var external = /^https?:/i.test(c.href);
        return '<li><a class="hero__contact" href="' + esc(c.href) + '"' +
          (external ? ' target="_blank" rel="noopener noreferrer"' : '') +
          '>' + icon(m.icon) + value + '</a></li>';
      }
      return '<li><span class="hero__contact">' + icon(m.icon) + value + '</span></li>';
    }).join('');

    var extras = (h.extras || []).map(function (t) {
      return '<li class="chip chip--outline">' + esc(t) + '</li>';
    }).join('');

    var resumeCfg = cur().resume || {};
    var actions = (h.actions || []).map(function (a) {
      if (a.action === 'download') {
        // 有上传 PDF 时直接下载；无 PDF 时退化为「打印 / 另存为 PDF」，
        // 保证 hero 主 CTA 始终可用（教授常需转发 PDF 版简历）
        if (resumeCfg.pdfUrl) {
          return '<a class="btn btn--primary" href="' + esc(resumeCfg.pdfUrl) + '" download="' +
            esc(resumeCfg.pdfFileName || 'cv.pdf') + '">' + icon('i-download') + esc(a.text) + '</a>';
        }
        return '<button class="btn btn--primary" type="button" data-print aria-haspopup="true">' +
          icon('i-printer') + esc(a.text) + '</button>';
      }
      if (a.action === 'print') {
        return '<button class="btn' + (a.primary ? ' btn--primary' : '') + '" type="button" data-print>' +
          icon('i-printer') + esc(a.text) + '</button>';
      }
      var isAnchor = a.href && a.href.charAt(0) === '#';
      return '<a class="btn' + (a.primary ? ' btn--primary' : '') + '" href="' + esc(a.href || '#') + '"' +
        (isAnchor ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
        (isAnchor ? '' : icon('i-external')) + esc(a.text) + '</a>';
    }).join('');

    var portrait = p.avatar
      ? '<figure class="hero__portrait">' +
          // LCP 主图：首屏证件照，eager + high priority + 异步解码，避免布局跳动（已有宽高）
          '<img src="' + esc(p.avatar) + '" alt="' + esc(name) + ' 证件照" width="512" height="512" ' +
          'loading="eager" fetchpriority="high" decoding="async">' +
        '</figure>'
      : '';

    // 证件照与正文分列：正文整体包进 hero__body，避免块级元素的边框横穿到照片下方
    var body = '' +
      (h.intent ? '<p class="hero__intent">' + esc(h.intent) + '</p>' : '') +
      '<h1 class="hero__name" id="hero-name">' + esc(name) + '</h1>' +
      (p.nameEn ? '<p class="hero__name-en">' + esc(p.nameEn) + '</p>' : '') +
      (h.title ? '<p class="hero__title">' + esc(h.title) + '</p>' : '') +
      (h.tagline ? '<p class="hero__tagline">' + esc(h.tagline) + '</p>' : '') +
      (h.keywords && h.keywords.length ? '<ul class="hero__keywords">' +
        h.keywords.map(function (k) { return '<li class="chip chip--accent">' + esc(k) + '</li>'; }).join('') +
        '</ul>' : '') +
      (h.affiliation ? '<p class="hero__affiliation">' + esc(h.affiliation) + '</p>' : '') +
      (h.availability ? '<p class="hero__availability"><span class="chip chip--outline">' + esc(h.availability) + '</span></p>' : '') +
      (extras ? '<ul class="hero__extras">' + extras + '</ul>' : '') +
      (contacts ? '<ul class="hero__contacts">' + contacts + '</ul>' : '') +
      (actions ? '<div class="hero__actions btn-row">' + actions + '</div>' : '');

    el.innerHTML = '' +
      '<div class="hero__inner">' +
        portrait +
        '<div class="hero__body">' + body + '</div>' +
      '</div>';
  }

  /* ==========================================================================
   * 渲染：学术概览
   * ======================================================================== */
  function renderOverview() {
    var el = slot('overview');
    var section = document.querySelector('section[data-section="overview"]');
    if (!el) return;

    var pub = cur().publications || {};
    var papers = pub.papers || [];
    var patents = (pub.patents || []).filter(function (p) { return p.type === 'patent'; });
    var software = (pub.patents || []).filter(function (p) { return p.type === 'software'; });
    var national = ((cur().awards && cur().awards.items) || []).filter(function (a) {
      return /国家级|national/i.test(a.level || '');
    });

    var statusMap = T('status') || {};
    var firstAuth = function (arr) {
      return arr.filter(function (p) { return /第一|first/i.test(p.role || ''); }).length;
    };
    var firstNat = national.filter(function (a) { return /一等奖|first prize/i.test(a.name || ''); });
    var secondNat = national.filter(function (a) { return /二等奖|second prize/i.test(a.name || ''); });

    // 每个数字配一句关键定语，让教授一眼看到"含金量"而非裸数字
    var stats = [
      {
        value: papers.length,
        label: T('stat_papers'),
        sub: papers[0] ? (papers[0].journal + (papers[0].status ? ' · ' + (statusMap[papers[0].status] || '') : '')) : ''
      },
      {
        value: patents.length,
        label: T('stat_patents'),
        sub: patents.length ? (firstAuth(patents) + ' ' + (LANG === 'en' ? 'first author' : '项第一作者')) : ''
      },
      {
        value: software.length,
        label: T('stat_software'),
        sub: software.length ? (firstAuth(software) + ' ' + (LANG === 'en' ? 'first author' : '项第一作者')) : ''
      },
      {
        value: national.length,
        label: T('stat_awards'),
        sub: national.length ? (LANG === 'en'
          ? (firstNat.length + ' 1st + ' + secondNat.length + ' 2nd')
          : (firstNat.length + ' 一等 + ' + secondNat.length + ' 二等')) : ''
      }
    ].filter(function (s) { return s.value > 0; });

    // 标题仅对屏幕阅读器可见：视觉上是纯数字条，语义上仍需可导航的标题
    el.innerHTML =
      '<h2 class="sr-only" id="overview-heading">' + esc(T('overviewLabel')) + '</h2>' +
      '<ul class="overview__list">' + stats.map(function (s) {
        return '<li class="stat reveal">' +
          '<span class="stat__value">' + esc(s.value) + '</span>' +
          '<span class="stat__label">' + esc(s.label) + '</span>' +
          (s.sub ? '<span class="stat__sub">' + esc(s.sub) + '</span>' : '') +
        '</li>';
      }).join('') + '</ul>';

    if (section) section.setAttribute('aria-labelledby', 'overview-heading');
  }

  /* ==========================================================================
   * 渲染：教育背景
   * ======================================================================== */
  function renderEducation() {
    var d = cur().education || {};
    var el = slot('education');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('education'); return; }

    var items = d.items.map(function (e) {
      var courses = (e.courses || []).map(function (c) {
        return '<li class="edu__course"><span>' + esc(c.name) + '</span>' +
               (c.score ? '<b>' + esc(c.score) + '</b>' : '') + '</li>';
      }).join('');

      var honors = (e.honors || []).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('');

      // 本科毕业论文：博士申请中证明研究训练的关键证据
      var thesis = e.thesis ? (
        '<div class="edu__thesis">' +
          '<h4 class="edu__subtitle">' + icon('i-book') + esc(T('thesis')) + '</h4>' +
          '<p class="edu__thesis-title">' + esc(e.thesis.title) + '</p>' +
          '<p class="edu__thesis-meta">' +
            (e.thesis.advisor
              ? '<span class="edu__thesis-advisor">' + esc(T('thesisAdvisor')) + '：' + esc(e.thesis.advisor) + '</span>'
              : '') +
            (e.thesis.award
              ? '<span class="chip chip--gold">' + esc(e.thesis.award) + '</span>'
              : '') +
          '</p>' +
        '</div>'
      ) : '';

      // 已获录取但未入学的条目：显示「已获录取」标记，时间只写到入学年份
      var isAdmitted = e.status === 'admitted';
      var periodText = isAdmitted
        ? fmtDate(e.start) + (LANG === 'en' ? ' intake' : '入学')
        : fmtRange(e.start, e.end);

      return '' +
        '<li><article class="card edu reveal">' +
          '<header class="edu__head">' +
            '<h3 class="edu__school">' + esc(e.school) + '</h3>' +
            (e.degree ? '<span class="edu__degree">' + esc(e.degree) + '</span>' : '') +
            '<span class="edu__period">' + esc(periodText) + '</span>' +
          '</header>' +
          (isAdmitted ? '<p class="edu__badge"><span class="chip chip--gold">' + esc(T('admitted')) + '</span></p>' : '') +
          '<p class="edu__major">' + esc(e.major || '') + (e.location ? ' · ' + esc(e.location) : '') + '</p>' +
          (e.note ? '<p class="edu__note">' + esc(e.note) + '</p>' : '') +
          (e.gpa ? '<p class="edu__gpa">' + icon('i-trophy') + esc(e.gpa) + '</p>' : '') +
          thesis +
          (courses
            ? '<h4 class="edu__subtitle">' + esc(T('core')) + '</h4>' +
              '<ul class="edu__courses">' + courses + '</ul>'
            : '') +
          (honors
            ? '<h4 class="edu__subtitle">' + esc(T('honors')) + '</h4>' +
              '<ul class="edu__honors">' + honors + '</ul>'
            : '') +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('education') + '<ul class="edu-list">' + items + '</ul>';
  }

  /* ==========================================================================
   * 渲染：研究兴趣
   * ======================================================================== */
  function renderResearch() {
    var d = cur().research || {};
    var el = slot('research');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('research'); return; }

    var items = d.items.map(function (r) {
      var tags = (r.tags || []).map(function (t) {
        return '<li class="chip chip--accent">' + esc(t) + '</li>';
      }).join('');
      return '' +
        '<li><article class="card interest reveal">' +
          '<h3 class="interest__title">' + esc(r.title) + '</h3>' +
          (r.desc ? '<p class="interest__desc">' + esc(r.desc) + '</p>' : '') +
          (tags ? '<ul class="tag-list interest__tags">' + tags + '</ul>' : '') +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('research') + '<ol class="interests">' + items + '</ol>';
  }

  /* ==========================================================================
   * 渲染：学术成果（论文 + 专利 / 软著）
   * ======================================================================== */
  function renderPublications() {
    var d = cur().publications || {};
    var el = slot('publications');
    if (!el) return;

    var papers = d.papers || [];
    var patents = d.patents || [];
    if (!isOn(d) || (!papers.length && !patents.length)) { disableSection('publications'); return; }

    var blocks = '';

    /* —— 期刊论文 —— */
    if (papers.length) {
      var list = papers.map(function (p) {
        var statusKey = p.status || 'published';
        var statusText = (T('status') || {})[statusKey] || statusKey;
        var badgeClass = statusKey === 'in-press' || statusKey === 'published' ? 'chip--gold' : 'chip--outline';

        var tokens = [];
        if (p.journal) tokens.push(p.journal);
        if (p.publisher) tokens.push(p.publisher);
        if (p.year) tokens.push(p.year);
        if (p.volume) tokens.push(T('vol') + ' ' + p.volume);
        if (p.pages) tokens.push(T('pp') + ' ' + p.pages);

        var meta = '<p class="meta-row pub__meta">' + tokens.map(function (t) {
          return '<span class="meta-row__item">' + esc(t) + '</span>';
        }).join('') + (p.doi ? '<span class="meta-row__item">' + esc(T('doi')) + ': <code>' + esc(p.doi) + '</code></span>' : '') + '</p>';

        var link = (p.link || (p.doi ? 'https://doi.org/' + p.doi : ''))
          ? '<p class="pub__link"><a class="chip chip--accent" href="' +
            esc(p.link || 'https://doi.org/' + p.doi) +
            '" target="_blank" rel="noopener noreferrer">' + esc(T('paperLink')) + icon('i-external') + '</a></p>'
          : '';

        return '' +
          '<li><article class="card pub reveal">' +
            '<div class="pub__head">' +
              '<span class="chip ' + badgeClass + '">' + esc(statusText) + '</span>' +
              (p.index ? '<span class="chip chip--accent">' + esc(p.index) + '</span>' : '') +
            '</div>' +
            (p.title ? '<h3 class="pub__title">' + esc(p.title) + '</h3>' : '') +
            (p.authors ? '<p class="pub__authors">' + boldSelf(p.authors) +
              (p.authorNote ? ' <span class="pub__note">（' + esc(p.authorNote) + '）</span>' : '') + '</p>' : '') +
            '<p class="pub__journal">' + esc(p.journal || '') + '</p>' +
            meta + link +
          '</article></li>';
      }).join('');

      blocks +=
        '<div class="pub-block">' +
          '<h3 class="pub-block__title">' + esc(T('papersBlock')) +
            '<span class="pub-block__count">' + esc(T('total')) + papers.length + esc(T('items')) + '</span>' +
          '</h3>' +
          '<ol class="pub-list">' + list + '</ol>' +
        '</div>';
    }

    /* —— 专利与软件著作权 —— */
    if (patents.length) {
      var typeMap = T('type') || {};
      var firstCount = patents.filter(function (p) { return /第一|first/i.test(p.role || ''); }).length;

      var rows = patents.map(function (p) {
        var isFirst = /第一|first/i.test(p.role || '');
        return '' +
          '<li class="card ip reveal' + (isFirst ? ' ip--first' : '') + '">' +
            '<div class="ip__head">' +
              '<span class="chip ' + (p.type === 'patent' ? 'chip--gold' : 'chip--accent') + '">' +
                esc(typeMap[p.type] || p.type) + '</span>' +
              '<span class="ip__name">' + esc(p.name) + '</span>' +
              // 金色专用于奖项，作者位次统一用描边样式；未填写时不外露空标签
              (p.role ? '<span class="chip chip--outline ip__role">' + esc(p.role) + '</span>' : '') +
            '</div>' +
            '<p class="ip__meta">' +
              (p.number ? esc(p.number) + ' · ' : '') + esc(fmtDate(p.date)) +
            '</p>' +
          '</li>';
      }).join('');

      blocks +=
        '<div class="pub-block">' +
          '<h3 class="pub-block__title">' + esc(T('ipBlock')) +
            '<span class="pub-block__count">' + esc(T('total')) + patents.length + esc(T('items')) +
            (firstCount ? '（' + firstCount + ' ' + esc(LANG === 'en' ? 'as first author' : '项第一作者') + '）' : '') +
            '</span>' +
          '</h3>' +
          '<ul class="ip-list">' + rows + '</ul>' +
        '</div>';
    }

    el.innerHTML = sectionHead('publications') + blocks;
  }

  /* ==========================================================================
   * 渲染：科研经历
   * ======================================================================== */
  function renderExperience() {
    var d = cur().experience || {};
    var el = slot('experience');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('experience'); return; }

    var items = d.items.map(function (j) {
      var points = (j.points || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
      var methods = (j.methods || []).map(function (m) {
        return '<li class="chip">' + esc(m) + '</li>';
      }).join('');

      return '' +
        '<li class="timeline__item reveal">' +
          '<article class="card job">' +
            '<header class="job__head">' +
              '<h3 class="job__name">' + esc(j.name) + '</h3>' +
              (j.role ? '<span class="job__role">' + esc(j.role) + '</span>' : '') +
              '<span class="job__period">' + esc(j.period || '') + '</span>' +
            '</header>' +
            (j.org ? '<p class="job__org">' + esc(j.org) + '</p>' : '') +
            (j.description ? '<p class="job__desc">' + esc(j.description) + '</p>' : '') +
            (points ? '<ul class="job__points">' + points + '</ul>' : '') +
            (methods
              ? '<div class="job__methods"><ul class="tag-list">' + methods + '</ul></div>'
              : '') +
          '</article>' +
        '</li>';
    }).join('');

    el.innerHTML = sectionHead('experience') + '<ol class="timeline">' + items + '</ol>';
  }

  /* ==========================================================================
   * 渲染：荣誉奖项
   * ======================================================================== */
  function renderAwards() {
    var d = cur().awards || {};
    var el = slot('awards');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('awards'); return; }

    var items = d.items.map(function (a) {
      return '' +
        '<li class="card award reveal' + (a.highlight ? ' award--highlight' : '') + '">' +
          '<div class="award__head">' +
            '<span class="award__name">' + esc(a.name) + '</span>' +
            (a.level ? '<span class="chip ' + (a.highlight ? 'chip--gold' : 'chip--outline') + '">' + esc(a.level) + '</span>' : '') +
            (a.date ? '<span class="award__date">' + esc(fmtDate(a.date)) + '</span>' : '') +
          '</div>' +
          '<p class="award__meta">' +
            (a.role ? '<span class="award__role">' + esc(a.role) + '</span>' : '') +
            (a.work ? '<span class="award__work">' + esc(a.work) + '</span>' : '') +
          '</p>' +
          (a.desc ? '<p class="award__desc">' + esc(a.desc) + '</p>' : '') +
        '</li>';
    }).join('');

    el.innerHTML = sectionHead('awards') + '<ul class="awards">' + items + '</ul>';
  }

  /* ==========================================================================
   * 渲染：研究计划
   * ======================================================================== */
  function renderProposal() {
    var d = cur().proposal || {};
    var el = slot('proposal');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('proposal'); return; }

    var items = d.items.map(function (p, i) {
      var tags = (p.tags || []).map(function (t) {
        return '<li class="chip chip--accent">' + esc(t) + '</li>';
      }).join('');
      return '' +
        '<li><article class="card proposal-item reveal">' +
          '<header class="proposal-item__head">' +
            '<span class="proposal-item__index">' + (i + 1) + '</span>' +
            '<h3 class="proposal-item__title">' + esc(p.title) + '</h3>' +
          '</header>' +
          (p.desc ? '<p class="proposal-item__desc">' + esc(p.desc) + '</p>' : '') +
          (tags ? '<ul class="tag-list proposal-item__tags">' + tags + '</ul>' : '') +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('proposal') +
      (d.intro ? '<p class="section__note">' + esc(d.intro) + '</p>' : '') +
      '<ol class="proposal">' + items + '</ol>';
  }

  /* ==========================================================================
   * 渲染：科普传播
   * ======================================================================== */
  function renderOutreach() {
    var d = cur().outreach || {};
    var el = slot('outreach');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('outreach'); return; }

    var items = d.items.map(function (o) {
      var metrics = (o.metrics || []).map(function (m) {
        return '<li><span class="metric__value">' + esc(m.value) + '</span>' +
               '<span class="metric__label">' + esc(m.label) + '</span></li>';
      }).join('');

      var link = o.link
        ? '<p><a class="chip chip--accent" href="' + esc(o.link) + '" target="_blank" rel="noopener noreferrer">' +
          icon('i-external') + esc(o.link) + '</a></p>'
        : '';

      return '' +
        '<li><article class="card outreach-item reveal">' +
          '<header class="outreach-item__head">' +
            '<h3 class="outreach-item__title">' + esc(o.title) + '</h3>' +
            (o.role ? '<span class="outreach-item__role">' + esc(o.role) + '</span>' : '') +
            '<span class="outreach-item__period">' + esc(o.period || '') + '</span>' +
          '</header>' +
          (o.org ? '<p class="job__org">' + esc(o.org) + '</p>' : '') +
          (o.desc ? '<p class="outreach-item__desc">' + esc(o.desc) + '</p>' : '') +
          (metrics ? '<ul class="outreach-item__metrics">' + metrics + '</ul>' : '') +
          link +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('outreach') + '<ul class="outreach">' + items + '</ul>';
  }

  /* ==========================================================================
   * 渲染：学术技能
   * ======================================================================== */
  function renderSkills() {
    var d = cur().skills || {};
    var el = slot('skills');
    if (!el) return;
    if (!isOn(d) || !(d.categories || []).length) { disableSection('skills'); return; }

    var groups = d.categories.map(function (g) {
      var list = (g.items || []).map(function (s) {
        var lv = parseInt(s.level, 10);
        if (!lv || lv < 1) {
          return '<li class="skill skill--plain"><span class="skill__name">' + esc(s.name) + '</span></li>';
        }
        var pct = Math.round((Math.min(lv, 5) / 5) * 100);
        return '' +
          '<li class="skill">' +
            '<div class="skill__head">' +
              '<span class="skill__name">' + esc(s.name) + '</span>' +
            '</div>' +
            '<div class="skill__bar" role="meter" aria-valuemin="0" aria-valuemax="100" ' +
              'aria-valuenow="' + pct + '" aria-label="' + esc(s.name) + '">' +
              '<span class="skill__bar-fill" data-pct="' + pct + '"></span>' +
            '</div>' +
          '</li>';
      }).join('');

      return '' +
        '<section class="card skill-group reveal" aria-label="' + esc(g.name) + '">' +
          '<h3 class="skill-group__name">' + esc(g.name) + '</h3>' +
          '<ul class="skill-list">' + list + '</ul>' +
        '</section>';
    }).join('');

    var extras = (d.extras || []).map(function (e) {
      return '<li class="skill-extra"><span class="skill-extra__name">' + esc(e.name) + '</span>' +
             '<span class="skill-extra__desc">' + esc(e.desc) + '</span></li>';
    }).join('');

    var legend = d.showLegend === false ? '' :
      '<ul class="skill-legend">' +
        '<li><b>5</b> ' + esc(LANG === 'en' ? 'Expert' : '精通') + '</li>' +
        '<li><b>4</b> ' + esc(LANG === 'en' ? 'Proficient' : '熟练') + '</li>' +
        '<li><b>3</b> ' + esc(LANG === 'en' ? 'Competent' : '掌握') + '</li>' +
        '<li><b>2</b> ' + esc(LANG === 'en' ? 'Familiar' : '了解') + '</li>' +
        '<li><b>1</b> ' + esc(LANG === 'en' ? 'Beginner' : '入门') + '</li>' +
      '</ul>';

    el.innerHTML = sectionHead('skills') +
      '<div class="skills">' + groups + '</div>' +
      (extras ? '<ul class="skill-extras reveal">' + extras + '</ul>' : '') +
      legend;
  }

  /* ==========================================================================
   * 渲染：研究自述
   * ======================================================================== */
  function renderStatement() {
    var d = cur().statement || {};
    var el = slot('statement');
    if (!el) return;
    if (!isOn(d) || !((d.paragraphs || []).length || d.quote)) { disableSection('statement'); return; }

    var paras = (d.paragraphs || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
    var tags = (d.tags || []).map(function (t) {
      return '<li class="chip chip--outline">' + esc(t) + '</li>';
    }).join('');

    el.innerHTML = sectionHead('statement') +
      '<div class="statement reveal">' +
        (d.quote ? '<blockquote class="statement__quote">' + esc(d.quote) + '</blockquote>' : '') +
        '<div class="statement__text">' + paras + '</div>' +
        (d.highlight ? '<p class="statement__highlight"><strong>' + esc(d.highlight) + '</strong></p>' : '') +
        (tags ? '<ul class="tag-list statement__tags">' + tags + '</ul>' : '') +
      '</div>';
  }

  /* ==========================================================================
   * 渲染：推荐人
   * ======================================================================== */
  function renderReferees() {
    var d = cur().referees || {};
    var el = slot('referees');
    if (!el) return;
    if (!isOn(d) || !(d.items || []).length) { disableSection('referees'); return; }

    // 仅渲染已填写的真实推荐人；占位条目（含「待补充 / To be completed」）不外露给访客
    var real = (d.items || []).filter(function (r) {
      var blob = (r.name || '') + ' ' + (r.email || '') + ' ' + (r.title || '');
      return blob && !/待补充|To be completed/i.test(blob);
    });

    var items = real.map(function (r) {
      var contact = [r.email, r.phone].filter(Boolean).map(function (v) {
        var isMail = v.indexOf('@') > -1;
        return '<a class="ref__contact" href="' + esc((isMail ? 'mailto:' : 'tel:') + v) + '">' + esc(v) + '</a>';
      }).join('<span class="ref__sep">·</span>');

      return '' +
        '<li><article class="card ref reveal">' +
          '<h3 class="ref__name">' + esc(r.name) + '</h3>' +
          (r.title ? '<p class="ref__title">' + esc(r.title) + '</p>' : '') +
          (r.org ? '<p class="ref__org">' + esc(r.org) + '</p>' : '') +
          (r.relation ? '<p class="ref__relation">' + esc(r.relation) + '</p>' : '') +
          (contact ? '<p class="ref__contacts">' + contact + '</p>' : '') +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('referees') +
      (d.note ? '<p class="section__note' + (real.length ? '' : ' section__note--emphasis') + '">' + esc(d.note) + '</p>' : '') +
      (real.length ? '<ul class="ref-list">' + items + '</ul>' : '');
  }

  /* ==========================================================================
   * 渲染：目标导师与研究契合（套磁定向，提升"做过功课"的可信度）
   * ======================================================================== */
  function renderTargets() {
    var d = cur().targets || {};
    var el = slot('targets');
    if (!el) return;
    var items = d.items || [];
    if (!isOn(d) || !items.length) { disableSection('targets'); return; }

    var cards = items.map(function (t) {
      return '' +
        '<li><article class="card target reveal">' +
          '<h3 class="target__name">' + esc(t.name) + '</h3>' +
          (t.lab ? '<p class="target__lab">' + esc(t.lab) + '</p>' : '') +
          (t.focus ? '<p class="target__focus">' + esc(t.focus) + '</p>' : '') +
          (t.fit ? '<p class="target__fit">' + esc(t.fit) + '</p>' : '') +
        '</article></li>';
    }).join('');

    el.innerHTML = sectionHead('targets') +
      (d.intro ? '<p class="section__note">' + esc(d.intro) + '</p>' : '') +
      '<ul class="target-list">' + cards + '</ul>';
  }

  /* ==========================================================================
   * 渲染：CV 下载
   * ======================================================================== */
  function renderResume() {
    var d = cur().resume || {};
    var el = slot('resume');
    if (!el) return;
    if (!isOn(d)) { disableSection('resume'); return; }

    var download = d.pdfUrl
      ? '<a class="btn btn--primary" href="' + esc(d.pdfUrl) + '" download="' +
        esc(d.pdfFileName || 'cv.pdf') + '">' + icon('i-download') + esc(T('download')) + '</a>'
      : '';

    el.innerHTML = '' +
      '<div class="cta-card reveal">' +
        '<span class="cta-card__icon">' + icon('i-download') + '</span>' +
        '<h2 class="cta-card__title" id="resume-heading">' + esc(d.title || T('download')) + '</h2>' +
        (d.description ? '<p class="cta-card__desc">' + esc(d.description) + '</p>' : '') +
        '<div class="btn-row cta-card__actions" style="justify-content:center">' +
          download +
          '<button class="btn' + (download ? '' : ' btn--primary') + '" type="button" data-print>' +
            icon('i-printer') + esc(T('print')) +
          '</button>' +
        '</div>' +
        (d.footnote ? '<p class="cta-card__foot">' + esc(d.footnote) + '</p>' : '') +
      '</div>';
  }

  /* ==========================================================================
   * 渲染：导航
   * ======================================================================== */
  function renderNav() {
    var list = document.getElementById('navList');
    if (!list) return;

    var items = ((cur().nav) || []).filter(function (n) {
      if (n.enabled === false) return false;
      return !!document.querySelector('section[data-section="' + n.id + '"]');
    });

    list.innerHTML = items.map(function (n) {
      return '<li><a class="nav__link" href="#' + esc(n.id) + '">' + esc(n.label) + '</a></li>';
    }).join('');

    updateNavOverflow();
  }

  /**
   * 导航项较多时，桌面窄屏会被横向裁切。
   * 检测到溢出就给 .nav 加 is-overflowing，由 CSS 渲染右侧渐隐遮罩提示还有内容。
   */
  function updateNavOverflow() {
    var list = document.getElementById('navList');
    var nav = list && list.closest('.nav');
    if (!list || !nav) return;

    // 移动端导航是下拉面板，不需要遮罩；matchMedia 不可用时跳过该判断
    var mq = window.matchMedia && window.matchMedia('(max-width: 1023px)');
    if (mq && mq.matches) {
      nav.classList.remove('is-overflowing');
      return;
    }
    nav.classList.toggle('is-overflowing', list.scrollWidth - list.clientWidth > 1);
  }

  /* ==========================================================================
   * 渲染：页脚
   * ======================================================================== */
  function renderFooter() {
    var el = slot('footer');
    if (!el) return;

    var meta = DATA.meta || {};
    var year = new Date().getFullYear();
    var name = (typeof meta.footerName === 'string')
      ? meta.footerName
      : ((meta.footerName || {})[LANG] || (DATA.profile && DATA.profile.name) || '');

    var links = ((DATA.profile && DATA.profile.contacts) || [])
      .filter(function (c) { return c.href && /^https?:/i.test(c.href); })
      .slice(0, 4)
      .map(function (c) {
        var m = CONTACT_META[c.type] || CONTACT_META.custom;
        return '<li><a href="' + esc(c.href) + '" target="_blank" rel="noopener noreferrer">' +
               esc(m[LANG] || m.zh) + '</a></li>';
      }).join('');

    el.innerHTML =
      (links ? '<ul class="site-footer__links">' + links + '</ul>' : '') +
      '<p>&copy; ' + year + ' ' + esc(name) + ' ' + esc(T('copyright')) + '</p>' +
      (meta.showBuildInfo !== false ? '<p class="site-footer__note">' + esc(T('buildInfo')) + '</p>' : '');
  }

  /* ==========================================================================
   * 渲染总入口
   * ======================================================================== */
  function renderAll() {
    var main = document.getElementById('main');
    if (main && MAIN_HTML) main.innerHTML = MAIN_HTML;   // 复原被移除的模块

    renderMeta();
    renderHero();
    renderOverview();
    renderEducation();
    renderResearch();
    renderPublications();
    renderExperience();
    renderAwards();
    renderProposal();
    renderTargets();
    renderOutreach();
    renderSkills();
    renderStatement();
    renderReferees();
    renderResume();
    renderNav();
    renderFooter();

    initReveal();
    initScrollSpy();
    syncStaticLabels();
  }

  /** 更新写在 HTML 里的静态无障碍标签 */
  function syncStaticLabels() {
    var skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = T('skip');

    var toTop = document.getElementById('toTop');
    if (toTop) toTop.setAttribute('aria-label', T('toTop'));

    var langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.setAttribute('aria-label', LANG === 'zh' ? T('langToEn') : T('langToZh'));
  }

  /* ==========================================================================
   * 交互：语言切换
   * ======================================================================== */
  function initLang() {
    var btn = document.getElementById('langToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var keepFocus = document.activeElement;
      var keepScroll = window.scrollY || window.pageYOffset || 0;
      LANG = LANG === 'zh' ? 'en' : 'zh';
      document.documentElement.setAttribute('data-lang', LANG);
      try { localStorage.setItem('cv-lang', LANG); } catch (e) {}
      renderAll();
      initTheme();      // 语言变了，主题按钮的提示文字也要跟着变
      // 维持滚动位置，避免切换语言后页面跳回顶部
      if (keepScroll) window.scrollTo(0, keepScroll);
      // 维持焦点：语言按钮在 header 中未被重新渲染，焦点本就保留；此处兜底
      if (keepFocus && typeof keepFocus.focus === 'function') {
        try { keepFocus.focus({ preventScroll: true }); } catch (e) { keepFocus.focus(); }
      }
      announce(LANG === 'en' ? '已切换到英文版本' : '已切换到中文版本');
    });
  }

  /* ==========================================================================
   * 交互：移动端菜单（含焦点陷阱与焦点管理）
   * ======================================================================== */
  function initMenu() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('navMenu');
    var overlay = document.getElementById('navOverlay');
    if (!toggle || !nav) return;

    /** 取得容器内当前可见且可聚焦的元素 */
    function focusables(container) {
      return Array.prototype.slice.call(container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), ' +
        'textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(function (el) {
        return !el.hidden && (el.offsetWidth > 0 || el.offsetHeight > 0);
      });
    }

    function open() {
      document.body.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', T('closeMenu'));
      if (overlay) overlay.hidden = false;
      // 打开即把焦点送入菜单，方便键盘用户随即 Tab 浏览导航项
      var f = focusables(nav);
      if (f.length) { setTimeout(function () { f[0].focus(); }, 30); }
    }
    function close(returnFocus) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', T('openMenu'));
      if (overlay) overlay.hidden = true;
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener('click', function () {
      document.body.classList.contains('nav-open') ? close(false) : open();
    });
    if (overlay) overlay.addEventListener('click', function () { close(true); });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a.nav__link')) close(false);
    });

    // 焦点陷阱：菜单展开时 Tab 循环不外溢到其后的页面内容
    nav.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !document.body.classList.contains('nav-open')) return;
      var f = focusables(nav);
      if (f.length < 2) { e.preventDefault(); return; }
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) close(true);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && document.body.classList.contains('nav-open')) close(false);
      updateNavOverflow();
    });
  }

  /* ==========================================================================
   * 交互：主题切换
   * ======================================================================== */
  function initTheme() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;

    function sync() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.setAttribute('aria-pressed', String(dark));
      btn.setAttribute('aria-label', dark ? T('themeToLight') : T('themeToDark'));
      btn.title = dark ? T('themeToLight') : T('themeToDark');
    }

    if (!btn.dataset.bound) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('cv-theme', next); } catch (e) {}
        sync();
        announce(next === 'dark'
          ? (LANG === 'en' ? 'Switched to dark mode' : '已切换到深色模式')
          : (LANG === 'en' ? 'Switched to light mode' : '已切换到浅色模式'));
      });
      btn.dataset.bound = '1';
    }
    sync();
  }

  /* ==========================================================================
   * 交互：键盘快捷键（? 切语言 · t 切主题）
   * ======================================================================== */
  function initKeys() {
    document.addEventListener('keydown', function (e) {
      var t = e.target;
      var tag = (t && t.tagName) || '';
      // 输入控件或可编辑区域聚焦时，让按键回到正常输入语义
      if (/INPUT|TEXTAREA|SELECT/.test(tag) || (t && t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === '?') {
        var langBtn = document.getElementById('langToggle');
        if (langBtn) { e.preventDefault(); langBtn.click(); }
      } else if (e.key === 't' || e.key === 'T') {
        var themeBtn = document.getElementById('themeToggle');
        if (themeBtn) { e.preventDefault(); themeBtn.click(); }
      }
    });
  }

  /* ==========================================================================
   * 交互：滚动进度、吸顶、返回顶部
   * ======================================================================== */
  function initScrollUi() {
    var bar = document.getElementById('scrollProgressBar');
    var header = document.getElementById('siteHeader');
    var toTop = document.getElementById('toTop');
    var ticking = false;

    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var y = window.scrollY || doc.scrollTop || 0;
      if (bar) bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
      if (header) header.classList.toggle('is-stuck', y > 8);
      if (toTop) toTop.hidden = y < 400;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    if (toTop && !toTop.dataset.bound) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      });
      toTop.dataset.bound = '1';
    }
    update();
  }

  /* ==========================================================================
   * 交互：导航高亮
   * ======================================================================== */
  var spyTargets = [];
  var spyTicking = false;
  var spyBound = false;

  function spyUpdate() {
    var headerH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 64;
    var line = (window.scrollY || window.pageYOffset) + headerH + 24;
    var current = null;

    spyTargets.forEach(function (t) { if (t.el.offsetTop <= line) current = t; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = spyTargets[spyTargets.length - 1];
    }
    spyTargets.forEach(function (t) {
      var active = t === current;
      t.link.classList.toggle('is-active', active);
      if (active) t.link.setAttribute('aria-current', 'true');
      else t.link.removeAttribute('aria-current');
    });
    spyTicking = false;
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    spyTargets = links.map(function (a) {
      var el = document.querySelector(a.getAttribute('href'));
      return el ? { link: a, el: el } : null;
    }).filter(Boolean);

    // 监听器只绑定一次；切换语言重新渲染后只需刷新目标列表
    if (!spyBound) {
      window.addEventListener('scroll', function () {
        if (!spyTicking) { spyTicking = true; window.requestAnimationFrame(spyUpdate); }
      }, { passive: true });
      window.addEventListener('resize', spyUpdate);
      spyBound = true;
    }
    spyUpdate();
  }

  /* ==========================================================================
   * 交互：滚动出现动画 + 技能条填充
   * ======================================================================== */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (revealObserver) { revealObserver.disconnect(); revealObserver = null; }
    if (!items.length) return;

    function activate(el) {
      el.classList.add('is-visible');
      el.querySelectorAll('.skill__bar-fill').forEach(function (fill) {
        fill.style.width = (fill.getAttribute('data-pct') || 0) + '%';
      });
    }

    if (prefersReducedMotion() || typeof window.IntersectionObserver !== 'function') {
      items.forEach(activate);
      return;
    }

    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && revealObserver) {
          activate(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    items.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ==========================================================================
   * 交互：打印 / 另存为 PDF
   * ======================================================================== */
  function initPrint() {
    document.addEventListener('click', function (e) {
      var target = e.target;
      var btn = target && target.closest ? target.closest('[data-print]') : null;
      if (!btn) return;
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      document.querySelectorAll('.skill__bar-fill').forEach(function (fill) {
        fill.style.width = (fill.getAttribute('data-pct') || 0) + '%';
      });
      window.print();
    });
  }

  /* ==========================================================================
   * 启动
   * ======================================================================== */
  function init() {
    try {
      var saved = localStorage.getItem('cv-lang');
      LANG = saved === 'en' ? 'en' : 'zh';
    } catch (e) { LANG = 'zh'; }
    document.documentElement.setAttribute('data-lang', LANG);

    var main = document.getElementById('main');
    if (main) MAIN_HTML = main.innerHTML;

    renderAll();

    initLang();
    initMenu();
    initTheme();
    initKeys();
    initScrollUi();
    initPrint();
    initSW();
  }

  /* ==========================================================================
   * PWA：注册 Service Worker，断网仍可打开简历
   * ======================================================================== */
  function initSW() {
    // 仅在 http/https 下注册（file:// 与非安全上下文不支持 SW）
    if (!('serviceWorker' in navigator)) return;
    if (!/^https?:/i.test(location.protocol)) return;
    // 避免重复注册
    if (navigator.serviceWorker.controller) return;
    navigator.serviceWorker.register('assets/files/sw.js').catch(function () {
      // 静默失败：离线能力是增强项，不应影响简历正常浏览
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
