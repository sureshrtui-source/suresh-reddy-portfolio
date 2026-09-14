import { Server, Brain, Layout, Cloud } from 'lucide-react'
import { about } from '../data/portfolioData'
import './About.css'

const iconMap = { Server, Brain, Layout, Cloud }

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">👤</span> About Me
          </div>
          <h2 className="section-title" id="about-title">Who I Am</h2>
          <p className="section-subtitle">
            A Python developer focused on building robust backends, clean APIs, and intelligent AI-powered systems.
          </p>
        </header>

        <div className="about__layout">
          {/* Summary Card */}
          <div className="about__summary card">
            <div className="about__summary-header">
              <div className="about__summary-avatar">SR</div>
              <div>
                <h3 className="about__summary-name">Suresh Reddy T</h3>
                <p className="about__summary-role">Python Full Stack & AI Developer</p>
              </div>
            </div>

            {paragraphs(about.summary).map((para, i) => (
              <p key={i} className="about__paragraph">{para}</p>
            ))}

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">🐍</span>
                <span>Python-first development</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">⚡</span>
                <span>API-driven architecture</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🤖</span>
                <span>LLM & RAG integration</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">☁️</span>
                <span>Cloud-ready deployments</span>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="about__pillars">
            {about.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] || Server
              return (
                <div key={i} className="about__pillar card">
                  <div className="about__pillar-icon">
                    <Icon size={22} />
                  </div>
                  <h4 className="about__pillar-title">{pillar.title}</h4>
                  <p className="about__pillar-desc">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Split summary string into paragraphs by double newline or ". " breaks
function paragraphs(text) {
  return text.trim().split(/\n\n+/).map(p => p.replace(/\s+/g, ' ').trim())
}
