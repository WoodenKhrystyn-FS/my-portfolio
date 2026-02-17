import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Let's Connect!</h2>
      <p className="contact-description">
        I am currently seeking opportunities to grow as a developer and contribute to impactful projects. To discuss an opportunity or simply connect - I'd love to hear from you!
      </p>
      <div>
        <a href="mailto:khrystyn.tender@icloud.com" className="contact-email">
          khrystyn.tender@icloud.com
        </a>
        or connect with me on LinkedIn at{" "}
        <a
          href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/khrystyn-wooden-b23212176/
        </a>
      </div>
    </section>
  );
}

export default Contact;
