import disasterRelief from '../images/disasterrelief.jpg';
import museum from '../images/museum.jpg';
import healthTracker from '../images/healthtracker.jpg';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <img src={disasterRelief} alt="Disaster Relief Service" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Disaster Relief Service</h4>
              <p className="project-description">
                A system built with Java and PostgreSQL to help track people, families, and aid after a disaster.             
              </p>
            </div>
          </div>

          <a className="project-card" href="https://github.com/haniaaaamir/ensf300-final-project.git" target ="_blank" rel="noopener noreferrer" >
            <img src={museum} alt="Museum Database" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Museum Database</h4>
              <p className="project-description">
                A project to design a relational database for managing museum exhibits and collections, featuring SQL-based tools for easy data entry, updates, and searches.
              </p>
            </div>
          </a>

          <div className="project-card">
            <img src={healthTracker} alt="Health Tracker" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Health Tracker</h4>
              <p className="project-description">
                Building a C++ app for tracking and analyzing personal health data with charts and alerts. Currently in development. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
