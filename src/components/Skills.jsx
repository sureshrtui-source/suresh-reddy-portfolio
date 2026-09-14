import { useState } from 'react'
import { Code2, Server, Layout, Database, Brain, Cloud, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolioData'
import './Skills.css'

const iconMap = { Code2, Server, Layout, Database, Brain, Cloud, Wrench }

export default function Skills() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...skillGroups.map(g => g.category)]

  const filtered = active === 'All'
    ? skillGroups
    : skillGroups.filter(g => g.category === active)

  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-header">
          <div className="section-tag">
            <span aria-hidden="true">⚙️</span> Technical Skills
          </div>
          <h2 className="section-title" id="skills-title">What I Work With</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build scalable backends, full-stack apps, and AI-powered systems.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="skills__filters" role="tablist" aria-label="Skill category filter">
          {categories.map(cat => (
            <button
              key={cat}
              id={`skills-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`skills__filter-btn ${active === cat ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid" role="tabpanel">
          {filtered.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2
            return (
              <div
                key={group.category}
                className="skills__card card"
                style={{ '--accent': group.color, animationDelay: `${i * 0.05}s` }}
              >
                {/* Card Header */}
                <div className="skills__card-header">
                  <div className="skills__card-icon" style={{ background: `${group.color}18`, border: `1px solid ${group.color}30` }}>
                    <Icon size={20} style={{ color: group.color }} />
                  </div>
                  <h3 className="skills__card-title">{group.category}</h3>
                </div>

                {/* Skill Badges */}
                <div className="skills__badges">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="skills__badge"
                      style={{
                        '--skill-color': group.color,
                        background: `${group.color}0d`,
                        borderColor: `${group.color}28`,
                        color: group.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
