import Reveal from "@/components/Reveal";
import styles from "./GlaucomaEducation.module.css";

const SYMPTOMS = [
  { en: "No early symptoms (The 'Silent Thief of Sight')", ta: "ஆரம்ப அறிகுறிகள் எதுவும் இருக்காது (இது 'பார்வையின் அமைதியான திருடன்' என்று அழைக்கப்படுகிறது)" },
  { en: "Gradual loss of peripheral (side) vision", ta: "படிப்படியாக பக்கவாட்டுப் பார்வை (peripheral vision) குறைதல்" },
  { en: "Seeing halos around lights", ta: "விளக்குகளைச் சுற்றி ஒளி வட்டங்களைக் காண்பது" },
  { en: "Severe eye pain or headache (in acute cases)", ta: "கடுமையான கண் வலி அல்லது தலைவலி (தீவிர நிலையில்)" },
];

export default function GlaucomaEducation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <span className={styles.eyebrow}>
              <span className="en">Understanding Glaucoma</span> <span className="ta" lang="ta">குளுக்கோமாவைப் புரிந்துகொள்ளுதல்</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">The Silent Thief of Sight</span> <span className="ta" lang="ta">பார்வையின் அமைதியான திருடன்</span>
            </h2>
            <p className={styles.body}>
              <span className="en">
                Glaucoma is a group of eye conditions that damage the optic nerve, which is vital for good vision. This damage is often caused by an abnormally high pressure in your eye. It is one of the leading causes of blindness, but because it usually presents no early symptoms, regular eye check-ups are the only way to catch it in time.
              </span>
              {" "}
              <span className="ta" lang="ta">
                குளுக்கோமா என்பது நல்ல பார்வைக்கு மிக முக்கியமான பார்வை நரம்பை (optic nerve) சேதப்படுத்தும் கண் நோய்களின் தொகுப்பாகும். இந்த பாதிப்பு பெரும்பாலும் கண்ணுக்குள் ஏற்படும் அதிகப்படியான அழுத்தத்தால் (eye pressure) ஏற்படுகிறது. இது பார்வை இழப்புக்கு ஒரு முக்கிய காரணமாகும், ஆனால் ஆரம்ப நிலையில் எவ்வித அறிகுறிகளும் இருக்காது என்பதால், முறையான கண் பரிசோதனைகள் மூலமாகவே இதனை ஆரம்பத்திலேயே கண்டறிய முடியும்.
              </span>
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--ink)' }}>
              <span className="en">What to Look Out For</span>
              <span className="ta" lang="ta">கவனிக்க வேண்டியவை</span>
            </h3>
            <ul className={styles.symptomList}>
              {SYMPTOMS.map((symptom, i) => (
                <li key={i} className={styles.symptomItem}>
                  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="en">{symptom.en}</span> <span className="ta" lang="ta">{symptom.ta}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.imageCard}>
            <h3>
              <span className="en">Our Approach to Management</span> <span className="ta" lang="ta">எங்கள் சிகிச்சை முறைகள்</span>
            </h3>
            <p>
              <span className="en">
                Vision lost to glaucoma cannot be recovered, but further loss can be prevented with proper care. We focus on early detection, lowering eye pressure, and continuous monitoring to preserve your remaining sight.
              </span>
              {" "}
              <span className="ta" lang="ta">
                குளுக்கோமாவால் இழந்த பார்வையை மீண்டும் பெற முடியாது, ஆனால் சரியான சிகிச்சை மூலம் மேலும் பார்வை குறைவதைத் தடுக்கலாம். ஆரம்பகால நோயறிதல், கண் அழுத்தத்தைக் குறைத்தல் மற்றும் உங்கள் பார்வையைப் பாதுகாக்கத் தொடர் கண்காணிப்பு ஆகியவற்றில் நாங்கள் கவனம் செலுத்துகிறோம்.
              </span>
            </p>
            
            <div className={styles.techList}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">Pressure & Field Tests</span> <span className="ta" lang="ta">கண் அழுத்தம் & பார்வைக்கள பரிசோதனை</span>
                  </h4>
                  <p>
                    <span className="en">We use accurate tonometry to measure eye pressure and visual field testing to track any loss of peripheral vision.</span> <span className="ta" lang="ta">கண் அழுத்தத்தை அளவிட துல்லியமான டோனோமெட்ரி கருவியையும், பக்கவாட்டுப் பார்வை குறைவதைக் கண்காணிக்கப் பார்வைக்கள பரிசோதனைகளையும் பயன்படுத்துகிறோம்.</span>
                  </p>
                </div>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">Targeted Medical Therapy</span> <span className="ta" lang="ta">சிறப்பு மருத்துவச் சிகிச்சை</span>
                  </h4>
                  <p>
                    <span className="en">Prescription eye drops are often the first line of defense to decrease eye pressure, occasionally supplemented by laser treatments.</span> <span className="ta" lang="ta">கண் அழுத்தத்தைக் குறைக்க முதலில் சிறப்பு கண் சொட்டு மருந்துகள் பரிந்துரைக்கப்படுகின்றன, தேவைப்பட்டால் லேசர் சிகிச்சைகளும் அளிக்கப்படும்.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
