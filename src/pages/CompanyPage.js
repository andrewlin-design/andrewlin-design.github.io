import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCompanyById } from '../data/companies';
import './CompanyPage.css';

const CompanyPage = () => {
  const { companyId } = useParams();
  const company = getCompanyById(companyId);

  if (!company) {
    return (
      <div className="page-content">
        <div className="error-message">
          <h1>Company not found</h1>
          <p>The requested company could not be found.</p>
          <Link to="/" className="back-link">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="company-header">
        <div className="company-title">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="company-header-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="company-header-logo-fallback" style={{ display: 'none' }}>
            {company.name.charAt(0)}
          </div>
          <h1 className="company-name">{company.name}</h1>
        </div>
        <p className="company-description">
          Projects and case studies from my time at {company.name}
        </p>
      </div>

      <div className="projects-grid">
        {company.projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-content">
              <h2 className="project-title">
                <Link 
                  to={`/work/${companyId}/${project.id}`}
                  className="project-link"
                >
                  {project.title}
                </Link>
              </h2>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-role">{project.role}</span>
                <span className="project-timeline">{project.timeline}</span>
              </div>
              <Link 
                to={`/work/${companyId}/${project.id}`}
                className="project-cta"
              >
                View Case Study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;