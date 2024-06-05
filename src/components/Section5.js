import React from "react";
import styles from "../../styles/Section5.module.css";

const Section5 = () => {
  return (
    <section id="section5" className={styles.section}>
      <div className={styles.formBox}>
        <h3>Any questions?</h3>
        <h2>Let's talk today!</h2>
        <input
          type="text"
          id="name"
          className={styles.inputField}
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          className={styles.inputField}
          placeholder="Email"
        />
        <textarea
          id="message"
          className={styles.inputField}
          placeholder="Message"
          rows="6"
        ></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default Section5;
