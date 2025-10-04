function Experience() {
  return (
    <section id="Experience" className="experience-section">
      <div className="experience-container">
        <h3 className="experience-title">Experience</h3>

        <div className="timeline">
          {/* GoBabyGo */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="timeline-job">GoBabyGo</h4>
            <p className="timeline-desc">Some description here if you want.</p>
          </div>

          {/* Schulich Ignite */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="timeline-job">Schulich Ignite</h4>
            <p className="timeline-desc">Some description here if you want.</p>
          </div>

          {/* CalgaryToSpace */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="timeline-job">CalgaryToSpace</h4>
            <p className="timeline-desc">Some description here if you want.</p>
          </div>

          {/* ReVOLT EV */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="timeline-job">ReVOLT EV</h4>
            <p className="timeline-desc">Some description here if you want.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
