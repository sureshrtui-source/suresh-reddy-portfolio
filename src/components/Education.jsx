import { GraduationCap, Award, ExternalLink } from 'lucide-react'
import { education, certifications } from '../data/portfolioData'
import './Education.css'

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">🎓</span> Education & Certifications
          </div>
          <h2 className="section-title" id="education-title">Academic Background</h2>
          <p className="section-subtitle">
            Formal education and professional certifications that underpin my technical foundation.
          </p>
        </header>

        <div className="education__layout">
          {/* Education Column */}
          <div>
            <h3 className="education__col-title">
              <GraduationCap size={20} />
              Education
            </h3>
            <div className="education__cards">
              {education.map((edu, i) => (
                <div key={i} className="education__card card" aria-label={`${edu.degree} from ${edu.institution}`}>
                  <div className="education__card-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div className="education__card-content">
                    <h4 className="education__degree">{edu.degree}</h4>
                    <p className="education__field">{edu.field}</p>
                    <p className="education__institution">{edu.institution}</p>
                    <p className="education__university">{edu.university}</p>
                    <div className="education__meta">
                      {edu.period && (
                        <span className="education__meta-item">
                          📅 {edu.period || '✏️ Add graduation year'}
                        </span>
                      )}
                      <span className="education__meta-item">
                        📍 {edu.location}
                      </span>
                      {edu.grade && (
                        <span className="education__meta-item">
                          🎯 {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="education__col-title">
              <Award size={20} />
              Certifications
            </h3>
            <div className="education__certs">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`education__cert card ${cert.placeholder ? 'education__cert--placeholder' : ''}`}
                  aria-label={`Certification: ${cert.name}`}
                >
                  <div className="education__cert-icon">
                    <Award size={18} />
                  </div>
                  <div className="education__cert-content">
                    <div className="education__cert-header">
                      <h4 className="education__cert-name">{cert.name}</h4>
                      {cert.placeholder && (
                        <span className="education__placeholder-badge">✏️ Update</span>
                      )}
                    </div>
                    <p className="education__cert-issuer">{cert.issuer || '—'}</p>
                    {cert.year && <p className="education__cert-year">{cert.year}</p>}
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                        className="education__cert-link">
                        <ExternalLink size={12} />
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Cert Note */}
            <div className="education__add-note">
              <span aria-hidden="true">ℹ️</span>
              Add your actual certifications in{' '}
              <code className="mono">src/data/portfolioData.js</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
