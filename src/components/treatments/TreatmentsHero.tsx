"use client";

import Reveal from "@/components/Reveal";
import styles from "./TreatmentsHero.module.css";

export default function TreatmentsHero() {
  return (
    <section className={styles.section}>
      {/* Background Image Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
        alt="" 
        className={styles.bgImage} 
        aria-hidden="true" 
      />
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />
      <div className={`container ${styles.inner}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span className="en">Our Services</span> <span className="ta" lang="ta">எங்கள் சேவைகள்</span>
          </div>

          <h1 className={styles.h1}>
            <span className="en">Comprehensive Eye Care <span>Under One Roof</span>.</span> <span className="ta" lang="ta">முழுமையான கண் பராமரிப்பு <span>ஒரே கூரையின் கீழ்</span>.</span>
          </h1>

          <p className={styles.lede}>
            <span className="en">From routine optical dispensing to advanced vitreo-retinal surgery, 
            Dr. A. Raghuram provides complete ophthalmic care using 
            state-of-the-art technology, backed by decades of trusted experience.</span> <span className="ta" lang="ta">வழக்கமான கண்ணாடிகள் வழங்குதல் முதல் மேம்பட்ட விட்ரியோ-ரெட்டினல் அறுவை சிகிச்சை வரை, டாக்டர் ஏ. ரகுராம் பல தசாப்த கால அனுபவத்துடன், அதிநவீன தொழில்நுட்பத்தை பயன்படுத்தி முழுமையான கண் மருத்துவ சேவைகளை வழங்குகிறார்.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
