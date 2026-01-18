import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCompanyById, getProjectById } from '../data/companies';
import './ProjectPage.css';

const ProjectPage = () => {
  const { companyId, projectId } = useParams();
  const company = getCompanyById(companyId);
  const project = getProjectById(companyId, projectId);

  if (!company || !project) {
    return (
      <div className="page-content">
        <div className="error-message">
          <h1>Project not found</h1>
          <p>The requested project could not be found.</p>
          <Link to="/" className="back-link">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="project-header">
        <div className="breadcrumb">
          <Link to={`/work/${companyId}`} className="breadcrumb-link">
            {company.name}
          </Link>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>
        
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.description}</p>
        
        <div className="project-details">
          <div className="project-detail-item">
            <span className="detail-label">Role</span>
            <span className="detail-value">{project.role}</span>
          </div>
          <div className="project-detail-item">
            <span className="detail-label">Timeline</span>
            <span className="detail-value">{project.timeline}</span>
          </div>
          <div className="project-detail-item">
            <span className="detail-label">Team</span>
            <span className="detail-value">{project.team}</span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <section className="content-section">
          <h2 className="section-title">Overview</h2>
          <p className="section-content">{project.overview}</p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Challenge</h2>
          <p className="section-content">{project.challenge}</p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Solution</h2>
          <p className="section-content">{project.solution}</p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Impact</h2>
          <p className="section-content">{project.impact}</p>
        </section>

        {project.images && project.images.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Design Process</h2>
            <div className="image-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img 
                    src={image} 
                    alt={`${project.title} design process ${index + 1}`}
                    className="project-image"
                    onError={(e) => {
                      e.target.parentNode.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="project-navigation">
        <Link to={`/work/${companyId}`} className="nav-button">
          ← Back to {company.name}
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;