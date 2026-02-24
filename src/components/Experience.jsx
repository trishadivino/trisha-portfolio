import "./css/Experience.css";

const experienceData = [
  {
    position: "Support Programmer",
    company: "Emergence Systems and Solutions, Inc.",
    address: "Baliwasan, Zamboanga City",
    years: "February 2025 – Present",
    duties: [
      "Led implementation team and assisted support personnel in SME system deployment and onboarding.",
      "Documented client customization requests and coordinated with development team.",
      "Stabilized legacy PHP Shipyard Management System and optimized financial modules.",
      "Participated in migration from PHP to VB.NET.",
      "Developed internal Laravel systems (Error Registry, Library Management).",
      "Mentored interns and supervised Task Management System project."
    ]
  },
  {
    position: "Technical Support Specialist",
    company: "Emergence Systems and Solutions, Inc.",
    address: "Baliwasan, Zamboanga City",
    years: "June 2023 – February 2025",
    duties: [
      "Installed and deployed SME systems for clients.",
      "Conducted user training and onboarding.",
      "Provided first-line technical troubleshooting support.",
      "Managed data migration and optimized bulk database imports.",
      "Improved workflow efficiency and system adoption."
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