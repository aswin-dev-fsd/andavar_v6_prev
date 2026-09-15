"use client";

import Reveal from "@/components/Reveal";
import styles from "./TreatmentsHero.module.css";

export default function TreatmentsHero() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />
      <div className={`container ${styles.inner}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Our Services
          </div>

          <h1 className={styles.h1}>
            Comprehensive Eye Care <span>Under One Roof</span>.
          </h1>

          <p className={styles.lede}>
            From routine optical dispensing to advanced vitreo-retinal surgery, 
            Dr. A. Raghuram provides complete ophthalmic care using 
            state-of-the-art technology, backed by decades of trusted experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
