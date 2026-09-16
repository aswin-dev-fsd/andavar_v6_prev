import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <div>
          <Image
            src="/logo.png"
            alt="Shri Andavar Eye Care & Retina Centre"
            width={300}
            height={80}
            className={styles.logo}
          />
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
            <Link href="/our-surgeons">Our surgeons</Link>
            <Link href="/about">About</Link>
            <Link href="/patient-stories">Patient stories</Link>
            <Link href="/schemes">Schemes &amp; insurance</Link>
            <Link href="/eye-health">Eye health tips</Link>
          </div>
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
