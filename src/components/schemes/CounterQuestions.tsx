import Reveal from "@/components/Reveal";
import styles from "./CounterQuestions.module.css";

const QUESTIONS = [
  {
    en: "FAQ Question 1 (Content pending from client)",
    ta: "கேள்வி 1 (வாடிக்கையாளர் உள்ளடக்கத்திற்காக காத்திருக்கிறது)"
  },
  {
    en: "FAQ Question 2 (Content pending from client)",
    ta: "கேள்வி 2 (வாடிக்கையாளர் உள்ளடக்கத்திற்காக காத்திருக்கிறது)"
  },
  {
    en: "FAQ Question 3 (Content pending from client)",
    ta: "கேள்வி 3 (வாடிக்கையாளர் உள்ளடக்கத்திற்காக காத்திருக்கிறது)"
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
