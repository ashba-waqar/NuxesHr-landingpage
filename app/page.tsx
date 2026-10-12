import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SixPillarsGrid from "@/components/SixPillarsGrid";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ConnectedData from "@/components/ConnectedData";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <SixPillarsGrid />
        <SolutionsSection />
        <PricingSection />
        <SecuritySection />
        <AboutSection />
        <ConnectedData />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
