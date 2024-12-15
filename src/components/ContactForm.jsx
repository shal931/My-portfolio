import React from 'react';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';
  
 

function ContactForm() {
  return (
    <section id="contact">
    <h2 id="conatct-text">Contact Me</h2>
    <form id="contact-form">
        <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="enter your name"  required/>
  
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="enter your email" required/>
  
      <label for="phone">Phone No:</label>
      <input type="tel" id="phone" name="phone" required/>
  
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" />
  
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>
  
      <button type="submit">Send</button>
    </form>

    <div id="social-links">
        <a href="https://www.instagram.com/shalvi_6158?igsh=bGplcmV0NDZrMzFr" target="_blank">
            <img src= {insta} alt="insta Logo" />
        </a>
        <a href="https://www.linkedin.com/in/shalvi-kushwaha-1305a5320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src= {linkedin} alt="LinkedIn Logo" />
        </a>
    </div>

    </section>
  );
}

export default ContactForm;
