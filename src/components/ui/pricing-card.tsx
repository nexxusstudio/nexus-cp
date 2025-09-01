import React from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  timeline: string;
  recommended?: boolean;
  tier: "essential" | "growth" | "enterprise";
  onGetStarted: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  timeline,
  recommended = false,
  tier,
  onGetStarted,
}) => {
  const tierStyles = {
    essential: "border-border bg-card",
    growth: "border-primary bg-gradient-surface shadow-primary",
    enterprise: "border-accent bg-gradient-primary shadow-accent",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-8 transition-all duration-300 hover:scale-105",
        tierStyles[tier],
        recommended && "ring-2 ring-primary"
      )}
    >
      {recommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground">
          Recommended
        </Badge>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground">{price}</div>
          <div className="text-sm text-muted-foreground">Timeline: {timeline}</div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onGetStarted}
          variant={tier === "enterprise" ? "accent" : tier === "growth" ? "primary" : "outline"}
          size="lg"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};