import React from 'react';
import Profile from '../assets/profile.jpg';

const ProfileSection = () => {
    return (
        <section className="profile-section">
            <div className="profile-container">
                <div className="profile-picture">
                    <img src={Profile} alt="Profile Picture" />
                </div>
                <div className="profile-text">
                    <h2>Hello!</h2>
                    <p> I'm <b>SHALVI</b>, a Passionate Web Developer.
                        Welcome to my digital space! I’m excited to share my work and connect with others who love bringing ideas to life through code.
                        Take a look around to learn more about me, explore my skills, and check out some of my recent projects.
                        Let’s create something amazing together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
