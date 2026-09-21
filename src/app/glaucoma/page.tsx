import { Metadata } from "next";
import TreatmentHero from "@/components/treatments/TreatmentHero";
import GlaucomaEducation from "@/components/glaucoma/GlaucomaEducation";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Glaucoma Care | Shri Andavar Eye Care",
  description:
    "Early detection and continuous management of Glaucoma to protect your optic nerve and preserve your vision.",
};

export default function GlaucomaPage() {
  return (
    <>
      <TreatmentHero
        bgImage="/images/patient-glaucoma-screening-machine.webp"
        eyebrowEn="Specialized Care"
        eyebrowTa="சிறப்பு சிகிச்சை"
        titleEn="Glaucoma"
        titleTa="குளுக்கோமா"
        descriptionEn="Early detection and continuous management to protect your optic nerve and preserve your vision."
        descriptionTa="உங்கள் பார்வை நரம்பைப் பாதுகாக்கவும், கண் பார்வையைத் தக்கவைக்கவும் ஆரம்பகால நோயறிதல் மற்றும் தொடர் கண்காணிப்பு."
      />
      <GlaucomaEducation />
      <VisitSection />
    </>
  );
}
