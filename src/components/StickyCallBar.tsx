"use client";

import { useEffect, useState } from "react";
import { getClinicStatus } from "@/lib/clinicHours";
import styles from "./StickyCallBar.module.css";

export default function StickyCallBar() {
  const [status, setStatus] = useState<{ callLabelEn: string; callLabelTa: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.bar}>
      <a href="tel:+914259221000" className={`${styles.btn} ${styles.call}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        {status ? (
          <>
            <span className="en">{status.callLabelEn}</span>
            <span className="ta" lang="ta">{status.callLabelTa}</span>
          </>
        ) : "Call the hospital"}
      </a>
      <a
        href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.directions}`}
      >
        ◎ <span className="en">Directions</span><span className="ta" lang="ta">வழி காட்டி</span>
      </a>
    </div>
  );
}
