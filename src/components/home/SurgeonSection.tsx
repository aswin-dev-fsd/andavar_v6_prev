import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./SurgeonSection.module.css";

const QUALIFICATIONS = [
  {
    titleEn: "MBBS, DO",
    titleTa: "MBBS, DO",
    bodyEn: "Medical degree, diploma in ophthalmology.",
    bodyTa: "மருத்துவப் பட்டம், கண் மருத்துவத்தில் பட்டயம்.",
  },
  {
    titleEn: "DNB (Ophthalmology)",
    titleTa: "DNB (கண் மருத்துவம்)",
    bodyEn: "The national board qualification for eye specialists in India.",
    bodyTa: "இந்தியாவில் கண் சிறப்பு மருத்துவர்களுக்கான தேசிய வாரியத் தகுதி.",
  },
  {
    titleEn: "FICO (United Kingdom)",
    titleTa: "FICO (ஐக்கிய ராஜ்ஜியம்)",
    bodyEn: "Fellowship of the International Council of Ophthalmology.",
    bodyTa: "சர்வதேச கண் மருத்துவ கவுன்சிலின் பெல்லோஷிப்.",
  },
  {
    titleEn: "FRCS (Glasgow)",
    titleTa: "FRCS (கிளாஸ்கோ)",
    bodyEn: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
    bodyTa: "ராயல் காலேஜ் ஆஃப் சர்ஜன்ஸ் வழங்கும் அறுவை சிகிச்சை பெல்லோஷிப் — இந்த அளவிலான ஒரு நகரத்தில் இது அரிதானது.",
  },
];

export default function SurgeonSection() {
  return (
    <section className={styles.section}>
      <img src="/images/surgeon-performing-microscopic-eye-surgery.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/doctor-detailed-slit-lamp-examination.webp"
              alt="Slit lamp examination"
              fill
              className={styles.image}
            />
          </div>
          <span className="eyebrow">
            <span className="en">Your surgeon</span> <span className="ta" lang="ta">உங்கள் மருத்துவர்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Dr. A. Raghuram</span> <span className="ta" lang="ta">டாக்டர் ஏ. ரகுராம்</span>
          </h2>
        </Reveal>

        <Reveal className={styles.card} stagger={0.07}>
          <div className={styles.cardLabel}>
            <span className="en">Qualifications, in plain words</span> <span className="ta" lang="ta">எளிய வார்த்தைகளில் தகுதிகள்</span>
          </div>
          {QUALIFICATIONS.map((q) => (
            <div key={q.titleEn} className={styles.row}>
              <div className={styles.rowTitle}>
                <span className="en">{q.titleEn}</span> <span className="ta" lang="ta">{q.titleTa}</span>
              </div>
              <div className={styles.rowBody}>
                <span className="en">{q.bodyEn}</span> <span className="ta" lang="ta">{q.bodyTa}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
