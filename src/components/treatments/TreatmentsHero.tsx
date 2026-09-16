"use client";

import Reveal from "@/components/Reveal";
import styles from "./TreatmentsHero.module.css";

export default function TreatmentsHero() {
  return (
    <section className={styles.section}>
      {/* Background Image Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
        alt="" 
        className={styles.bgImage} 
        aria-hidden="true" 
      />
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
