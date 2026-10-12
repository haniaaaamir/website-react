import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';

function Contact() {
  return (
  <footer id="Contact" className="footer-section">
      <h3 className="footer-title">Get in Touch</h3>
      <div className="footer-icons">
        <a href="mailto:haniaaamir3@gmail.com" className="footer-icon" title="Email">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://linkedin.com/in/haniaaamir" target="_blank" rel="noopener noreferrer" className="footer-icon" title="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/haniaaaamir" target="_blank" rel="noopener noreferrer" className="footer-icon" title="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Hania Aamir. All Rights Reserved.</p>

  </footer>
  );
}

export default Contact;
