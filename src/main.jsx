import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Layers3,
  DraftingCompass,
  Camera,
} from 'lucide-react';
import './styles.css';

const preludeStrips = [
  {
    title: 'Portfolio Cover',
    label: '萬千炁象 / Plain paper thousand noodles',
    image: '/assets/portfolio-web/page-03-3.webp',
  },
  {
    title: '地球之盐',
    label: '盐湖湿地生态鸟岛与盐文化场景重塑',
    image: '/assets/portfolio-web/page-03-5.webp',
  },
  {
    title: '汐月书庭',
    label: '西南民大航空港校区图书馆改造',
    image: '/assets/portfolio-web/page-03-6.webp',
  },
  {
    title: '秋风市集',
    label: '城市更新背景下的创意集市空间',
    image: '/assets/portfolio-web/page-03-8.webp',
  },
];

const projects = [
  {
    title: '万千炁象品牌视觉系统设计',
    role: '品牌设计 / 视觉识别',
    time: '2025.06',
    image: '/assets/qixiang/qixiang-pdf-11-1.webp',
    meta: 'Brand Identity / Visual System',
    summary:
      '为 FOCUS DESIGN 设计平台与梁建国环境设计与陈设艺术研究所联合发起的设计交流活动建立品牌视觉系统，围绕“万千”与“炁象”的东方哲学语义，完成标志、色彩、物料和延展应用。',
    pages: [
      '/assets/qixiang/qixiang-pdf-11-1.webp',
      '/assets/qixiang/qixiang-pdf-13-1.webp',
      '/assets/qixiang/qixiang-pdf-14-1.webp',
      '/assets/qixiang/qixiang-pdf-17-1.webp',
      '/assets/qixiang/qixiang-pdf-27-1.webp',
      '/assets/qixiang/qixiang-pdf-28-1.webp',
      '/assets/qixiang/qixiang-pdf-34-1.webp',
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

function App() {
  useEffect(() => {
    const handlePointer = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointer);
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  return (
    <>
      <div className="ambient-cursor" aria-hidden="true" />
      <header className="site-nav">
        <a className="brand" href="#hero" aria-label="返回首页">
          LJH
        </a>
        <nav aria-label="主导航">
          <a href="#prelude">序章</a>
          <a href="#about">经历</a>
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
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-poster.jpg"
          >
            <source
              src="https://videos.pexels.com/video-files/3254066/3254066-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
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
                <a className="primary-link" href="#prelude">
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

        <section className="prelude section" id="prelude">
          <div className="container prelude-grid">
            <div className="prelude-title">
              <p className="section-kicker">Portfolio Prelude</p>
              <h2>从封面、个人页到目录，建立作品集的第一层叙事。</h2>
              <p>
                参考作品集前三页的纸张肌理、留白、洋红色标记和横向目录图条，将原本的打印版语言转译为网页首屏后的浏览入口。
              </p>
            </div>
            <div className="profile-plate">
              <img src="/assets/portfolio-web/page-02-1.webp" alt="作品集第二页人物图" />
              <div>
                <span>Writer's info</span>
                <strong>Jianhua Li</strong>
                <em>Spatial / AI / Environmental Design</em>
              </div>
            </div>
            <div className="prelude-strips">
              {preludeStrips.map((strip) => (
                <article className="strip-card" key={strip.title}>
                  <img src={strip.image} alt={strip.label} />
                  <div>
                    <span>{strip.title}</span>
                    <p>{strip.label}</p>
                  </div>
                </article>
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
                <article className="case-block" key={project.title}>
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
