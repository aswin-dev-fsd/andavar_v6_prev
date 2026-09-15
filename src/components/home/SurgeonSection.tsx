import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./SurgeonSection.module.css";

const QUALIFICATIONS = [
  {
    title: "MBBS, DO",
    body: "Medical degree, then a diploma in ophthalmology — eyes only.",
  },
  {
    title: "DNB (Ophthalmology)",
    body: "The national board qualification for eye specialists in India.",
  },
  {
    title: "FICO (United Kingdom)",
    body: "Fellowship of the International Council of Ophthalmology.",
  },
  {
    title: "FRCS (Glasgow)",
    body: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
  },
];

export default function SurgeonSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className="eyebrow">Your surgeon</span>
          <h2 className={styles.h2}>Dr. A. Raghuram</h2>
          <p className={styles.lede}>
            At a large chain you are seen by whoever is on duty that day.
            Here there is one surgeon, and he will still be here at your
            follow-up next year.
          </p>
          <Link href="/our-surgeon" className={styles.arrowLink}>
            More about Dr. Raghuram →
          </Link>
        </Reveal>

        <Reveal className={styles.card} stagger={0.07}>
          <div className={styles.cardLabel}>Qualifications, in plain words</div>
          {QUALIFICATIONS.map((q) => (
            <div key={q.title} className={styles.row}>
              <div className={styles.rowTitle}>{q.title}</div>
              <div className={styles.rowBody}>{q.body}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
