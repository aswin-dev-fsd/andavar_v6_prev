import Reveal from "@/components/Reveal";
import styles from "./PremiumLenses.module.css";

const LENSES = [
  {
    title: "Monofocal Lenses",
    body: "The standard choice. Provides excellent vision at a single distance (usually far). You will likely still need reading glasses for close-up tasks like reading menus or your phone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  },
  {
    title: "Multifocal Lenses",
    body: "Advanced premium lenses designed with multiple focal zones. They reduce or eliminate the need for glasses by allowing you to see clearly at near, intermediate, and far distances.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
  {
    title: "Toric Lenses",
    body: "Specially designed for patients with astigmatism. These lenses correct the irregular shape of the cornea in addition to replacing the cloudy cataract lens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    )
  }
];

export default function PremiumLenses() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Intraocular Lenses (IOLs)</span>
            <h2 className={styles.title}>Choosing your new vision.</h2>
            <p className={styles.subtitle}>
              Cataract surgery doesn't just restore your vision—it's an opportunity to upgrade it. Based on your lifestyle and eye health, our surgeons will help you select the perfect premium lens.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.15} targets=":scope > *">
          {LENSES.map((lens) => (
            <div key={lens.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                {lens.icon}
              </div>
              <h3 className={styles.cardTitle}>{lens.title}</h3>
              <p className={styles.cardBody}>{lens.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
