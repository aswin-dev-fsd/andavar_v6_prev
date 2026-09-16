import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./SurgeonProfileTop.module.css";

const QUALIFICATIONS = [
  {
    title: "MBBS, DO",
    body: "Medical degree, then a diploma in ophthalmology — eyes only.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "DNB (Ophthalmology)",
    body: "The national board qualification for eye specialists in India.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "FICO (United Kingdom)",
    body: "Fellowship of the International Council of Ophthalmology.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "FRCS (Glasgow)",
    body: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function SurgeonProfileTop() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Left Side: Portrait */}
        <Reveal className={styles.imageReveal}>
          <div className={styles.imageCol}>
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              alt="Dr. A. Raghuram"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.badgeStack}>
              <div className={styles.badge}>
                <span className={styles.dot}></span>
                Chief Surgeon
              </div>
              <div className={styles.badge}>FRCS (Glasgow)</div>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Content */}
        <div className={styles.contentCol}>
          <Reveal stagger={0.05}>
            <span className={styles.eyebrow}>Ophthalmology Leadership</span>
            <h1 className={styles.title}>Dr. A. Raghuram</h1>
            <div className={styles.bio}>
              <p>
                <strong>At a large chain you are seen by whoever is on duty that day.</strong> Here there is one surgeon, and he will still be here at your follow-up next year.
              </p>
              <p>
                Dr. Raghuram combines decades of specialized surgical expertise with a deeply personal approach to patient care. Focusing exclusively on advanced ophthalmology, he has established international benchmarks in cataract and complex reconstructive eye procedures. 
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} stagger={0.05}>
            <div className={styles.specsGrid}>
              {QUALIFICATIONS.map((q) => (
                <div key={q.title} className={styles.specCard}>
                  <div className={styles.specTitle}>
                    <span className={styles.specIcon}>{q.icon}</span>
                    {q.title}
                  </div>
                  <div className={styles.specBody}>{q.body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
