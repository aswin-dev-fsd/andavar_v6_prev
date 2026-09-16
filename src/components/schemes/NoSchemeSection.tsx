"use client";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import styles from "./NoSchemeSection.module.css";

export default function NoSchemeSection() {
  return (
    <div>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.content}>
            <Reveal targets=":scope > *" stagger={0.1}>
              <span className={styles.eyebrow}>
                <span className="en">If you have no scheme</span>
                <span className="ta" lang="ta">உங்களுக்கு எந்த திட்டமும் இல்லை என்றால்</span>
              </span>
              
              <h2 className={styles.h2}>
                <span className="en">You will be told the cost before anything is booked.</span>
                <span className="ta" lang="ta">எதுவும் பதிவு செய்யப்படுவதற்கு முன்பே அதற்கான கட்டணம் உங்களுக்கு தெரிவிக்கப்படும்.</span>
              </h2>
              
              <p className={styles.subheading}>
                <span className="en">
                  Not after. Not on the day. The consultation fee, what the procedure would cost, and what is included — stated up front so you can decide without pressure.
                </span>
                <span className="ta" lang="ta">
                  பிறகு அல்ல. அந்த நாளிலும் அல்ல. ஆலோசனை கட்டணம், செயல்முறைக்கான செலவு மற்றும் அதில் என்னென்ன அடங்கும் — ஆகிய அனைத்தும் எந்த ஒரு அழுத்தமும் இல்லாமல் நீங்கள் முடிவு செய்ய முன் கூட்டியே தெரிவிக்கப்படும்.
                </span>
              </p>
              
              <div className={styles.card}>
                <h3 className={styles.cardHeading}>
                  <span className="en">Two minutes on the phone settles it</span>
                  <span className="ta" lang="ta">தொலைபேசியில் இரண்டு நிமிடங்கள் பேசினால் தீர்வு கிடைக்கும்</span>
                </h3>
                
                <p className={styles.cardBody}>
                  <span className="en">
                    Tell us which scheme you hold, or that you hold none, and what you have noticed about your eyes. We will tell you what a first visit costs and what is likely to be covered.
                  </span>
                  <span className="ta" lang="ta">
                    உங்களிடம் எந்தத் திட்டம் உள்ளது அல்லது உங்களிடம் எதுவும் இல்லையா என்பதையும், உங்கள் கண்களைப் பற்றி நீங்கள் என்ன கவனித்தீர்கள் என்பதையும் எங்களிடம் கூறுங்கள். முதல் வருகைக்கான கட்டணம் மற்றும் எவையெல்லாம் காப்பீட்டில் அடங்கும் என்பதை நாங்கள் உங்களுக்குத் தெரிவிப்போம்.
                  </span>
                </p>
                
                <div className={styles.actions}>
                  <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
                    <span className="en">☎ Call 04259 221 000</span>
                    <span className="ta" lang="ta">☎ 04259 221 000 ஐ அழைக்கவும்</span>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
