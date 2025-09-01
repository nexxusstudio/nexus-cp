import React from "react";
import { PricingCard } from "@/components/ui/pricing-card";

const webPackages = [
  {
    title: "Essential Website",
    description: "Perfect for new businesses and personal brands",
    price: "$1.5K - $3.5K",
    timeline: "2-3 weeks",
    features: [
      "3-5 responsive custom-designed pages",
      "Basic SEO optimization",
      "Contact form & lead capture",
      "Mobile-first design",
      "1 revision round"
    ],
    tier: "essential" as const
  },
  {
    title: "Growth Website & App",
    description: "For growing service providers and SaaS products",
    price: "$5K - $12K",
    timeline: "4-6 weeks",
    recommended: true,
    features: [
      "6-8 custom pages or single-feature web app",
      "Advanced UX/UI design",
      "Blog & CRM integration",
      "Conversion copywriting for key pages",
      "Analytics & performance tracking",
      "2 revision rounds",
      "Team training resources"
    ],
    tier: "growth" as const
  },
  {
    title: "Custom Software Development",
    description: "For SaaS platforms and complex web applications",
    price: "$15K - $25K+",
    timeline: "8-12 weeks",
    features: [
      "Full-stack custom software development",
      "Secure API & payment gateway integration",
      "User dashboards & admin portals",
      "Performance & security optimization",
      "Dedicated project manager",
      "3 months of maintenance post-launch",
      "Unlimited revisions during build"
    ],
    tier: "enterprise" as const
  }
];

export const WebPricing: React.FC = () => {
  const handleGetStarted = () => {
    window.open("mailto:byteestudio.agency@gmail.com?subject=Web Development Inquiry", "_blank");
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent mb-6">
            🌐 Software & Web Development
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            High-Performance Web Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Beautiful, scalable websites and software that drive results for your business
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {webPackages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              features={pkg.features}
              timeline={pkg.timeline}
              recommended={pkg.recommended}
              tier={pkg.tier}
              onGetStarted={handleGetStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};