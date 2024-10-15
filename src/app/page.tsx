import { ContentSection } from "@/components/content-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="relative box-border flex min-h-screen flex-col">
      <Header/>
      <HeroSection/>
      <ContentSection/>
    </div>
  );
}
