"use client";

import React from "react";
import Reveal from "@/components/Reveal";
import styles from "./BentoServices.module.css";

const Icons = {
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  Droplet: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
  ),
  ScanFace: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
  ),
  Gauge: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
  ),
  Baby: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 1.5-2 1.5c-.8 0-1.5-.4-1.5-1"/></svg>
  ),
  Activity: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ),
  Users: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Glasses: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 14.5a2 2 0 0 0-4 0"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M10 10.5 8 13"/><path d="M14 10.5 16 13"/></svg>
  ),
  Pill: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
  ),
  ShieldCheck: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3 8 3v5"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
  ),
};

const SERVICES = [
  {
    id: "cataract",
    title: "Cataract & IOL Services",
    icon: Icons.Sun,
    desc: "Advanced micro-incision cataract surgery with premium intraocular lens (IOL) implantation. We restore clear, vibrant vision through a painless, day-care procedure.",
    featured: true,
  },
  {
    id: "retina",
    title: "Retina Clinic",
    icon: Icons.ScanFace,
    desc: "Expert diagnosis and management of retinal disorders like diabetic retinopathy and macular degeneration, performed by our specialized surgeon.",
    featured: true,
    subItems: [
      "Retina laser treatments",
      "Intravitreal injections",
      "Vitreo retinal surgery",
    ],
  },
  {
    id: "general",
    title: "General Ophthalmology",
    icon: Icons.Eye,
    desc: "Comprehensive eye examinations and baseline screening.",
  },
  {
    id: "dryeye",
    title: "Dry Eye Clinic",
    icon: Icons.Droplet,
    desc: "Targeted therapies to relieve burning, gritty, and tired eyes.",
  },
  {
    id: "glaucoma",
    title: "Glaucoma Clinic",
    icon: Icons.Gauge,
    desc: "Early detection and visual field testing to prevent silent vision loss.",
  },
  {
    id: "paediatric",
    title: "Paediatric Eye Care",
    icon: Icons.Baby,
    desc: "Gentle, specialized care for children's eyes and visual development.",
  },
  {
    id: "contactlens",
    title: "Contact Lens Services",
    icon: Icons.Eye,
    desc: "Professional fitting and dispensing of contact lenses tailored to you.",
    subItems: [
      "Normal & Disposable lenses",
      "Cosmetic lenses",
    ],
  },
  {
    id: "orbit",
    title: "Orbit & Oculoplasty",
    icon: Icons.Users,
    desc: "Corrective treatments for eyelids, tear ducts, and orbit.",
  },
  {
    id: "master",
    title: "Master Health Checkup",
    icon: Icons.Activity,
    desc: "Thorough ocular health evaluation to catch symptomless diseases.",
  },
  {
    id: "community",
    title: "Community Ophthalmology",
    icon: Icons.Users,
    desc: "Outreach camps and awareness programs to eradicate blindness.",
  },
  {
    id: "optical",
    title: "Advanced Optical Shop",
    icon: Icons.Glasses,
    desc: "Wide selection of premium frames and precision lenses.",
  },
  {
    id: "pharmacy",
    title: "Dispensing Pharmacy",
    icon: Icons.Pill,
    desc: "In-house pharmacy for authentic ophthalmic medications.",
  },
  {
    id: "insurance",
    title: "Insurance & Claims",
    icon: Icons.ShieldCheck,
    desc: "Hassle-free financial processing for your treatments. We support major health schemes and provide dedicated assistance for cashless claims and reimbursements.",
    featured: true,
  },
];

export default function BentoServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.grid} stagger={0.05}>
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`${styles.card} ${s.featured ? styles.cardFeatured : ""}`}
              >
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3 className={styles.title}>{s.title}</h3>
                
                <div className={styles.contentWrapper}>
                  <p className={`${styles.description} ${s.subItems ? styles.hasSub : ""}`}>
                    {s.desc}
                  </p>
                  
                  {s.subItems && (
                    <div className={styles.subItemsOverlay}>
                      {s.subItems.map((sub, idx) => (
                        <div key={idx} className={styles.subItem}>
                          <Icons.ChevronRight className={styles.subIcon} width={16} height={16} />
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
