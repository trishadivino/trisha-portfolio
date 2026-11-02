
import "./css/About.css";

function About() {

  const techStack = [
    {
      category: "Programming Languages",
      logos: [
        {
          name: "PHP",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        },
        {
          name: "VB.NET / .NET",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
        },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "HTML5",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        }
      ]
    },
    {
      category: "Frameworks & Technologies",
      logos: [
        {
          name: "Laravel",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
        },
        {
          name: "Tailwind CSS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
          name: "Bootstrap",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "FilamentPHP",
          src: "/filament-logo.png"
        }
      ]
    },
    {
      category: "Databases",
      logos: [
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        }
      ]
    },
    {
      category: "Development Tools",
      logos: [
        {
          name: "VS Code",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        {
          name: "XAMPP",
          src: "/xampp-logo.png"
        },
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
          name: "GitHub",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
          name: "SQLyog",
          src: "/sqlyog-logo.jpg"
        }
      ]
    },
    {
      category: "Hosting & Deployment",
      logos: [
        {
          name: "Railway",
          src: "https://cdn.simpleicons.org/railway"
        },
        {
          name: "Netlify",
          src: "https://cdn.simpleicons.org/netlify"
        },
        {
          name: "InfinityFree",
          src: "/infinityfree-logo.png"
        }
      ]
    },
    {
      category: "AI-Assisted Development",
      logos: [
        {
          name: "ChatGPT",
          src: "/chatgpt-logo.png"
        }
      ]
    }
  ];

  const professionalSkills = [
    "Business application development and enhancement",
    "Legacy application debugging and maintenance",
    "Technical troubleshooting and issue investigation",
    "System implementation and deployment",
    "Database troubleshooting and data validation",
    "Requirements gathering and enhancement documentation",
    "Software testing and change validation",
    "Client onboarding and end-user training",
    "Data migration and CSV import/export",
    "Hardware and network setup verification",
    "Technical coordination and OJT mentoring"
  ];

  const softSkills = [
    "Analytical and problem-solving",
    "Client communication",
    "Cross-functional collaboration",
    "Adaptability",
    "Time management",
    "Attention to detail",
    "Technical knowledge sharing",
    "Leadership and coordination",
    "Continuous learning"
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-header">
        <span className="about-eyebrow">GET TO KNOW ME</span>
        <h2 className="about-title">Skills<span>&</span> Expertise</h2>

        <p className="about-description">
          Software Developer and Application Support Specialist with 3+ years
          of experience in business application development, technical support,
          and system implementation. My experience combines hands-on programming
          with practical knowledge of business operations and client environments.

          <br /><br />

          I work with development teams and end-users to investigate technical
          issues, implement software enhancements, validate system changes,
          and deliver reliable business solutions. Beyond development, I have
          experience coordinating implementations, conducting client training,
          and guiding junior developers through assigned tasks.
        </p>
      </div>

      <div className="about-content">

        {/* Tech Stack */}
        <div className="tech-stack">
          <h3 className="section-title">TECH STACK</h3>

          {techStack.map((section, idx) => (
            <div key={idx} className="tech-category">

              <h4 className="category-title">{section.category}</h4>

              <div className="logo-grid">
                {section.logos.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-logo-container"
                    title={tech.name}
                  >
                    {tech.src ? (
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="tech-logo"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }}
                      />
                    ) : null}

                    <span
                      className="tech-text-logo"
                      style={{ display: tech.src ? "none" : "flex" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="work-skills">
          <h3 className="section-title">WORK SKILLS</h3>

          <ul className="skills-list">
            {professionalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
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
