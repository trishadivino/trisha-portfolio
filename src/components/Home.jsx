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
          <h1>Trisha Mae H. Divino</h1>

          {/* Animated Role */}
          <h3 className="animated-role">
            Technical Support | Junior Web Developer
          </h3>

          <p>
            I’m an IT professional and junior web developer passionate about building efficient systems, improving legacy applications, and solving real-world technical problems through clean and practical solutions.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <button
              className="cv-btn"
              onClick={() => window.open('/Trisha_Divino_Resume.pdf')}
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