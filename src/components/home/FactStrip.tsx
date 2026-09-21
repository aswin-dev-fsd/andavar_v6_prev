import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import styles from "./FactStrip.module.css";

const FACTS = [
  { value: 13, numSuffix: "+", textEn: "Years", textTa: "ஆண்டுகள்", labelEn: <>Caring for Pollachi<br/>since 2013</>, labelTa: <>பொள்ளாச்சியில்<br/>2013 முதல்</> },
  { value: 1, numSuffix: "", textEn: "Surgeon", textTa: "மருத்துவர்", labelEn: <>Personalised care from<br/>your first visit to follow-up</>, labelTa: <>முதல் பரிசோதனை முதல்<br/>தொடர் சிகிச்சை வரை ஒரே மருத்துவர்</> },
  { value: 2, numSuffix: "", textEn: "Sessions", textTa: "நேரங்கள்", labelEn: <>Morning and evening<br/>consultation sessions</>, labelTa: <>காலை மற்றும் மாலை<br/>ஆலோசனை நேரங்கள்</> },
  { value: 22, numSuffix: "", textEn: "Schemes", textTa: "திட்டங்கள்", labelEn: <>Government schemes and<br/>insurance accepted</>, labelTa: <>காப்பீடு மற்றும் அரசு<br/>மருத்துவத் திட்டங்கள் ஏற்கப்படும்</> },
];

export default function FactStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.strip} stagger={0.08}>
          {FACTS.map((f, idx) => (
            <div key={idx} className={styles.cell}>
              <div className={styles.numberBlock}>
                <div>
                  <Counter value={f.value} />{f.numSuffix}
                </div>
                <div>
                  <span className="en">{f.textEn}</span>
                  <span className="ta" lang="ta">{f.textTa}</span>
                </div>
              </div>
              <div className={styles.label}>
                <span className="en">{f.labelEn}</span> <span className="ta" lang="ta">{f.labelTa}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
