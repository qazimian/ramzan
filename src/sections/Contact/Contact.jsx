import React from "react";
import style from "./ContactStyle.module.css";

function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form action="">
        <div className="formGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
