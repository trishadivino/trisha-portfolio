import "./css/About.css";

function About() {
  const techStack = [
    {
      category: "Programming & Web Development",
     logos: [
            { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },            
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

  const professionalSkills = [
    "System implementation and deployment",
    "Client onboarding & training",
    "First-line technical support",
    "Requirement gathering & documentation",
    "Legacy system stabilization & migration",
    "Internal tool development",
    "Team mentoring & coordination"
  ];

  const softSkills = [
    "Problem-solving",
    "Client communication",
    "Team collaboration",
    "Adaptability",
    "Time management",
    "Attention to detail"
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me | Skills</h2>
      <p className="about-description">
        IT professional with experience in software support, system implementation, and web development. I bridge the gap between technical teams and end-users, ensuring smooth system deployments and resolving issues efficiently.

        My background includes client onboarding, troubleshooting legacy systems, and developing internal tools using Laravel and PHP. I collaborate closely with development teams during testing and deployment, bringing both technical expertise and customer-facing skills to every project.

        Seeking roles in software support or full-stack development where I can leverage my hybrid skill set to build reliable systems and deliver excellent user experiences.
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

        {/* Middle Column: Professional Experience */}
        <div className="soft-skills">
          <h3 className="section-title">WORK SKILLS</h3>
          <ul className="skills-list">
            {professionalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
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
