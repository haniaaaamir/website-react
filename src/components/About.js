import picture from '../images/portfoliopic.jpeg';

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
          <h3 className="about-title">Hania Aamir</h3>
          <p className="about-description">
            Hi! I'm currently a third-year student at the University of Calgary currently pursuing a 
            Bachelor of Science in Software Engineering. My interests lie in web development, embedded 
            systems, and game development. I'm passionate about using technology to solve problems, especially in the health and energy sectors.
            I love creating new things that bridge my passions and studies! 
            <p>Check out some of my projects and experiences!</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
