// export default Section3;
import React from "react";
import styles from "../../styles/Section3.module.css";

const Section3 = () => {
  return (
    <section id="section3" className={styles.section}>
      <img
        src="/images/3.png"
        alt="Background"
        className={styles.backgroundImage}
      />
      <div className={styles.verticalLine}></div>
      <div className={styles.verticalLine}></div>
      <div className={styles.verticalLine}></div>

      <div className={styles.part}>
        <button className={styles.iconButton}>
          <span className={styles.plusIcon}>+</span>
        </button>
        <h2 className={styles.title}>Financial statemetns</h2>
        <p className={styles.description}>
          Morbi purus libero, elementum nec gravida ac, commondo at erat. Etiam
          porta ipsum sed diam aliquam, ruturum tincidunt metus mattis. Morbi
          purus libero, elementum nec
        </p>
      </div>

      <div className={styles.part}>
        <button className={styles.iconButton}>
          <span className={styles.plusIcon}>+</span>
        </button>
        <h2 className={styles.title}>Press releases</h2>
        <p className={styles.description}>
          Morbi purus libero, elementum nec gravida ac, commondo at erat. Etiam
          porta ipsum sed diam aliquam, ruturum tincidunt metus mattis. Morbi
          purus libero, elementum nec
        </p>{" "}
      </div>

      <div className={styles.part}>
        <button className={styles.iconButton}>
          <span className={styles.plusIcon}>+</span>
        </button>
        <h2 className={styles.title}>Webcast links</h2>
        <p className={styles.description}>
          Morbi purus libero, elementum nec gravida ac, commondo at erat. Etiam
          porta ipsum sed diam aliquam, ruturum tincidunt metus mattis. Morbi
          purus libero, elementum nec
        </p>{" "}
      </div>

      <div className={styles.part}>
        <button className={styles.iconButton}>
          <span className={styles.plusIcon}>+</span>
        </button>
        <h2 className={styles.title}>Corporate governance</h2>
        <p className={styles.description}>
          Morbi purus libero, elementum nec gravida ac, commondo at erat. Etiam
          porta ipsum sed diam aliquam, ruturum tincidunt metus mattis. Morbi
          purus libero, elementum nec
        </p>{" "}
      </div>
    </section>
  );
};

export default Section3;
