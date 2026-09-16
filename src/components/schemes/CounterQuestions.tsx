import Reveal from "@/components/Reveal";
import styles from "./CounterQuestions.module.css";

const QUESTIONS = [
  {
    en: "Do I need a referral to use my scheme?",
    ta: "எனது திட்டத்தைப் பயன்படுத்த எனக்கு பரிந்துரை தேவையா?"
  },
  {
    en: "Will I have to pay and claim it back?",
    ta: "நான் முதலில் பணம் செலுத்திவிட்டு, பிறகு திரும்பப் பெற வேண்டுமா?"
  },
  {
    en: "Does the scheme cover both eyes?",
    ta: "திட்டம் இரண்டு கண்களுக்கும் பொருந்துமா?"
  },
  {
    en: "What about spectacles afterwards?",
    ta: "அறுவை சிகிச்சைக்குப் பிறகு கண்ணாடி பற்றி என்ன?"
  },
  {
    en: "I am not from Pollachi. Can I still use my scheme?",
    ta: "நான் பொள்ளாச்சியைச் சேர்ந்தவன் அல்ல. நான் இன்னும் எனது திட்டத்தைப் பயன்படுத்தலாமா?"
  }
];

export default function CounterQuestions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <Reveal className={styles.head}>
            <h2 className={styles.h2}>
              <span className="en">Questions people actually ask at the counter</span>
              <span className="ta" lang="ta">வரவேற்பறையில் மக்கள் உண்மையில் கேட்கும் கேள்விகள்</span>
            </h2>
          </Reveal>

          <Reveal className={styles.listContainer} stagger={0.08}>
            <ul className={styles.list}>
              {QUESTIONS.map((q, idx) => (
                <li key={idx} className={styles.listItem}>
                  <span className="en">{q.en}</span>
                  <span className="ta" lang="ta">{q.ta}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.captionContainer}>
            <p className={styles.caption}>
              <span className="en">
                Scheme rules change. If anything here does not match what you have been told, call us — we would rather correct it than have you turned away at the counter.
              </span>
              <span className="ta" lang="ta">
                திட்ட விதிகளில் மாற்றங்கள் வரலாம். இங்குள்ள எதாவது உங்களிடம் கூறப்பட்டதற்கு பொருந்தவில்லை என்றால், எங்களை அழைக்கவும் - வரவேற்பறையில் நீங்கள் திருப்பி அனுப்பப்படுவதை விட, அதை திருத்துவதையே நாங்கள் விரும்புகிறோம்.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
