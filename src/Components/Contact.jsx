import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="contact">
        <h2 className="contact-title">Let's Connect!</h2>
        <p className="contact-description">
          Currently seeking opportunities to grow as a developer and contribute
          to impactful projects. To discuss an opportunity or simply connect -
          I'd love to hear from you!
        </p>
        <div className="hero-links">
        <a
          href="https://github.com/WoodenKhrystyn-FS"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
        <a href="mailto:khrystyn.tender@icloud.com">Email Me</a>
      </div>
      </section>
    </div>
  );
}

export default Contact;
