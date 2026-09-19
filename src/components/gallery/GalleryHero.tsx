"use client";

import Reveal from "@/components/Reveal";
import styles from "./Gallery.module.css";

export default function GalleryHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <Reveal targets=":scope > *" stagger={0.08}>
          <span className="eyebrow">
            <span className="en">Inside Our Hospital</span>
            <span className="ta" lang="ta">மருத்துவமனை உள்ளே</span>
          </span>
          <h1 className={styles.heroTitle}>
            <span className="en">A closer look at our facilities.</span>
            <span className="ta" lang="ta">எங்கள் வசதிகளின் ஒரு பார்வை.</span>
          </h1>
          <p className={styles.heroLede}>
            <span className="en">
              Experience the environment where decades of expertise meets 
              state-of-the-art ophthalmic technology.
            </span>
            <span className="ta" lang="ta">
              பல தசாப்த கால நிபுணத்துவமும் அதிநவீன கண் மருத்துவத் தொழில்நுட்பமும் 
              இணையும் சூழலை அனுபவிக்கவும்.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
