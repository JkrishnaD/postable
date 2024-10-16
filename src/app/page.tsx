import { Cards } from "@/components/cards";
import { ContentSection } from "@/components/content-section";
import { CallToAction1 } from "@/components/cta1";
import { CallToAction2 } from "@/components/cts2";
import { Engaging } from "@/components/engaging";

import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { OptimizationSection } from "@/components/optimize-section";
import { Solution } from "@/components/solution";
import { WorkingSection } from "@/components/working";

export default function Home() {
  return (
    <div className="relative box-border flex min-h-screen flex-col no-scrollbar">
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
    </div>
  );
}
