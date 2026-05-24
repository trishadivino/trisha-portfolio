import "./css/Experience.css";

const experienceData = [
  {
    position: "Support Programmer",
    company: "Emergence Systems and Solutions, Inc.",
    address: "Baliwasan, Zamboanga City",
    years: "February 2025 – Present",
    summary: "Promoted role focused on development, system stabilization, and team leadership.",
    techStack: ["PHP", "Laravel", "VB.NET", "MySQL", "SQL Server"],
    duties: [
      "Led implementation team and assisted support personnel in SME system deployment and onboarding.",
      "Documented client customization requests and coordinated with the development team.",
      "Stabilized legacy PHP Shipyard Management System and optimized financial modules.",
      "Contributed to the migration from PHP to VB.NET for the Shipyard Enterprise System.",
      "Developed internal Laravel systems including the Error Registry System (ongoing).",
      "Led the Task Management System project: trained OJTs on Laravel fundamentals, designed the database structure, and handled system testing and requirement documentation based on stakeholder feedback."
    ]
  },
  {
    position: "Technical Support Specialist",
    company: "Emergence Systems and Solutions, Inc.",
    address: "Baliwasan, Zamboanga City",
    years: "June 2023 – February 2025",
    summary: "Entry-level role handling client-facing technical support and system deployment.",
    techStack: ["PHP", "MySQL", "Excel", "SQL"],
    duties: [
      "Installed and deployed SME systems for multiple clients across the region.",
      "Conducted user training and onboarding sessions for new client teams.",
      "Provided first-line technical troubleshooting support for production systems.",
      "Managed data migration and optimized bulk database imports for client transitions.",
      "Streamlined workflow efficiency and improved overall system adoption rates."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.position}</h3>
            </div>
            <div>
              <span className="years">{exp.years}</span>
            </div>

            <p className="company">{exp.company}</p>
            <p className="address">{exp.address}</p>

            {exp.summary && <p className="role-summary">{exp.summary}</p>}

            {exp.techStack && (
              <div className="exp-tech-stack">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="exp-tech-tag">{tech}</span>
                ))}
              </div>
            )}

            <ul className="duties">
              {exp.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
