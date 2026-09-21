import Reveal from "@/components/Reveal";
import styles from "./StoriesHero.module.css";

export default function StoriesHero() {
  return (
    <section className={styles.section}>
      <img src="/images/elderly-patient-vision-testing-trial-frames.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.container}`}>
        <Reveal targets=":scope > *" stagger={0.1} className={styles.content}>
          <h1 className={styles.title}>
            <span className="en">What people say afterwards.</span>
            <span className="ta" lang="ta">மக்கள் என்ன சொல்கிறார்கள்.</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">Collected from patients and families who agreed to have their words published.</span>
            <span className="ta" lang="ta">தங்கள் அனுபவங்களை பகிர்ந்து கொள்ள சம்மதித்த நோயாளிகள் மற்றும் குடும்பத்தினரிடமிருந்து சேகரிக்கப்பட்டது.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
