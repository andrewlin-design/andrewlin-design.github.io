import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { companies } from '../data/companies';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h2 className="nav-section-title">Work</h2>
          <ul className="nav-list">
            {companies.map((company) => (
              <li key={company.id} className="nav-item">
                <Link
                  to={`/work/${company.id}`}
                  className={`nav-link ${
                    location.pathname.includes(`/work/${company.id}`) ? 'active' : ''
                  }`}
                >
                  <div className="company-info">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="company-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="company-logo-fallback" style={{ display: 'none' }}>
                      {company.name.charAt(0)}
                    </div>
                    <span className="company-name">{company.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="nav-section">
          <h2 className="nav-section-title">Contact</h2>
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="mailto:andrew@example.com" 
                className="nav-link contact-link"
              >
                Email
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="https://linkedin.com/in/andrewlin" 
                className="nav-link contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;