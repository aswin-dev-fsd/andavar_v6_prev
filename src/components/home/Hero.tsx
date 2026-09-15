"use client";

import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { getClinicStatus } from "@/lib/clinicHours";
import styles from "./Hero.module.css";

export default function Hero() {
  const [status, setStatus] = useState<{ isOpen: boolean; pillLabel: string } | null>(
    null
  );

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.09}>
          <div className={styles.pill}>
            <span
              className={`${styles.dot} ${status && !status.isOpen ? styles.closed : ""}`}
              aria-hidden="true"
            />
            {status ? status.pillLabel : "Checking today's hours…"}
          </div>

          <h1 className={styles.h1}>
            <span className="en">
              Cataract and retina care in Pollachi, by the surgeon who
              examines you.
            </span>
            <span className="ta" lang="ta">
              பொள்ளாச்சியில் கண்புரை மற்றும் விழித்திரை சிகிச்சை.
            </span>
          </h1>

          <p className={styles.lede}>
            Dr. A. Raghuram has looked after this district&apos;s eyes since
            2013. He examines you, he operates, and he is the one who sees
            you at your follow-up.
          </p>

          <div className={styles.actions}>
            <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
              ☎ Call 04259 221 000
            </MagneticButton>
            <MagneticButton
              href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
              external
              className={styles.btnSecondary}
            >
              ◎ Get directions
            </MagneticButton>
          </div>

          <p className={styles.caption}>
            Opposite LMHSS School, Palladam Road. Walk in, or call and we
            will give you a time.
          </p>
        </Reveal>

        <div className={styles.visual} aria-hidden="true">
          {[220, 170, 120].map((size) => (
            <span
              key={size}
              className={styles.ring}
              style={{ width: size + "%", height: size + "%" }}
            />
          ))}
          <div className={styles.pupil} />
        </div>
      </div>
    </section>
  );
}
