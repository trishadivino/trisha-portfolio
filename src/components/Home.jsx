import "./css/Home.css";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Left side */}
        <div className="home-text">
          <h1>Hi! I'm Trisha Mae Hernando Divino</h1>
          <h3>Technical Support | Junior Web Developer</h3>
          <p>I build internal systems, web apps, and enjoy solving technical problems efficiently.</p>
          <button className="cv-btn" onClick={() => window.open('src/files/Trisha_Divino_Resume.pdf')}>
            Download CV
          </button>
        </div>

        {/* Right side */}
        <div className="home-image">
          <img src="src/images/profile.jpg" alt="Trisha Divino" />
        </div>
      </div>
    </section>
  )
}

export default Home