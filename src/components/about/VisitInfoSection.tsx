import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./VisitInfoSection.module.css";

export default function VisitInfoSection() {
  return (
    <section id="getting-here" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.card} stagger={0.08} targets=":scope > *">
          <div className={styles.fact}>
            <span className="eyebrow">Address</span>
            <div className={styles.val}>
              No. 73, Palladam Road, Opposite LMHSS School, <br />
              T. Kottampatti, Pollachi 642002
            </div>
            <div className={styles.caption}>
              <span className="en">The landmark is the school — everyone local knows it. We are directly opposite.</span>
              <span className="ta" lang="ta">LMHSS பள்ளி தான் அடையாளம் — உள்ளூர் மக்கள் அனைவருக்கும் அது தெரியும். நாங்கள் அதற்கு நேர் எதிராகவே இருக்கிறோம்.</span>
            </div>
          </div>
          
          <div className={styles.fact}>
            <span className="eyebrow">Consulting Hours</span>
            <div className={styles.val}>
              Monday to Saturday <br />
              Morning 10:00 AM – 2:00 PM <br />
              Evening 5:00 PM – 7:00 PM <br />
              Sunday closed
            </div>
          </div>
          
          <div className={styles.fact}>
            <span className="eyebrow">Telephone</span>
            <div className={styles.val}>
              04259 221 000 <br />
              94420 56767
            </div>
            <div className={styles.caption}>
              <span className="en">Call during consulting hours and someone will answer.</span>
              <span className="ta" lang="ta">பரிசோதனை நேரங்களில் அழையுங்கள், நிச்சயமாக பதில் கிடைக்கும்.</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.gettingHere} stagger={0.08} targets=":scope > *">
          <h2 className={styles.h2}>
            <span className="en">Getting here</span>
            <span className="ta" lang="ta">இங்கு வருவதற்கு</span>
          </h2>
          <p className={styles.p}>
            <span className="en">On Palladam Road at T. Kottampatti, directly opposite LMHSS School. Town buses along the Palladam Road route stop within walking distance, and there is space to park a two-wheeler or car outside.</span>
            <span className="ta" lang="ta">டி. கோட்டாம்பட்டியில் உள்ள பல்லடம் ரோட்டில், LMHSS பள்ளிக்கு நேர் எதிராக அமைந்துள்ளது. பல்லடம் ரோடு வழியாகச் செல்லும் நகரப் பேருந்துகள் நடந்து வரும் தூரத்திலேயே நிற்கின்றன, மேலும் வெளியே இருசக்கர வாகனம் அல்லது காரை நிறுத்துவதற்கு இடம் உள்ளது.</span>
          </p>
          <div className={styles.actions}>
            <MagneticButton href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi" external className={styles.btnPrimary}>
              ◎ Open in Maps
            </MagneticButton>
          </div>
          <p className={styles.caption}>
            <span className="en">No appointment is needed. If you would prefer a set time, call ahead.</span>
            <span className="ta" lang="ta">முன்பதிவு தேவையில்லை. ஒரு குறிப்பிட்ட நேரத்தில் வர விரும்பினால், முன்கூட்டியே அழைக்கவும்.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
