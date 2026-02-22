import "./css/Education.css";

const educationData = [
  {
    side: "left",
    title: "Tinongtongan Elementary School",
    school: "Tinongtongan, Diplahan, Zamboanga Sibugay",
    years: "2007 – 2013",
    note: "Salutatorian",
  },
  {
    side: "right",
    title: "Diplahan National High School",
    school: "Poblacion,Diplahan, Zamboanga Sibugay",
    years: "2013 – 2019",
    note: "With Honor",
  },
  {
    side: "left",
    title: "Bachelor of Science in Information Technology – Major in Database Systems",
    school: "Mindanao State University – Buug Campus, Buug, Zamboanga Sibugay",
    years: "2019 – 2023",
    note: "Cum Laude",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <p className="education-intro">
        My educational journey has been marked by continuous learning and academic excellence, from elementary through university level.
      </p>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className={`timeline-item ${edu.side}`}>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <p className="school">{edu.school}</p>
              <p className="years">{edu.years}</p>
              <p className="note">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;