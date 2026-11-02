
import "./css/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        {/* Introduction */}
        <div className="home-text">

          <span className="home-eyebrow">
            SOFTWARE DEVELOPMENT & APPLICATION SUPPORT
          </span>

          <h1>
            Hi, I'm <span>Trisha Mae H. Divino</span>
          </h1>

          <h2 className="home-role">
            Software Developer
            <span> & </span>
            Application Support Specialist
          </h2>

          <p className="home-description">
            Software Developer and Application Support Specialist with 3+ years of experience building business applications,
            maintaining legacy systems, and supporting software implementations.
            Experienced in developing with Laravel, PHP, and VB.NET while coordinating with clients
            and development teams to deliver reliable software solutions.
          </p>

          {/* Professional Skills */}
          <div className="home-expertise">

            {/* Technical Operations */}
            <div className="expertise-card operations-card">
              <div className="expertise-heading">
                <span className="expertise-number">01</span>
                <div>
                  <h3>Technical Operations</h3>
                  <span className="expertise-level">Primary Strength</span>
                </div>
              </div>

              <div className="operations-skills">
                <span>System Implementation</span>
                <span>Technical Troubleshooting</span>
                <span>Application Support</span>
                <span>Client Training & Coordination</span>
                <span>Deployment & Testing</span>
              </div>
            </div>

            {/* Software Development */}
            <div className="expertise-card development-card">
              <div className="expertise-heading">
                <span className="expertise-number">02</span>
                <div>
                  <h3>Software Development</h3>
                  <span className="expertise-level">Technical Skills</span>
                </div>
              </div>

              <div className="development-skills">

                <div className="development-skill">
                  <div className="skill-info">
                    <span>PHP / Laravel</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress php-progress"></div>
                  </div>
                </div>

                <div className="development-skill">
                  <div className="skill-info">
                    <span>SQL / MySQL</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress sql-progress"></div>
                  </div>
                </div>

                <div className="development-skill">
                  <div className="skill-info">
                    <span>VB.NET</span>
                    <span>Basic</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress vb-progress"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Technology Tags */}
          <div className="home-tech-stack">
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">Laravel</span>
            <span className="tech-tag">VB.NET</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Tailwind CSS</span>
          </div>

          {/* Action Buttons */}
          <div className="home-buttons">
            <a
              href="/RESUME - DIVINO, TRISHA MAE H.pdf"
              download="RESUME - DIVINO, TRISHA MAE H.pdf"
              className="cv-btn"
            >
              Download Resume
              <FiArrowDownRight />
            </a>

            <a href="#projects" className="project-btn">
              Explore Projects
              <FiArrowRight />
            </a>
          </div>

          {/* Social Links */}
          <div className="home-social-wrapper">
            <span className="social-label">CONNECT WITH ME</span>

            <div className="social-links">
              <a
                href="https://github.com/trishadivino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/trisha-mae-hernando-divino-a63103354/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/share/1D7jAyy6AJ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Messenger"
              >
                <RiMessengerFill />
              </a>
            </div>
          </div>

        </div>

        
        {/* Profile */}
        <div className="home-image-wrapper">
          <div className="profile-image-container">
            <img
              src="/profile.jpg"
              alt="Trisha Mae H. Divino"
              className="profile-image"
            />
          </div>

          <div className="profile-experience">
            <strong>3+</strong>
            <span>YEARS OF EXPERIENCE</span>
          </div>

          <div className="profile-caption">
            <span>DEVELOPER</span>
            <span className="caption-divider">/</span>
            <span>PROBLEM SOLVER</span>
            <span className="caption-divider">/</span>
            <span>COLLABORATOR</span>
          </div>
        </div>


      </div>

      <a href="#about" className="home-scroll">
        <span>SCROLL TO EXPLORE</span>
        <FiArrowDownRight />
      </a>

    </section>
  );
}

export default Home;
