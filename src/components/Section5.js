import React, { useState } from "react";
import styles from "../../styles/Section5.module.css";

const Section5 = () => {
  // Define States for the Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //  handleSubmit function: Handle the submitted form and post it to the WordPress endpoint.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost/mywordpress/wp-json/oussama_ben_saied/v1/contact-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    const data = await response.json();
    if (data.success) {
      alert("You successfully submitted the form!");
    } else {
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <section id="section5" className={styles.section}>
      <div className={styles.formBox}>
        <h3>Any questions?</h3>
        <h2>Let's talk today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            id="name"
            className={styles.inputField}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            id="email"
            className={styles.inputField}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            id="message"
            className={styles.inputField}
            placeholder="Message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Section5;
