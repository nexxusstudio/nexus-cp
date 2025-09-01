import React from "react";
import { NavigationHeader } from "@/components/sections/navigation-header";
import { EnhancedHeroSection } from "@/components/sections/enhanced-hero-section";
import { InteractiveServicesShowcase } from "@/components/sections/interactive-services-showcase";
import { AIServicesSection } from "@/components/sections/ai-services-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { UltimateContactSection } from "@/components/sections/ultimate-contact-section";
import { ModernFooter } from "@/components/sections/modern-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <NavigationHeader />
      <EnhancedHeroSection />
      <InteractiveServicesShowcase />
      <AIServicesSection />
      <SocialProofSection />
      <UltimateContactSection />
      <ModernFooter />
    </div>
  );
};

export default Index;
