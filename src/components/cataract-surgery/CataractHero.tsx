import Reveal from "@/components/Reveal";
import styles from "./CataractHero.module.css";

export default function CataractHero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <div className={styles.breadcrumb}>Home / Treatments / Cataract Surgery</div>
          <h1 className={styles.h1}>
            <span className="en">Cataract Surgery</span>
            <span className="ta" lang="ta">கண்புரை அறுவை சிகிச்சை</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">In by morning, home by evening, seeing better. The most common operation we perform, and the one people worry about most unnecessarily.</span>
            <span className="ta" lang="ta">காலையில் வந்து, மாலையில் சிறந்த பார்வையுடன் வீடு திரும்பலாம். நாங்கள் அதிகம் செய்யும் அறுவை சிகிச்சை இதுதான், ஆனாலும் மக்கள் தேவையில்லாமல் அதிகம் கவலைப்படுவதும் இதற்காகவே.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
