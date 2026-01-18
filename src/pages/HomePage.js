import React from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <h1 className="hero-title">
          Hi, I'm Andrew Lin
        </h1>
        <p className="hero-subtitle">
          A UX Designer focused on creating intuitive digital experiences that solve real user problems. 
          I've worked with leading companies to design products that millions of people use every day.
        </p>
        <div className="hero-cta">
          <Link to="/work/jpmorgan" className="cta-button primary">
            View My Work
          </Link>
          <a href="mailto:andrew@example.com" className="cta-button secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <section className="featured-work">
        <h2 className="section-title">Featured Work</h2>
        <div className="work-grid">
          {companies.map((company) => (
            <article key={company.id} className="work-card">
              <Link to={`/work/${company.id}`} className="work-card-link">
                <div className="work-card-header">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="work-card-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="work-card-logo-fallback" style={{ display: 'none' }}>
                    {company.name.charAt(0)}
                  </div>
                  <h3 className="work-card-title">{company.name}</h3>
                </div>
                <p className="work-card-description">
                  {company.projects[0]?.description || `UX Design work at ${company.name}`}
                </p>
                <div className="work-card-meta">
                  <span className="project-count">
                    {company.projects.length} {company.projects.length === 1 ? 'Project' : 'Projects'}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a UX Designer with 5+ years of experience creating user-centered digital products. 
            I specialize in mobile app design, design systems, and user research. My work has helped 
            companies improve user satisfaction, reduce support costs, and increase conversion rates.
          </p>
          <p className="about-text">
            I believe great design starts with understanding users' real needs and constraints. 
            Through research, prototyping, and iterative testing, I create solutions that are both 
            beautiful and functional.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;