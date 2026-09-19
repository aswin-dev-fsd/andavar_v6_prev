import Reveal from "@/components/Reveal";
import styles from "./HowWeWorkSection.module.css";

const ITEMS = [
  {
    num: "01",
    titleEn: "Nothing is recommended that is not needed",
    titleTa: "தேவையற்ற எதையும் நாங்கள் பரிந்துரைக்க மாட்டோம்",
    bodyEn: "If your eyes are fine, you will be told they are fine. An unnecessary procedure is a betrayal of thirteen years of trust, and it is not worth it.",
    bodyTa: "உங்கள் கண்கள் நன்றாக இருந்தால், அவை நன்றாக இருப்பதாகவே உங்களிடம் சொல்லப்படும். தேவையற்ற ஒரு சிகிச்சையைச் செய்வது பதின்மூன்று ஆண்டு கால நம்பிக்கைக்குச் செய்யும் துரோகம், அதற்கு எந்த அவசியமும் இல்லை."
  },
  {
    num: "02",
    titleEn: "You will understand what is happening",
    titleTa: "என்ன நடக்கிறது என்பதை நீங்கள் புரிந்து கொள்வீர்கள்",
    bodyEn: "Explanations in the language you think in, without medical vocabulary, for as long as it takes. Bring your questions written down if that helps.",
    bodyTa: "மருத்துவச் சொற்கள் இல்லாமல், நீங்கள் சிந்திக்கும் மொழியிலேயே விளக்கங்கள் அளிக்கப்படும். உங்களுக்கு எவ்வளவு நேரம் தேவையோ அவ்வளவு நேரம் ஒதுக்கப்படும். உங்கள் கேள்விகளை எழுதி எடுத்து வந்தாலும் நல்லது."
  },
  {
    num: "03",
    titleEn: "The cost is stated before you commit",
    titleTa: "நீங்கள் முடிவெடுப்பதற்கு முன்பே செலவு தெரிவிக்கப்படும்",
    bodyEn: "What the visit costs, what the procedure costs, and what your scheme covers — said out loud, in advance, every time.",
    bodyTa: "பரிசோதனைக்கான கட்டணம், சிகிச்சைக்கான கட்டணம் மற்றும் உங்கள் காப்பீட்டுத் திட்டத்தில் என்னென்ன அடங்கும் என்பது — ஒவ்வொரு முறையும் முன்பே தெளிவாகக் கூறப்படும்."
  }
];

export default function HowWeWorkSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">
            <span className="en">How we work</span>
            <span className="ta" lang="ta">நாங்கள் செயல்படும் விதம்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Three things we hold to.</span>
            <span className="ta" lang="ta">நாங்கள் கடைப்பிடிக்கும் மூன்று கொள்கைகள்.</span>
          </h2>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.08}>
          {ITEMS.map((item) => (
            <div key={item.num} className={styles.item}>
              <div className={styles.num}>{item.num}</div>
              <h3 className={styles.title}>
                <span className="en">{item.titleEn}</span>
                <span className="ta" lang="ta">{item.titleTa}</span>
              </h3>
              <p className={styles.body}>
                <span className="en">{item.bodyEn}</span>
                <span className="ta" lang="ta">{item.bodyTa}</span>
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
