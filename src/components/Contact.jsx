import { useState } from 'react'
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react'
import { personal } from '../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]     = useState('idle') // idle | sending | sent | error
  const [copied, setCopied]     = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement('textarea')
      el.value = personal.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    // Simulate network delay — replace with actual API call (Formspree, EmailJS, etc.)
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })

    // Reset after 4s
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactCards = [
    {
      id: 'contact-email-card',
      icon: <Mail size={22} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: '#38bdf8',
    },
    {
      id: 'contact-phone-card',
      icon: <Phone size={22} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: '#34d399',
    },
    {
      id: 'contact-linkedin-card',
      icon: <LinkedinIcon />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/suresh-reddy-thappeta',
      href: personal.linkedin,
      color: '#818cf8',
    },
    {
      id: 'contact-github-card',
      icon: <GithubIcon />,
      label: 'GitHub',
      value: 'github.com/Suresh-5610',
      href: personal.github,
      color: '#f472b6',
    },
  ]

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">📬</span> Contact
          </div>
          <h2 className="section-title" id="contact-title">Get In Touch</h2>
          <p className="section-subtitle">
            Available for full-time roles, contract projects, and consulting opportunities.
            Let's connect!
          </p>
        </header>

        <div className="contact__layout">
          {/* Left — Contact Info */}
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-subtitle">
              Reach out via email, phone, or connect on LinkedIn/GitHub.
            </p>

            <div className="contact__cards">
              {contactCards.map(card => (
                <a
                  key={card.id}
                  id={card.id}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__card card"
                  aria-label={`${card.label}: ${card.value}`}
                >
                  <div className="contact__card-icon"
                    style={{ background: `${card.color}15`, borderColor: `${card.color}30`, color: card.color }}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="contact__card-label">{card.label}</p>
                    <p className="contact__card-value">{card.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Copy Email */}
            <button
              id="copy-email-btn"
              className="contact__copy-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Email Copied!' : 'Copy Email Address'}
            </button>
          </div>

          {/* Right — Contact Form */}
          <div className="contact__form-wrap">
            <div className="card contact__form-card">
              <div className="contact__form-header">
                <MessageSquare size={20} />
                <h3 className="contact__form-title">Send a Message</h3>
              </div>

              {status === 'sent' ? (
                <div className="contact__success" role="alert">
                  <Check size={28} />
                  <h4>Message Received!</h4>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label htmlFor="contact-name" className="contact__label">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="contact__input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="contact-email" className="contact__label">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="contact__input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-subject" className="contact__label">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      className="contact__input"
                      placeholder="e.g. Job Opportunity, Collaboration..."
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-message" className="contact__label">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="contact__textarea"
                      placeholder="Tell me about the opportunity or project..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
                    disabled={status === 'sending'}
                    aria-label="Submit contact form"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="contact__spinner" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="contact__form-note">
                    ℹ️ This form uses a simulated handler. To receive emails, connect it to{' '}
                    <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a> or{' '}
                    <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">EmailJS</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
