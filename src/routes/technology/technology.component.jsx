import React from "react";

const TechnologyPage = () => {
  return (
    <main>
      <h5>
        <span className="page-number">04</span> Space Launch 101
      </h5>
      <section className="tech-page-content">
        <nav className="tech-nav">
          <ul>
            <li>
              <div className="tech-nav-btn active-2">1</div>
            </li>
            <li>
              <div className="tech-nav-btn">2</div>
            </li>
            <li>
              <div className="tech-nav-btn">3</div>
            </li>
          </ul>
        </nav>
        <div className="tech-info">
          <p className="subheading-2">The Terminology...</p>
          <h3>Launch Vehicle</h3>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="tech-img">
          {/* <img src={techImg} alt="tech-img" /> */}
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;
