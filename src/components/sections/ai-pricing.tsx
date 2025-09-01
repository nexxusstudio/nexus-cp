import React from "react";
import { PricingCard } from "@/components/ui/pricing-card";

const aiPackages = [
  {
    title: "AI Essentials",
    description: "Perfect for early-stage startups and small businesses exploring AI",
    price: "$3.5K - $6K",
    timeline: "2-3 weeks",
    features: [
      "AI strategy consultation (1 workshop)",
      "Pre-trained AI model integration",
      "Simple automation workflow or chatbot",
      "Basic prompt engineering",
      "1 revision round"
    ],
    tier: "essential" as const
  },
  {
    title: "AI Growth",
    description: "For SaaS companies scaling AI features and agencies building solutions",
    price: "$8K - $20K",
    timeline: "4-6 weeks",
    recommended: true,
    features: [
      "AI strategy & roadmap (2 workshops)",
      "Custom AI model fine-tuning",
      "Multi-platform integration",
      "Analytics dashboard setup",
      "2-3 AI-powered workflows",
      "2 revision rounds",
      "Team training session"
    ],
    tier: "growth" as const
  },
  {
    title: "AI Enterprise",
    description: "For enterprises embedding AI into core products",
    price: "$25K - $50K+",
    timeline: "8-12 weeks",
    features: [
      "End-to-end AI solution design & architecture",
      "Custom dataset preparation and model training",
      "Proprietary AI model development",
      "Secure API development & hosting",
      "Enterprise analytics dashboards",
      "Dedicated project manager",
      "3 months of post-launch support",
      "Unlimited revisions during build"
    ],
    tier: "enterprise" as const
  }
];

export const AIPricing: React.FC = () => {
  const handleGetStarted = () => {
    window.open("mailto:cryptonexus.agency@gmail.com?subject=AI Solutions Inquiry", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
            🤖 Artificial Intelligence Solutions
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI-Powered Innovation
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your business with custom AI tools, automations, and intelligent experiences
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {aiPackages.map((pkg, index) => (
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