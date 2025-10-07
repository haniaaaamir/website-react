import picture from '../images/portfoliopic.jpeg';
import flower1 from '../images/flower1.png';
import flower2 from '../images/flower2.png';

function About() {
  return (
    <section id="About" className="about-section">
      <img src={flower1} alt="flower" className="flower flower-top-right floating rotating" />
      <img src={flower2} alt="flower" className="flower flower-bottom-left floating rotating" />

      <div className="about-container">
        <div className="about-image">
          <img 
            src={picture} 
            alt="Hania Aamir" 
            className="about-pic"
          />
        </div>

        <div className="about-text">
          <h3 className="about-title">About Me</h3>
          <p className="about-description">
            Hi! I'm Hania Aamir, a student at the University of Calgary currently pursuing a 
            Bachelor of Science in Software Engineering. My interests lie in web development, embedded 
            systems, and game development. Check out some of my projects and experiences!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
