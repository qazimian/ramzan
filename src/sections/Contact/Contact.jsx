import React from "react";
import style from "./ContactStyle.module.css";

function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form
        action="https://formsubmit.co/24b796baeaa85742dad47a2f9e6c70c7"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="New message from portfolio!"
        />
        <input
          type="hidden"
          name="_next"
          value="https://ramzann.netlify.app/#hero"
        />
        <div className="formGroup">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
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
