import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./CostSection.module.css";

const TICKS = [
  {
    title: "Chief Minister's Comprehensive Health Insurance Scheme",
    body: "CMCHIS — bring your scheme card and Aadhaar.",
  },
  {
    title: "Pensioners Health Scheme",
    body: "For retired government employees and their dependants.",
  },
  {
    title: "Star Health Insurance",
    body: "Cashless, subject to your policy terms.",
  },
];

export default function CostSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className="eyebrow">Cost</span>
          <h2 className={styles.h2}>Ask about the money. Everybody does.</h2>
          <p className={styles.lede}>
            It is the question people are most embarrassed to ask and most
            worried about. Here are the schemes we accept, stated plainly.
          </p>
          <Link href="/schemes" className={styles.btnGhost}>
            Schemes &amp; insurance
          </Link>
        </Reveal>

        <Reveal className={styles.card} stagger={0.08}>
          {TICKS.map((t) => (
            <div key={t.title} className={styles.tick}>
              <span className={styles.tickIcon} aria-hidden="true">
                ✓
              </span>
              <div>
                <div className={styles.tickTitle}>{t.title}</div>
                <div className={styles.tickBody}>{t.body}</div>
              </div>
            </div>
          ))}
          <p className={styles.caption}>
            Not sure whether yours is covered? Call and ask — it takes a
            minute and costs nothing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
