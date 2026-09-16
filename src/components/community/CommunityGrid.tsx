import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./CommunityGrid.module.css";

const ACTIVITIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop",
    date: "August 2026",
    titleEn: "Free Eye Checkup Camp in Rural Pollachi",
    titleTa: "பொள்ளாச்சி கிராமப்புறங்களில் இலவச கண் பரிசோதனை முகாம்",
    height: 400,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1527613426401-41c31cbd2853?q=80&w=1000&auto=format&fit=crop",
    date: "June 2026",
    titleEn: "School Vision Screening Program",
    titleTa: "பள்ளி மாணவர்களுக்கான கண் பரிசோதனை திட்டம்",
    height: 300,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    date: "March 2026",
    titleEn: "Glaucoma Awareness Walkathon",
    titleTa: "கண் அழுத்த நோய் விழிப்புணர்வு பேரணி",
    height: 450,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
    date: "January 2026",
    titleEn: "Surgical Outreach for the Elderly",
    titleTa: "முதியோருக்கான இலவச அறுவை சிகிச்சை",
    height: 350,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3f4?q=80&w=1000&auto=format&fit=crop",
    date: "November 2025",
    titleEn: "Diabetic Retinopathy Screening Camp",
    titleTa: "நீரிழிவு விழித்திரை நோய் பரிசோதனை முகாம்",
    height: 400,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop",
    date: "September 2025",
    titleEn: "Donating Spectacles to Underprivileged Children",
    titleTa: "ஏழை குழந்தைகளுக்கு இலவச கண்ணாடிகள் வழங்குதல்",
    height: 280,
  },
];

export default function CommunityGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.grid}>
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className={styles.item}>
              <div 
                className={styles.imageWrapper} 
                style={{ height: activity.height }}
              >
                <Image
                  src={activity.image}
                  alt={activity.titleEn}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.date}>{activity.date}</div>
                <h3 className={styles.title}>
                  <span className="en">{activity.titleEn}</span>
                  <span className="ta" lang="ta">{activity.titleTa}</span>
                </h3>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
