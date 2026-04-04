import museum from '../images/museum.jpg';
import stripe from '../images/stripe.png';
import lms from '../images/lms.png';
import githubIcon from '../images/github.png';
import flightSystem from '../images/flightreservationsystem.jpg';
import snakesAndLadders from '../images/snakesandladders.png';
import smartTravelPlanner from '../images/travelplanner.png';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Projects
        <a href="https://github.com/haniaaaamir/" target="_blank" rel="noopener noreferrer" className="github-link"><img src={githubIcon} alt="GitHub" className="github-icon"/></a></h1>
        <div className="projects-list">
          <a div className="project-card" href="https://github.com/haniaaaamir/3D-Snakes-And-Ladders.git" target ="_blank" rel="noopener noreferrer">
            <img src={snakesAndLadders} alt="3D Snakes & Ladders" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">3D Snakes and Ladders</h4>
              <p className="project-description">
                An educational version of the classic Snakes and Ladders game, built with C# and Unity in a team          
              </p>
            </div>
          </a>

          <a className="project-card" href="https://github.com/haniaaaamir/ensf300-final-project.git" target ="_blank" rel="noopener noreferrer" >
            <img src={museum} alt="Museum Database" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Museum Database Management System</h4>
              <p className="project-description">
                A group project to design a relational database for managing museum exhibits and collections, made with MySQL and Python
              </p>
            </div>
          </a>

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

          
          <a className="project-card" href="https://github.com/haniaaaamir/Smart-Travel-Planner.git" target ="_blank" rel="noopener noreferrer" >
            <img src={smartTravelPlanner} alt="Smart Travel Planner" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Smart Travel Planner</h4>
              <p className="project-description">
                A web application made by a group of five designed to simplify trip planning by generating personalized, day-by-day itineraries using an LLM. Built with JavaScript, Python, and Flask.
              </p>
            </div>
          </a>

          <a className="project-card" href="https://github.com/haniaaaamir/ensf480_termproject" target ="_blank" rel="noopener noreferrer" >
            <img src={flightSystem} alt="Flight Reservation System" className="project-image" />
            <div className="project-overlay">
              <h4 className="project-name">Flight Reservation System</h4>
              <p className="project-description">
                An airline booking application that allows users to browse flights, create accounts, log in, book flights, make payments, and manage reservations. Built with Java and MySQL.
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Projects;
