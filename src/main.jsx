import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Layers3,
  DraftingCompass,
  Camera,
} from 'lucide-react';
import './styles.css';

const directoryItems = [
  {
    title: '万千炁象品牌视觉系统设计',
    label: '品牌视觉 / 物料应用 / 设计活动识别',
    href: '#cases',
    image: '/assets/qixiang/qixiang-pdf-11-1.webp',
  },
  {
    title: '地球之盐',
    label: '盐湖湿地生态鸟岛与盐文化场景重塑',
    href: '#cases',
    image: '/assets/portfolio-web/page-03-5.webp',
  },
  {
    title: 'Mcdicval Pirate',
    label: '中世纪元素中古店空间设计',
    href: '#cases',
    image: '/assets/portfolio-web/page-03-3.webp',
  },
  {
    title: '数字游民社区办公空间',
    label: '从“游走”到“扎根”的乡村办公场景',
    href: '#cases',
    image: '/assets/portfolio-web/page-13-1.webp',
  },
  {
    title: '秋风市集',
    label: '城市更新背景下的创意集市空间',
    href: '#cases',
    image: '/assets/portfolio-web/page-03-8.webp',
  },
  {
    title: '汐月书庭',
    label: '西南民大航空港校区图书馆改造',
    href: '#cases',
    image: '/assets/portfolio-web/page-03-6.webp',
  },
];

const projects = [
  {
    title: '万千炁象品牌视觉系统设计',
    role: '品牌设计 / 视觉识别',
    time: '2025.06',
    image: '/assets/qixiang/qixiang-pdf-11-1.webp',
    meta: 'Brand Identity / Visual System',
    layout: 'collage',
    summary:
      '为 FOCUS DESIGN 设计平台与梁建国环境设计与陈设艺术研究所联合发起的设计交流活动建立品牌视觉系统，围绕“万千”与“炁象”的东方哲学语义，完成标志、色彩、物料和延展应用。',
    pages: [
      '/assets/qixiang/qixiang-pdf-11-1.webp',
      '/assets/qixiang/qixiang-pdf-27-1.webp',
      '/assets/qixiang/qixiang-pdf-28-1.webp',
      '/assets/qixiang/qixiang-pdf-36-1.webp',
      '/assets/qixiang/qixiang-pdf-40-1.webp',
      '/assets/qixiang/qixiang-pdf-48-1.webp',
      '/assets/qixiang/qixiang-pdf-49-1.webp',
      '/assets/qixiang/qixiang-pdf-51-1.webp',
    ],
  },
  {
    title: '地球之盐 - 运城盐湖湿地生态鸟岛与盐文化场景重塑设计',
    role: '生态场景 / 盐文化叙事',
    time: 'Portfolio 2024',
    image: '/assets/portfolio-web/page-04-1.webp',
    meta: 'Wetland / Cultural Landscape',
    summary:
      '围绕盐湖湿地生态修复、观鸟动线和盐文化体验展开场景重塑，建立自然教育、游览体验和地域记忆之间的空间关系。',
    pages: [
      '/assets/portfolio-web/page-04-1.webp',
      '/assets/portfolio-web/page-05-1.webp',
      '/assets/portfolio-web/page-06-1.webp',
      '/assets/portfolio-web/page-07-1.webp',
      '/assets/portfolio-web/page-08-1.webp',
      '/assets/portfolio-web/page-09-1.webp',
    ],
  },
  {
    title: '“Mcdicval Pirate”中世纪元素中古店空间设计',
    role: '商业空间 / 叙事设计',
    time: 'Portfolio 2024',
    image: '/assets/portfolio-web/page-10-1.webp',
    meta: 'Retail / Narrative Interior',
    summary:
      '以中世纪海盗叙事为线索，将中古店零售、展陈、社交和沉浸体验整合为统一的空间故事。',
    pages: [
      '/assets/portfolio-web/page-10-1.webp',
      '/assets/portfolio-web/page-11-1.webp',
      '/assets/portfolio-web/page-12-1.webp',
    ],
  },
  {
    title: '秋风市集 - 城市更新背景下的创意集市空间设计',
    role: '城市更新 / 公共商业',
    time: 'Portfolio 2024',
    image: '/assets/portfolio-web/page-16-1.webp',
    meta: 'Market / Urban Renewal',
    summary:
      '在城市更新语境中重构集市空间，以轻介入、可运营和可停留的公共商业界面激活场地日常。',
    pages: [
      '/assets/portfolio-web/page-16-1.webp',
      '/assets/portfolio-web/page-17-1.webp',
      '/assets/portfolio-web/page-17-2.webp',
      '/assets/portfolio-web/page-18-1.webp',
      '/assets/portfolio-web/page-18-2.webp',
    ],
  },
  {
    title: '“汐月书庭”西南民大航空港校区图书馆改造',
    role: '校园更新 / 阅读空间',
    time: 'Portfolio 2024',
    image: '/assets/portfolio-web/page-19-1.webp',
    meta: 'Library / Campus Renewal',
    summary:
      '以校园图书馆更新为对象，整合自习、交流、文献展示和复合阅读体验，形成更开放的学习场景。',
    pages: [
      '/assets/portfolio-web/page-19-1.webp',
      '/assets/portfolio-web/page-20-1.webp',
      '/assets/portfolio-web/page-21-1.webp',
    ],
  },
  {
    title: '从“游走”到“扎根”数字游民社区办公空间设计',
    role: '乡村振兴 / 社区办公',
    time: 'Portfolio 2024',
    image: '/assets/portfolio-web/page-13-1.webp',
    meta: 'Nomad Community / Rural Revitalization',
    summary:
      '从数字游民的迁移、共创与长期驻留需求出发，探索乡村语境下的复合办公、生活和社群空间。',
    pages: [
      '/assets/portfolio-web/page-13-1.webp',
      '/assets/portfolio-web/page-14-1.webp',
      '/assets/portfolio-web/page-15-1.webp',
    ],
  },
];

