import React from 'react';

const Skills = () => (
  <section className="skills">
    <h2 className="skills-title">My Skills</h2>
    <div className="skills-container">
      <div className="skills-card">
        <div className="card-left">
          <img src="images/learning.png" alt="General Skills" className="skills-image" />
          <h3>General Skills</h3>
        </div>
        <div className="card-right">
          <ul>
            <li>Communication: Verbal and written communication abilities.</li>
            <li>Teamwork: Collaboration in diverse teams.</li>
            <li>Problem-Solving: Analytical thinking and troubleshooting.</li>
          </ul>
        </div>
      </div>

      <div className="skills-card">
        <div className="card-left">
          <img src="images/pencil.png" alt="Technical Skills" className="skills-image" />
          <h3>Technical Skills</h3>
        </div>
        <div className="card-right">
          <ul>
            <li>Digital Literacy: Proficiency with computers and software applications.</li>
            <li>Basic IT Skills: Troubleshooting common tech issues.</li>
            <li>Web Development: HTML, CSS, and PHP.</li>
            <li>Data Analysis: Skills in Excel, SQL, or data visualization tools.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
