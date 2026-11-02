
import "./css/Education.css";

const educationData = [
  {
    side: "left",
    level: "TERTIARY EDUCATION",
    title: "Bachelor of Science in Information Technology",
    specialization: "Major in Database Systems",
    school: "Mindanao State University – Buug Campus",
    location: "Buug, Zamboanga Sibugay",
    years: "2019 – 2023",
    note: "Cum Laude",
    highlights: [
      "Capstone Project: Library Management System",
      "Relevant Coursework: Database Systems, Web Development, Software Engineering, Systems Analysis and Design"
    ]
  },
  {
    side: "right",
    level: "SECONDARY EDUCATION",
    title: "Diplahan National High School",
    school: "Poblacion, Diplahan",
    location: "Zamboanga Sibugay",
    years: "2013 – 2019",
    note: "With Honor",
    highlights: [
      "Senior High School – ABM Track (Accountancy, Business, and Management)"
    ]
  },
  {
    side: "left",
    level: "PRIMARY EDUCATION",
    title: "Tinongtongan Elementary School",
    school: "Tinongtongan, Diplahan",
    location: "Zamboanga Sibugay",
    years: "2007 – 2013",
    note: "Salutatorian"
  }
];

function Education() {
  return (
    <section id="education" className="education-section">

      {/* Section Header */}
      <div className="education-header">
        <span className="education-eyebrow">ACADEMIC BACKGROUND</span>
        <h2 className="education-title">Education</h2>
        <p className="education-intro">
          My academic journey in Information Technology, supported by
          a foundation in database systems, software development,
          and problem-solving.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className={`timeline-item ${edu.side}`}>

            <div className="timeline-content">

              <span className="education-level">{edu.level}</span>

              <h3>{edu.title}</h3>

              {edu.specialization && (
                <p className="education-specialization">
                  {edu.specialization}
                </p>
              )}

              <p className="school">{edu.school}</p>
              <p className="location">{edu.location}</p>
              <p className="years">{edu.years}</p>

              <span className="education-award">
                {edu.note}
              </span>

              {edu.highlights && (
                <div className="education-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <p key={i}>{highlight}</p>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Education;
