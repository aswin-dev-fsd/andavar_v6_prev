import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./SurgeonProfileTop.module.css";

const QUALIFICATIONS = [
  {
    title: "MBBS, DO",
    body: "Medical degree, then a diploma in ophthalmology — eyes only.",
  },
  {
    title: "DNB (Ophthalmology)",
    body: "The national board qualification for eye specialists in India.",
  },
  {
    title: "FICO (United Kingdom)",
    body: "Fellowship of the International Council of Ophthalmology.",
  },
  {
    title: "FRCS (Glasgow)",
    body: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
  },
];

export default function SurgeonProfileTop() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Left Side: Portrait */}
        <Reveal>
          <div className={styles.imageCol}>
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              alt="Dr. A. Raghuram"
              width={1000}
              height={1250}
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.specIcon}
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
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
