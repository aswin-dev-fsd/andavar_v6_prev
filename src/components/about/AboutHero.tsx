import Reveal from "@/components/Reveal";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <img src="/images/shri-andavar-eye-hospital-building-exterior.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <h1 className={styles.h1}>
            <span className="en">A small hospital that has stayed in one place.</span>
            <span className="ta" lang="ta">ஒரே இடத்தில் நிலைத்திருக்கும் ஒரு சிறிய மருத்துவமனை.</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">Shri Andavar Eye Care and Retina Centre has been on Palladam Road since 2013, run by the surgeon who founded it.</span>
            <span className="ta" lang="ta">ஸ்ரீ ஆண்டவர் ஐ கேர் அண்ட் ரெட்டினா சென்டர் 2013 முதல் பல்லடம் ரோட்டில், அதனை நிறுவிய அறுவை சிகிச்சை நிபுணரால் தொடர்ந்து நடத்தப்பட்டு வருகிறது.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
