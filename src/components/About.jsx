import "./css/About.css";

function About() {
  const techStack = [
    {
      category: "Programming & Web Development",
     logos: [
            { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "VB.NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
            { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "SQL Server", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  const softSkills = [
    "System implementation and deployment",
    "Client onboarding & training",
    "First-line technical support",
    "Requirement gathering & documentation",
    "Legacy system stabilization & migration",
    "Internal tool development (Error Registry, Task Management System)",
    "Team mentoring & coordination"
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Highly motivated IT professional with experience in system support, implementation, and software development. Skilled in managing SME systems, leading implementation teams, stabilizing legacy systems, and developing internal tools. Seeking to leverage technical expertise and problem-solving abilities to contribute to innovative software projects and grow as a full-stack developer.
      </p>

      <div className="about-content">
        {/* Left Column: Tech Stack */}
        <div className="tech-stack">
          <h3 className="section-title">TECH STACK</h3>
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className={`tech-category ${idx < techStack.length - 1 ? "with-border" : ""}`}
            >
              <h4 className="category-title">{section.category}</h4>
              <div className="logo-grid">
                {section.logos.map((tech, i) => (
                  <div key={i} className="tech-logo-container" title={tech.name}>
                    <img src={tech.src} alt={tech.name} className="tech-logo" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Soft Skills */}
        <div className="soft-skills">
          <h3 className="section-title">SOFT SKILLS</h3>
          <ul className="skills-list">
            {softSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;