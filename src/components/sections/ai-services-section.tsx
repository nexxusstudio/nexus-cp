import React, { useState } from "react";
import { EnhancedPricingCard } from "@/components/ui/enhanced-pricing-card";
import { Bot, Cpu, Brain, Rocket } from "lucide-react";

const aiPackages = [
  {
    title: "AI Starter",
    subtitle: "Perfect for Small Businesses",
    description: "Get started with AI-powered automation and smart integrations to streamline your operations.",
    price: "$3.5K - $6K",
    originalPrice: "$8K",
    timeline: "2-3 weeks",
    features: [
      "AI strategy consultation & roadmap",
      "Pre-trained model integration (GPT/Claude)",
      "Basic chatbot or automation workflow",
      "Prompt engineering & optimization",
      "Documentation & team training",
      "1 round of revisions"
    ],
    extras: [
      "Free 1-month support",
      "AI readiness assessment",
      "Performance analytics setup"
    ],
    guarantee: "100% Money-back guarantee if not satisfied",
    tier: "essential" as const
  },
  {
    title: "AI Growth",
    subtitle: "For Growing Companies",
    description: "Scale your business with custom AI solutions, advanced automation, and intelligent data processing.",
    price: "$8K - $20K",
    timeline: "4-6 weeks",
    recommended: true,
    popular: true,
    features: [
      "Comprehensive AI strategy & consulting",
      "Custom AI model fine-tuning",
      "Multi-platform integration (CRM, tools)",
      "Advanced workflow automation (2-3 processes)",
      "Real-time analytics dashboard",
      "API development & documentation",
      "Team training & handoff session",
      "2 rounds of revisions"
    ],
    extras: [
      "3-month priority support",
      "Monthly optimization reviews",
      "Advanced security implementation",
      "Performance monitoring tools"
    ],
    guarantee: "ROI guarantee - 3x efficiency improvement or money back",
    tier: "growth" as const
  },
  {
    title: "AI Enterprise",
    subtitle: "For Market Leaders",
    description: "Enterprise-grade AI infrastructure with custom models, advanced security, and dedicated support.",
    price: "$25K - $75K+",
    timeline: "8-16 weeks",
    features: [
      "End-to-end AI solution architecture",
      "Custom dataset preparation & labeling",
      "Proprietary AI model development",
      "Enterprise-grade security & compliance",
      "Multi-environment deployment (dev/staging/prod)",
      "Dedicated project manager & team",
      "Comprehensive testing & validation",
      "6-month post-launch support",
      "Unlimited revisions during development"
    ],
    extras: [
      "24/7 technical support",
      "Quarterly strategy reviews",
      "Staff augmentation options",
      "White-label licensing available"
    ],
    guarantee: "Enterprise SLA with 99.9% uptime guarantee",
    tier: "enterprise" as const
  }
];

const aiFeatures = [
  { icon: Brain, title: "Machine Learning", desc: "Custom ML models trained on your data" },
  { icon: Cpu, title: "Neural Networks", desc: "Deep learning solutions for complex problems" },
  { icon: Rocket, title: "Auto-scaling", desc: "Infrastructure that grows with your needs" },
];

export const AIServicesSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);

  const handleGetStarted = (packageIndex: number) => {
    const emails = [
      "cryptonexus.agency@gmail.com?subject=AI Starter Package Inquiry",
      "cryptonexus.agency@gmail.com?subject=AI Growth Package Inquiry", 
      "cryptonexus.agency@gmail.com?subject=AI Enterprise Package Inquiry"
    ];
    window.open(`mailto:${emails[packageIndex]}`, "_blank");
  };

  return (
    <section id="artificial-intelligence-pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-3 text-primary mb-6 border border-primary/20">
            <Bot className="h-5 w-5 animate-glow" />
            <span className="font-medium text-lg">Artificial Intelligence Solutions</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 font-display">
            AI-Powered Business
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, enhance decision-making, 
            and unlock unprecedented growth opportunities for your business.
          </p>
        </div>

        {/* AI Capabilities Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              >
                <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-float" />
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
        
        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {aiPackages.map((pkg, index) => (
            <div 
              key={index}
              className={`transition-all duration-300 ${selectedPackage === index ? "scale-105" : ""}`}
              onClick={() => setSelectedPackage(index)}
            >
              <EnhancedPricingCard
                title={pkg.title}
                subtitle={pkg.subtitle}
                description={pkg.description}
                price={pkg.price}
                originalPrice={pkg.originalPrice}
                features={pkg.features}
                timeline={pkg.timeline}
                recommended={pkg.recommended}
                popular={pkg.popular}
                tier={pkg.tier}
                onGetStarted={() => handleGetStarted(index)}
                extras={pkg.extras}
                guarantee={pkg.guarantee}
              />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-muted-foreground">Trusted by 500+ businesses</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">99.9% uptime SLA</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">ISO 27001 compliant</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">GDPR ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};