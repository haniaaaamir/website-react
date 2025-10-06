import javaLogo from '../images/java.png';
import cLogo from '../images/c.png';
import cppLogo from '../images/cpp.png';
import csharpLogo from '../images/csharp.png';
import pythonLogo from '../images/python.png';
import jsLogo from '../images/javascript.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import reactLogo from '../images/react.png';
import mysqlLogo from '../images/mysql.png';
import pgLogo from '../images/postgresql.png';

const techs = [
  { name: 'Java', logo: javaLogo },
  { name: 'C', logo: cLogo },
  { name: 'C++', logo: cppLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'React', logo: reactLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'PostgreSQL', logo: pgLogo },
];

function TechStack() {
  return (
    <section id="TechStack" className="tech-section">
      <h3 className="tech-title">Tools & Technologies</h3>
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
