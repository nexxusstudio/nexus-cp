import React, { useState } from "react";
import { Check, Star, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EnhancedPricingCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  timeline: string;
  recommended?: boolean;
  popular?: boolean;
  tier: "essential" | "growth" | "enterprise";
  onGetStarted: () => void;
  extras?: string[];
  guarantee?: string;
}

export const EnhancedPricingCard: React.FC<EnhancedPricingCardProps> = ({
  title,
  subtitle,
  description,
  price,
  originalPrice,
  features,
  timeline,
  recommended = false,
  popular = false,
  tier,
  onGetStarted,
  extras = [],
  guarantee
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tierStyles = {
    essential: {
      card: "border-border bg-card/50 backdrop-blur",
      badge: "bg-muted text-muted-foreground",
      button: "outline",
      glow: ""
    },
    growth: {
      card: "border-primary bg-gradient-surface shadow-primary",
      badge: "bg-primary text-primary-foreground",
      button: "primary",
      glow: "animate-pulse-glow"
    },
    enterprise: {
      card: "border-accent bg-gradient-primary shadow-accent",
      badge: "bg-accent text-accent-foreground",
      button: "accent",
      glow: "animate-glow"
    },
  };

  const style = tierStyles[tier];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:scale-105 ${style.card} ${style.glow} ${
        isHovered ? "scale-105 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Animation */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-glow opacity-0 transition-opacity duration-500 ${
        isHovered ? "opacity-20" : ""
      }`} />

      {/* Top Badges */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
        {recommended && (
          <Badge className="bg-gradient-primary text-primary-foreground shadow-lg animate-bounce-in">
            ⭐ Recommended
          </Badge>
        )}
        {popular && (
          <Badge className="bg-accent text-accent-foreground shadow-lg animate-bounce-in" style={{ animationDelay: "0.1s" }}>
            🔥 Most Popular
          </Badge>
        )}
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${style.badge}`}>
            <span className="font-medium">{subtitle}</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground font-display">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl font-bold text-foreground font-display">{price}</div>
            {originalPrice && (
              <div className="text-lg text-muted-foreground line-through">{originalPrice}</div>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Timeline: {timeline}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">What's Included:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="mt-0.5">
                  <Check className="h-4 w-4 text-accent group-hover:animate-bounce" />
                </div>
                <span className="text-sm text-foreground leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extras */}
        {extras.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-accent flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Bonus Features:
            </h4>
            <ul className="space-y-2">
              {extras.map((extra, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-accent">
                  <Star className="h-3 w-3 fill-current" />
                  {extra}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Guarantee */}
        {guarantee && (
          <div className="p-4 rounded-xl bg-surface/50 border border-border/30">
            <div className="flex items-center gap-2 text-sm text-accent">
              <Shield className="h-4 w-4" />
              <span className="font-medium">{guarantee}</span>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="space-y-3">
          <Button
            onClick={onGetStarted}
            variant={style.button as any}
            size="lg"
            className="w-full group text-lg py-6"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Free consultation • No hidden fees • 30-day guarantee
          </p>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 ${
        isHovered ? `border-${tier === "enterprise" ? "accent" : tier === "growth" ? "primary" : "border"}` : ""
      }`} />
    </div>
  );
};