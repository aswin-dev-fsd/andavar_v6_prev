import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./AskReviewSection.module.css";

export default function AskReviewSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.08} className={styles.content}>
          <h2 className={styles.h2}>
            <span className="en">Were you treated here?</span>
            <span className="ta" lang="ta">நீங்கள் இங்கு சிகிச்சை பெற்றீர்களா?</span>
          </h2>
          <p className={styles.lede}>
            <span className="en">A few sentences about your experience helps the next person decide whether to come in. Tell us at the desk, or leave a review on Google.</span>
            <span className="ta" lang="ta">உங்கள் அனுபவத்தைப் பற்றிய சில வார்த்தைகள், அடுத்து வருபவர்களுக்கு முடிவெடுக்க உதவும். வரவேற்பறையில் எங்களிடம் சொல்லுங்கள் அல்லது கூகுளில் ஒரு மதிப்பாய்வை (review) எழுதுங்கள்.</span>
          </p>
          <div className={styles.actions}>
            <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              04259 221 000
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
