import Reveal from "@/components/Reveal";
import styles from "./CommunityHero.module.css";

export default function CommunityHero() {
  return (
    <section className={styles.section}>
      <img src="/images/camps/camp-kanjampatti-jan-2026-1.jpg" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={`container ${styles.container}`}>
        <Reveal targets=":scope > *" stagger={0.08} className={styles.content}>
          <span className="eyebrow">
            <span className="en">Social Impact</span>
            <span className="ta" lang="ta">சமூக தாக்கம்</span>
          </span>
          <h1 className={styles.title}>
            <span className="en">Caring for our community</span>
            <span className="ta" lang="ta">எங்கள் சமுதாயத்தின் மீது அக்கறை</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">
              Vision care is a fundamental right. Through our free eye camps, awareness drives, and outreach programs, we are bringing world-class ophthalmology out of the hospital and into the communities that need it most.
            </span>
            <span className="ta" lang="ta">
              பார்வை பராமரிப்பு ஒரு அடிப்படை உரிமை. எங்கள் இலவச கண் முகாம்கள் மற்றும் விழிப்புணர்வு நிகழ்ச்சிகள் மூலம், உலகத்தரம் வாய்ந்த கண் சிகிச்சையை மருத்துவமனைக்கு வெளியேயும் கொண்டு செல்கிறோம்.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
