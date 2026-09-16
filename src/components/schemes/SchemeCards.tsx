import Reveal from "@/components/Reveal";
import styles from "./SchemeCards.module.css";

const SCHEMES = [
  {
    title: <>CM's Comprehensive Health<br/>Insurance Scheme</>,
    tagEn: "CMCHIS",
    tagTa: "அரசு காப்பீட்டுத் திட்டம்",
    bodyEn: "The Tamil Nadu government scheme. Cataract Surgery and a number of other eye procedures are covered.",
    bodyTa: "தமிழ்நாடு அரசு திட்டம். கண்புரை அறுவை சிகிச்சை மற்றும் பல கண் சிகிச்சைகள் இதில் அடங்கும்.",
    bringEn: ["Your CMCHIS card", "Aadhaar card", "Ration card, if you have it"],
    bringTa: ["உங்கள் முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்ட அட்டை", "ஆதார் அட்டை", "குடும்ப அட்டை (இருந்தால்)"]
  },
  {
    title: <>Pensioners<br/>Health Scheme</>,
    tagEn: "For retired government employees",
    tagTa: "ஓய்வூதியர் சுகாதாரத் திட்டம்",
    bodyEn: "Covers retired state government employees and their dependants under the scheme's terms.",
    bodyTa: "ஓய்வு பெற்ற மாநில அரசு ஊழியர்கள் மற்றும் அவர்களைச் சார்ந்தவர்களுக்கு இத்திட்டத்தின் விதிகளின் கீழ் பொருந்தும்.",
    bringEn: ["Your pensioner ID", "Scheme card", "A recent pension slip"],
    bringTa: ["உங்கள் ஓய்வூதியர் அடையாள அட்டை", "திட்ட அட்டை", "சமீபத்திய ஓய்வூதிய சீட்டு"]
  },
  {
    title: <>Star Health<br/>Insurance</>,
    tagEn: "Private cover",
    tagTa: "தனியார் காப்பீடு",
    bodyEn: "Cashless treatment subject to your policy terms and prior approval where required.",
    bodyTa: "உங்கள் பாலிசி விதிமுறைகள் மற்றும் தேவைப்படும் இடங்களில் முன் அனுமதிக்கு உட்பட்டு ரொக்கமில்லா சிகிச்சை.",
    bringEn: ["Policy card or number", "A photo ID", "Any referral letter"],
    bringTa: ["பாலிசி அட்டை அல்லது எண்", "புகைப்பட அடையாள அட்டை", "பரிந்துரை கடிதம் (இருந்தால்)"]
  }
];

export default function SchemeCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.grid} stagger={0.1}>
          {SCHEMES.map((scheme) => (
            <div key={scheme.tagEn} className={styles.card}>
              <div className={styles.tag}>
                <span className="en">{scheme.tagEn}</span>
                <span className="ta" lang="ta">{scheme.tagTa}</span>
              </div>
              
              <h2 className={styles.title}>{scheme.title}</h2>
              
              <p className={styles.body}>
                <span className="en">{scheme.bodyEn}</span>
                <span className="ta" lang="ta">{scheme.bodyTa}</span>
              </p>
              
              <div className={styles.bringSection}>
                <div className={styles.bringLabel}>
                  <span className="en">Bring with you</span>
                  <span className="ta" lang="ta">கொண்டு வர வேண்டியவை</span>
                </div>
                
                <ul className={`${styles.bringList} en`}>
                  {scheme.bringEn.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <ul className={`${styles.bringList} ta`} lang="ta">
                  {scheme.bringTa.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
