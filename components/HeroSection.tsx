"use client";

import { WovenLightHero } from "@/components/ui/woven-light-hero";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden -mt-16 sm:-mt-20">
      <WovenLightHero
        headline="One workspace for every HR workflow"
        subheadline="Six integrated modules replace the typical HR tool stack. Built for multi-tenant consulting firms, internal HR teams, and growing companies."
        primaryButtonText="Book a discovery call"
        primaryButtonHref="/book-a-call"
        secondaryButtonText="Try the demo"
        secondaryButtonHref="/platform/people"
        theme="brand"
        showNav={false}
      />
    </section>
  );
}
