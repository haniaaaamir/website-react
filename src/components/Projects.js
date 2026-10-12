import museum from '../images/museum.jpg';
import stripe from '../images/stripe.png';
import lms from '../images/lms.png';
import githubIcon from '../images/github.png';
import flightSystem from '../images/flightreservationsystem.jpg';
import snakesAndLadders from '../images/snakesandladders.png';
import smartTravelPlanner from '../images/travelplanner.png';

const projects = [
  {
    name: "3D Snakes and Ladders",
    image: snakesAndLadders,
    alt: "3D Snakes and Ladders",
    description:
      "An educational version of the classic Snakes and Ladders game, built in a team.",
    technologies: ["C#", "Unity"],
    link: "https://github.com/haniaaaamir/3D-Snakes-And-Ladders.git",
  },
  {
    name: "Museum Database Management System",
    image: museum,
    alt: "Museum Database",
    description:
      "A group project to design a relational database for managing museum exhibits and collections.",
    technologies: ["MySQL", "Python"],
    link: "https://github.com/haniaaaamir/ensf300-final-project.git",
  },
  {
    name: "Stripe Checkout Form",
    image: stripe,
    alt: "Stripe Checkout Form",
    description:
      "A custom Stripe Checkout page using webhooks to handle camp payments from Jotform based on the number of children and payment plan.",
    technologies: ["Python", "Flask", "Webhooks", "Render"],
    link: "https://github.com/haniaaaamir/stripecheckout.git",
  },
  {
    name: "Learning Management System",
    image: lms,
    alt: "Learning Management System",
    description:
      "Collaborated with a partner to design and develop a full-stack Learning Management System website.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "React"],
    link: "https://github.com/haniaaaamir/ensf381-project.git",
  },
  {
    name: "Smart Travel Planner",
    image: smartTravelPlanner,
    alt: "Smart Travel Planner",
    description:
      "A group project that generates personalized, day-by-day travel itineraries using a large language model.",
    technologies: ["JavaScript", "Python", "Flask", "LLMs"],
    link: "https://github.com/haniaaaamir/Smart-Travel-Planner.git",
  },
  {
    name: "Flight Reservation System",
    image: flightSystem,
    alt: "Flight Reservation System",
    description:
      "An airline booking application for browsing flights, managing accounts, booking flights, making payments, and handling reservations.",
    technologies: ["Java", "MySQL"],
    link: "https://github.com/haniaaaamir/ensf480_termproject",
  },
];

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">
          projects
          <a
            href="https://github.com/haniaaaamir/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="Visit my GitHub profile"
          >
            <img
              src={githubIcon}
              alt=""
              className="github-icon"
            />
          </a>
        </h1>

        <div className="projects-list">
          {projects.map((project) => (
            <a
              key={project.name}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
              />

              <div className="project-content">
                <h3 className="project-name">
                  {project.name}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div
                  className="project-technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="technology-tag"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;