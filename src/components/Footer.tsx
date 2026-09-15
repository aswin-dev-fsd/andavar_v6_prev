import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.brandName}>Shri Andavar</div>
          <span className={styles.brandSub}>Eye Care &amp; Retina Centre</span>
          <p className={styles.blurb}>
            Cataract and retina care in Pollachi since 2013, by one surgeon
            who sees you from the first examination to the last follow-up.
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>Treatments</div>
          <div className={styles.linkList}>
            <Link href="/cataract-surgery">Cataract surgery</Link>
            <Link href="/treatments">Retina care</Link>
            <Link href="/treatments">Diabetic eye care</Link>
            <Link href="/treatments">Glaucoma</Link>
            <Link href="/treatments">Eye check-up</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>The Hospital</div>
          <div className={styles.linkList}>
            <Link href="/our-surgeon">Our surgeon</Link>
            <Link href="/about">About</Link>
            <Link href="/patient-stories">Patient stories</Link>
            <Link href="/schemes">Schemes &amp; insurance</Link>
            <Link href="/eye-health">Eye health tips</Link>
          </div>
        </div>

        <div className={styles.visit}>
          <div className={styles.colTitle}>Visit Us</div>
          <p>
            No. 73, Palladam Road, Opposite LMHSS School,
            <br />
            T. Kottampatti, Pollachi 642002
          </p>
          <a href="tel:+914259221000" className={styles.phone}>
            04259 221 000
          </a>
          <a href="tel:+919442056767">94420 56767</a>
          <p>Mon–Sat · 10:00 AM – 2:00 PM and 5:00 – 7:00 PM. Sunday closed.</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} Shri Andavar Eye Care and Retina Centre
        </span>
        <span>Pollachi, Tamil Nadu</span>
      </div>
    </footer>
  );
}
