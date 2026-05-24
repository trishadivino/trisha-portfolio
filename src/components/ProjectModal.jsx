import { useState } from "react";
import "./css/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">{project.title}</h2>
        <span className="modal-role">{project.role}</span>
        {project.credits && (
          <p className="modal-credits">{project.credits}</p>
        )}
        
        {/* Image Gallery */}
        {images.length > 1 && (
          <div className="image-gallery">
            <button className="gallery-nav prev" onClick={prevImage}>‹</button>
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="gallery-image"
            />
            <button className="gallery-nav next" onClick={nextImage}>›</button>
          </div>
        )}

        {/* Gallery Dots */}
        {images.length > 1 && (
          <div className="gallery-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        )}

        {/* Project Details */}
        <div className="modal-details">
          <div className="detail-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="detail-section">
              <h3>Key Features</h3>
              <ul className="feature-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="detail-section">
              <h3>My Responsibilities</h3>
              <ul className="feature-list">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && (
            <div className="detail-section">
              <h3>Impact & Results</h3>
              <p>{project.impact}</p>
            </div>
          )}

          {project.metrics && (
            <div className="detail-section">
              <h3>Project Metrics</h3>
              <div className="metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-item">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h3>Tech Stack</h3>
            <div className="tech-stack-badges">
              {project.techStack && project.techStack.map((tech, idx) => (
                <span key={idx} className={`tech-badge ${tech.category}`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="detail-section">
              <h3>Links</h3>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
