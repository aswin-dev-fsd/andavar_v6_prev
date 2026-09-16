import Reveal from "@/components/Reveal";
import styles from "./CataractEducation.module.css";

const SYMPTOMS = [
  { en: "Cloudy, blurry, or dim vision", ta: "மங்கலான, தெளிவற்ற, அல்லது மங்கிய பார்வை" },
  { en: "Increasing difficulty with vision at night", ta: "இரவில் பார்ப்பதில் அதிகரிக்கும் சிரமம்" },
  { en: "Sensitivity to light and glare (halos around lights)", ta: "வெளிச்சம் மற்றும் கூச்சம் மீதான கூருணர்வு (விளக்குகளைச் சுற்றி ஒளி வட்டங்கள்)" },
  { en: "Need for brighter light for reading", ta: "படிப்பதற்கு அதிக வெளிச்சம் தேவைப்படுதல்" },
  { en: "Fading or yellowing of colors", ta: "நிறங்கள் மங்குதல் அல்லது மஞ்சளாதல்" },
];

export default function CataractEducation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <span className={styles.eyebrow}>
              <span className="en">Understanding Cataracts</span> <span className="ta" lang="ta">கண்புரையைப் புரிந்துகொள்ளுதல்</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">What is happening to your vision?</span> <span className="ta" lang="ta">உங்கள் பார்வைக்கு என்ன நடக்கிறது?</span>
            </h2>
            <p className={styles.body}>
              <span className="en">
                A cataract is a clouding of the normally clear lens of your eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Most cataracts develop slowly over time and don't disturb your eyesight early on, but with time, they will eventually interfere with your vision.
              </span>
              {" "}
              <span className="ta" lang="ta">
                கண்புரை என்பது பொதுவாக தெளிவாக இருக்கும் உங்கள் கண் லென்ஸ் மங்கலாகும் நிலையாகும். கண்புரை உள்ளவர்களுக்கு, மங்கலான லென்ஸ்கள் வழியாகப் பார்ப்பது பனிமூட்டமான சாளரத்தின் வழியாகப் பார்ப்பது போன்றது. பெரும்பாலான கண்புரைகள் மெதுவாகவே உருவாகின்றன, ஆரம்பத்தில் உங்கள் பார்வையை பாதிக்காது, ஆனால் காலப்போக்கில் அவை உங்கள் பார்வையைத் தடுக்கும்.
              </span>
            </p>
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
              <span className="en">The Surgical Solution</span> <span className="ta" lang="ta">அறுவை சிகிச்சை தீர்வு</span>
            </h3>
            <p>
              <span className="en">
                Cataract surgery is one of the safest and most frequently performed surgical procedures in the world. At our hospital, we utilize advanced Micro-Incision techniques.
              </span>
              {" "}
              <span className="ta" lang="ta">
                கண்புரை அறுவை சிகிச்சை என்பது உலகின் பாதுகாப்பான மற்றும் அதிகம் செய்யப்படும் அறுவை சிகிச்சை முறைகளில் ஒன்றாகும். எங்கள் மருத்துவமனையில், மேம்பட்ட நுண்-வெட்டு (Micro-Incision) தொழில்நுட்பங்களைப் பயன்படுத்துகிறோம்.
              </span>
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
                  <h4>
                    <span className="en">Phacoemulsification</span> <span className="ta" lang="ta">ஃபேகோஎமல்சிஃபிகேஷன்</span>
                  </h4>
                  <p>
                    <span className="en">Ultrasound waves gently break up the cloudy lens, allowing it to be removed through a microscopic incision.</span> <span className="ta" lang="ta">அல்ட்ராசவுண்ட் அலைகள் மங்கலான லென்ஸை மெதுவாக உடைத்து, மிகச் சிறிய வெட்டு மூலம் அதை அகற்றுவதற்கு உதவுகின்றன.</span>
                  </p>
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
                  <h4>
                    <span className="en">Sutureless Recovery</span> <span className="ta" lang="ta">தையல் இல்லாத மீட்பு</span>
                  </h4>
                  <p>
                    <span className="en">The micro-incision heals naturally without stitches, meaning faster recovery times and minimal discomfort.</span> <span className="ta" lang="ta">சிறிய வெட்டு தையல்கள் இல்லாமல் தானாகவே குணமடைகிறது, இது விரைவான மீட்பு நேரத்தையும் குறைந்தபட்ச அசௌகரியத்தையும் தருகிறது.</span>
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
