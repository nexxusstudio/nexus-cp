import React, { useState } from "react";
import { Bot, Code, Zap, ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Custom AI tools, automations, and intelligent experiences that transform business operations.",
    range: "$3.5K – $50K+",
    color: "text-primary",
    gradient: "from-primary to-primary-glow",
    features: ["AI Strategy & Consulting", "Custom Model Development", "Automation Workflows", "Chatbots & Virtual Assistants"],
    caseStudy: "Increased operational efficiency by 300% for SaaS startup"
  },
  {
    icon: Code,
    title: "Software & Web Development", 
    description: "High-performance websites, SaaS platforms, and custom software that scales with ambition.",
    range: "$1.5K – $25K+",
    color: "text-accent",
    gradient: "from-accent to-accent-glow",
    features: ["Full-Stack Development", "UI/UX Design", "API Integrations", "Performance Optimization"],
    caseStudy: "Built marketplace generating $1M+ in first 6 months"
  },
  {
    icon: Zap,
    title: "Blockchain & Web3",
    description: "Next-generation Web3 solutions, NFT platforms, and cryptocurrency integrations.",
    range: "$3.5K – $50K+",
    color: "text-primary-glow",
    gradient: "from-primary-glow to-accent",
    features: ["Smart Contract Development", "NFT Marketplaces", "DeFi Platforms", "Multi-chain Support"],
    caseStudy: "Launched NFT collection with 10,000+ mints in 24 hours"
  }
];

export const InteractiveServicesShowcase: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 text-sm text-accent mb-6 border border-border/50">
            <Lightbulb className="h-4 w-4 animate-glow" />
            <span className="font-medium">Three Core Expertise Areas</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 font-display">
            Specialized Solutions for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build software — we architect digital transformation through cutting-edge technology and innovative design.
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                  isActive || isHovered
                    ? "bg-gradient-surface shadow-primary scale-105 border-primary/50" 
                    : "bg-card/50 backdrop-blur border-border/50 hover:shadow-card"
                } border`}
                onMouseEnter={() => {
                  setActiveService(index);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveService(index)}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <Icon className={`h-12 w-12 ${service.color} transition-all duration-300 ${
                      isActive || isHovered ? "animate-float" : ""
                    }`} />
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${service.color} font-display`}>
                        {service.range}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="p-4 rounded-xl bg-surface/50 border border-border/30 mb-6">
                    <div className="text-xs text-accent font-medium mb-1">SUCCESS STORY</div>
                    <div className="text-sm text-foreground">{service.caseStudy}</div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={isActive || isHovered ? "primary" : "outline"}
                    className="w-full group/btn"
                    onClick={() => document.getElementById(`${service.title.toLowerCase().replace(/\s+/g, '-')}-pricing`)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Packages
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${
                  isActive || isHovered ? "border-primary animate-pulse-glow" : "border-transparent"
                } transition-all duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12 font-display">
            Our Proven Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discover", desc: "Deep-dive consultation to understand your vision and goals", icon: "🎯" },
              { step: "02", title: "Design", desc: "Create detailed blueprints and interactive prototypes", icon: "🎨" },
              { step: "03", title: "Develop", desc: "Build with cutting-edge tech and agile methodology", icon: "⚡" },
              { step: "04", title: "Deploy", desc: "Launch, optimize, and provide ongoing support", icon: "🚀" },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl mb-4 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {phase.icon}
                </div>
                <div className="text-4xl font-bold text-accent mb-2 font-display">{phase.step}</div>
                <div className="text-xl font-semibold text-foreground mb-3">{phase.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</div>
                
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};