const strengths = [
  {
    icon: DraftingCompass,
    title: '空间方案与落地统筹',
    text: '覆盖实地调研、概念推演、平面组织、施工沟通与采购文件协作，具备从设计到落地的完整项目意识。',
  },
  {
    icon: Sparkles,
    title: 'AI 辅助设计表达',
    text: '将 AI 场景生成与空间设计流程结合，用于概念氛围、叙事画面和方案沟通，提高早期表达效率。',
  },
  {
    icon: Layers3,
    title: '视觉系统与内容策划',
    text: '具备 Logo、UI、PPT 模板、主视觉、海报、信息长图与衍生物料设计经验。',
  },
  {
    icon: Camera,
    title: '摄影与图文传播',
    text: '长期参与摄影摄像、推文撰写、图文整理与后期制作，能把项目内容转化为可传播的叙事。',
  },
];

const stats = [
  ['13+', '设计竞赛与荣誉'],
  ['5350m2', '单项目改造面积'],
  ['1/97', '综测排名'],
  ['3.77/4', 'GPA'],
];

const credentials = [
  {
    icon: Award,
    label: '荣誉奖项',
    title: '国家奖学金 / 本科生一等奖学金 / 三好学生',
    text: '持续保持专业与综合表现前列，获四川省大学生综合素质 A 级证书。',
  },
  {
    icon: BookOpen,
    label: '学术成果',
    title: '《西南民族大学校园文创纪念品设计研究》',
    text: '以第一作者发表于《包装工程》，研究校园文创纪念品的文化提炼与再创造方法。',
  },
  {
    icon: Sparkles,
    label: '竞赛经历',
    title: '米兰设计周 / 未来设计师 / 东方设计奖等',
    text: '获得多项省级及以上设计竞赛奖项，覆盖空间设计、数字艺术、农业创意与乡村振兴等方向。',
  },
];

function StarTrailBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId;
    const stars = Array.from({ length: 180 }, (_, index) => ({
      angle: Math.random() * Math.PI * 2,
      radius: 80 + Math.random() * 720,
      speed: 0.0007 + Math.random() * 0.0018,
      size: index % 9 === 0 ? 1.8 : 0.8 + Math.random() * 1.1,
      alpha: 0.28 + Math.random() * 0.62,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.fillStyle = '#050608';
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      frame += 1;
      ctx.fillStyle = 'rgba(5, 6, 8, 0.16)';
      ctx.fillRect(0, 0, width, height);
      const cx = width * 0.62;
      const cy = height * 0.38;

      stars.forEach((star) => {
        star.angle += star.speed;
        const wobble = Math.sin(frame * 0.004 + star.radius) * 18;
        const x = cx + Math.cos(star.angle) * (star.radius + wobble);
        const y = cy + Math.sin(star.angle) * (star.radius * 0.58 + wobble);
        const tail = 0.028 + star.speed * 9;
        const x2 = cx + Math.cos(star.angle - tail) * (star.radius + wobble);
        const y2 = cy + Math.sin(star.angle - tail) * (star.radius * 0.58 + wobble);

        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 220, 246, ${star.alpha})`;
        ctx.lineWidth = star.size;
        ctx.stroke();
      });

      const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.55);
      glow.addColorStop(0, 'rgba(255, 111, 189, 0.18)');
      glow.addColorStop(0.42, 'rgba(98, 56, 122, 0.1)');
      glow.addColorStop(1, 'rgba(5, 6, 8, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas className="star-trails" ref={canvasRef} aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    const handlePointer = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointer);
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('.project-card, .case-block, .credential-card, .directory-card, .strength-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.18 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-cursor" aria-hidden="true" />
      <header className="site-nav">
        <a className="brand" href="#hero" aria-label="返回首页">
          LJH
        </a>
        <nav aria-label="主导航">
          <a href="#directory">目录</a>
          <a href="#about">经历</a>
          <a href="#credentials">学术</a>
          <a href="#projects">项目</a>
          <a href="#cases">内页</a>
          <a href="#strengths">优势</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="nav-contact" href="mailto:2425527779@qq.com">
          <Mail size={16} />
          联系我
        </a>
      </header>

      <main>
        <section className="hero section" id="hero">
          <StarTrailBackground />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Application Portfolio For Environmental Design</p>
              <h1>李建华</h1>
              <div className="hero-theme">
                <span>萬千炁象</span>
                <strong>当空白开始汲取空间</strong>
                <em>When the blank begins to absorb space</em>
              </div>
              <p className="hero-lead">
                以空间为媒介，连接场地研究、叙事表达与 AI 生成技术，建立克制而有张力的设计方案。
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#directory">
                  进入作品集
                  <ArrowUpRight size={18} />
                </a>
                <a className="ghost-link" href="tel:13408554084">
                  <Phone size={18} />
                  13408554084
                </a>
              </div>
            </div>
            <div className="cover-panel" aria-label="作品集封面主题">
              <span className="cover-index">2024 Portfolio</span>
              <p>Plain Paper</p>
              <h2>萬千炁象</h2>
              <strong>Space absorbs silence, image grows from blankness.</strong>
              <i>Jianhua Li / Environmental Design</i>
            </div>
          </div>
        </section>

        <section className="directory section" id="directory">
          <div className="container directory-grid">
            <div className="directory-title">
              <p className="section-kicker">Portfolio Index</p>
              <h2>以作品集第三页目录为骨架，重组网站的浏览路径。</h2>
              <p>
                目录不再只是跳转入口，而是项目序列、能力结构和视觉主题的第一层地图。
              </p>
            </div>
            <div className="directory-list">
              {directoryItems.map((item, index) => (
                <a className="directory-card" href={item.href} key={item.title}>
                  <img src={item.image} alt={item.label} />
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="portrait-wrap">
              <img src="/assets/portrait.jpeg" alt="李建华个人照片" />
            </div>
            <div className="about-copy">
              <p className="section-kicker">Profile</p>
              <h2>空间设计师 / AI 设计师 / 环境设计师</h2>
              <p>
                西南民族大学环境设计专业。具备丰富的实践项目经验、团队统筹能力与科研素养，长期参与校园空间更新、商业空间概念设计、乡村规划设计和融媒体视觉策划。
              </p>
              <p>
                现任环境设计系实践工作组组长、梁建国环境设计与陈设艺术研究所第一工作室负责人。获得国家奖学金、本科生一等奖学金、四川省大学生综合素质 A 级证书等荣誉。
              </p>
              <div className="contact-list">
                <span>
                  <MapPin size={16} />
                  四川成都
                </span>
                <a href="mailto:2425527779@qq.com">
                  <Mail size={16} />
                  2425527779@qq.com
                </a>
                <a href="tel:13408554084">
                  <Phone size={16} />
                  13408554084
                </a>
              </div>
            </div>
            <div className="stats-panel" aria-label="项目数据">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials section" id="credentials">
          <div className="container">
            <div className="section-head compact">
              <div>
                <p className="section-kicker">Awards & Academic</p>
                <h2>获奖情况与学术经历</h2>
              </div>
              <p>
                将简历中的荣誉、竞赛、科研与校园实践从文字履历转化为可浏览的信息界面。
              </p>
            </div>
            <div className="credential-grid">
              {credentials.map(({ icon: Icon, label, title, text }) => (
                <article className="credential-card" key={title}>
                  <Icon size={26} />
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="award-ribbon" aria-label="代表性奖项">
              {[
                '国家奖学金',
                '米兰设计周四川赛区二等奖',
                '未来设计师高校数字艺术设计大赛一等奖',
                '东方设计奖一等奖',
                '中西部乡村振兴环境设计大赛一等奖',
                '四川省大学生综合素质 A 级证书',
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">Selected Works</p>
                <h2>精选项目</h2>
              </div>
              <p>
                参考作品集 PDF 重新整理项目顺序，以真实作品页作为封面和详情图，突出空间叙事、场地研究和视觉表达。
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={index === 0 ? 'project-card large' : 'project-card'} key={project.title}>
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div>
                      <span>{project.time}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.summary}</p>
                    <footer>
                      <b>{project.role}</b>
                      <a href="#cases">{project.meta}</a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-pages section" id="cases">
          <div className="container">
            <div className="section-head compact">
              <div>
                <p className="section-kicker">Project Pages</p>
                <h2>作品集内页</h2>
              </div>
              <p>
                保留原作品集的版面信息密度，同时用暗色网页环境重新组织浏览节奏，适合 PC 端连续查看。
              </p>
            </div>
            <div className="case-stack">
              {projects.map((project, index) => (
                <article className={`case-block ${project.layout === 'collage' ? 'case-collage' : ''}`} key={project.title}>
                  <aside>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <em>{project.meta}</em>
                  </aside>
                  <div className="case-gallery">
                    {project.pages.map((page, pageIndex) => (
                      <figure key={page}>
                        <img src={page} alt={`${project.title} 作品页 ${pageIndex + 1}`} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="strengths section" id="strengths">
          <div className="container">
            <div className="section-head compact">
              <div>
                <p className="section-kicker">Capabilities</p>
                <h2>个人优势</h2>
              </div>
              <p>AutoCAD / SketchUp / Photoshop / Illustrator / C4D / Blender / Midjourney / Stable Diffusion / D5</p>
            </div>
            <div className="strength-grid">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article className="strength-card" key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="section-kicker">Contact</p>
            <h2>期待与你讨论空间、场景与设计表达的下一种可能。</h2>
            <div className="contact-actions">
              <a className="primary-link" href="mailto:2425527779@qq.com">
                <Mail size={18} />
                发送邮件
              </a>
              <a className="ghost-link" href="tel:13408554084">
                <Phone size={18} />
                电话联系
              </a>
            </div>
            <p className="footer-note">李建华 · 环境设计 · Chengdu, China</p>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
