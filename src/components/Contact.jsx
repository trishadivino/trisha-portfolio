
import "./css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <span className="contact-eyebrow">GET IN TOUCH</span>
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-intro">
        Interested in working together or have an opportunity to share?
        Feel free to reach out.
      </p>

      <ul className="contact-list">
        <li>
          <span className="contact-icon" aria-hidden="true">✉</span>
          <a href="mailto:trishamaehernandodivino@gmail.com">
            trishamaehernandodivino@gmail.com
          </a>
        </li>

        <li>
          <span className="contact-icon" aria-hidden="true">📞</span>
          <a href="tel:+639709278993">
            +63 970 927 8993
          </a>
        </li>

        <li>
          <span className="contact-icon" aria-hidden="true">💬</span>
          <a
            href="https://www.facebook.com/share/1D7jAyy6AJ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Messenger
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
