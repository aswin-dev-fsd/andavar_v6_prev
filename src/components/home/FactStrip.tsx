import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import styles from "./FactStrip.module.css";

const FACTS = [
  { value: 13, suffix: " yrs", labelEn: <>In Pollachi<br/>since 2013</>, labelTa: <>பொள்ளாச்சியில்<br/>2013 முதல்</> },
  { value: 1, suffix: "", labelEn: <>Surgeon, from first visit<br/>to last follow-up</>, labelTa: <>முதல் சந்திப்பு முதல்<br/>கடைசி வரை ஒரே மருத்துவர்</> },
  { value: 2, suffix: "", labelEn: <>Sessions a day<br/>Morning and evening</>, labelTa: <>ஒரு நாளைக்கு 2 முறை<br/>காலை மற்றும் மாலை</> },
  { value: 3, suffix: "", labelEn: <>Schemes and<br/>insurances accepted</>, labelTa: <>காப்பீட்டுத்<br/>திட்டங்கள் ஏற்கப்படும்</> },
];

export default function FactStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.strip} stagger={0.08}>
          {FACTS.map((f, idx) => (
            <div key={idx} className={styles.cell}>
              <div className={styles.number}>
                <Counter value={f.value} suffix={f.suffix} />
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
