import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    date: "May 2025 - Present",
    job: "Engineering Co-op Student",
    organization: "ATCO Gas & Pipelines",
    description:
      "Building new tools and automations, support enhancements and maintain existing tools.",
  },
  {
    date: "Sep 2025 - Present",
    job: "Electrical/Software Team Member",
    organization: "ReVOLT EV",
    description:
      "Collaborating with a team to build an electric motorcycle for competitions. Currently developing data logging on Raspberry Pi with Python.",
  },
  {
    date: "Jul 2025 - April 2026",
    job: "Third Year Rep",
    organization:
      "ZOO (Electrical/Software Engineering Student Society)",
    description:
      "Representing third-year students in software engineering and relaying upcoming programs and events from ZOO!",
  },
  {
    date: "Jun 2025 - Aug 2025",
    job: "Summer Camp Leader",
    organization: "Ranchlands Musallah",
    description:
      "Planned and led camp activities with youth aged 13-18. Integrated Stripe Checkout with Flask and Python for camp payments from Jotform.",
  },
  {
    date: "Nov 2024 - Aug 2025",
    job: "Software Team Member",
    organization: "CalgaryToSpace",
    description:
      "Collaborated with a team to plan the development of CTS-SAT 2, gaining hands-on experience in Rust programming.",
  },
  {
    date: "Oct 2024 - Dec 2024",
    job: "Python Mentor",
    organization: "Schulich Ignite",
    description:
      "Mentored students in Python programming and marked assignments and projects.",
  },
  {
    date: "Oct 2024 - Dec 2024",
    job: "Original Design Team Member",
    organization: "GoBabyGo",
    description:
      "Worked in a team to help build a wheelchair for children with mobility disabilities. Developed a remote control system in C.",
  },
  {
    date: "May 2024 - May 2026",
    job: "VP Marketing",
    organization: "Robogals",
    description:
      "Create posters and visuals to help promote the club and volunteer with STEM-related workshops!",
  },
];

function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleItems((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Experience" className="experience-section">
      <div className="experience-container">
        <h1 className="experience-title">experience</h1>

        <div className="vertical-timeline">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.organization}-${index}`}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              data-index={index}
              className={`experience-item ${
                visibleItems.includes(index) ? "visible" : ""
              }`}
            >
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>

              <article className="experience-card">
                <span className="experience-date">
                  {experience.date}
                </span>

                <h3 className="timeline-job">
                  {experience.job}
                </h3>

                <h4 className="experience-organization">
                  @ {experience.organization}
                </h4>

                <p className="timeline-desc">
                  {experience.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;