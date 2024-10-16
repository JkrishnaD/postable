import { Cards } from "@/components/cards";
import { ContentSection } from "@/components/content-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { OptimizationSection } from "@/components/optimize-section";
import { WorkingSection } from "@/components/working";

export default function Home() {
  return (
    <div className="relative box-border flex min-h-screen flex-col">
      <Header/>
      <HeroSection/>
      <ContentSection/>
      <WorkingSection/>
      <OptimizationSection/>
      <Cards/>
    </div>
  );
}
