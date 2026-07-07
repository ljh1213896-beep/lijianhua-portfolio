import React from 'react';
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

const projects = [
  {
    title: '西南民族大学校图书馆 2-4 楼改造设计',
    role: '设计总负责',
    time: '2024.09 - 至今',
    image: '/assets/project-1.jpg',
    meta: '5350m2 / 已落地 80%',
    summary:
      '基于实地测绘与需求曲线完成空间改造方案，参与采购需求、标书撰写、厂家与现场对接。',
  },
  {
    title: '四川省成都市红牌里两新艺术中心设计',
    role: '设计主创',
    time: '2024.07 - 2025.06',
    image: '/assets/project-2.jpg',
    meta: '商业定位 / 废土风酒吧',
    summary:
      '从上位规划出发完成概念汇报、场地定位与商业模式推演，探索具有差异化体验的空间语言。',
  },
  {
    title: '江西省赣州市赣县区义源村旅游规划设计',
    role: '设计主创',
    time: '2024.03 - 2024.07',
    image: '/assets/project-3.jpg',
    meta: '650 亩 / 成功中标',
    summary:
      '结合调研与上位规划，提出康养之城概念，完成概念草图、初步平面及 AI 场景效果图。',
  },
  {
    title: '青触 - 共筑乡村振兴创意融媒先行者',
    role: '省级大创项目负责人',
    time: '2024.06 - 至今',
    image: '/assets/project-4.jpg',
    meta: '文创研究 / 展陈策划',
    summary:
      '围绕校园文创纪念品设计、文化提炼与再创造方法开展研究，推动产品策划与设计实现。',
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
  ['10+', '省级及以上奖项'],
  ['5350m2', '单项目改造面积'],
  ['650 亩', '乡村规划尺度'],
  ['3.74/4', 'GPA'],
];

function App() {
  return (
    <>
      <header className="site-nav">
        <a className="brand" href="#hero" aria-label="返回首页">
          LJH
        </a>
        <nav aria-label="主导航">
          <a href="#about">经历</a>
          <a href="#projects">项目</a>
          <a href="#strengths">优势</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="nav-contact" href="mailto:chuan18778086001@163.com">
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
            <p className="eyebrow">Spatial Design / AI Design / Environmental Design</p>
            <h1>李建华</h1>
            <p className="hero-lead">
              以空间为媒介，连接场地研究、叙事表达与 AI 生成技术，建立克制而有张力的设计方案。
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#projects">
                查看精选项目
                <ArrowUpRight size={18} />
              </a>
              <a className="ghost-link" href="tel:18778086001">
                <Phone size={18} />
                18778086001
              </a>
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
                现任环境设计系实践工作组组长、梁建国环境设计与陈设艺术研究所第一工作室负责人，并参与中西部乡村振兴环境设计竞赛秘书处、城市精英设计师教学实践竞赛等工作。
              </p>
              <div className="contact-list">
                <span>
                  <MapPin size={16} />
                  四川成都
                </span>
                <a href="mailto:chuan18778086001@163.com">
                  <Mail size={16} />
                  chuan18778086001@163.com
                </a>
                <a href="tel:18778086001">
                  <Phone size={16} />
                  18778086001
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
                以真实简历项目为基础，当前图片为基础版视觉占位，后续可替换为实景、效果图或完整项目册。
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
                      <em>{project.meta}</em>
                    </footer>
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
              <p>AutoCAD / SketchUp / Photoshop / Illustrator / CorelDRAW / Enscape / D5</p>
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
              <a className="primary-link" href="mailto:chuan18778086001@163.com">
                <Mail size={18} />
                发送邮件
              </a>
              <a className="ghost-link" href="tel:18778086001">
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
