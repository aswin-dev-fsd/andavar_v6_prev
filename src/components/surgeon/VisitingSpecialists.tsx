import Reveal from "@/components/Reveal";
import styles from "./VisitingSpecialists.module.css";

export default function VisitingSpecialists() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className="en">Visiting Specialists</span>
              <span className="ta" lang="ta">பார்வையிடும் சிறப்பு மருத்துவர்கள்</span>
            </h2>
            <p className={styles.subtitle}>
              <span className="en">Expert care brought closer to you through our network of renowned visiting surgeons.</span>
              <span className="ta" lang="ta">புகழ்பெற்ற பார்வையிடும் மருத்துவர்களின் மூலம் உங்களுக்கு சிறந்த மருத்துவ சேவை.</span>
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                {/* Fallback avatar initials */}
                SK
              </div>
              <div className={styles.nameSection}>
                <h3 className={styles.name}>
                  <span className="en">Dr. T.M. Sathish Kumaar</span>
                  <span className="ta" lang="ta">டாக்டர் T.M. சதீஷ் குமார்</span>
                </h3>
                <p className={styles.qualifications}>
                  <span className="en">M.S OPHTHAL.</span>
                  <span className="ta" lang="ta">M.S OPHTHAL.</span>
                </p>
              </div>
            </div>

            <div className={styles.infoGroup}>
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>
                  <span className="en">Former Eye Surgeon, Aravind Eye Hospital</span>
                  <span className="ta" lang="ta">முன்னாள் கண் மருத்துவர் அரவிந்த் மருத்துவமனை</span>
                </span>
              </div>
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                <span>
                  <span className="en">Cataract and Glaucoma Surgery Specialist</span>
                  <span className="ta" lang="ta">கண்புரை மற்றும் கண்ணீர் அழுத்த நோய் அறுவை சிகிச்சை சிறப்பு மருத்துவர்</span>
                </span>
              </div>
            </div>

            <div className={styles.clinicSection}>
              <h4 className={styles.clinicName}>
                <span className="en">Sathish Eye Hospital</span>
                <span className="ta" lang="ta">சதீஷ் கண் மருத்துவமனை</span>
              </h4>
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  <span className="en">3/7, Sengunthapuram Main Road, Near Repco Bank, Karur. 639-002</span>
                  <span className="ta" lang="ta">3/7, செங்குந்தபுரம் மெயின் ரோடு, ரெப்கோ பேங்க் அருகில், கரூர். 639-002</span>
                </span>
              </div>
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  8807655155 / 04324-455389
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
