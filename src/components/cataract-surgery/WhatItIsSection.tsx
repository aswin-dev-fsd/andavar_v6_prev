import Reveal from "@/components/Reveal";
import styles from "./WhatItIsSection.module.css";

export default function WhatItIsSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.08}>
          <h2 className={styles.h2}>
            <span className="en">What a cataract actually is</span>
            <span className="ta" lang="ta">கண்புரை என்றால் என்ன?</span>
          </h2>
          <p className={styles.p}>
            <span className="en">Behind your pupil sits a clear lens, about the size of a lentil, that focuses light onto the back of the eye. With age it slowly turns cloudy. Light scatters instead of focusing, and the world looks faded, hazy, or as though you are looking through a dirty window.</span>
            <span className="ta" lang="ta">உங்கள் கண் பாவைக்கு (pupil) பின்னால், ஒரு சிறிய பருப்பு அளவில், ஒளியைக் கண்ணின் பின்புறத்தில் குவிக்கும் ஒரு தெளிவான லென்ஸ் உள்ளது. வயதாகும்போது அது மெதுவாக மங்கலாகிறது. ஒளி குவிக்கப்படுவதற்குப் பதிலாகச் சிதறடிக்கப்படுவதால், உலகம் மங்கலாகவோ, பனிமூட்டமாகவோ அல்லது அழுக்கடைந்த கண்ணாடியின் வழியே பார்ப்பது போலவோ தெரியும்.</span>
          </p>
          <p className={styles.p}>
            <span className="en">It is not a growth, it is not a film over the eye, and no drop will clear it. The only treatment that works is to replace the lens — which is a fifteen-minute, day-care procedure.</span>
            <span className="ta" lang="ta">இது ஒரு வளர்ச்சியோ அல்லது கண்ணின் மீது படியும் படலமோ அல்ல, எந்தச் சொட்டு மருந்தும் இதனைச் சரிசெய்யாது. இதற்குள்ள ஒரே சிகிச்சை லென்ஸை மாற்றுவதுதான் — இது பதினைந்து நிமிடங்களில் முடிந்து, அன்றே வீடு திரும்பக்கூடிய ஒரு எளிய செயல்முறை.</span>
          </p>
        </Reveal>

        <Reveal className={styles.visual} stagger={0.1}>
          <div className={styles.diagramBox}>
            {/* Abstract Eye Diagram */}
            <div className={styles.eyeShape}>
              <div className={styles.corneaPath}></div>
              <div className={styles.lensShape}></div>
              <div className={styles.retinaPath}></div>
            </div>
            
            {/* Labels */}
            <div className={`${styles.label} ${styles.labelCornea}`}>
              <div className={styles.line} />
              <span>
                <span className="en">Cornea</span>
                <span className="ta" lang="ta">கார்னியா</span>
              </span>
            </div>
            <div className={`${styles.label} ${styles.labelLens}`}>
              <div className={styles.line} />
              <span>
                <span className="en">Clouded lens</span>
                <span className="ta" lang="ta">மங்கலான லென்ஸ்</span>
              </span>
            </div>
            <div className={`${styles.label} ${styles.labelRetina}`}>
              <div className={styles.line} />
              <span>
                <span className="en">Retina<br/><small>(where the image forms)</small></span>
                <span className="ta" lang="ta">விழித்திரை<br/><small>(பிம்பம் உருவாகும் இடம்)</small></span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
