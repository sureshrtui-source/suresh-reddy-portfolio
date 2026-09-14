import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section section-alt" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">💼</span> Experience
          </div>
          <h2 className="section-title" id="experience-title">Professional Journey</h2>
          <p className="section-subtitle">
            My work history and the technologies I've used across different organizations.
          </p>
        </header>

        <div className="experience__timeline" role="list">
          {experience.map((job, i) => (
            <div
              key={job.id}
              className={`experience__item ${job.current ? 'experience__item--current' : ''}`}
              role="listitem"
              aria-label={`${job.role} at ${job.company}`}
            >
              {/* Timeline Dot */}
              <div className="experience__timeline-dot" aria-hidden="true">
                <div className="experience__dot-inner">
                  <Briefcase size={14} />
                </div>
                {i < experience.length - 1 && (
                  <div className="experience__timeline-line" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="experience__content card">
                {/* Header */}
                <div className="experience__header">
                  <div className="experience__meta">
                    <h3 className="experience__role">{job.role}</h3>
                    <div className="experience__company">
                      {job.current && (
                        <span className="experience__current-badge">Current</span>
                      )}
                      <span className="experience__company-name">{job.company}</span>
                    </div>
                  </div>
                  <div className="experience__details">
                    <span className="experience__detail">
                      <Calendar size={13} />
                      {/* ✏️ Update period in portfolioData.js */}
                      {job.period || '— ✏️ Add dates'}
                    </span>
                    <span className="experience__detail">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                    <span className="experience__type-badge">{job.type}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="experience__responsibilities" aria-label="Responsibilities">
                  {job.responsibilities.map((r, ri) => (
                    <li key={ri} className="experience__responsibility">
                      <span className="experience__bullet" aria-hidden="true">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="experience__tech" aria-label="Technologies used">
                  {job.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Note */}
        <div className="experience__edit-note">
          <span aria-hidden="true">✏️</span>
          To add exact dates and responsibilities, update the{' '}
          <code className="mono">experience</code> array in{' '}
          <code className="mono">src/data/portfolioData.js</code>
        </div>
      </div>
    </section>
  )
}
