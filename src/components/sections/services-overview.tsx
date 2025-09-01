import React from "react";
import { Bot, Code, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Custom AI tools, automations, and intelligent experiences that transform how your business operates.",
    range: "$3.5K – $50K+",
    color: "text-primary"
  },
  {
    icon: Code,
    title: "Software & Web Development", 
    description: "High-performance websites, SaaS platforms, and custom software that scales with your business.",
    range: "$1.5K – $25K+",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Blockchain & Web3",
    description: "Cutting-edge Web3 solutions, NFT platforms, and cryptocurrency integrations for the future.",
    range: "$3.5K – $50K+",
    color: "text-primary-glow"
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Core Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Three specialized service areas designed to accelerate your digital transformation
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group rounded-xl bg-card border border-border p-8 transition-all duration-300 hover:shadow-card hover:scale-105"
              >
                <div className="mb-6">
                  <Icon className={`h-12 w-12 ${service.color} group-hover:animate-float`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-accent">
                  {service.range}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};