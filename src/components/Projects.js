import disasterRelief from '../images/disasterrelief.jpg';
import museum from '../images/museum.jpg';
import healthTracker from '../images/healthtracker.jpg';
import stripe from '../images/stripe.png';
import lms from '../images/lms.png';
import lanternLibrary from '../images/lanternlibrary.jpg';

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
                A group project to design a relational database for managing museum exhibits and collections, made with MySQL and Python
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

          <a className="project-card" href="https://github.com/haniaaaamir/stripecheckout.git" target ="_blank" rel="noopener noreferrer" >
            <img src={stripe} alt="Stripe Checkout Form" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Stripe Checkout Form</h4>
              <p className="project-description">
                A custom Stripe Checkout page made using Webhooks, Flask, Python, & Render to handle camp payments from Jotform based on amount of kids & payment plan.
              </p>
            </div>
          </a>

          <a className="project-card" href="https://github.com/haniaaaamir/ensf381-project.git" target ="_blank" rel="noopener noreferrer" >
            <img src={lms} alt="Learning Management System" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Learning Management System</h4>
              <p className="project-description">
                Collaborated with a partner to design and develop a full-stack Learning Management System. Built using HTML, CSS, JavaScript, Python, & React.
              </p>
            </div>
          </a>

          
          <a className="project-card" href="https://github.com/haniaaaamir/the-lantern-library.git" target ="_blank" rel="noopener noreferrer" >
            <img src={lanternLibrary} alt="Personal Website" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">The Lantern Library</h4>
              <p className="project-description">
                A book-search web app built with React, TypeScript, CSS and the Google Books API. It lets you explore, preview, and save your favorite reads!
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Projects;
