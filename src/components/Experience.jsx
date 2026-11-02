import "./css/Experience.css";

const experienceData = [
  {
    position: "Support Programmer",
    company: "Emergence Systems and Solutions, Inc.",
    address: "One Campaner, Zamboanga City",
    years: "February 2025 – Present",
    summary: "Focused on business application development, system enhancement, implementation, and technical coordination.",
    techStack: ["PHP", "Laravel", "VB.NET", "MySQL", "SQL"],
    duties: [
      "Develop and enhance business applications and internal systems using PHP, Laravel, VB.NET, and MySQL.",
      "Develop new forms and modules for legacy desktop applications while following existing coding standards and system architecture.",
      "Investigate escalated technical issues by reproducing errors, reviewing application behavior, and validating database records.",
      "Contribute to the migration of a legacy PHP-based Shipyard Management System into a VB.NET desktop application.",
      "Gather and document client requirements, coordinate enhancement requests, and collaborate with the development team.",
      "Conduct software testing, validate system changes, assist with deployment, and gather client feedback.",
      "Coordinate client implementations, including deployment schedules, system setup, user training, and technical readiness.",
      "Prepare demonstration environments and assist the Sales team during software presentations.",
      "Mentor OJTs in Laravel development and provide technical guidance for the internal Task Management System, including database planning, testing, and documentation."
    ]
  },
  {
    position: "Technical Support Specialist",
    company: "Emergence Systems and Solutions, Inc.",
    address: "Baliwasan, Zamboanga City",
    years: "June 2023 – February 2025",
    summary: "Handled client-facing technical support, software deployment, troubleshooting, and user assistance.",
    techStack: ["PHP", "MySQL", "SQL", "Excel"],
    duties: [
      "Installed, configured, and deployed business applications for clients across different industries.",
      "Provided first-line technical support by investigating software issues, reproducing errors, and applying appropriate solutions.",
      "Performed database investigations, data validation, and bulk data migration during client system transitions.",
      "Assisted clients with system onboarding and conducted user training for business applications.",
      "Documented recurring technical issues and troubleshooting procedures for support reference.",
      "Escalated complex application issues to the development team and coordinated follow-ups with clients."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header-section">
        <span className="experience-eyebrow">CAREER JOURNEY</span>
        <h2 className="experience-title">Work Experience</h2>
        <p className="experience-intro">
          My professional experience in software development, application
          support, and business system implementation.
        </p>
      </div>

      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <article key={index} className="experience-card">
            <div className="experience-card-top">
              <span className="experience-role-label">
                {index === 0 ? "CURRENT ROLE" : "PREVIOUS ROLE"}
              </span>
              <span className="experience-years">{exp.years}</span>
            </div>

            <h3 className="experience-position">{exp.position}</h3>

            <p className="experience-company">{exp.company}</p>
            <p className="experience-address">{exp.address}</p>

            <p className="experience-summary">{exp.summary}</p>

            <div className="experience-tech-stack">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="experience-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="experience-responsibilities">
              <h4>Key Responsibilities</h4>
              <ul>
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;