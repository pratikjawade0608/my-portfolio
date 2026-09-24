import { useEffect, useMemo, useRef, useState } from 'react'

import {
  awards,
  certifications,
  experience,
  metrics,
  profile,
  projects,
  rotatingRoles,
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
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function assetUrl(path) {
  if (!path) return ''

  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
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

function AnimatedMetric({ metric }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current

    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return

        started.current = true

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches

        if (reduceMotion) {
          setValue(metric.end)
          observer.disconnect()
          return
        }

        const duration = 1100
        const startTime = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)

          setValue(Math.round(metric.end * eased))

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      {
        threshold: 0.45,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [metric.end])

  return (
    <article className="metric reveal" ref={ref}>
      <strong>
        {metric.prefix}
        {value}
        {metric.suffix}
      </strong>

      <h3>{metric.label}</h3>

      <p>{metric.detail}</p>
    </article>
  )
}

function SpotlightCard({ className = '', children, ...props }) {
  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()

    event.currentTarget.style.setProperty(
      '--mouse-x',
      `${event.clientX - rect.left}px`,
    )

    event.currentTarget.style.setProperty(
      '--mouse-y',
      `${event.clientY - rect.top}px`,
    )
  }

  return (
    <article
      className={`spotlight-card ${className}`.trim()}
      onMouseMove={handleMove}
      {...props}
    >
      {children}
    </article>
  )
}

