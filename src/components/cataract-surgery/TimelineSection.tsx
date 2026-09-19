import Reveal from "@/components/Reveal";
import styles from "./TimelineSection.module.css";

const STEPS = [
  {
    num: "01",
    titleEn: "You arrive in the morning",
    titleTa: "நீங்கள் காலையில் வருகிறீர்கள்",
    bodyEn: "Fasting is usually not required — you will be told beforehand if anything is different in your case. Bring someone with you; you will not be able to drive home.",
    bodyTa: "பொதுவாக வெறும் வயிற்றில் வரத் தேவையில்லை — உங்களுக்கு ஏதேனும் மாற்றங்கள் இருந்தால் முன்கூட்டியே தெரிவிக்கப்படும். உங்களுடன் ஒருவரை அழைத்து வாருங்கள்; நீங்களே வாகனம் ஓட்டிச் செல்ல முடியாது."
  },
  {
    num: "02",
    titleEn: "Drops and preparation",
    titleTa: "சொட்டு மருந்தும் தயாரிப்பும்",
    bodyEn: "Drops widen the pupil and numb the eye. There is no injection and no general anaesthetic for a routine cataract.",
    bodyTa: "சொட்டு மருந்து கண் பாவையை விரிவடையச் செய்து, கண்ணை மரத்துப்போகச் செய்கிறது. சாதாரண கண்புரை அறுவை சிகிச்சைக்கு ஊசியோ, முழு மயக்க மருந்தோ தேவையில்லை."
  },
  {
    num: "03",
    titleEn: "The operation — about fifteen minutes",
    titleTa: "அறுவை சிகிச்சை — சுமார் பதினைந்து நிமிடங்கள்",
    bodyEn: "A very small opening is made, the cloudy lens is broken up and removed, and a clear artificial lens is placed where it was. You are awake, you feel no pain, and there is usually no stitch.",
    bodyTa: "மிகச் சிறிய துளை வழியே, மங்கலான லென்ஸ் உடைத்து அகற்றப்பட்டு, அந்த இடத்தில் ஒரு தெளிவான செயற்கை லென்ஸ் வைக்கப்படுகிறது. நீங்கள் விழித்திருப்பீர்கள், எந்த வலியும் இருக்காது, பெரும்பாலும் தையலும் இருக்காது."
  },
  {
    num: "04",
    titleEn: "Rest, then home",
    titleTa: "ஓய்வு, பின்னர் வீடு",
    bodyEn: "You rest for a short while and go home the same day with a shield over the eye and a schedule of drops.",
    bodyTa: "நீங்கள் சிறிது நேரம் ஓய்வெடுத்துவிட்டு, கண்ணில் ஒரு பாதுகாப்பு கவசமும், சொட்டு மருந்து அட்டவணையுடனும் அன்றே வீடு திரும்புவீர்கள்."
  },
  {
    num: "05",
    titleEn: "The day after",
    titleTa: "மறுநாள்",
    bodyEn: "You come back the next morning so Dr. Raghuram can check the eye. Most people notice the difference by then.",
    bodyTa: "மறுநாள் காலை நீங்கள் மீண்டும் வர வேண்டும், அப்போது டாக்டர் ரகுராம் உங்கள் கண்ணைப் பரிசோதிப்பார். பெரும்பாலானவர்கள் அதற்குள்ளாகவே பார்வையில் உள்ள மாற்றத்தை உணர்வார்கள்."
  },
  {
    num: "06",
    titleEn: "The weeks after",
    titleTa: "அடுத்த சில வாரங்கள்",
    bodyEn: "Drops continue for a few weeks. Avoid dust, swimming and rubbing the eye. A final prescription for glasses is given once the eye has settled, usually around four weeks.",
    bodyTa: "சில வாரங்களுக்குச் சொட்டு மருந்துகள் தொடரும். தூசு, நீச்சல் மற்றும் கண்ணைக் கசக்குவதைத் தவிர்க்கவும். கண் முழுமையாகச் சீரடைந்த பிறகு, சுமார் நான்கு வாரங்களில் கண்ணாடிக்கான இறுதி மருந்துச் சீட்டு வழங்கப்படும்."
  }
];

export default function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.head}>
          <span className="eyebrow">
            <span className="en">The day itself</span>
            <span className="ta" lang="ta">அறுவை சிகிச்சை நாள்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">What happens, hour by hour.</span>
            <span className="ta" lang="ta">ஒவ்வொரு மணி நேரமும் என்ன நடக்கும்.</span>
          </h2>
        </Reveal>

        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
            <Reveal key={step.num} className={styles.step} stagger={0.08} targets=":scope > *">
              <div className={styles.line} aria-hidden="true" />
              <div className={styles.num}>{step.num}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  <span className="en">{step.titleEn}</span>
                  <span className="ta" lang="ta">{step.titleTa}</span>
                </h3>
                <p className={styles.body}>
                  <span className="en">{step.bodyEn}</span>
                  <span className="ta" lang="ta">{step.bodyTa}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
