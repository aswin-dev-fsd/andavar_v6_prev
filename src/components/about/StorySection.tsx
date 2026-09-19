import Reveal from "@/components/Reveal";
import styles from "./StorySection.module.css";

export default function StorySection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.08}>
          <p className={styles.p}>
            <span className="en">There are larger eye hospitals within an hour of here, and they do good work. What they cannot offer is the thing a small practice gives for free: the same surgeon, every time, for as long as you need him.</span>
            <span className="ta" lang="ta">இங்கிருந்து ஒரு மணி நேர பயண தூரத்திற்குள் பல பெரிய கண் மருத்துவமனைகள் உள்ளன, அவை சிறந்த சேவையையும் வழங்குகின்றன. ஆனால் அவர்கள் வழங்க முடியாத ஒன்றை ஒரு சிறிய மருத்துவமனை இலவசமாக வழங்குகிறது: உங்களுக்கு எவ்வளவு காலம் தேவைப்படுகிறதோ, அவ்வளவு காலமும் ஒரே அறுவை சிகிச்சை நிபுணர் உங்களுக்குச் சிகிச்சையளிப்பார்.</span>
          </p>
          <p className={styles.p}>
            <span className="en">Most of the people who walk through the door were sent by someone — a neighbour who had their cataract done here, a family doctor who has been referring patients for years, a son who searched and read about the surgeon before bringing his mother in. Reputation in a town this size is slow to build and very hard to fake.</span>
            <span className="ta" lang="ta">இங்கு வரும் பெரும்பாலானோர் யாரோ ஒருவரால் பரிந்துரைக்கப்பட்டு வந்தவர்களே — இங்கு கண்புரை அறுவை சிகிச்சை செய்து கொண்ட ஒரு அண்டை வீட்டார், பல ஆண்டுகளாக நோயாளிகளைப் பரிந்துரைக்கும் ஒரு குடும்ப மருத்துவர், தன் தாயை அழைத்து வருவதற்கு முன் மருத்துவரைப் பற்றித் தேடிப் படித்த ஒரு மகன். இவ்வளவு பெரிய ஊரில் நற்பெயரைக் கட்டியெழுப்புவது மெதுவானது மற்றும் அதனைப் போலியாக உருவாக்குவது மிகவும் கடினம்.</span>
          </p>
          <p className={styles.p}>
            <span className="en">The practice takes retina work seriously enough to put it in its own name. Alongside that sits a steady volume of Cataract Surgery, Diabetic Eye Screening, Glaucoma Monitoring and Routine Examinations — the everyday work that keeps a district seeing.</span>
            <span className="ta" lang="ta">இந்த மருத்துவமனை விழித்திரை (retina) சிகிச்சைக்கு அதிக முக்கியத்துவம் அளிக்கிறது, அதனாலேயே அதன் பெயரிலும் அது இடம்பெற்றுள்ளது. அத்துடன் தொடர்ந்து கண்புரை அறுவை சிகிச்சை, சர்க்கரை நோய் கண் பரிசோதனை, குளுக்கோமா கண்காணிப்பு மற்றும் வழக்கமான கண் பரிசோதனைகள் போன்ற மாவட்ட மக்களின் பார்வையைப் பாதுகாக்கும் அன்றாடப் பணிகளும் நடைபெறுகின்றன.</span>
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
