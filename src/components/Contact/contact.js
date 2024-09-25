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
    <section id="contactPage" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="contactTitle">Contact Me</h1>
          <p className="contactDesc">
            Want to get in touch? Fill out the form below to send me a message.
          </p>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="your_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="your_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="send"
              className="btn btn-primary w-100"
            >
              Submit
            </button>
          </form>

          <div className="links mt-4 d-flex justify-content-center">
            <a className="link mx-2" href="https://github.com/linhklatt">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="link mx-2"
              href="https://www.linkedin.com/in/linh-klatt-0bb889b6/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="link mx-2"
              href="https://www.instagram.com/linh_klatt/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
