import { Metadata } from "next";
import VisionSlider from "@/components/cataract/VisionSlider";
import CataractEducation from "@/components/cataract/CataractEducation";
import PremiumLenses from "@/components/cataract/PremiumLenses";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Cataract Surgery | Shri Andavar Eye Care",
  description:
    "Advanced micro-incision cataract surgery with premium IOL options. See the difference clear vision makes.",
};

export default function CataractSurgeryPage() {
  return (
    <>
      <VisionSlider />
      <CataractEducation />
      <PremiumLenses />
      <VisitSection />
    </>
  );
}
