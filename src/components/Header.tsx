"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const NAV = [
  { href: "/treatments", labelEn: "Treatments", labelTa: "சிகிச்சைகள்" },
  { href: "/our-surgeons", labelEn: "Our Surgeons", labelTa: "எங்கள் மருத்துவர்கள்" },
  { href: "/schemes", labelEn: "Schemes", labelTa: "திட்டங்கள்" },
  { href: "/community", labelEn: "Community", labelTa: "சமூகம்" },
  { href: "/about", labelEn: "About", labelTa: "எங்களைப் பற்றி" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ta">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("sa-lang");
    if (stored === "ta" || stored === "en") {
      // Deliberately deferred to an effect: the server always renders "en" first,
      // so restoring the saved language during render would mismatch on hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
      document.documentElement.dataset.lang = stored;
    }
  }, []);

  function switchLang(next: "en" | "ta") {
    setLang(next);
    document.documentElement.dataset.lang = next;
    window.localStorage.setItem("sa-lang", next);
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brandLink}>
          <Image
            src="/logo_v3.png"
            alt="Shri Andavar Eye Care & Retina Centre"
            width={300}
            height={80}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.langToggle} role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? styles.activeLang : ""}
              onClick={() => switchLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "ta" ? styles.activeLang : ""}
              onClick={() => switchLang("ta")}
            >
              த
            </button>
          </div>
          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
