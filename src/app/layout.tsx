import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shri Andavar Eye Care and Retina Centre | Pollachi",
  description:
    "Cataract and retina care in Pollachi. Shri Andavar Eye Care has looked after this district's eyes since 2013.",
};

import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-lang="en" className={`${manrope.variable} ${plusJakarta.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingActionButtons />
      </body>
    </html>
  );
}