function CertificationCard({ cert, compact = false }) {
  return (
    <SpotlightCard
      className={`cert-card reveal ${compact ? 'compact' : ''}`}
    >
      <div
        className={`cert-badge-wrap ${
          cert.badgeVariant === 'poster' ? 'poster' : ''
        }`}
      >
        <img
          className={`cert-badge ${
            cert.badgeVariant === 'poster' ? 'poster' : ''
          }`}
          src={assetUrl(cert.badge)}
          alt={`${cert.name} badge`}
          loading="lazy"
        />
      </div>

      <div className="cert-body">
        <p className="cert-issuer">{cert.issuer}</p>

        <h3>{cert.name}</h3>

        <span className="cert-type">{cert.type}</span>

        <a
          className="cert-link"
          href={cert.link}
          target="_blank"
          rel="noreferrer"
        >
          Verify Credential

          <ExternalIcon />
        </a>
      </div>
    </SpotlightCard>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  const scrollBarRef = useRef(null)
  const cursorGlowRef = useRef(null)

  const coreCertifications = useMemo(
    () => certifications.filter((cert) => cert.group === 'core'),
    [],
  )

  const specializationCertifications = useMemo(
    () =>
      certifications.filter(
        (cert) => cert.group === 'specialization',
      ),
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.12,
      },
    )

    document.querySelectorAll('.reveal').forEach((node) => {
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) return undefined

    const timer = window.setInterval(() => {
      setRoleIndex(
        (value) => (value + 1) % rotatingRoles.length,
      )
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    let ticking = false

    function updateScrollProgress() {
      const doc = document.documentElement

      const max = doc.scrollHeight - doc.clientHeight

      const progress = max > 0 ? doc.scrollTop / max : 0

      if (scrollBarRef.current) {
        scrollBarRef.current.style.transform = `scaleX(${progress})`
      }

      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    updateScrollProgress()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const glow = cursorGlowRef.current

    if (!glow) return undefined

    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!canHover || reduceMotion) return undefined

    let frame = null
    let x = -200
    let y = -200

    function render() {
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = null
    }

    function onMove(event) {
      x = event.clientX - 180
      y = event.clientY - 180

      if (!frame) {
        frame = requestAnimationFrame(render)
      }
    }

    window.addEventListener('mousemove', onMove, {
      passive: true,
    })

    return () => {
      window.removeEventListener('mousemove', onMove)

      if (frame) {
        cancelAnimationFrame(frame)
      }
    }
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)

      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="site-shell">
      <div
        className="scroll-progress"
        ref={scrollBarRef}
        aria-hidden="true"
      />

      <div
        className="cursor-glow"
        ref={cursorGlowRef}
        aria-hidden="true"
      />

      <header className="topbar">
        <button
          className="brand"
          onClick={() => scrollToId('home')}
          aria-label="Go to top"
        >
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
            <div className="availability">
              <span />

              Open to DevOps & Consulting opportunities
            </div>

            <p className="kicker">
              {profile.experience} · Azure · DevOps · Automation
            </p>

            <h1>
              Hi, I&apos;m <span>{profile.name}</span>.
              <br />
              I build reliable cloud delivery systems.
            </h1>

            <p className="hero-lead">{profile.tagline}</p>

            <div className="rotating-role" aria-live="polite">
              <span>I focus on</span>

              <strong key={rotatingRoles[roleIndex]}>
                {rotatingRoles[roleIndex]}
              </strong>
            </div>

            <p className="hero-description">
              Azure-focused DevOps Engineer specializing in CI/CD,
              cloud automation, Infrastructure as Code, container
              platforms, data-platform delivery, and enterprise
              transformation.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToId('projects')}
              >
                View Projects

                <ArrowIcon />
              </button>

              <a
                className="secondary-button"
                href={assetUrl(profile.resume)}
                download
              >
                Download Resume

                <DownloadIcon />
              </a>
            </div>

            <div className="quick-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn

                <ExternalIcon />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub

                <ExternalIcon />
              </a>

              <a href={`mailto:${profile.email}`}>
                Email

                <ExternalIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-ring">
              <img
                src={assetUrl(profile.image)}
                alt="Pratik Jawade"
              />
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
                I&apos;m a DevOps Engineer with 6+ years of
                experience across cloud infrastructure, CI/CD
                automation, application delivery, Infrastructure as
                Code, data engineering, and enterprise DevOps
                transformation.
              </p>

              <p>
                My core platform is Microsoft Azure, supported by
                hands-on experience with Azure DevOps, Terraform,
                Kubernetes, Docker, Git, Azure Synapse Analytics,
                Azure Data Factory, Azure SQL, Power Platform, Azure
                Administration, and Google Cloud Platform.
              </p>

              <p>
                I enjoy turning repetitive or error-prone processes
                into standardized workflows that improve
                reliability, delivery speed, governance, and
                operational efficiency.
              </p>
            </div>

            <div className="principles reveal">
              {[
                [
                  '01',
                  'Automate intentionally',
                  'Reduce manual effort where automation creates measurable value.',
                ],
                [
                  '02',
                  'Design for repeatability',
                  'Build delivery and infrastructure patterns teams can reuse confidently.',
                ],
                [
                  '03',
                  'Connect tech to outcomes',
                  'Treat reliability, speed, cost, and governance as engineering goals.',
                ],
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
              <AnimatedMetric
                metric={metric}
                key={metric.label}
              />
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Cloud, delivery, infrastructure, and automation."
            copy="A practical toolkit built around Azure-first delivery, Infrastructure as Code, data automation, database DevOps, and modern CI/CD practices."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SpotlightCard
                className="skill-card reveal"
                key={group.title}
              >
                <h3>{group.title}</h3>

                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section
          className="section projects-section"
          id="projects"
        >
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that improved delivery, reliability, and efficiency."
            copy="Public-safe summaries of enterprise work. Sensitive client data, internal architecture, and proprietary implementation details are intentionally excluded."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <SpotlightCard
                className="project-card reveal"
                key={project.title}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <p className="project-eyebrow">
                  {project.eyebrow}
                </p>

                <h3>{project.title}</h3>

                <p className="project-summary">
                  {project.summary}
                </p>

                <div className="impact-block">
                  <span>Impact</span>

                  <p>{project.impact}</p>
                </div>

                <div className="tag-list project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="6+ years across enterprise DevOps and cloud delivery."
            copy="A progression from hands-on CI/CD and infrastructure automation to broader cloud, data, integration, solution design, and consulting responsibilities."
          />

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-item reveal"
                key={`${item.company}-${item.period}`}
              >
                <div className="timeline-marker" />

                <div className="timeline-meta">
                  <span>{item.period}</span>

                  <h3>{item.role}</h3>

                  <p>{item.company}</p>
                </div>

                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="credentials">
          <SectionHeading
            eyebrow="Credentials & recognition"
            title="Continuous learning backed by industry credentials."
            copy="Core professional certifications are separated from technical specializations and course-based learning so the strongest credentials remain easy to scan."
          />

          <div className="credential-group">
            <div className="credential-group-heading reveal">
              <span>01</span>

              <div>
                <p>Core certifications</p>

                <h3>Cloud, DevOps & AI credentials</h3>
              </div>
            </div>

            <div className="certifications-grid core-grid">
              {coreCertifications.map((cert) => (
                <CertificationCard
                  cert={cert}
                  key={cert.name}
                />
              ))}
            </div>
          </div>

          <div className="credential-group specialization-group">
            <div className="credential-group-heading reveal">
              <span>02</span>

              <div>
                <p>Specializations & learning</p>

                <h3>
                  Google Cloud AI and continuous learning
                </h3>
              </div>
            </div>

            <div className="certifications-grid specialization-grid">
              {specializationCertifications.map((cert) => (
                <CertificationCard
                  cert={cert}
                  compact
                  key={cert.name}
                />
              ))}
            </div>
          </div>

          <div className="recognition-section">
            <div className="recognition-heading reveal">
              <p>Recognition</p>

              <h3>Awards & professional recognition</h3>
            </div>

            <div className="award-list">
              {awards.map((award) => (
                <SpotlightCard
                  className="award-card reveal"
                  key={award.title}
                >
                  <span className="award-mark">★</span>

                  <div>
                    <p className="award-issuer">
                      {award.issuer}
                    </p>

                    <h3>{award.title}</h3>

                    <p>{award.detail}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
        >
          <div className="contact-card reveal">
            <p className="kicker">Let&apos;s connect</p>

            <h2>
              Building something in cloud or DevOps?
            </h2>

            <p>
              I&apos;m open to conversations around Azure DevOps,
              Cloud DevOps, Platform Engineering, CI/CD
              modernization, Infrastructure as Code, enterprise
              automation, and DevOps consulting opportunities.
            </p>

            <div className="contact-actions">
              <a
                className="primary-button"
                href={`mailto:${profile.email}`}
              >
                Email Me

                <ArrowIcon />
              </a>

              <button
                className="secondary-button"
                onClick={copyEmail}
              >
                {copied ? 'Email copied!' : 'Copy email'}
              </button>
            </div>

            <div className="contact-email">
              {profile.email}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark small">PJ</span>

          <p>
            © {new Date().getFullYear()} {profile.name}. Built with
            React + Vite.
          </p>
        </div>

        <button onClick={() => scrollToId('home')}>
          Back to top ↑
        </button>
      </footer>
    </div>
  )
}