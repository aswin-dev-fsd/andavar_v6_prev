import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./SurgeonStatsCTA.module.css";

const STATS = [
  { value: "4,200+", label: "Successful Surgeries" },
  { value: "99.4%", label: "Complication-Free" },
  { value: "20+ Years", label: "Clinical Leadership" },
];

export default function SurgeonStatsCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.radialGlow} />
      
      <div className={`container ${styles.container}`}>
        <Reveal stagger={0.1}>
          <div className={styles.eyebrow}>Excellence in Eye Care</div>
          
          <h2 className={styles.title}>
            Mastery in Every Incision. <br />
            <em>Restoring Vision </em>with Precision.
          </h2>
          
          <p className={styles.subtitle}>
            Combining over two decades of surgical leadership with state-of-the-art 
            micro-surgical technology to redefine cataract and complex reconstructive outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.2} stagger={0.1}>
          <div className={styles.statsRow}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={styles.actions}>
            <MagneticButton href="/contact" className={styles.btnPrimary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Schedule Consultation
            </MagneticButton>
            
            <MagneticButton href="/treatments" className={styles.btnSecondary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Explore Our Treatments
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
