import picture from '../images/portfoliopic.jpg';

function About() {
  return (
    <section id="About" className="about-section">
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
            Hi! I'm <span className="about-name">Hania Aamir</span>, a student at the 
            University of Calgary currently pursuing a Bachelor of Science in 
            Software Engineering. My interests lie in web development, embedded 
            systems, and game development. Check out some of my projects and experiences!
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
