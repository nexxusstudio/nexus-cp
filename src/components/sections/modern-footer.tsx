import React from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nexuscrativeio", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jobayerhoquesiddique/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/nexxusstudio", label: "GitHub" },
  { icon: Mail, href: "mailto:nexxusstudio.agency@gmail.com", label: "Email" },
];

const footerLinks = {
  "Services": [
    { name: "AI Solutions", href: "#ai-pricing" },
    { name: "Web Development", href: "#web-pricing" },
    { name: "Web3 & Blockchain", href: "#web3-pricing" },
    { name: "Consulting", href: "#contact" },
  ],
  "Company": [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  "Resources": [
    { name: "Blog", href: "#blog" },
    { name: "Documentation", href: "#docs" },
    { name: "Support", href: "#support" },
    { name: "FAQ", href: "#faq" },
  ],
  "Legal": [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
};

export const ModernFooter: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border">
      {/* CTA Section */}
      <div className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-display">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ successful companies who chose Nexus Creative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open("https://calendly.com/nexuscreative", "_blank")}
              className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => window.open("mailto:nexxusstudio.agency@gmail.com", "_blank")}
              className="px-8 py-4 border border-primary-foreground/20 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Get Proposal
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground font-display">N</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-display">Nexus Creative</h3>
                  <p className="text-sm text-muted-foreground">Studio</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming visions into digital reality through cutting-edge AI, Web3, and software solutions. 
                Building the future, one project at a time.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Dhaka, Bangladesh • Global Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+880 1339 597676</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>nexxusstudio.agency@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Nexus Creative Studio. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Made with ❤️ in Bangladesh</span>
              <span>•</span>
              <span>Global Digital Excellence</span>
              <span>•</span>
              <span>ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};