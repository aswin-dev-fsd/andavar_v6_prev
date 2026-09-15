"use client";

import { useEffect, useState } from "react";
import { getClinicStatus } from "@/lib/clinicHours";
import styles from "./StickyCallBar.module.css";

export default function StickyCallBar() {
  const [callLabel, setCallLabel] = useState("Call the hospital");

  useEffect(() => {
    const update = () => setCallLabel(getClinicStatus().callLabel);
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.bar}>
      <a href="tel:+914259221000" className={`${styles.btn} ${styles.call}`}>
        ☎ {callLabel}
      </a>
      <a
        href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.directions}`}
      >
        ◎ Directions
      </a>
    </div>
  );
}
