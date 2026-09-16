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
              ☎ Call 04259 221 000
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
