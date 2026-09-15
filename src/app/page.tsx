import Hero from "@/components/home/Hero";
import SurgeonSection from "@/components/home/SurgeonSection";
import TreatSection from "@/components/home/TreatSection";
import CostSection from "@/components/home/CostSection";
import FactStrip from "@/components/home/FactStrip";
import QuoteSection from "@/components/home/QuoteSection";
import VisitSection from "@/components/home/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SurgeonSection />
      <TreatSection />
      <CostSection />
      <FactStrip />
      <QuoteSection />
      <VisitSection />
    </>
  );
}
