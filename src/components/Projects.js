import duelImg from '../images/duel.jpeg';
import wordhavenImg from '../images/wordhaven.jpeg';
import tttImg from '../images/chess.jpeg';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <img src={duelImg} alt="Elemental Duel" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Elemental Duel</h4>
              <p className="project-description">
                A strategy game inspired by Pokémon Duel, rebuilt with my own twist.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={wordhavenImg} alt="WordHaven" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">WordHaven</h4>
              <p className="project-description">
                A web app for readers & writers to organize books, notes, and creative ideas.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={tttImg} alt="Tic Tac Toe" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Tic Tac Toe</h4>
              <p className="project-description">
                My first 2D game project, exploring game logic and interactivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
