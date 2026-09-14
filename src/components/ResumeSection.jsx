import { Download, FileText, Eye } from 'lucide-react'
import { personal } from '../data/portfolioData'
import './ResumeSection.css'

export default function ResumeSection() {
  return (
    <section className="section section-alt" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">📄</span> Resume
          </div>
          <h2 className="section-title" id="resume-title">My Resume</h2>
          <p className="section-subtitle">
            Download my resume to view my complete work history, skills, and contact details.
          </p>
        </header>

        <div className="resume__card card">
          {/* Left — Icon + Info */}
          <div className="resume__info">
            <div className="resume__file-icon" aria-hidden="true">
              <FileText size={36} />
            </div>
            <div>
              <h3 className="resume__file-name">Suresh_Reddy_T_Resume.pdf</h3>
              <p className="resume__file-meta">
                Python Full Stack Developer · AI Developer · Ready to Download
              </p>
              <div className="resume__tags">
                <span className="badge">Python</span>
                <span className="badge">FastAPI</span>
                <span className="badge">Django</span>
                <span className="badge">React.js</span>
                <span className="badge">AI/LLM</span>
              </div>
            </div>
          </div>

          {/* Right — Action Buttons */}
          <div className="resume__actions">
            <a
              id="resume-download-btn"
              href={personal.resumePath}
              download={personal.resumeFilename}
              className="btn btn-primary resume__download-btn"
              aria-label="Download Suresh Reddy T Resume PDF"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              id="resume-view-btn"
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Preview resume in new tab"
            >
              <Eye size={18} />
              Preview
            </a>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="resume__cta">
          <p className="resume__cta-text">
            Interested in working together? I'm{' '}
            <span className="text-accent">open to new opportunities</span> —
            full-time, contract, and remote roles in Python backend, full-stack, and AI development.
          </p>
          <a
            id="resume-contact-link"
            href="#contact"
            className="btn btn-outline"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
