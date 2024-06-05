import React from "react";
import styles from "../../styles/Section1.module.css";

const Section2 = () => {
  return (
    <section id="section2" className={styles.section}>
      <div className={styles.textOverlay}>
        <h1>Lorem ipsum dolor sit amet, consec</h1>
        <p>
          Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in
          ligula consequat malesuada.
        </p>
        <p>Praesent posuere vestibulum neque ac posuere.</p>
      </div>
    </section>
  );
};

export default Section2;
