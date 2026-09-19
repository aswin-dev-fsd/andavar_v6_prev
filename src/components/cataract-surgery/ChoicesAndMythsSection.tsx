import Reveal from "@/components/Reveal";
import Link from "next/link";
import styles from "./ChoicesAndMythsSection.module.css";

export default function ChoicesAndMythsSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.card} targets=":scope > *" stagger={0.08}>
          <span className="eyebrow">
            <span className="en">Lens options</span>
            <span className="ta" lang="ta">லென்ஸ் விருப்பங்கள்</span>
          </span>
          <p className={styles.intro}>
            <span className="en">The artificial lens is a permanent part of the eye, so the choice is worth a proper conversation. In broad terms:</span>
            <span className="ta" lang="ta">செயற்கை லென்ஸ் என்பது கண்ணின் நிரந்தரமான ஒரு பகுதி, எனவே அதைத் தேர்ந்தெடுப்பது குறித்து முறையாக ஆலோசிப்பது அவசியம். பொதுவாகக் கூற வேண்டுமானால்:</span>
          </p>
          <div className={styles.list}>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">Monofocal</span>
                <span className="ta" lang="ta">மோனோஃபோகல் (Monofocal)</span>
              </h3>
              <p className={styles.body}>
                <span className="en">Sharp at one distance, usually far. You will still need reading glasses. Covered by most schemes.</span>
                <span className="ta" lang="ta">ஒரு தூரத்தில் (பொதுவாகத் தொலைவில்) மட்டும் துல்லியமாகப் பார்க்க முடியும். படிப்பதற்கு உங்களுக்குக் கண்ணாடி தேவைப்படும். பெரும்பாலான காப்பீட்டுத் திட்டங்களில் இது அடங்கும்.</span>
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">Toric</span>
                <span className="ta" lang="ta">டோரிக் (Toric)</span>
              </h3>
              <p className={styles.body}>
                <span className="en">Corrects astigmatism at the same time, for eyes that have it.</span>
                <span className="ta" lang="ta">பார்வைக் கோளாறு (astigmatism) உள்ள கண்களுக்கு, அதையும் சேர்த்தே சரிசெய்கிறது.</span>
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">Multifocal</span>
                <span className="ta" lang="ta">மல்டிஃபோகல் (Multifocal)</span>
              </h3>
              <p className={styles.body}>
                <span className="en">Aims to reduce dependence on glasses at more than one distance. Suits some eyes and some lifestyles, not all.</span>
                <span className="ta" lang="ta">பல்வேறு தூரங்களுக்கும் கண்ணாடியைச் சார்ந்திருப்பதைக் குறைப்பதே இதன் நோக்கம். இது சில கண்களுக்கும் சில வாழ்க்கை முறைகளுக்கும் மட்டுமே பொருந்தும், அனைவருக்கும் அல்ல.</span>
              </p>
            </div>
          </div>
          <p className={styles.closing}>
            <span className="en">Which one suits you depends on your eye and on the life you actually lead. Dr. Raghuram will go through it with you before anything is decided.</span>
            <span className="ta" lang="ta">உங்களுக்கு எது பொருந்தும் என்பது உங்கள் கண்ணையும் நீங்கள் வாழும் வாழ்க்கை முறையையும் பொறுத்தது. முடிவெடுப்பதற்கு முன் டாக்டர் ரகுராம் உங்களுடன் இதை விரிவாக விவாதிப்பார்.</span>
          </p>
        </Reveal>

        <Reveal className={styles.card} targets=":scope > *" stagger={0.08}>
          <span className="eyebrow">
            <span className="en">Worth knowing</span>
            <span className="ta" lang="ta">அறிய வேண்டியவை</span>
          </span>
          <div className={styles.list}>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">&ldquo;Should I wait until it is ripe?&rdquo;</span>
                <span className="ta" lang="ta">"அது முற்றும் வரை காத்திருக்க வேண்டுமா?"</span>
              </h3>
              <p className={styles.body}>
                <span className="en">That advice is out of date. A cataract does not need to be mature before it is removed, and waiting too long makes surgery harder. The right time is when it starts to interfere with what you want to do.</span>
                <span className="ta" lang="ta">அந்த அறிவுரை தற்போதைய காலத்திற்குப் பொருந்தாது. கண்புரையை அகற்றுவதற்கு முன் அது முதிர்ச்சியடைய வேண்டியதில்லை, மேலும் அதிக காலம் காத்திருப்பது அறுவை சிகிச்சையைக் கடினமாக்கும். உங்கள் அன்றாடச் செயல்களுக்கு அது இடையூறாக இருக்கத் தொடங்கும் நேரமே சரியான நேரமாகும்.</span>
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">&ldquo;Will it come back?&rdquo;</span>
                <span className="ta" lang="ta">"மீண்டும் வருமா?"</span>
              </h3>
              <p className={styles.body}>
                <span className="en">The cataract itself does not. Some people develop a cloudy film behind the new lens months or years later — that is cleared in a few minutes with a laser, in the clinic, no cutting.</span>
                <span className="ta" lang="ta">கண்புரை மீண்டும் வராது. சிலருக்கு பல மாதங்கள் அல்லது வருடங்களுக்குப் பிறகு புதிய லென்ஸுக்குப் பின்னால் ஒரு மங்கலான படலம் உருவாகலாம் — அதை எந்த அறுவை சிகிச்சையும் இல்லாமல் மருத்துவமனையிலேயே லேசர் மூலம் சில நிமிடங்களில் சரிசெய்து விடலாம்.</span>
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>
                <span className="en">&ldquo;Is it covered?&rdquo;</span>
                <span className="ta" lang="ta">"காப்பீட்டில் அடங்குமா?"</span>
              </h3>
              <p className={styles.body}>
                <span className="en">Cataract surgery is covered under the schemes we accept, subject to their terms. Ask us before you decide — see <Link href="/schemes">schemes and insurance</Link>.</span>
                <span className="ta" lang="ta">கண்புரை அறுவை சிகிச்சை நாங்கள் ஏற்கும் காப்பீட்டுத் திட்டங்களின் கீழ், அதன் விதிமுறைகளுக்கு உட்பட்டு அடங்கும். நீங்கள் முடிவெடுப்பதற்கு முன் எங்களிடம் கேளுங்கள் — <Link href="/schemes">திட்டங்கள் மற்றும் காப்பீடு</Link> பக்கத்தைப் பார்க்கவும்.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
