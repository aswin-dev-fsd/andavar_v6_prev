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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              04259 221 000
            </MagneticButton>
            <MagneticButton href="/our-surgeons" className={styles.btnSecondary}>
              <span className="en">Meet the surgeon</span>
              <span className="ta" lang="ta">அறுவை சிகிச்சை நிபுணரைச் சந்தியுங்கள்</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
