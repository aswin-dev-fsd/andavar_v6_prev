import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import styles from "./VisitSection.module.css";

export default function VisitSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className={`eyebrow ${styles.eyebrow}`}>Come and see us</span>
          <h2 className={styles.h2}>Opposite LMHSS School, on Palladam Road.</h2>
          <p className={styles.lede}>
            In a town, the landmark does more work than the postcode. If you
            know the school, you know where we are.
          </p>
          <div className={styles.actions}>
            <MagneticButton
              href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
              external
              className={styles.btnPrimary}
            >
              ◎ Open in Maps
            </MagneticButton>
            <MagneticButton href="/visit-us" className={styles.btnSecondary}>
              Visiting details
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className={styles.panel} stagger={0.08}>
          <div className={styles.row}>
            <div className={styles.rowLabel}>Address</div>
            <div className={styles.rowValue}>
              No. 73, Palladam Road, Opposite LMHSS School, T. Kottampatti,
              Pollachi 642002
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>Consulting hours</div>
            <div className={styles.rowValue}>
              Mon–Sat · 10:00 AM – 2:00 PM and 5:00 – 7:00 PM
              <br />
              Sunday closed
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>Telephone</div>
            <div className={styles.rowValue}>04259 221 000</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
