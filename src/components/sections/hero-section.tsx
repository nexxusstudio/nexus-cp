import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="container relative mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent animate-glow" />
            <span>7-14 Day MVP Builds</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Transform Your Vision Into
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Reality</span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            We deliver cutting-edge AI, Web3, and Software solutions that drive growth and innovation for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button onClick={scrollToServices} variant="primary" size="lg" className="group">
              View Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://calendly.com/nexuscreative", "_blank")}
            >
              Book Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};