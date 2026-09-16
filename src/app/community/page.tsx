import type { Metadata } from "next";
import CommunityHero from "@/components/community/CommunityHero";
import CommunityGrid from "@/components/community/CommunityGrid";

export const metadata: Metadata = {
  title: "Community & CSR | Shri Andavar Eye Care and Retina Centre",
  description: "Learn about our community outreach, free eye camps, and social impact initiatives across Tamil Nadu.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityGrid />
    </>
  );
}
