import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./ClosingCallSection.module.css";

export default function ClosingCallSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.08} className={styles.content}>
          <h2 className={styles.h2}>
            <span className="en">Have it looked at before it starts deciding things for you.</span>
            <span className="ta" lang="ta">அது உங்கள் முடிவுகளைத் தீர்மானிப்பதற்கு முன் வந்து பரிசோதித்துக் கொள்ளுங்கள்.</span>
          </h2>
          <p className={styles.lede}>
            <span className="en">Giving up night driving, reading, or the newspaper is not something you have to accept.</span>
            <span className="ta" lang="ta">இரவில் வாகனம் ஓட்டுவதையோ, படிப்பதையோ அல்லது செய்தித்தாள் வாசிப்பதையோ நீங்கள் நிறுத்த வேண்டியதில்லை.</span>
          </p>
          <div className={styles.actions}>
            <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
              ☎ Call 04259 221 000
            </MagneticButton>
            <MagneticButton href="/our-surgeon" className={styles.btnSecondary}>
              Meet the surgeon
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
