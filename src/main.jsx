import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const links = [
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

const projects = [
  {
    number: '01',
    type: 'PRODUCT · FULL STACK',
    title: 'Samsa',
    description: 'An AI-augmented prediction market platform. Migrated flat-file data to PostgreSQL and refined the React and Node.js architecture for clearer, faster market analysis.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    mark: 'S',
    tone: 'peach',
  },
  {
    number: '02',
    type: 'CO-FOUNDER · AI AGENTS',
    title: 'AI Agent Marketplace',
    description: 'A Fiverr-style home for AI agents. Built core orchestration and MCP server foundations so agents can chain tools and get real tasks done.',
    tags: ['Agent orchestration', 'MCP', 'Automation'],
    mark: '↗',
    tone: 'sage',
  },
  {
    number: '03',
    type: 'MACHINE LEARNING · ACCESSIBILITY',
    title: 'Indoor navigation',
    description: 'Trained and optimized a YOLO model for indoor landmarks, then quantized it for real-time TensorFlow Lite inference on navigation hardware. The project earned a Design of Excellence Award.',
    tags: ['YOLO', 'TensorFlow Lite', 'Computer vision'],
    mark: '⌖',
    tone: 'lavender',
  },
];

const experience = [
  {
    date: '2026 — NOW',
    role: 'Software Engineer · Nebula Labs',
    detail: 'Building a collaborative student notebook platform. Improved course and professor note lookups, cutting query latency by 40%.',
    note: 'PRODUCT ENGINEERING',
  },
  {
    date: '2025',
    role: 'Engineering Projects in Community Service · UT Design',
    detail: 'Brought computer vision into an indoor navigation project, from curating 1,900+ images to integrating an optimized on-device model.',
    note: 'APPLIED MACHINE LEARNING',
  },
  {
    date: '2024',
    role: 'Software Engineering Fellow · Headstarter AI',
    detail: 'Built AI support and RAG experiences using OpenAI, Pinecone, and LangChain, plus a Llama-powered flashcard product with Stripe.',
    note: 'AI PRODUCT DEVELOPMENT',
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Sai Karthik Battula, home">
        <span className="wordmark-dot" />SKB<span className="wordmark-period">.</span>
      </a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="primary-navigation" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="mailto:saikarthikbattula@gmail.com">Let’s talk <Arrow diagonal /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow reveal"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</p>
        <h1 className="reveal reveal-delay-1">Curious mind.<br /><em>Builder’s hands.</em></h1>
        <p className="hero-intro reveal reveal-delay-2">Hey, I’m <strong>Sai Karthik</strong> — a computer science student at UT Dallas. I build useful things at the intersection of software, AI, and the real world.</p>
        <div className="hero-actions reveal reveal-delay-3">
          <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
          <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">View résumé <Arrow diagonal /></a>
        </div>
        <div className="hero-meta reveal reveal-delay-3"><span>BASED IN DALLAS, TX</span><span>UT DALLAS · CS ’27</span></div>
      </div>
      <div className="hero-visual reveal reveal-delay-2">
        <div className="photo-frame"><img src="/image.jpg" alt="Sai Karthik Battula smiling in front of a space exhibit" /></div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="photo-sticker"><span>building<br />what’s next</span><span className="sticker-spark">✳</span></div>
        <span className="visual-caption">A LITTLE CURIOUS, A LOT DETERMINED ↗</span>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="section-label reveal"><span>01</span> A BIT ABOUT ME</div>
      <div className="about-main reveal">
        <h2>I like the moment<br />an idea becomes <em>real.</em></h2>
        <div className="about-body">
          <p>I’m a CS student at UT Dallas who enjoys working across the stack — from a well-shaped database to a model running on a small device. I’ve helped build AI products, research tools, and technology designed to make the world easier to navigate.</p>
          <p>Right now I’m sharpening my craft with Nebula Labs, learning by building with a team, and always looking for the next interesting problem.</p>
          <div className="proof-points"><div><strong>3.96</strong><span>GPA · DEAN’S LIST</span></div><div><strong>’27</strong><span>UT DALLAS · COMPUTER SCIENCE</span></div></div>
        </div>
      </div>
      <div className="skills-strip reveal"><span className="skills-label">TOOLS I REACH FOR</span><div>Python <i>✳</i> JavaScript <i>✳</i> React <i>✳</i> Node.js <i>✳</i> PostgreSQL <i>✳</i> PyTorch <i>✳</i> TensorFlow Lite <i>✳</i> C++</div></div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-wrap" id="projects">
      <div className="section-label reveal"><span>02</span> SELECTED WORK <span className="section-aside">A FEW THINGS I’VE HELPED MAKE ↘</span></div>
      <div className="section-heading reveal"><h2>Made with<br /><em>intention.</em></h2><p>Products, experiments, and ideas<br />that made it out of my notes app.</p></div>
      <div className="project-grid">
        {projects.map(project => (
          <article className={`project-card ${project.tone} reveal`} key={project.number}>
            <div className="project-art"><span className="project-number">{project.number} / 03</span><span className="project-mark" aria-hidden="true">{project.mark}</span><span className="art-spark">✳</span></div>
            <div className="project-content"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-wrap" id="experience">
      <div className="section-label reveal"><span>03</span> THE JOURNEY SO FAR</div>
      <div className="section-heading reveal"><h2>Learning by<br /><em>doing.</em></h2><p>Good work happens with<br />good people and real problems.</p></div>
      <div className="experience-list">
        {experience.map((item, index) => <article className="experience-item reveal" key={item.role}><span className="experience-date">{item.date}</span><div><p className="experience-note">{item.note}</p><h3>{item.role}</h3><p>{item.detail}</p></div><span className="experience-index">0{index + 1}</span></article>)}
      </div>
      <div className="award-note reveal"><span className="award-star">✳</span><p><strong>A proud team moment:</strong> UT Design’s indoor navigation project received a Design of Excellence Award.</p></div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-decoration" aria-hidden="true">✳</div>
      <div className="section-label reveal"><span>04</span> YOUR TURN</div>
      <div className="contact-content reveal"><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br /><em>something matter.</em></h2><a className="button button-light" href="mailto:saikarthikbattula@gmail.com">Say hello <Arrow diagonal /></a></div>
      <div className="contact-bottom"><span>Dallas, TX · Always up for a good problem</span><div><a href="mailto:saikarthikbattula@gmail.com">EMAIL <Arrow diagonal /></a><a href="https://www.linkedin.com/in/saikarthikbattula" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com/saikarthikbattula" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></div></div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(target => target.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Projects /><Experience /><Contact /></main><footer className="site-footer"><a className="wordmark" href="#home"><span className="wordmark-dot" />SKB<span className="wordmark-period">.</span></a><span>DESIGNED WITH CURIOSITY · © {new Date().getFullYear()} SAI KARTHIK BATTULA</span><a href="#home">BACK TO TOP ↑</a></footer></>;
}

createRoot(document.getElementById('root')).render(<App />);
