import { useEffect, useState } from 'react'
import {
  awards,
  certifications,
  experience,
  metrics,
  profile,
  projects,
  skillGroups,
} from './data.js'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Credentials', 'credentials'],
  ['Contact', 'contact'],
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollToId('home')} aria-label="Go to top">
          <span className="brand-mark">PJ</span>
          <span>{profile.name}</span>
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                scrollToId(id)
                setMenuOpen(false)
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-grid" />

          <div className="hero-copy reveal">
            <div className="availability"><span /> Open to DevOps & Consulting opportunities</div>
            <p className="kicker">{profile.experience} · Azure · DevOps · Automation</p>
            <h1>
              Hi, I&apos;m <span>{profile.name}</span>.
              <br />I build reliable cloud delivery systems.
            </h1>
            <p className="hero-lead">{profile.tagline}</p>
            <p className="hero-description">
              Azure-focused DevOps Engineer specializing in CI/CD, cloud automation,
              Infrastructure as Code, container platforms, and enterprise delivery transformation.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollToId('projects')}>
                View Projects <ArrowIcon />
              </button>
              <a className="secondary-button" href={profile.resume} download>
                Download Resume <DownloadIcon />
              </a>
            </div>

            <div className="quick-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
              <a href={`mailto:${profile.email}`}>Email <ExternalIcon /></a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-ring">
              <img src="./profile.png" alt="Pratik Jawade" />
            </div>
            <div className="floating-card card-top">
              <span className="mini-label">Focus</span>
              <strong>Azure DevOps</strong>
              <small>CI/CD · IaC · Cloud Automation</small>
            </div>
            <div className="floating-card card-bottom">
              <span className="pulse-dot" />
              <div>
                <strong>Automation-first</strong>
                <small>Reliable · Repeatable · Scalable</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading
            eyebrow="About"
            title="Engineering with an automation-first mindset."
            copy="I combine hands-on DevOps engineering with a consulting mindset — understanding the problem, simplifying the delivery path, and automating the work that should not be manual."
          />

          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I&apos;m a DevOps Engineer with 6+ years of experience across cloud infrastructure,
                CI/CD automation, application delivery, Infrastructure as Code, and enterprise
                DevOps transformation.
              </p>
              <p>
                My core platform is Microsoft Azure, supported by hands-on experience with Azure
                DevOps, Terraform, Kubernetes, Docker, Git, Azure Synapse Analytics, Azure Data
                Factory, Power Platform, Azure Administration, and Google Cloud Platform.
              </p>
              <p>
                I enjoy turning repetitive or error-prone processes into standardized workflows
                that improve reliability, delivery speed, governance, and operational efficiency.
              </p>
            </div>

            <div className="principles reveal">
              {[
                ['01', 'Automate intentionally', 'Reduce manual effort where automation creates measurable value.'],
                ['02', 'Design for repeatability', 'Build delivery and infrastructure patterns teams can reuse confidently.'],
                ['03', 'Connect tech to outcomes', 'Treat reliability, speed, cost, and governance as engineering goals.'],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics-section">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric reveal" key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Cloud, delivery, infrastructure, and automation."
            copy="A practical toolkit built around Azure-first delivery, Infrastructure as Code, data automation, and modern DevOps practices."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that improved delivery, reliability, and efficiency."
            copy="Public-safe summaries of enterprise work. Sensitive client data, internal architecture, and proprietary implementation details are intentionally excluded."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="impact-block">
                  <span>Impact</span>
                  <p>{project.impact}</p>
                </div>
                <div className="tag-list project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="6+ years across enterprise DevOps and cloud delivery."
            copy="A progression from hands-on CI/CD and infrastructure automation to broader cloud, data, integration, and consulting responsibilities."
          />

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker" />
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="credentials">
          <SectionHeading
            eyebrow="Credentials & recognition"
            title="Continuous learning backed by industry certifications."
          />

          <div className="credentials-grid">
            <div className="credential-panel reveal">
              <div className="panel-heading">
                <span className="panel-icon">✓</span>
                <div>
                  <p>Professional certifications</p>
                  <h3>Cloud, DevOps & AI</h3>
                </div>
              </div>
              <div className="credential-list">
                {certifications.map((cert) => (
                  <div key={cert}>
                    <span>✓</span>
                    <p>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="award-list">
              {awards.map((award) => (
                <article className="award-card reveal" key={award.title}>
                  <span className="award-mark">★</span>
                  <div>
                    <p className="award-issuer">{award.issuer}</p>
                    <h3>{award.title}</h3>
                    <p>{award.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="kicker">Let&apos;s connect</p>
            <h2>Building something in cloud or DevOps?</h2>
            <p>
              I&apos;m open to conversations around Azure DevOps, Cloud DevOps, Platform Engineering,
              CI/CD modernization, Infrastructure as Code, and DevOps consulting opportunities.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>Email Me <ArrowIcon /></a>
              <button className="secondary-button" onClick={copyEmail}>{copied ? 'Email copied!' : 'Copy email'}</button>
            </div>
            <div className="contact-email">{profile.email}</div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark small">PJ</span>
          <p>© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</p>
        </div>
        <button onClick={() => scrollToId('home')}>Back to top ↑</button>
      </footer>
    </div>
  )
}
