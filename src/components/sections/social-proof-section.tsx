import React from "react";
import { Star, User, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "Y Combinator Startup",
    avatar: "SC",
    rating: 5,
    content: "Nexus Creative transformed our MVP into a market-ready product in just 2 weeks. Their AI integration increased our user engagement by 340%. Absolutely phenomenal work!",
    project: "AI-Powered SaaS Platform",
    result: "+340% user engagement"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, CryptoVault",
    company: "Web3 Platform",
    avatar: "MR",
    rating: 5,
    content: "The NFT marketplace they built generated $2.3M in trading volume within the first month. The team's Web3 expertise is unmatched in the industry.",
    project: "NFT Marketplace",
    result: "$2.3M trading volume"
  },
  {
    name: "Emily Watson",
    role: "CMO, FinanceFlow",
    company: "Fintech Startup",
    avatar: "EW",
    rating: 5,
    content: "Our conversion rates doubled after the website redesign. The attention to detail and user experience optimization exceeded all our expectations.",
    project: "Fintech Platform Redesign",
    result: "+200% conversion rate"
  },
  {
    name: "David Kim",
    role: "CTO, MedTech Innovations",
    company: "Healthcare Technology",
    avatar: "DK",
    rating: 5,
    content: "The AI diagnostic tool they developed has been adopted by 50+ healthcare facilities. The technical excellence and regulatory compliance were outstanding.",
    project: "AI Medical Diagnostics",
    result: "50+ healthcare adoptions"
  }
];

const caseStudies = [
  {
    title: "E-commerce Platform Revolution",
    client: "Fashion Forward Inc.",
    challenge: "Legacy system with 3-second load times",
    solution: "React-based micro-frontend architecture",
    results: ["85% faster page loads", "300% increase in mobile conversions", "$1.2M additional revenue in 6 months"],
    tech: ["React", "Node.js", "AWS", "GraphQL"]
  },
  {
    title: "DeFi Protocol Launch",
    client: "YieldMax Protocol",
    challenge: "Complex yield farming mechanism",
    solution: "Smart contract optimization & security audit",
    results: ["$50M TVL in first week", "Zero security incidents", "98% user satisfaction"],
    tech: ["Solidity", "Web3.js", "IPFS", "Chainlink"]
  }
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-display">
            Trusted by Industry
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients don't just succeed — they dominate their markets. Here's the proof.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "$100M+", label: "Client Revenue Generated" },
            { number: "99.8%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold text-accent mb-2 font-display">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Project Info */}
              <div className="p-4 rounded-xl bg-surface/50 border border-border/30 mb-6">
                <div className="text-sm font-medium text-accent mb-1">{testimonial.project}</div>
                <div className="text-sm text-primary font-bold">{testimonial.result}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-accent">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Preview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center font-display">
            Featured Case Studies
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-surface border border-primary/20 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              >
                <h4 className="text-2xl font-bold text-foreground mb-2 font-display">{study.title}</h4>
                <div className="text-accent font-medium mb-4">{study.client}</div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Challenge: </span>
                    <span className="text-foreground">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Solution: </span>
                    <span className="text-foreground">{study.solution}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-accent mb-3">Results:</div>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface rounded-full text-xs text-muted-foreground border border-border/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            className="group text-lg px-8 py-4 h-auto animate-pulse-glow"
            onClick={() => window.open("https://calendly.com/nexuscreative", "_blank")}
          >
            Join Our Success Stories
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Book a free strategy call and discover how we can transform your business
          </p>
        </div>
      </div>
    </section>
  );
};