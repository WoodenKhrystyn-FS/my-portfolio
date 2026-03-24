import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        To discuss an opportunity or simply connect - I'd love to hear from you!
      </p>
      <div className="contact-links">
        <a
          href="https://github.com/WoodenKhrystyn-FS"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:khrystyn.tender@icloud.com">Email Me</a>
      </div>
    </section>
  );
}

export default Contact;
