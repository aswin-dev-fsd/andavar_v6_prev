import Reveal from "@/components/Reveal";
import styles from "./StorySection.module.css";

export default function StorySection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.08}>
          <h2 className={styles.h2}>
            <span className="en">Eye Care Built on Continuity and Trust</span>
            <span className="ta" lang="ta">தொடர் கவனிப்பு மற்றும் நம்பிக்கையில் அமைந்த கண் சிகிச்சை</span>
          </h2>
          <p className={styles.p}>
            <span className="en">There are larger eye hospitals within an hour of Pollachi. What sets a focused practice apart is continuity — the same surgeon who knows your history, understands your concerns, and stays with you from your first consultation through follow-up.</span>
            <span className="ta" lang="ta">பொள்ளாச்சியிலிருந்து ஒரு மணி நேரப் பயண தூரத்திற்குள் பல பெரிய கண் மருத்துவமனைகள் உள்ளன. எங்களைப் போன்ற ஒரு மருத்துவமனையைத் தனித்துவமாக்குவது அதன் தொடர் கவனிப்புதான் — உங்கள் மருத்துவ வரலாற்றை அறிந்த, உங்கள் கவலைகளைப் புரிந்துகொள்ளும், மேலும் உங்கள் முதல் பரிசோதனை முதல் இறுதி வரை உங்களுடனேயே பயணிக்கும் அதே அறுவை சிகிச்சை நிபுணர்.</span>
          </p>
          <p className={styles.p}>
            <span className="en">Since 2013, many of our patients have come through personal recommendations — from neighbours, family doctors, and families who have trusted us with their loved ones' vision.</span>
            <span className="ta" lang="ta">2013 முதல், எங்களது பெரும்பாலான நோயாளிகள் தனிப்பட்ட பரிந்துரைகள் மூலமாகவே வந்துள்ளனர் — அண்டை வீட்டார், குடும்ப மருத்துவர்கள் மற்றும் தங்களுக்கு அன்பானவர்களின் பார்வையை எங்களிடம் நம்பி ஒப்படைத்த குடும்பங்கள் மூலமாக.</span>
          </p>
          <p className={styles.p}>
            <span className="en">Our practice brings together specialised Retina Care with essential eye care services including Cataract Surgery, Diabetic Eye Screening, Glaucoma Monitoring, and Routine Eye Examinations.</span>
            <span className="ta" lang="ta">எங்கள் மருத்துவமனை சிறப்பு விழித்திரை சிகிச்சையுடன் (Retina Care), கண்புரை அறுவை சிகிச்சை, சர்க்கரை நோய் கண் பரிசோதனை, குளுக்கோமா கண்காணிப்பு மற்றும் வழக்கமான கண் பரிசோதனைகள் உள்ளிட்ட அத்தியாவசிய கண் பராமரிப்பு சேவைகளையும் ஒன்றிணைத்து வழங்குகிறது.</span>
          </p>
          <p className={styles.p}>
            <span className="en">For us, good eye care is not just about treating a condition. It is about building a relationship you can rely on.</span>
            <span className="ta" lang="ta">எங்களைப் பொறுத்தவரை, சிறந்த கண் பராமரிப்பு என்பது ஒரு பிரச்சனைக்குச் சிகிச்சை அளிப்பது மட்டுமல்ல. அது நீங்கள் முழுமையாக நம்பக்கூடிய ஒரு உறவை உருவாக்குவதாகும்.</span>
          </p>
        </Reveal>

        <Reveal className={styles.card} stagger={0.08} targets=":scope > *">
          <span className="eyebrow">
            <span className="en">In short</span>
            <span className="ta" lang="ta">சுருக்கமாக</span>
          </span>
          <div className={styles.facts}>
            <div className={styles.fact}>
              <div className={styles.label}>
                <span className="en">Founded</span>
                <span className="ta" lang="ta">நிறுவப்பட்டது</span>
              </div>
              <div className={styles.val}>
                <span className="en">2013, in Pollachi, by Dr. A. Raghuram.</span>
                <span className="ta" lang="ta">2013-ல் பொள்ளாச்சியில், டாக்டர் ஏ. ரகுராம் அவர்களால் நிறுவப்பட்டது.</span>
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.label}>
                <span className="en">Focus</span>
                <span className="ta" lang="ta">சிறப்பு கவனம்</span>
              </div>
              <div className={styles.val}>
                <span className="en">Retina and cataract, with full general eye care.</span>
                <span className="ta" lang="ta">விழித்திரை மற்றும் கண்புரை சிகிச்சையுடன் முழுமையான பொது கண் பராமரிப்பு.</span>
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.label}>
                <span className="en">Languages</span>
                <span className="ta" lang="ta">மொழிகள்</span>
              </div>
              <div className={styles.val}>
                <span className="en">Tamil and English, throughout — at the counter and in the consulting room.</span>
                <span className="ta" lang="ta">முழுவதும் தமிழ் மற்றும் ஆங்கிலம் — வரவேற்பறையிலும் ஆலோசனை அறையிலும்.</span>
              </div>
            </div>
            <div className={styles.fact}>
              <div className={styles.label}>
                <span className="en">Where</span>
                <span className="ta" lang="ta">அமைவிடம்</span>
              </div>
              <div className={styles.val}>
                <span className="en">One location, on Palladam Road. No branches, by choice.</span>
                <span className="ta" lang="ta">பல்லடம் ரோட்டில் ஒரே இடத்தில். வேறு கிளைகள் இல்லை என்பது எங்கள் தேர்வு.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
