"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./Gallery.module.css";

export interface GalleryItem {
  src: string;
  altEn: string;
  altTa: string;
}

interface GallerySectionProps {
  eyebrowEn: string;
  eyebrowTa: string;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  items: GalleryItem[];
}

export default function GallerySection({
  eyebrowEn,
  eyebrowTa,
  titleEn,
  titleTa,
  descriptionEn,
  descriptionTa,
  items,
}: GallerySectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal targets=":scope > *" stagger={0.1}>
          <div className={styles.header}>
            <span className="eyebrow">
              <span className="en">{eyebrowEn}</span>
              <span className="ta" lang="ta">{eyebrowTa}</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">{titleEn}</span>
              <span className="ta" lang="ta">{titleTa}</span>
            </h2>
            <p className={styles.description}>
              <span className="en">{descriptionEn}</span>
              <span className="ta" lang="ta">{descriptionTa}</span>
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.grid} targets=":scope > *" stagger={0.1}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={item.src}
                alt={item.altEn} // Next.js Image alt is required, we use En version for accessibility
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.caption}>
                <span className="en">{item.altEn}</span>
                <span className="ta" lang="ta">{item.altTa}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
