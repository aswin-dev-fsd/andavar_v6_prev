import Reveal from "@/components/Reveal";
import styles from "./StoriesHero.module.css";

export default function StoriesHero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <div className={styles.breadcrumb}>Home / Patient stories</div>
          <h1 className={styles.h1}>
            <span className="en">What people say afterwards.</span>
            <span className="ta" lang="ta">சிகிச்சைக்குப் பின் மக்கள் கூறுவது.</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">Collected from patients and families who agreed to have their words published.</span>
            <span className="ta" lang="ta">தங்கள் அனுபவங்களை வெளியிட சம்மதித்த நோயாளிகள் மற்றும் அவர்களது குடும்பத்தினரிடமிருந்து சேகரிக்கப்பட்டவை.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
