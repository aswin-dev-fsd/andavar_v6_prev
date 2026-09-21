"use client";

import Reveal from "@/components/Reveal";
import styles from "./TreatmentHero.module.css";

interface TreatmentHeroProps {
  bgImage: string;
  eyebrowEn: string;
  eyebrowTa: string;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
}

export default function TreatmentHero({
  bgImage,
  eyebrowEn,
  eyebrowTa,
  titleEn,
  titleTa,
  descriptionEn,
  descriptionTa,
}: TreatmentHeroProps) {
  return (
    <section className={styles.hero}>
      <img src={bgImage} alt="" className={styles.bgImage} aria-hidden="true" />
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />

      <div className={`container ${styles.heroInner}`}>
        <Reveal targets=":scope > *" stagger={0.08}>
          <span className="eyebrow">
            <span className="en">{eyebrowEn}</span>
            <span className="ta" lang="ta">{eyebrowTa}</span>
          </span>
          <h1 className={styles.heroTitle}>
            <span className="en">{titleEn}</span>
            <span className="ta" lang="ta">{titleTa}</span>
          </h1>
          <p className={styles.heroLede}>
            <span className="en">{descriptionEn}</span>
            <span className="ta" lang="ta">{descriptionTa}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
