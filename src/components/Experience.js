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
              <h4 className="timeline-job">GoBabyGo</h4>
              <p className="timeline-desc">Some description here if you want.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4 className="timeline-job">Schulich Ignite</h4>
              <p className="timeline-desc">Some description here if you want.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4 className="timeline-job">CalgaryToSpace</h4>
              <p className="timeline-desc">Some description here if you want.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4 className="timeline-job">ReVOLT EV</h4>
              <p className="timeline-desc">Some description here if you want.</p>
            </div>
          </div>
          {showRightArrow && <button className="arrow right-arrow" onClick={scrollRight}>&#10095;</button>}
        </div>
      </div>
    </section>
  );
}

export default Experience;
