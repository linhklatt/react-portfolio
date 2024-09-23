import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cacjbbd",
        "template_ypv3gue",
        form.current,
        "flZu90J56LAYfn2I8"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <section id="contactPage">
        <div id="contact">
          <h1 className="contactTitle">Contact Me</h1>
          <span className="contactDesc">
            Want to get in touch? Fill out the form below to send me a message
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input
                className="name"
                type="text"
                name="your_name"
                placeholder="Your Name"
              />
              <input
                className="email"
                type="email"
                name="your_email"
                placeholder="Your Email"
              />
              <textarea
                className="msg"
                name="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" value="send" className="submitBtn">
                Submit
              </button>
              <div className="links">
                <a className="link " href="https://github.com/linhklatt">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="link "
                  href="https://www.linkedin.com/in/linh-klatt-0bb889b6/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="link "
                  href="https://www.instagram.com/linh_klatt/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </form>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
