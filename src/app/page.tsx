import Hero from "@/components/home/Hero";
import StorySection from "@/components/about/StorySection";
import SurgeonSection from "@/components/home/SurgeonSection";
import TreatSection from "@/components/home/TreatSection";
import CostSection from "@/components/home/CostSection";
import FactStrip from "@/components/home/FactStrip";
import QuoteSection from "@/components/home/QuoteSection";
import BeforeYouComeSection from "@/components/about/BeforeYouComeSection";
import VisitSection from "@/components/home/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FactStrip />
      <StorySection />
      <SurgeonSection />
      <TreatSection />
      <CostSection />
      <QuoteSection />
      <BeforeYouComeSection />
      <VisitSection />
    </>
  );
}
