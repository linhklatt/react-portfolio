import React, { useState } from "react";

import { validateEmail } from "../../utils/validateEmail";
export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="row text-light -align-center col-9 justify-content-left">
      <div className="col-12 col-md-6 col-lg-6">
        <form className="p-3 rounded" onSubmit={handleFormSubmit}>
          <h2>Contact</h2>
          <div className="form-group">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={formState.name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mb-1">
              Email address
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              defaultValue={formState.email}
              onBlur={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              className="form-control"
              rows="3"
              name="message"
              defaultValue={formState.message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div className="my-1 p-1 bg-warning text-secondary rounded">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-success mt-4">
            Submit
          </button>
        </form>
      </div>
      <div id="email-link">
        Email me at:{" "}
        <a href="mailto: linhklatt@gmail.com">linhklatt@gmail.com</a>
      </div>
    </section>
  );
}
