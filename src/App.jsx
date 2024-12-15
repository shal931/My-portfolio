import React from "react";
import "./App.css"; // Import the main styles for the components
 

// Import components
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
 
function App() {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Profile Section */}
      <ProfileSection />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Form */}
      <ContactForm />

       

       
    </div>
  );
}

export default App;
