import { useEffect, useRef, useState } from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import './App.css';

const colors = ["#cbb4f7", "#b4c7f7", "#ffa4a4", "#fbb4c7"];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const orbCount = 15;

  const orbs = useRef(
    Array.from({ length: orbCount }, () => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      size: 100 + Math.random() * 120,
      speedX: (Math.random() * 4.8) - 2.4,
      speedY: (Math.random() * 4.8) - 2.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 0.8) - 0.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setShowNavbar(currentScroll < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let frame;
    const animateOrbs = () => {
      orbs.current.forEach(orb => {
        orb.top += orb.speedY;
        orb.left += orb.speedX;
        orb.rotation += orb.rotationSpeed;

        if (orb.top > window.innerHeight || orb.top < 0) orb.speedY *= -1;
        if (orb.left > window.innerWidth || orb.left < 0) orb.speedX *= -1;

        if (Math.random() < 0.01) {
          orb.color = colors[Math.floor(Math.random() * colors.length)];
        }
      });
      frame = requestAnimationFrame(animateOrbs);
    };
    animateOrbs();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {orbs.current.map((orb, i) => (
        <div
          key={i}
          className="orb"
          style={{
            top: orb.top,
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: orb.color,
            transform: `translate(-50%, -50%) rotate(${orb.rotation}deg) translateY(${scrollY * 0.03}px)`
          }}
        />
      ))}

      <div className={`app-container ${showNavbar ? "" : "hide-navbar"}`}>
        <Navbar />
        <section id="About" className="section section-full"><About /></section>
        <section id="Experience" className="section section-full"><Experience /></section>
        <section id="Projects" className="section section-full"><Projects /></section>
        <section id="TechStack" className="section section-full"><TechStack /></section>
        <Contact />
      </div>
    </>
  );
}

export default App;
