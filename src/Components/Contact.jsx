import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out to me via email at{" "}
        <a href="mailto:kvwooden@student.fullsail.edu">
          kvwooden@student.fullsail.edu
        </a>
        or connect with me on LinkedIn at{" "}
        <a
          href="https://www.linkedin.com/in/khrystyn-wooden-b23212176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/khrystyn-wooden-b23212176/
        </a>
        . I am always open to discussing new opportunities, collaborations, or
        just connecting with fellow developers and tech enthusiasts.
      </p>
    </section>
  );
}

export default Contact;
