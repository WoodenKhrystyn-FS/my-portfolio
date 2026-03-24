import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = ()=> {
    alert("Message Sent!")
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/*LEFT*/}
        <h2 className="contact-info">Let's Work Together</h2>
        <p>
         Whether its a startup idea or a redesign, I'd love to help bring it to life.
        </p>
        <div className="contact-links">
          <a href="mailto:khrystyn.tender@icloud.com">📧 Email Me</a>
          <a
            href="https://github.com/WoodenKhrystyn-FS"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>

        {/*RIGHT*/}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" onSubmit={handleSubmit}>Send Message</button>
          
        </form>
      </div>
    </section>
  );
}

export default Contact;
