import type { Metadata } from "next";
import SchemesHero from "@/components/schemes/SchemesHero";
import SchemeCards from "@/components/schemes/SchemeCards";
import NoSchemeSection from "@/components/schemes/NoSchemeSection";
import CounterQuestions from "@/components/schemes/CounterQuestions";

export const metadata: Metadata = {
  title: "Schemes & Insurance | Shri Andavar Eye Care and Retina Centre",
  description: "Information about CMCHIS, Pensioners Health Scheme, Star Health Insurance and other accepted schemes at Shri Andavar Eye Care.",
};

export default function SchemesPage() {
  return (
    <>
      <SchemesHero />
      <SchemeCards />
      <NoSchemeSection />
      <CounterQuestions />
    </>
  );
}
