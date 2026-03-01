import "./css/Projects.css";

const projectData = [
  {
    title: "Library Management System",
    role: "Freelance Project |Main Developer",
    description: "Developed a system to manage book transactions, user accounts, fines, and inventory. Features include tracking borrowed, returned, damaged, and lost books, automated report generation, and payment processing.",
    tech: "Laravel",
    status: "Completed",
    image: "/lms.png"
  },
  {
    title: "Error Registry System",
    role: "Company Project | Main Developer",
    description: "Created a centralized library for technical and software issues. Support teams can log errors and attach instructions, PDFs, videos, or executables, making it easy to reference previous solutions.",
    tech: "Laravel",
    status: "Ongoing",
    image: "/ers.png"
  },
  {
    title: "Shipyard Enterprise System",
    role: "Company Project | Developer Collaborator",
    description: "Streamlines shipyard operations by managing vessels, projects, tasks, inventory, and financials. Enables efficient planning, resource tracking, and faster project completion.",
    tech: "VB6",
    status: "Stabilization Phase",
    image: "/ses1.jpeg"
  },
  {
    title: "Task Management System",
    role: "Company Project | Intern Supervisor",
     description: "Tracks daily tasks and project timelines. Supervisors can assign tasks, monitor progress via calendar views, and ensure employees stay on schedule. Planned integration with Error Registry System.",
    tech: "Laravel",
    status: "Ongoing",
    image: "/tms.png"
  },
  {
    title: "Sales Management System",
    role: "Personal Project | Main Developer",
    description: "A system for small businesses to manage inventory and sales, keeping track of stock and transactions. Planned for future development.",
    tech: "Laravel",
    status: "Planned",
    image: "/zoro.jpg"
  },
];

import { useRef } from "react";

export default function Projects() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector(".project-card");
    const scrollAmount = card ? card.offsetWidth + 24 : 350; // 24px gap
    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="carousel-nav">
        <button className="carousel-btn left" onClick={() => scrollCarousel("left")}>{"<"}</button>
        <div className="carousel" ref={carouselRef}>
          {projectData.map((proj, idx) => (
            <div key={idx} className="project-card">
              <img src={proj.image} alt={proj.title} className="project-image" />
              <div className="project-content">
                <h3>{proj.title}</h3>
                <span className="role-badge">{proj.role}</span>
                <p className="description">{proj.description}</p>
                <div className="project-footer">
                  <span className="tech-label">{proj.tech}</span>
                  <span
                    className={`status-badge${
                      proj.status === "Completed"
                        ? " completed"
                        : proj.status === "Ongoing"
                        ? " ongoing"
                        : proj.status === "Planned"
                        ? " planned"
                        : proj.status === "Stabilization Phase"
                        ? " stabilization"
                        : ""
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scrollCarousel("right")}>{">"}</button>
      </div>
    </section>
  );
}