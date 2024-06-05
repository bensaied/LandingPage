import React from "react";
import styles from "../../styles/Section4.module.css";

const Section4 = () => {
  return (
    <section id="section4" className={styles.section}>
      <div className={styles.container}>
        {/* Left column with image */}
        <div className={styles.column}>
          <img src="/images/4.png" alt="Image" className={styles.image} />
        </div>

        {/* Right column with title, subtitle, paragraph, and button */}
        <div className={styles.column}>
          <div className={styles.textOverlay}>
            <h2>
              Usce arcu turpis, vehicula in elementum tincidunt, facilisis at
              ligula.
            </h2>
            <h3>
              Proin pharetra lectus non felis vulputate, nec commondo quam
              mattis. Donec fermentum diam eget sem placerat vestibulum. Donec
              consecteur ut leo quis feugiat.
            </h3>
            <p>
              Phasellus quis dignissim lectus. Maeceans dolor ex, pulvinar in
              vestibulum eu, condimentum sit amet lacus. Fusce ex augue,
              facilisis ut ligula vitae, fringlilla dictum sem. Donec tempus
              blandit nulla vzl auctor. Donec non vestibulum tellus, sit amet
              condimentum felis. Maecenas scelerisque elit a lectus consequat
              tincidunt.{" "}
            </p>
            <button className={styles.button}>
              <p1>Read about operations</p1>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
