import "./css/Education.css";

const educationData = [
  {
    side: "left",
    title: "Bachelor of Science in Information Technology – Major in Database Systems",
    school: "Mindanao State University – Buug Campus, Buug, Zamboanga Sibugay",
    years: "2019 – 2023",
    note: "Cum Laude",
    highlights: "Capstone: Library Management System (foundation for Digital Library System) | Key Coursework: Database Systems, Web Development, Software Engineering, Systems Analysis & Design",
  },
  {
    side: "right",
    title: "Diplahan National High School",
    school: "Poblacion, Diplahan, Zamboanga Sibugay",
    years: "2013 – 2019",
    note: "With Honor",
  },
  {
    side: "left",
    title: "Tinongtongan Elementary School",
    school: "Tinongtongan, Diplahan, Zamboanga Sibugay",
    years: "2007 – 2013",
    note: "Salutatorian",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <p className="education-intro">
        Developed a strong foundation in Information Technology and Database Systems through both academic training and hands-on project experience.
      </p>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className={`timeline-item ${edu.side}`}>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <p className="school">{edu.school}</p>
              <p className="years">{edu.years}</p>
              <p className="note">{edu.note}</p>
              {edu.highlights && <p className="highlights">{edu.highlights}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
