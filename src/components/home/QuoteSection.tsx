import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <span className="eyebrow">
            <span className="en">In their words</span> <span className="ta" lang="ta">அவர்களின் வார்த்தைகளில்</span>
          </span>
          <p className={styles.quote} style={{ marginTop: 14 }}>
            <span className="en">
              Patients must feel safe and reassured that they will be treated
              with the utmost care.
            </span>
            {" "}
            <span className="ta" lang="ta">
              நோயாளிகள் தங்களுக்கு மிகச் சிறந்த சிகிச்சை அளிக்கப்படும் என்ற பாதுகாப்பையும் நம்பிக்கையையும் உணர வேண்டும்.
            </span>
          </p>
          <div className={styles.attribution}>
            <span className="en">Dr. A. Raghuram</span> <span className="ta" lang="ta">டாக்டர் A. ரகுராம்</span>
          </div>
        </Reveal>

        <Reveal targets=":scope > *" stagger={0.1}>
          <p className={styles.body}>
            <span className="en">
              Most people who come here were sent by someone they trust a
              neighbour, a relative, the doctor down the road. That is how a
              practice lasts thirteen years in a town this size.
            </span>
            {" "}
            <span className="ta" lang="ta">
              இங்கு வரும் பெரும்பாலானோர் அவர்கள் நம்பும் ஒருவரால், அதாவது அண்டை வீட்டாரால், உறவினரால் அல்லது தங்களுக்குத் தெரிந்த மருத்துவரால் பரிந்துரைக்கப்பட்டு வருபவர்களே. இப்படித்தான் இந்த ஊரில் ஒரு மருத்துவமனை பதின்மூன்று ஆண்டுகளாக நிலைத்து நிற்கிறது.
            </span>
          </p>
          <Link href="/patient-stories" className={styles.link}>
            <span className="en">Read patient stories →</span> <span className="ta" lang="ta">நோயாளிகளின் கதைகளைப் படிக்க →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
