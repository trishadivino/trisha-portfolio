import "./css/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <span className="modal-category">{project.category}</span>

        <h2 className="modal-title" id="modal-title">
          {project.title}
        </h2>

        <p className="modal-role">{project.role}</p>

        <span
          className={`modal-status ${project.status
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          {project.status}
        </span>

        <div className="modal-details">
          <div className="modal-detail-section">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-detail-section">
            <h3>My Contributions</h3>
            <ul>
              {project.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>

          <div className="modal-detail-section">
            <h3>Technology Stack</h3>
            <div className="modal-tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}