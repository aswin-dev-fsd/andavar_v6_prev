import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import styles from "./VisitSection.module.css";

export default function VisitSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className={`eyebrow ${styles.eyebrow}`}>
            <span className="en">Come and see us</span> <span className="ta" lang="ta">எங்களை வந்து காணுங்கள்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Opposite LMHSS School, on Palladam Road.</span> <span className="ta" lang="ta">LMHSS பள்ளிக்கு எதிரில், பல்லடம் சாலையில்.</span>
          </h2>
          <p className={styles.lede}>
            <span className="en">
              In a town, the landmark does more work than the postcode. If you
              know the school, you know where we are.
            </span>
            {" "}
            <span className="ta" lang="ta">
              ஒரு சிறிய ஊரில், அஞ்சல் குறியீட்டை விட அடையாளமே அதிகம் பயன்படும். பள்ளி எங்குள்ளது எனத் தெரிந்தால், நாங்கள் எங்குள்ளோம் என்பதும் உங்களுக்குத் தெரியும்.
            </span>
          </p>
          <div className={styles.actions}>
            <MagneticButton
              href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
              external
              className={styles.btnPrimary}
            >
              <span className="en">◎ Open in Maps</span> <span className="ta" lang="ta">◎ மேப்ஸில் திறக்க</span>
            </MagneticButton>
            <MagneticButton href="/about" className={styles.btnSecondary}>
              <span className="en">Visiting details</span> <span className="ta" lang="ta">பார்வை நேர விவரங்கள்</span>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className={styles.panel} stagger={0.08}>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Address</span> <span className="ta" lang="ta">முகவரி</span>
            </div>
            <div className={styles.rowValue}>
              <span className="en">
                No. 73, Palladam Road, Opposite LMHSS School, T. Kottampatti,
                Pollachi 642002
              </span>
              <span className="ta" lang="ta" style={{ display: "block" }}>
                எண். 73, பல்லடம் ரோடு, LMHSS பள்ளி எதிரில், டி. கோட்டாம்பட்டி,
                பொள்ளாச்சி 642002
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Consulting hours</span> <span className="ta" lang="ta">பார்வை நேரங்கள்</span>
            </div>
            <div className={styles.rowValue}>
              <span className="en">
                Mon–Sat · 10:00 AM – 2:00 PM and 5:00 – 7:00 PM
                <br />
                Sunday closed
              </span>
              <span className="ta" lang="ta" style={{ display: "block" }}>
                திங்கள்–சனி · காலை 10:00 – மதியம் 2:00 மற்றும் மாலை 5:00 – 7:00
                <br />
                ஞாயிறு விடுமுறை
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Telephone</span> <span className="ta" lang="ta">தொலைபேசி</span>
            </div>
            <div className={styles.rowValue}>04259 221 000</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
