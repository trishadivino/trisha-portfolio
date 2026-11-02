import { useState } from "react";
import "./css/Projects.css";
import ProjectModal from "./ProjectModal";

const projectData = [ 
  {
    title: "Digital Library System",
    category: "Academic Project",
    role: "Main Developer",
    status: "Completed",
    description:
      "An enhanced web-based library management system developed from an academic capstone project. The application provides a centralized administrative workspace for managing library collections, book copies, circulation transactions, borrower records, financial obligations, and operational reports. It also includes staff access control, audit logging, and dashboard analytics to support library administration and monitoring. The enhanced version was developed separately and was not integrated into the institution's existing library system.",
    contributions: [
      "Led the application development and implementation of the enhanced library management system.",
      "Designed and implemented the relational database structure and application workflows.",
      "Developed book collection and book copy management features.",
      "Implemented circulation transactions for borrowed, returned, overdue, lost, and damaged books.",
      "Developed borrower record management and borrowing history tracking.",
      "Implemented fine calculation and financial monitoring features.",
      "Created administrative dashboards with library activity summaries and borrowing analytics.",
      "Developed reports and PDF export functionality.",
      "Integrated barcode generation and Excel import/export.",
      "Implemented role-based staff access control and audit logging."
    ],
    techStack: [
      "PHP",
      "Laravel 12",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "JavaScript"
    ]
  },
  {
    title: "Student Performance Monitoring System (SPMS)",
    category: "Freelance Project",
    role: "Solo Developer",
    status: "Deployed – Client Testing",
    description:
      "A web-based academic monitoring system designed to help educational institutions manage academic records and monitor student performance, grades, attendance, and academic risk. It provides role-based interfaces for administrators, instructors, and students, with configurable academic settings and automated alerts to identify students who may require academic support.",

    contributions: [
      "Designed the database architecture, relationships, and data structures for academic records and student monitoring.",
      "Developed the application using Laravel 12 and FilamentPHP.",
      "Implemented role-based authentication, access control, and permission management.",
      "Developed administrative modules for managing students, instructors, staff, enrollments, and academic records.",
      "Implemented master data management for colleges, programs, sections, subjects, school years, semesters, rooms, and other academic references.",
      "Developed teaching assignment and class schedule management.",
      "Implemented grading configuration, assessment management, and student assessment score monitoring.",
      "Developed attendance tracking and attendance summary features.",
      "Created role-based dashboards for administrators, instructors, and students.",
      "Implemented configurable grading weights, attendance thresholds, and academic risk rules.",
      "Developed automated alerts for students with potential academic performance or attendance concerns.",
      "Implemented intervention tracking for students requiring academic assistance.",
      "Developed monitoring reports for class performance, student records, risk analysis, attendance, and interventions.",
      "Conducted application testing, debugging, system configuration, and deployment for client testing."
    ],

    techStack: [
      "PHP",
      "Laravel 12",
      "FilamentPHP",
      "Spatie Laravel Permission",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "JavaScript"
    ]
  },
  {
    title: "Task Management System",
    category: "Internal Company Project",
    role: "Technical Mentor",
    status: "In Use",
    description:
      "An internal web application used to organize tasks, monitor project progress, and support team coordination.",
    contributions: [
      "Guided OJT developers in Laravel fundamentals and development practices.",
      "Assisted in planning the database structure and application workflows.",
      "Reviewed code and provided technical guidance during development.",
      "Conducted system testing and debugging.",
      "Documented requirements and enhancement requests.",
      "Coordinated feedback between developers and stakeholders."
    ],
    techStack: ["PHP", "Laravel 12", "MySQL", "Blade", "Tailwind CSS", "Alpine.js"]
  },
  {
    title: "Shipyard Enterprise System",
    category: "Company Project",
    role: "Developer Collaborator",
    status: "Deployed & In Use",
    description:
    "A comprehensive desktop-based enterprise management system designed to support end-to-end shipyard operations, covering inventory, warehouse management, asset tracking, equipment operations, job orders, project management, and financial processes.",
    contributions: [
      "Developed Vessel Registry forms and management features.",
      "Developed Tariff Registry and maintenance forms.",
      "Developed project creation and project management modules.",
      "Contributed to the development of the Wharfage monitoring module.",
      "Participated in testing, debugging, and system stabilization.",
      "Assisted with user walkthroughs and training."
    ],
    techStack: ["VB.NET",
       "MySQL", "SQLyog"]
  },
  {
    title: "ESS Sentinel",
    category: "Internal Company Project",
    role: "Solo Developer",
    status: "Development Paused",
    description:
      "An internal Infrastructure and Support Knowledge Management System developed to centralize client and branch records, installed devices, software deployments, technical incidents, and documented solutions. It also provides a centralized repository for supporting files such as PDFs, documents, images, and videos, helping technical support personnel manage infrastructure information and preserve troubleshooting knowledge.",
    contributions: [
      "Designed the database structure and relationships for clients, branches, devices, systems, and support records.",
      "Implemented client, branch, and device management features for tracking deployed computer units and infrastructure.",
      "Developed incident and error documentation with corresponding troubleshooting solutions.",
      "Designed the system to support file attachments, including documents, PDFs, images, and videos.",
      "Implemented data validation, searching, sorting, filtering, and soft deletion.",
      "Maintained technical documentation and development planning."
    ],
    techStack: [
      "PHP",
      "Laravel 12",
      "FilamentPHP",
      "MySQL",
      "Blade",
      "Tailwind CSS"
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="projects-eyebrow">SELECTED WORK</span>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-intro">
          A selection of academic, freelance, and company projects I've
          contributed to through development, technical support, and
          collaboration.
        </p>
      </div>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <span
                className={`project-status ${project.status
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="project-title">{project.title}</h3>

            <span className="project-role">{project.role}</span>

            <p className="project-description">{project.description}</p>

            <div className="project-tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <span className="project-tech-tag" key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>

            <button
              className="project-details-btn"
              onClick={() => setSelectedProject(project)}
            >
              View My Contributions
              <span aria-hidden="true"> →</span>
            </button>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;