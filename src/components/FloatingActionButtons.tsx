"use client";

import styles from "./FloatingActionButtons.module.css";
import Link from "next/link";

export default function FloatingActionButtons() {
  return (
    <div className={styles.container}>
      {/* LinkedIn Button */}
      <Link
        href="https://andavar-v6-prev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fab}
        aria-label="Visit our LinkedIn Profile"
        title="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>

      {/* Google Maps Button */}
      <Link
        href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fab}
        aria-label="Open in Google Maps"
        title="Location"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </Link>
    </div>
  );
}
