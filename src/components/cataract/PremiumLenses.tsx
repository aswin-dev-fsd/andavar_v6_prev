import Reveal from "@/components/Reveal";
import styles from "./PremiumLenses.module.css";

const LENSES = [
  {
    titleEn: "Monofocal Lenses",
    titleTa: "மோனோஃபோகல் லென்ஸ்கள் (Monofocal Lenses)",
    bodyEn: "The standard choice. Provides excellent vision at a single distance (usually far). You will likely still need reading glasses for close-up tasks like reading menus or your phone.",
    bodyTa: "வழக்கமான தேர்வு. ஒரே தூரத்தில் (பொதுவாக தொலைவில்) சிறந்த பார்வையை வழங்குகிறது. மெனுக்கள் அல்லது மொபைல் பார்ப்பது போன்ற அருகாமையில் உள்ள வேலைகளுக்கு உங்களுக்கு இன்னும் வாசிப்புக் கண்ணாடிகள் தேவைப்படும்.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  },
  {
    titleEn: "Multifocal Lenses",
    titleTa: "மல்டிஃபோகல் லென்ஸ்கள் (Multifocal Lenses)",
    bodyEn: "Advanced premium lenses designed with multiple focal zones. They reduce or eliminate the need for glasses by allowing you to see clearly at near, intermediate, and far distances.",
    bodyTa: "பல்வேறு குவியப் பகுதிகளுடன் வடிவமைக்கப்பட்ட மேம்பட்ட பிரீமியம் லென்ஸ்கள். இவை அருகில், நடுத்தரம் மற்றும் தொலைவில் தெளிவாகப் பார்க்க அனுமதிப்பதன் மூலம் கண்ணாடிகளின் தேவையைக் குறைக்கின்றன அல்லது தவிர்க்கின்றன.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
  {
    titleEn: "Toric Lenses",
    titleTa: "டோரிக் லென்ஸ்கள் (Toric Lenses)",
    bodyEn: "Specially designed for patients with astigmatism. These lenses correct the irregular shape of the cornea in addition to replacing the cloudy cataract lens.",
    bodyTa: "அஸ்டிக்மாடிசம் (Astigmatism - சிதறல் பார்வை) உள்ள நோயாளிகளுக்காகச் சிறப்பாக வடிவமைக்கப்பட்டுள்ளது. இந்த லென்ஸ்கள் மங்கலான கண்புரை லென்ஸை மாற்றுவதோடு, கார்னியாவின் ஒழுங்கற்ற வடிவத்தையும் சரிசெய்கின்றன.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    )
  }
];

export default function PremiumLenses() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>
              <span className="en">Intraocular Lenses (IOLs)</span> <span className="ta" lang="ta">உள்கண் லென்ஸ்கள் (IOLs)</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">Choosing your new vision.</span> <span className="ta" lang="ta">உங்கள் புதிய பார்வையைத் தேர்ந்தெடுத்தல்.</span>
            </h2>
            <p className={styles.subtitle}>
              <span className="en">
                Cataract surgery doesn't just restore your vision—it's an opportunity to upgrade it. Based on your lifestyle and eye health, our surgeons will help you select the perfect premium lens.
              </span>
              {" "}
              <span className="ta" lang="ta">
                கண்புரை அறுவை சிகிச்சை உங்கள் பார்வையை மீட்டெடுப்பது மட்டுமல்ல—அதை மேம்படுத்துவதற்கான வாய்ப்பும் கூட. உங்கள் வாழ்க்கை முறை மற்றும் கண் ஆரோக்கியத்தின் அடிப்படையில், சிறந்த பிரீமியம் லென்ஸைத் தேர்ந்தெடுக்க எங்கள் மருத்துவர்கள் உங்களுக்கு உதவுவார்கள்.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.15} targets=":scope > *">
          {LENSES.map((lens) => (
            <div key={lens.titleEn} className={styles.card}>
              <div className={styles.iconWrapper}>
                {lens.icon}
              </div>
              <h3 className={styles.cardTitle}>
                <span className="en">{lens.titleEn}</span> <span className="ta" lang="ta">{lens.titleTa}</span>
              </h3>
              <p className={styles.cardBody}>
                <span className="en">{lens.bodyEn}</span> <span className="ta" lang="ta">{lens.bodyTa}</span>
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
