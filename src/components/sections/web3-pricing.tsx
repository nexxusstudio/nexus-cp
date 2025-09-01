import React from "react";
import { PricingCard } from "@/components/ui/pricing-card";

const web3Packages = [
  {
    title: "Web3 Starter",
    description: "Perfect for NFT creators and small crypto projects",
    price: "$3.5K - $7.5K",
    timeline: "3-4 weeks",
    features: [
      "3-5 page Web3 site (Home, Mint, About, Contact)",
      "Wallet connect integration",
      "Basic ERC-721 smart contract deployment",
      "Mobile-responsive design",
      "1 revision round"
    ],
    tier: "essential" as const
  },
  {
    title: "Web3 Growth",
    description: "For NFT marketplaces and Web3 brands",
    price: "$10K - $25K",
    timeline: "5-7 weeks",
    recommended: true,
    features: [
      "6-8 custom Web3 pages",
      "NFT gallery & minting dashboard",
      "Advanced smart contract customization",
      "Community integrations (Discord, Telegram)",
      "Multi-wallet support",
      "2 revision rounds",
      "Team onboarding session"
    ],
    tier: "growth" as const
  },
  {
    title: "Web3 Enterprise Platform",
    description: "For large-scale NFT marketplaces and DeFi platforms",
    price: "$30K - $50K+",
    timeline: "8-14 weeks",
    features: [
      "Full marketplace or staking platform development",
      "Multi-chain support (Ethereum, Polygon, Solana)",
      "Custom smart contracts (staking, royalties, tokenomics)",
      "Tokenomics dashboard & governance modules",
      "Advanced security audits",
      "Dedicated project manager",
      "3 months of post-launch support",
      "Unlimited revisions during build"
    ],
    tier: "enterprise" as const
  }
];

export const Web3Pricing: React.FC = () => {
  const handleGetStarted = () => {
    window.open("mailto:cryptonexus.agency@gmail.com?subject=Web3 Development Inquiry", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-glow/10 px-4 py-2 text-sm text-primary-glow mb-6">
            ⛓️ Blockchain & Web3 Solutions
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Next-Generation Web3 Platforms
          </h2>
          <p className="text-xl text-muted-foreground">
            Cutting-edge blockchain solutions that position your project at the forefront of Web3
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {web3Packages.map((pkg, index) => (
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