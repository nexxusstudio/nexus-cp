import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a detailed proposal within 24 hours",
    action: "Send Email",
    href: "mailto:nexxusstudio.agency@gmail.com?subject=Project Inquiry"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat for immediate questions",
    action: "Message Us",
    href: "https://wa.me/8801339597676"
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Free 30-min discovery consultation",
    action: "Schedule Now",
    href: "https://calendly.com/nexuscreative"
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your vision and create a custom solution that drives real results
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Dhaka, Bangladesh • Global Digital Delivery</span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index}
                className="group rounded-xl bg-card border border-border p-8 text-center transition-all duration-300 hover:shadow-card hover:scale-105"
              >
                <div className="mb-6 flex justify-center">
                  <Icon className="h-12 w-12 text-accent group-hover:animate-float" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {method.description}
                </p>
                <Button
                  variant="accent"
                  onClick={() => window.open(method.href, "_blank")}
                  className="w-full"
                >
                  {method.action}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-xl bg-surface border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Process
            </h3>
            <div className="grid gap-4 md:grid-cols-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-2">1</div>
                <div className="text-foreground font-medium">Discovery</div>
                <div className="text-muted-foreground">Free consultation</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold mx-auto mb-2">2</div>
                <div className="text-foreground font-medium">Proposal</div>
                <div className="text-muted-foreground">Detailed scope & pricing</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center text-background font-bold mx-auto mb-2">3</div>
                <div className="text-foreground font-medium">Build</div>
                <div className="text-muted-foreground">Agile MVP execution</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent-glow rounded-full flex items-center justify-center text-background font-bold mx-auto mb-2">4</div>
                <div className="text-foreground font-medium">Deliver</div>
                <div className="text-muted-foreground">Launch & support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};