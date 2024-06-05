import React from "react";
import styles from "../../styles/Section2.module.css";

const Section2 = () => {
  return (
    <section id="section2" className={styles.section}>
      {" "}
      {/* Use the new CSS class */}
      <div className={styles.textOverlay}>
        <img
          src="/images/diamant.png"
          alt="diamant"
          className={styles.overlayImage}
        />
        <h1>Aenean vulputate quis est pulvinar.</h1>
        <p>
          Maeceans dapibus turpis id purus mollis aliquam. Sed ficilisis nec
          ipsum nec
        </p>
        <p>
          rutrum.Maeceans dapibus turpis id purus mollis aliquam. Sed ficilisis
          nec ipsum nec
        </p>
        <p>
          rutrum.Maeceans dapibus turpis id purus mollis aliquam. Sed ficilisis
          nec ipsum nec
        </p>
        <button className={styles.button}>
          <strong>About us</strong>
        </button>
        <div className={styles.videoContainer}>
          <iframe
            width="670"
            height="355"
            src="https://www.youtube.com/embed/LXb3EKWsInQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Section2;
