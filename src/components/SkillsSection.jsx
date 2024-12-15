import React from 'react';
import htmlLogo from '../assets/html.jpg'; // Import HTML logo
import cssLogo from '../assets/css.png'; // Import CSS logo
import javascriptLogo from '../assets/javascript.png'; // Import JavaScript logo
import reactLogo from '../assets/react.png'; // Import React logo

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-logos">
        <img src={htmlLogo} alt="HTML Logo" className="skill-logo" />
        <img src={cssLogo} alt="CSS Logo" className="skill-logo" />
        <img src={javascriptLogo} alt="JavaScript Logo" className="skill-logo" />
        <img src={reactLogo} alt="React Logo" className="skill-logo" />
      </div>
    </section>
  );
};

export default SkillsSection;
