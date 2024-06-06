import React from "react";
import styles from "../../styles/Section1.module.css";

const Section1 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="section1" className={styles.section}>
      <div className={styles.textOverlay}>
        <h1>Lorem ipsum dolor sit amet, consec</h1>
        <p>
          Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in
          ligula consequat malesuada.
        </p>
        <p1>Praesent posuere vestibulum neque ac posuere.</p1>
      </div>
    </section>
  );
});

export default Section1;
