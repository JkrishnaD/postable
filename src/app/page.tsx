"use client"
import { Cards } from "@/components/cards";
import { ContentSection } from "@/components/content-section";
import { CallToAction1 } from "@/components/cta1";
import { CallToAction3 } from "@/components/cta3";
import { CallToAction2 } from "@/components/cts2";
import { Engaging } from "@/components/engaging";
import { FAQs } from "@/components/faqs";

import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { OptimizationSection } from "@/components/optimize-section";
import { Solution } from "@/components/solution";
import { WorkingSection } from "@/components/working";

export default function Home() {
  return (
    <div className="relative flex flex-col no-scrollbar bg-white">
      <Header />
      <HeroSection />
      <ContentSection />
      <WorkingSection />
      <OptimizationSection />
      <Cards />
      <CallToAction1 />
      <Features />
      <Solution />
      <CallToAction2/>
      <Engaging/>
      <FAQs/>
      <CallToAction3/>
      <Footer/>
    </div>
  );
}
