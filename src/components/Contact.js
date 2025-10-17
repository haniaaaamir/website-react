import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import flower1 from '../images/flower1.png';
import flower2 from '../images/flower2.png';

function Contact() {
  return (
  <footer id="Contact" className="footer-section">
    <img src={flower1} alt="flower" className="flower flower-top-right floating rotating" />
    <img src={flower2} alt="flower" className="flower flower-bottom-left floating rotating" />

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
