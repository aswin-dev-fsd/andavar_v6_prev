import { Metadata } from "next";
import TreatmentHero from "@/components/treatments/TreatmentHero";
import RetinaEducation from "@/components/retina/RetinaEducation";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Retina Care | Shri Andavar Eye Care",
  description:
    "Advanced diagnosis and specialized treatment for retinal conditions, including Diabetic Retinopathy, ARMD, and Retinal Detachment.",
};

export default function RetinaCarePage() {
  return (
    <>
      <TreatmentHero
        bgImage="/images/extreme-closeup-retina-examination.webp"
        eyebrowEn="Specialized Care"
        eyebrowTa="சிறப்பு சிகிச்சை"
        titleEn="Retina Care"
        titleTa="விழித்திரை சிகிச்சை"
        descriptionEn="Advanced diagnosis and treatment for retinal conditions, protecting your vision with precision."
        descriptionTa="விழித்திரை குறைபாடுகளுக்கான மேம்பட்ட பரிசோதனை மற்றும் துல்லியமான சிகிச்சைகள் மூலம் உங்கள் பார்வையைப் பாதுகாத்தல்."
      />
      <RetinaEducation />
      <VisitSection />
    </>
  );
}
