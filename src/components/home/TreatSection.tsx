import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./TreatSection.module.css";

const CARDS = [
  {
    symptom: "Things look cloudy, faded or washed out",
    title: "Cataract surgery",
    body: "The lens inside your eye has clouded. It is replaced with a clear artificial one in a day-care procedure.",
    href: "/cataract-surgery",
  },
  {
    symptom: "A shadow, floaters or sudden blurring",
    title: "Retina care",
    body: "Retinal detachment, macular disease and laser treatment for the eye's most delicate layer.",
    href: "/treatments",
  },
  {
    symptom: "You have diabetes and have not had your eyes checked",
    title: "Diabetic eye care",
    body: "A yearly screening catches damage at the back of the eye long before you would notice it.",
    href: "/treatments",
  },
  {
    symptom: "Headaches, or glaucoma in the family",
    title: "Glaucoma & check-ups",
    body: "Pressure testing and long-term monitoring for a condition that takes sight quietly.",
    href: "/treatments",
  },
];

export default function TreatSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">What we treat</span>
          <h2 className={styles.h2}>Start with what you have noticed.</h2>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.08}>
          {CARDS.map((c) => (
            <div key={c.title} className={styles.card}>
              <span aria-hidden="true" className={styles.corner} />
              <div className={styles.symptom}>{c.symptom}</div>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.body}>{c.body}</p>
              <Link href={c.href} className={styles.link}>
                Read more →
              </Link>
            </div>
          ))}
        </Reveal>

        <div className={styles.more}>
          <Link href="/treatments">See everything we treat →</Link>
        </div>
      </div>
    </section>
  );
}
