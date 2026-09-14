import { useState } from 'react'
import { ExternalLink, Star } from 'lucide-react'
import { projects } from '../data/portfolioData'
import './Projects.css'

const categories = ['All', 'AI & LLM', 'Backend & APIs', 'Full Stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active || p.category.includes(active.replace('Backend & APIs', 'Backend')))

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">🚀</span> Featured Projects
          </div>
          <h2 className="section-title" id="projects-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of projects spanning backend APIs, full-stack applications, and AI-powered systems.
          </p>
        </header>

        {/* Category Filter */}
        <div className="projects__filters" role="tablist" aria-label="Project category filter">
          {categories.map(cat => (
            <button
              key={cat}
              id={`projects-filter-${cat.toLowerCase().replace(/[\s&]/g, '-')}`}
              className={`projects__filter-btn ${active === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {(active === 'All' ? projects : filtered).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`projects__card card ${project.highlight ? 'projects__card--highlight' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header */}
      <div className="projects__card-header">
        <div className="projects__category-badge"
          style={{ background: `${project.categoryColor}15`, color: project.categoryColor, borderColor: `${project.categoryColor}30` }}
        >
          {project.highlight && <Star size={10} fill="currentColor" />}
          {project.category}
        </div>
      </div>

      {/* Title */}
      <h3 className="projects__title">{project.title}</h3>

      {/* Problem Statement */}
      <p className="projects__problem">
        <span className="projects__problem-label">Problem:</span> {project.problem}
      </p>

      {/* Description */}
      <p className="projects__description">{project.description}</p>

      {/* Features */}
      <ul className="projects__features" aria-label="Key features">
        {project.features.slice(0, 4).map((f, i) => (
          <li key={i} className="projects__feature">
            <span className="projects__feature-dot" aria-hidden="true">→</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="projects__tech" aria-label="Technologies used">
        {project.tech.map(t => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="projects__actions">
        <a
          id={`project-github-${project.id}`}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubSVG />
          GitHub Repo
        </a>
        {project.demo ? (
          <a
            id={`project-demo-${project.id}`}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <span className="projects__demo-placeholder">
            Demo — Coming Soon
          </span>
        )}
      </div>
    </article>
  )
}

function GithubSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
