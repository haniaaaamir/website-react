import javaLogo from '../images/java.png';
import cLogo from '../images/c.png';
import cppLogo from '../images/cpp.png';
import tsLogo from '../images/typescript.png';
import pythonLogo from '../images/python.png';
import jsLogo from '../images/javascript.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import reactLogo from '../images/react.png';
import mysqlLogo from '../images/mysql.png';
import pgLogo from '../images/postgresql.png';
import nodejs from '../images/nodejs.png';
import jupyter from '../images/jupyter.png';
import csharp from '../images/csharp.png';
import unity from '../images/unity.png';
import eclipse from '../images/eclipse.png';
import tailwindcss from '../images/tailwindcss.png';
import selenium from '../images/selenium.png';
import powerbiLogo from '../images/powerbiLogo.webp';
import powerAutomateLogo from '../images/powerautomateLogo.webp';
import powerAppsLogo from '../images/powerAppsLogo.webp';

const techCategories = [
  {
    title: 'Languages',
    technologies: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C#', logo: csharp },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'TypeScript', logo: tsLogo },
    ],
  },
  {
    title: 'Web Development',
    technologies: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcss },
      { name: 'React', logo: reactLogo },
      { name: 'Node.js', logo: nodejs },
    ],
  },
  {
    title: 'Databases & Data',
    technologies: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: pgLogo },
      { name: 'Jupyter', logo: jupyter },
    ],
  },
  {
    title: 'Tools & Testing',
    technologies: [
      { name: 'Unity', logo: unity },
      { name: 'Eclipse', logo: eclipse },
      { name: 'Selenium', logo: selenium },
    ],
  },
  {
  title: 'Business Intelligence & Automation',
  technologies: [
    { name: 'Power BI', logo: powerbiLogo },
    { name: 'Power Automate', logo: powerAutomateLogo },
    { name: 'Power Apps', logo: powerAppsLogo },
  ],
},
];

function TechStack() {
  return (
    <section id="TechStack" className="tech-section">
      <div className="tech-container">
        <h1 className="tech-title">tools & technologies</h1>
        <div className="tech-categories">
          {techCategories.map((category) => (
            <div className="tech-category-card" key={category.title}>
              <h2 className="tech-category-title">
                {category.title}
              </h2>

              <div className="tech-grid">
                {category.technologies.map((tech) => (
                  <div className="tech-item" key={tech.name}>
                    <div className="tech-icon-wrapper">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="tech-logo"
                        loading="lazy"
                      />
                    </div>

                    <span className="tech-name">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;