"use client";

import Reveal from "@/components/Reveal";
import styles from "./Gallery.module.css";

export default function GalleryHero() {
  return (
    <section className={styles.hero}>
      {/* Background Image & Glows */}
      <img 
        src="/images/hospital-reception-and-waiting-area.webp" 
        alt="" 
        className={styles.bgImage} 
        aria-hidden="true" 
      />
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />

      <div className={`container ${styles.heroInner}`}>
        <Reveal targets=":scope > *" stagger={0.08}>
          <span className="eyebrow">
            <span className="en">Inside Our Hospital</span>
            <span className="ta" lang="ta">மருத்துவமனை உள்ளே</span>
          </span>
          <h1 className={styles.heroTitle}>
            <span className="en">A closer look at our facilities.</span>
            <span className="ta" lang="ta">எங்கள் மருத்துவ வசதிகளைப் பாருங்கள்</span>
          </h1>
          <p className={styles.heroLede}>
            <span className="en">
              Experience the environment where decades of expertise meets 
              state-of-the-art ophthalmic technology.
            </span>
            <span className="ta" lang="ta">
              பல ஆண்டுகால மருத்துவ அனுபவத்துடன், நவீன கண் மருத்துவத் தொழில்நுட்பம் மற்றும் தேவையான வசதிகளுடன் நோயாளிகளுக்கு பாதுகாப்பான மற்றும் நம்பிக்கையான கண் சிகிச்சையை வழங்குகிறோம்.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
