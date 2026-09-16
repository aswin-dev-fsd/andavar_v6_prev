import { Metadata } from "next";
import SurgeonProfileTop from "@/components/surgeon/SurgeonProfileTop";
import SurgeonStatsCTA from "@/components/surgeon/SurgeonStatsCTA";

export const metadata: Metadata = {
  title: "Our Surgeon | Shri Andavar Eye Care",
  description:
    "Meet Dr. A. Raghuram, Chief Eye Surgeon at Shri Andavar Eye Care, bringing decades of surgical expertise and international benchmarks to Pollachi.",
};

export default function OurSurgeonPage() {
  return (
    <>
      <SurgeonProfileTop />
      <SurgeonStatsCTA />
    </>
  );
}
