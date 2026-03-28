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

const techs = [
  { name: 'Java', logo: javaLogo },
  { name: 'C', logo: cLogo },
  { name: 'C++', logo: cppLogo },
  { name: 'C#', logo: csharp },
  { name: 'Python', logo: pythonLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'TypeScript', logo: tsLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Tailwind CSS', logo: tailwindcss },
  { name: 'React', logo: reactLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'PostgreSQL', logo: pgLogo },
  { name: 'Node.js', logo: nodejs },
  { name: 'Jupyter', logo: jupyter },
  { name: 'Eclipse', logo: eclipse },
  { name: 'Selenium', logo: selenium },
  { name: 'Unity', logo: unity }
];

function TechStack() {
  return (
    <section id="TechStack" className="tech-section">
      <h1 className="tech-title">Tools & Technologies</h1>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            <div className="tech-icon-wrapper">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-tooltip">{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
