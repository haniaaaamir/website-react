import { useEffect, useRef, useState } from "react";

function Experience() {
  const timelineRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoverX, setHoverX] = useState(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    const updateArrows = () => {
      setShowLeftArrow(timeline.scrollLeft > 0);
      setShowRightArrow(
        timeline.scrollLeft < timeline.scrollWidth - timeline.clientWidth - 1
      );
    };

    const handleScroll = () => updateArrows();
    timeline.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateArrows);
    updateArrows();

    return () => {
      timeline.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const scrollTimeline = () => {
      const timeline = timelineRef.current;
      if (hoverX !== null) {
        const rect = timeline.getBoundingClientRect();
        const width = rect.width;
        const speed = 4;
        if (hoverX < width * 0.2) timeline.scrollLeft -= speed;
        else if (hoverX > width * 0.8) timeline.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(scrollTimeline);
    };

    scrollTimeline();
    return () => cancelAnimationFrame(animationFrame);
  }, [hoverX]);

  const handleMouseMove = (e) => setHoverX(e.clientX - timelineRef.current.getBoundingClientRect().left);
  const handleMouseLeave = () => setHoverX(null);

  const scrollLeft = () => timelineRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => timelineRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section id="Experience" className="experience-section">
      <div className="experience-container">
        <h3 className="experience-title">Experience</h3>

        <div className="timeline-wrapper">
          {showLeftArrow && <button className="arrow left-arrow" onClick={scrollLeft}>&#10094;</button>}
          <div
            ref={timelineRef}
            className="timeline no-scrollbar"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jun 2023 - Aug 2023</div>
              <h4 className="timeline-job">Summer Camp Counsellor @ Al-Salam Center</h4>
              <p className="timeline-desc">Planned and led camp activities with youth aged 4-12, including Islamic Studies, gym, and arts & crafts</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">May 2024 - Present</div>
              <h4 className="timeline-job">VP Marketing @ Robogals </h4>
              <p className="timeline-desc">Create posters and visuals to help promote the club & volunteer with STEM-related workshops!</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Oct 2024 - Dec 2024</div>
              <h4 className="timeline-job">Original Design Team Member @ GoBabyGo</h4>
              <p className="timeline-desc">Worked in a team to help build a wheelchair for children with mobility disabilities. Developed a remote control system in C</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Oct 2024 - Dec 2024</div>
              <h4 className="timeline-job">Python Mentor @ Schulich Ignite</h4>
              <p className="timeline-desc">Mentored students in Python programming and marked assignments and projects</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Nov 2024 - Aug 2025</div>
              <h4 className="timeline-job">Software Team Member @ CalgaryToSpace</h4>
              <p className="timeline-desc">Collaborated with a team to plan the development of CTS-SAT 2, gaining hands-on experience in Rust programming</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jun 2025 - Aug 2025</div>
              <h4 className="timeline-job">Summer Camp Leader @ Ranchlands Musallah</h4>
              <p className="timeline-desc">Planned and led camp activities with youth aged 13-18. Integrated Stripe Checkout with Flask & Python for camp payments from Jotform</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jul 2025 - Present</div>
              <h4 className="timeline-job">Third Year Rep @ ZOO (Electrical/Software Engineering Student Society)</h4>
              <p className="timeline-desc">Representing the third year students in software engineering & relaying upcoming programs & events from ZOO!</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Sep 2025 - Present</div>
              <h4 className="timeline-job">Electrical/Software Team Member @ ReVOLT EV</h4>
              <p className="timeline-desc">Collaborating with a team to build an electric motorcycle for competitions. Currently developing data logging on Raspberry Pi with Python</p>
            </div>
          </div>
          {showRightArrow && <button className="arrow right-arrow" onClick={scrollRight}>&#10095;</button>}
        </div>
      </div>
    </section>
  );
}

export default Experience;
