import "./css/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        {/* Left side */}
        <div className="home-text">
          <h2></h2>
          <h1>TRISHA MAE H. DIVINO</h1>

          {/* Animated Role */}
          <h3 className="animated-role">
            Software Support | Junior Web Developer
          </h3>

          <p>
           Software Support Engineer & Junior Web Developer with experience building scalable web applications and optimizing operational workflows using PHP/Laravel.
           </p>

          {/* Tech Stack */}
          <div className="home-tech-stack">
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">Laravel</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Tailwind CSS</span>
          </div>


          {/* Buttons */}
          <div className="home-buttons">
            <button
              className="cv-btn"
              onClick={() => window.open('/DIVINO, TRISHA MAE H..pdf')}
            >
              Download CV
            </button>

            <button
              className="project-btn"
              onClick={() => window.location.href = "#projects"}
            >
              View Projects
            </button>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/trishadivino"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/trisha-mae-hernando-divino-a63103354/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://www.facebook.com/share/1D7jAyy6AJ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiMessengerFill size={30} />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="home-image">
          <img src="/profile.jpg" alt="Trisha Divino" />
        </div>

      </div>
    </section>
  )
}

export default Home




