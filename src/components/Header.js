import React, { useEffect, useState } from "react";

const Header = () => {
  const fullName = "Hania Aamir";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;

      if (index === fullName.length) {
        clearInterval(interval);
      }
    }, 120); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-full about-section">
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="about-title header-title">
          {displayedName}
          <span style={{ opacity: 0.6 }}>|</span>
        </h1>
      </div>
    </section>
  );
};

export default Header;
