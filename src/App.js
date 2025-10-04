import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section id="About" className="section section-light">
        <About />
      </section>
      <section id="Experience" className="section section-dark">
        <Experience />
      </section>
      <section id="Projects" className="section section-light">
        <Projects />
      </section>
      <section id="Projects" className="section section-light">
        <TechStack />
      </section>
      <section id="Contact" className="section section-dark">
        <Contact />
      </section>
    </div>
  );
}

export default App;
