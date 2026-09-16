import Reveal from "@/components/Reveal";
import styles from "./CataractEducation.module.css";

const SYMPTOMS = [
  "Cloudy, blurry, or dim vision",
  "Increasing difficulty with vision at night",
  "Sensitivity to light and glare (halos around lights)",
  "Need for brighter light for reading",
  "Fading or yellowing of colors",
];

export default function CataractEducation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <span className={styles.eyebrow}>Understanding Cataracts</span>
            <h2 className={styles.title}>What is happening to your vision?</h2>
            <p className={styles.body}>
              A cataract is a clouding of the normally clear lens of your eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Most cataracts develop slowly over time and don't disturb your eyesight early on, but with time, they will eventually interfere with your vision.
            </p>
            <ul className={styles.symptomList}>
              {SYMPTOMS.map((symptom, i) => (
                <li key={i} className={styles.symptomItem}>
                  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.imageCard}>
            <h3>The Surgical Solution</h3>
            <p>
              Cataract surgery is one of the safest and most frequently performed surgical procedures in the world. At our hospital, we utilize advanced Micro-Incision techniques.
            </p>
            
            <div className={styles.techList}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>Phacoemulsification</h4>
                  <p>Ultrasound waves gently break up the cloudy lens, allowing it to be removed through a microscopic incision.</p>
                </div>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M9 21H3v-6"></path>
                    <path d="M21 3l-7 7"></path>
                    <path d="M3 21l7-7"></path>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>Sutureless Recovery</h4>
                  <p>The micro-incision heals naturally without stitches, meaning faster recovery times and minimal discomfort.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
