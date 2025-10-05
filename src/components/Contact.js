import emailIcon from '../images/email.jpeg';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import resumeIcon from '../images/resume.jpeg';
import flower1 from '../images/flower1.png';
import flower2 from '../images/flower2.png';

function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <img src={flower1} alt="flower" className="flower flower-top-left floating rotating" />
      <img src={flower2} alt="flower" className="flower flower-bottom-right floating rotating" />

      <div className="contact-container">
        <h3 className="contact-title">Contact</h3>
        <div className="contact-icons">
          <a href="mailto:haniaaamir3@gmail.com" className="contact-icon" title="Email">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="https://linkedin.com/in/haniaaamir" target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/haniaaaamir" target="_blank" rel="noopener noreferrer" className="contact-icon" title="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="/resume.pdf" download className="contact-icon" title="Download Resume">
            <img src={resumeIcon} alt="Resume" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;