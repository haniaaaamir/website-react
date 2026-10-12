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
          <h3 className="about-title">hello, world. it's me.</h3>
          <p className="about-description">
            <p>I'm a third-year Software Engineering student passionate about turning ideas into reality. 
            Whether it's a website, a game, or a new way to solve a problem, I love experimenting, learning, and seeing what I can make. 
            Feel free to take a look to see what I have been up to!
            </p>

          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
