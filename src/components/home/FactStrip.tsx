import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import styles from "./FactStrip.module.css";

const FACTS = [
  { value: 13, suffix: " yrs", label: "In Pollachi since 2013" },
  { value: 1, suffix: "", label: "Surgeon, from first visit to last follow-up" },
  { value: 2, suffix: "", label: "Sessions a day — morning and evening" },
  { value: 3, suffix: "", label: "Schemes and insurances accepted" },
];

export default function FactStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.strip} stagger={0.08}>
          {FACTS.map((f) => (
            <div key={f.label} className={styles.cell}>
              <div className={styles.number}>
                <Counter value={f.value} suffix={f.suffix} />
              </div>
              <div className={styles.label}>{f.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
