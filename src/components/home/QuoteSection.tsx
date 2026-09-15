import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <span className="eyebrow">In their words</span>
          <p className={styles.quote} style={{ marginTop: 14 }}>
            Patients must feel safe and reassured that they will be treated
            with the utmost care.
          </p>
          <div className={styles.attribution}>Dr. A. Raghuram</div>
        </Reveal>

        <Reveal targets=":scope > *" stagger={0.1}>
          <p className={styles.body}>
            Most people who come here were sent by someone they trust — a
            neighbour, a relative, the doctor down the road. That is how a
            practice lasts thirteen years in a town this size.
          </p>
          <Link href="/patient-stories" className={styles.link}>
            Read patient stories →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
