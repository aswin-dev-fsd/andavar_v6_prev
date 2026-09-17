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
            src="/logo_v3.png"
            alt="Shri Andavar Eye Care & Retina Centre"
            width={300}
            height={80}
            className={styles.logo}
          />
          <p className={styles.blurb}>
            <span className="en">
              Cataract and retina care in Pollachi since 2013, by one surgeon
              who sees you from the first examination to the last follow-up.
            </span>
            {" "}
            <span className="ta" lang="ta">
              2013 முதல் பொள்ளாச்சியில் கண்புரை மற்றும் விழித்திரை சிகிச்சை. முதல் பரிசோதனை முதல் இறுதி வரை ஒருவரே அறுவை சிகிச்சை நிபுணர்.
            </span>
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>
            <span className="en">Treatments</span> <span className="ta" lang="ta">சிகிச்சைகள்</span>
          </div>
          <div className={styles.linkList}>
            <Link href="/cataract-surgery">
              <span className="en">Cataract Surgery</span> <span className="ta" lang="ta">கண்புரை அறுவை சிகிச்சை</span>
            </Link>
            <Link href="/treatments">
              <span className="en">Retina Care</span> <span className="ta" lang="ta">விழித்திரை சிகிச்சை</span>
            </Link>
            <Link href="/treatments">
              <span className="en">Diabetic Eye Care</span> <span className="ta" lang="ta">நீரிழிவு கண் பராமரிப்பு</span>
            </Link>
            <Link href="/treatments">
              <span className="en">Glaucoma</span> <span className="ta" lang="ta">குளுக்கோமா</span>
            </Link>
            <Link href="/treatments">
              <span className="en">Eye check-up</span> <span className="ta" lang="ta">கண் பரிசோதனை</span>
            </Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>
            <span className="en">The Hospital</span> <span className="ta" lang="ta">மருத்துவமனை</span>
          </div>
          <div className={styles.linkList}>
            <Link href="/our-surgeons">
              <span className="en">Our surgeons</span> <span className="ta" lang="ta">எங்கள் மருத்துவர்</span>
            </Link>
            <Link href="/patient-stories">
              <span className="en">Patient stories</span> <span className="ta" lang="ta">நோயாளிகளின் கதைகள்</span>
            </Link>
            <Link href="/schemes">
              <span className="en">Schemes &amp; insurance</span> <span className="ta" lang="ta">திட்டங்கள் &amp; காப்பீடு</span>
            </Link>
            <Link href="/eye-health">
              <span className="en">Eye health tips</span> <span className="ta" lang="ta">கண் ஆரோக்கிய குறிப்புகள்</span>
            </Link>
            <Link href="/community">
              <span className="en">Community &amp; CSR</span> <span className="ta" lang="ta">சமூகம் &amp; CSR</span>
            </Link>
            <Link href="/about">
              <span className="en">About</span> <span className="ta" lang="ta">எங்களைப் பற்றி</span>
            </Link>
          </div>
      </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          <span className="en">© {year} Shri Andavar Eye Care and Retina Centre</span> <span className="ta" lang="ta">© {year} ஸ்ரீ ஆண்டவர் ஐ கேர் மற்றும் ரெட்டினா சென்டர்</span>
        </span>
        <span>
          <span className="en">Pollachi, Tamil Nadu</span> <span className="ta" lang="ta">பொள்ளாச்சி, தமிழ்நாடு</span>
        </span>
      </div>
    </footer>
  );
}
