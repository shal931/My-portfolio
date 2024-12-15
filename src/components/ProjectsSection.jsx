import React from 'react';

 
import project1Image from '../assets/image2.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/travel.jpg';

 
const ProjectsSection = () => {
  return (
    <section id="projects">
    <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-row">
            <div class="project-card">
                <img src= {project1Image} class="project-image" alt="Project 1"/>
                <div class="project-info">
                    <h5 class="project-title">Project 1</h5>
                    <p class="project-description">Create Beautiful Visualisations is a platform dedicated to helping users turn complex data into compelling,
                         easy-to-understand visuals.</p>
                    <a href="project1" class="project-link">View Project</a>
                </div>
            </div>
            <div class="project-card">
                <img src= {project2Image} class="project-image" alt="Project 2"/>
                <div class="project-info">
                    <h5 class="project-title">Project 2</h5>
                    <p class="project-description">Make It Fresh is a platform dedicated to providing fresh, creative ideas for food,
                         lifestyle, and wellness, helping users bring a new spark to everyday routines.</p>
                    <a href="project2" class="project-link">View Project</a>
                </div>
            </div>
            <div class="project-card">
                <img src= {project3Image} class="project-image" alt="Project 3"/>
                <div class="project-info">
                    <h5 class="project-title">Project 3</h5>
                    <p class="project-description">Discover the World is your gateway to exploring diverse cultures, breathtaking destinations,
                         and hidden gems, inspiring you to travel and experience the world like never before.</p>
                    <a href="project3" class="project-link">View Project</a>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default ProjectsSection;
