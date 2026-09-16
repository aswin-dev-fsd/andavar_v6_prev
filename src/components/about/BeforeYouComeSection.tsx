import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./BeforeYouComeSection.module.css";

const ITEMS = [
  {
    titleEn: "Bring your glasses, all of them",
    titleTa: "உங்கள் கண்ணாடிகள் அனைத்தையும் கொண்டு வாருங்கள்",
    bodyEn: "Including the old pair you stopped using. They tell us more than you would expect.",
    bodyTa: "நீங்கள் பயன்படுத்தாமல் விட்ட பழைய கண்ணாடியையும் சேர்த்து. அவை நீங்கள் எதிர்பார்ப்பதை விட அதிகம் சொல்லும்."
  },
  {
    titleEn: "Bring any previous prescriptions or reports",
    titleTa: "முந்தைய மருந்துச் சீட்டுகள் அல்லது அறிக்கைகளைக் கொண்டு வாருங்கள்",
    bodyEn: "Especially if you have been seen elsewhere, or have diabetes and carry a sugar record.",
    bodyTa: "குறிப்பாக நீங்கள் வேறு எங்கும் சிகிச்சை பெற்றிருந்தால், அல்லது சர்க்கரை நோய் இருந்து சர்க்கரை அளவுப் பதிவேடு வைத்திருந்தால்."
  },
  {
    titleEn: "Bring your scheme or insurance card",
    titleTa: "உங்கள் காப்பீட்டு அட்டையைக் கொண்டு வாருங்கள்",
    bodyEn: "It saves a second trip if treatment turns out to be needed.",
    bodyTa: "சிகிச்சை தேவைப்பட்டால், இரண்டாவது முறை வருவதைத் தவிர்க்கலாம்."
  },
  {
    titleEn: "Bring someone with you, if you can",
    titleTa: "முடிந்தால் உங்களுடன் ஒருவரை அழைத்து வாருங்கள்",
    bodyEn: "If drops are needed to examine the retina, your vision will be blurred for a few hours afterwards. You should not drive yourself home.",
    bodyTa: "விழித்திரையைப் பரிசோதிக்க சொட்டு மருந்து தேவைப்பட்டால், அதன்பிறகு சில மணிநேரங்களுக்கு உங்கள் பார்வை மங்கலாக இருக்கும். நீங்களே வாகனம் ஓட்டிச் செல்லக் கூடாது."
  }
];

export default function BeforeYouComeSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.head}>
          <span className="eyebrow">Before you come</span>
          <h2 className={styles.h2}>
            <span className="en">Four things that make the visit shorter.</span>
            <span className="ta" lang="ta">பரிசோதனை நேரத்தைக் குறைக்கும் நான்கு விஷயங்கள்.</span>
          </h2>
        </Reveal>

        <Reveal className={styles.list} stagger={0.08}>
          {ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.bullet} aria-hidden="true" />
              <div>
                <h3 className={styles.title}>
                  <span className="en">{item.titleEn}</span>
                  <span className="ta" lang="ta">{item.titleTa}</span>
                </h3>
                <p className={styles.body}>
                  <span className="en">{item.bodyEn}</span>
                  <span className="ta" lang="ta">{item.bodyTa}</span>
                </p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.closing} stagger={0.08} targets=":scope > *">
          <h2 className={styles.h2}>
            <span className="en">Come and meet the surgeon.</span>
            <span className="ta" lang="ta">வந்து அறுவை சிகிச்சை நிபுணரைச் சந்தியுங்கள்.</span>
          </h2>
          <div className={styles.actions}>
            <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
              ☎ Call 04259 221 000
            </MagneticButton>
            <MagneticButton href="/our-surgeons" className={styles.btnSecondary}>
              About Dr. Raghuram
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
