import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ProjectPage from './pages/ProjectPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:companyId" element={<CompanyPage />} />
              <Route path="/work/:companyId/:projectId" element={<ProjectPage />} />
              <Route path="*" element={
                <div className="page-content">
                  <div className="error-message">
                    <h1>Page not found</h1>
                    <p>The requested page could not be found.</p>
                    <a href="/" className="back-link">← Back to home</a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;