function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span onClick={() => scrollToSection("About")} className="navbar-link">About</span>
        <span onClick={() => scrollToSection("Experience")} className="navbar-link">Experience</span>
        <span onClick={() => scrollToSection("Projects")} className="navbar-link">Projects</span>
        <span onClick={() => scrollToSection("TechStack")} className="navbar-link">Skills</span>
        <a href="/HaniaAamir_Resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-link" title="View Resume">Resume</a>
      </div>
    </nav>
  );
}


export default Navbar;
