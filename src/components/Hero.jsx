import { Mail, ArrowDown, Download, Eye, ChevronRight } from 'lucide-react'
import { personal } from '../data/portfolioData'
import profileImg from '../assets/suresh.png'
import './Hero.css'

const techPills = ['Python', 'FastAPI', 'Django', 'React.js', 'RAG / LLMs', 'PostgreSQL', 'Docker', 'Azure']

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" aria-label="Introduction">
      {/* Background Orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Grid Pattern */}
      <div className="hero__grid-pattern" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          {/* Status Badge */}
          <div className="hero__status" aria-label="Availability status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span className="mono">{personal.availability}</span>
          </div>

          {/* Name */}
          <h1 className="hero__name">
            Hi, I'm{' '}
            <span className="hero__name-gradient">
              {personal.name}
            </span>
          </h1>

          {/* Titles */}
          <div className="hero__titles">
            <p className="hero__title-primary">{personal.title}</p>
            <span className="hero__title-divider" aria-hidden="true">|</span>
            <p className="hero__title-secondary">{personal.subtitle}</p>
          </div>

          {/* Tagline */}
          <p className="hero__tagline">{personal.tagline}</p>

          {/* Tech Pills */}
          <div className="hero__pills" role="list" aria-label="Primary technologies">
            {techPills.map(tech => (
              <span key={tech} className="hero__pill" role="listitem">
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              id="hero-view-projects-btn"
              className="btn btn-primary hero__btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <Eye size={18} />
              View Projects
            </button>
            <a
              id="hero-download-resume-btn"
              href={personal.resumePath}
              download={personal.resumeFilename}
              className="btn btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              id="hero-contact-btn"
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Social Links */}
          <div className="hero__social" role="list" aria-label="Social links">
            <a
              id="hero-github-link"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
              role="listitem"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a
              id="hero-linkedin-link"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
              role="listitem"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
            <a
              id="hero-email-link"
              href={`mailto:${personal.email}`}
              className="hero__social-link"
              aria-label="Send email"
              role="listitem"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Avatar / Visual Panel */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__avatar-container animate-float">
            <div className="hero__avatar">
              <img
                src={profileImg}
                alt="Suresh Reddy T"
                className="hero__avatar-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero__avatar-inner" style={{ display: 'none' }}>
                <span className="hero__avatar-initials">SR</span>
              </div>
            </div>
            {/* Floating Skill Bubbles */}
            <div className="hero__bubble hero__bubble--1">
              <span>🐍</span> Python
            </div>
            <div className="hero__bubble hero__bubble--2">
              <span>⚡</span> FastAPI
            </div>
            <div className="hero__bubble hero__bubble--3">
              <span>🤖</span> AI/LLM
            </div>
            <div className="hero__bubble hero__bubble--4">
              <span>⚛️</span> React
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <button
        className="hero__scroll-hint"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}

// Inline SVG icons for social
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
