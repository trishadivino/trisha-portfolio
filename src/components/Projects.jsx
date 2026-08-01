import "./css/Projects.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projectData = [
  {
    title: "Digital Library System",
    role: "Capstone Enhancement Project | Main Developer",
    description: "Enhanced and modernized a capstone-based Library Management System into a highly scalable institutional platform focused on circulation, inventory, borrower management, financial tracking, and administrative oversight. Engineered to simulate real-world library operations with granular role-based staff access and comprehensive operational monitoring capabilities.",
    tech: "PHP, Laravel, Blade, Tailwind CSS, JavaScript, MySQL",
    status: "Completed",
    disclaimer: "Disclaimer: This showcased system is a demonstration build derived from an academic capstone project. All displayed names, logos, and records are fictional or modified for privacy, security, and portfolio presentation purposes. The system is intended to illustrate technical capabilities and project scope rather than represent an actual deployed library management solution.",
    image: "/lms-1.png",
    gallery: [
      "/lms-1.png",
      "/lms-2.png",
      "/lms-3.png",
      "/lms-4.png",
      "/lms-5.png",
      "/lms-6.png",
      "/lms-7.png",
      "/lms-8.png",
      "/lms-9.png",
      "/lms-10.png",
      "/lms-11.png",
      "/lms-12.png"
    ],
    features: [
      "Inventory & Collection Management - Complete cataloging and organization of library materials",
      "Circulation Tracking - Monitor borrowed, returned, overdue, lost, and damaged items with real-time status",
      "Borrower Account & History Management - Comprehensive member profiles with transaction history",
      "Financial Tracking - Automated fine calculations and payment obligation management",
      "Audit Logging - Administrative accountability with detailed activity logs",
      "Role-Based Access Control - Granular permission system for staff and administrators",
      "Automated Reporting & Analytics - Data-driven insights and operational reports with Chart.js visualizations",
      "Advanced Search & Filtering - Powerful library record search capabilities",
      "PDF Export & Barcode Generation - Generate reports and item barcodes for circulation",
      "Excel Import/Export - Bulk data management capabilities"
    ],
    responsibilities: [
      "Designed and implemented the complete relational database schema with optimized queries",
      "Developed all core features including transaction management and circulation workflows",
      "Built the comprehensive admin dashboard for library staff and administrators",
      "Implemented automated fine calculation system with payment tracking",
      "Created sophisticated report generation module with multiple export formats",
      "Architected role-based access control system for multi-level user management",
      "Integrated PDF generation for documents and barcode generation for items"
    ],
    impact: "Transformed a capstone project into a production-ready institutional platform that simulates real-world library operations with improved circulation monitoring, streamlined operational reporting, enhanced administrative control, and better borrower management workflows.",
    metrics: [
      { value: "10+", label: "Core Features" },
      { value: "15+", label: "Database Tables" },
      { value: "3", label: "User Roles" },
      { value: "5+", label: "Report Types" },
      { value: "3", label: "Months Dev Time" }
    ],
    techStack: [
      { name: "PHP 8.2+", category: "language" },
      { name: "Laravel 12.0", category: "framework" },
      { name: "phpMyAdmin", category: "database" },
      { name: "Blade", category: "frontend" },
      { name: "Tailwind CSS 3.1.0", category: "frontend" },
      { name: "Alpine.js 3.4.2", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "Chart.js 4.5.1", category: "tool" },
      { name: "Laravel Breeze 2.3", category: "tool" },
      { name: "DomPDF 3.1", category: "tool" },
      { name: "Blade Heroicons 2.6", category: "tool" },
      { name: "Maatwebsite Excel 3.1", category: "tool" },
      { name: "Milon Barcode 12.0", category: "tool" },
      { name: "Vite 7.0.7", category: "tool" },
      { name: "Laravel Pint 1.24", category: "tool" },
      { name: "PHPUnit 11.5.3", category: "tool" },
      { name: "Laravel Sail 1.41", category: "tool" }
    ]
  },
  {
    title: "Task Management System",
    role: "Company Project | Team Lead | Mentor",
    description: "An enterprise-grade task management platform for team collaboration, project tracking, and resource optimization. Built collaboratively under my technical mentorship, featuring workflow automation, real-time notifications, interactive Gantt and calendar visualizations, and intelligent task scheduling.",
    tech: "PHP, Laravel, Tailwind CSS, MySQL, Alpine.js",
    status: "Beta Testing Phase",
    credits: "Developed by OJT Interns - Junior Batch 2026 under my technical mentorship and supervision.",
    image: "/tms-1.png",
    gallery: [
      "/tms-1.png",
      "/tms-2.png",
      "/tms-3.png",
      "/tms-4.png",
      "/tms-5.png",
      "/tms-6.png",
      "/tms-7.png",
      "/tms-8.png",
      "/tms-9.png",
      "/tms-10.png",
      "/tms-11.png",
      "/tms-12.png"
    ],
    features: [
      "Task Creation & Assignment Management",
      "Project & Client Management",
      "Advanced Task Filtering & Search",
      "Multi-Status Workflow (To Do, In Progress, Completed, On Hold, Cancelled)",
      "Priority-Based Task Prioritization",
      "Real-Time Notifications & Activity Tracking",
      "Interactive Gantt Chart Visualization",
      "Calendar & Timeline Views",
      "Task Categorization & Tagging System",
      "Role-Based Access Control",
      "Time Tracking & Task Duration",
      "Automated Dashboard Analytics",
      "Advanced Reporting & Metrics",
      "Personal Notes & Reminders"
    ],
    responsibilities: [
      "Designed the complete database schema and overall system architecture",
      "Trained OJT developers on Laravel fundamentals and best practices",
      "Defined feature specifications and workflow logic for task management modules",
      "Conducted system testing, debugging, and quality assurance",
      "Documented adjustment requests from management and the ESS team",
      "Reviewed code submissions and guided developers through implementation challenges",
      "Coordinated between the OJT team, project manager, and end-users/department stakeholders."
    ],
    impact: "Successfully delivered a production-ready task management platform while mentoring junior developers, demonstrating both technical leadership and the ability to translate stakeholder requirements into a working system.",
    metrics: [
      { value: "14+", label: "Core Features" },
      { value: "10+", label: "Database Tables" },
      { value: "5", label: "Task Status Types" },
      { value: "3", label: "Priority Levels" },
      { value: "3", label: "User Roles" },
      { value: "4", label: "Months Dev Time" }
    ],
    techStack: [
      { name: "PHP 8.2+", category: "language" },
      { name: "Laravel 12", category: "framework" },
      { name: "MySQL", category: "database" },
      { name: "Blade", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Alpine.js", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "Chart.js", category: "tool" },
      { name: "FullCalendar.js", category: "tool" },
      { name: "AJAX/Axios", category: "tool" },
      { name: "Laravel Reverb", category: "tool" },
      { name: "Laravel Breeze", category: "tool" },
      { name: "Vite", category: "tool" },
      { name: "Pest/PHPUnit", category: "tool" }
    ]
  },
  {
    title: "Shipyard Enterprise System",
    role: "Company Project | Developer Collaborator",
    description: "An enterprise operations management system designed to support daily shipyard workflows across multiple branches. The platform manages vessel projects, job orders, inventory, procurement, financial operations, service tariffs, and wharf occupancy monitoring to streamline large-scale shipyard operations.",
    tech: "VB.NET, .NET Framework, SQL Server",
    status: "Stabilization",
    image: "/ses-1.1.png",
    gallery: [
      "/ses-1.1.png",
      "/ses-2.1.png",
      "/ses-3.png",
      "/ses-4.png",
      "/ses-5.png",
      "/ses-6.png",
      "/ses-7.1.png",
      "/ses-8.png",
      "/ses-9.1.png",
      "/ses-10.png"
    ],
    features: [
      "Vessel registry and operational tracking",
      "Ship work project management with ISO-related documentation workflows",
      "Job Order (JO) processing for materials and services",
      "Tariff management for shipyard service operations",
      "Inventory and masterfile management for consumables, assets, and office supplies",
      "Procurement workflows including PO, PR, delivery, and transfer management",
      "Financial operation support modules",
      "Wharfage board monitoring for vessel docking visibility",
      "Multi-branch operational support"
    ],
    responsibilities: [
      "Developed the Tariff Registry and maintenance forms",
      "Implemented Vessel Registry and management forms",
      "Developed project creation and project management modules",
      "Currently developing the Wharfage monitoring module",
      "Conducted user training and system walkthroughs for operational staff",
      "Assisted users during onboarding and feature adoption",
      "Collaborated with the lead developer on operational workflows and system stabilization",
      "Participated in testing, debugging, and feature refinement"
    ],
    impact: "Supports real-world shipyard operational workflows by centralizing vessel management, procurement, service processing, inventory monitoring, and project coordination across multiple branches.",
    metrics: [
      { value: "9+", label: "Core Modules" },
      { value: "Multi", label: "Branch Support" },
      { value: "3", label: "Modules Developed" }
    ],
    techStack: [
      { name: "VB.NET", category: "language" },
      { name: "SQL Yog", category: "database" }
    ]
  },
  {
    title: "ESS Sentinel",
    role: "Internal Tool Development | Full Stack Developer",

    description: `ESS Sentinel is a centralized enterprise support and infrastructure management platform 
    designed to replace spreadsheet-based IT operations with a structured, searchable, and scalable web application. 
    The system enables support engineers to manage clients, branches, devices, software systems, database instances, 
    technical documentation, incidents, and troubleshooting knowledge from a single platform. 
    Built using Laravel and FilamentPHP, the project focuses on real-world IT support workflows, maintainability, 
    and clean system architecture while serving as a production-oriented portfolio project.`,

    tech: "PHP, Laravel, FilamentPHP, Blade, Tailwind CSS, MySQL",

    status: "Active Development",

    disclaimer:
            `ESS Sentinel is an enterprise support platform currently under active development. 
            Information presented in this portfolio has been sanitized, anonymized, or represented using sample data to protect confidential operational and business information. 
            This portfolio demonstrates the system's architecture, functionality, and technical implementation without exposing sensitive client or organizational data.`,
    
    image: "/ess-chart.png",

    gallery: [
      "/ess-chart.png",
    ],

    features: [
      "Client & Branch Registry - Centralized management of supported organizations and branch locations",
      "Infrastructure Asset Management - Track servers, workstations, terminals, and network devices",
      "Database Instance Registry - Monitor database servers and deployed database instances",
      "System Deployment Tracking - Record installed applications and software environments",
      "Knowledge Base - Centralized repository for troubleshooting procedures and technical solutions",
      "Incident Management - Record and monitor technical issues and resolution history",
      "Technical Documentation Center - Store installation guides, network configurations, backup procedures, and operational documentation",
      "Role-Based Access Control - Secure administrative access using Laravel Sanctum and Spatie Permission",
      "Advanced Search, Sorting & Filtering - Fast retrieval of infrastructure and operational records",
      "Soft Delete & Historical Data Preservation - Maintain recoverable records while preserving operational history"
    ],

    responsibilities: [
      "Designed the complete enterprise relational database architecture",
      "Developed the application using Laravel 12 and FilamentPHP",
      "Implemented modular CRUD resources following scalable design principles",
      "Architected entity relationships for clients, branches, infrastructure assets, and systems",
      "Designed reusable resource structures using Filament Resources",
      "Implemented validation, soft deletes, searching, sorting, and filtering",
      "Maintained project documentation, Git version control, and iterative development roadmap"
    ],

    impact:
      `ESS Sentinel is designed to streamline IT support operations by centralizing infrastructure information, 
      reducing dependency on spreadsheets, improving documentation management, and preserving institutional knowledge through searchable technical records. 
      The long-term vision is to provide a scalable enterprise support platform suitable for managed IT service providers and internal support teams.`,

    metrics: [
      { value: "10+", label: "Planned Modules" },
      { value: "20+", label: "Database Tables" },
      { value: "100%", label: "Custom Database Design" },
      { value: "1", label: "Enterprise Platform" },
      { value: "Ongoing", label: "Development" }
    ],

    techStack: [
      { name: "PHP 8.2+", category: "language" },
      { name: "Laravel 12", category: "framework" },
      { name: "FilamentPHP 4", category: "framework" },
      { name: "MySQL", category: "database" },
      { name: "Blade", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Alpine.js", category: "frontend" },
      { name: "Laravel Sanctum", category: "tool" },
      { name: "Spatie Permission", category: "tool" },
      { name: "Git", category: "tool" },
      { name: "GitHub", category: "tool" },
      { name: "Composer", category: "tool" },
      { name: "Vite", category: "tool" },
      { name: "Laravel Pint", category: "tool" },
      { name: "PHPUnit", category: "tool" }
    ]
  },
];

import { useRef } from "react";

export default function Projects() {
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector(".project-card");
    const scrollAmount = card ? card.offsetWidth + 24 : 350;
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
              <div className="project-card-left">
                <img src={proj.image} alt={proj.title} className="project-image" />
              </div>
              <div className="project-card-right">
                <div className="project-content">
                  <h3>{proj.title}</h3>
                  <span className="role-badge">{proj.role}</span>
                  <p className="description">{proj.description}</p>
                  
                  <span className={`status-badge${proj.status === "Completed" ? " completed" : proj.status === "Ongoing" ? " ongoing" : proj.status === "Stabilization" ? " stabilization" : proj.status === "Beta Testing Phase" ? " beta-testing" : proj.status === "Active Development" ? " active-development" : ""}`}>
                    {proj.status}
                  </span>

                  <div className="tech-badges">
                    {proj.techStack && proj.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={`tech-badge-mini ${tech.category}`}>
                        {tech.name}
                      </span>
                    ))}
                    {proj.techStack && proj.techStack.length > 4 && (
                      <span className="tech-badge-mini more">+{proj.techStack.length - 4}</span>
                    )}
                  </div>

                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedProject(proj)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scrollCarousel("right")}>{">"}</button>
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

