import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, MapPin, Phone, Send, Clock, Shield, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: Calendar,
    title: "Strategy Call",
    description: "Free 30-min consultation with our experts",
    action: "Book Now",
    href: "https://calendly.com/nexuscreative",
    highlight: "Most Popular",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick response for urgent inquiries",
    action: "Message Us",
    href: "https://wa.me/8801339597676",
    highlight: "Instant Response",
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed proposals within 24 hours",
    action: "Send Email",
    href: "mailto:nexxusstudio.agency@gmail.com?subject=Project Inquiry",
    highlight: "Comprehensive",
    color: "secondary"
  }
];

const guarantees = [
  { icon: Clock, text: "24-hour response guarantee" },
  { icon: Shield, text: "100% confidentiality assured" },
  { icon: Zap, text: "Free project consultation" },
];

export const UltimateContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create mailto link with form data
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget: ${formData.budget}
Project Type: ${formData.project}
Timeline: ${formData.timeline}

Message:
${formData.message}
    `;
    
    window.open(`mailto:nexxusstudio.agency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", budget: "", project: "", message: "", timeline: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-display">
            Ready to Transform
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Your Vision?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join 500+ successful companies who chose Nexus Creative to build their digital future. 
            Let's discuss your project and create something extraordinary together.
          </p>
          
          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Dhaka, Bangladesh • Global Digital Delivery • 24/7 Support</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-display">Get In Touch</h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {method.highlight && (
                    <div className="inline-block bg-accent/10 text-accent text-xs px-3 py-1 rounded-full mb-4 font-medium">
                      {method.highlight}
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-surface">
                      <Icon className={`h-6 w-6 text-${method.color} group-hover:animate-float`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                      <Button
                        variant={method.color as any}
                        size="sm"
                        onClick={() => window.open(method.href, "_blank")}
                        className="w-full group/btn"
                      >
                        {method.action}
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Guarantees */}
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Our Commitments:</h4>
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{guarantee.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-gradient-surface border border-primary/20 shadow-primary">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-display">Start Your Project</h3>
              <p className="text-muted-foreground mb-8">Tell us about your vision and we'll get back to you within 24 hours with a detailed proposal.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5K</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-30k">$15K - $30K</option>
                      <option value="30k-50k">$30K - $50K</option>
                      <option value="50k-plus">$50K+</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full h-12 px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="web-development">Web Development</option>
                      <option value="web3-blockchain">Web3 & Blockchain</option>
                      <option value="full-stack">Full Stack Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-12 px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group text-lg py-6 animate-pulse-glow"
                >
                  {isSubmitting ? "Sending..." : "Send Project Details"}
                  <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12 font-display">
            What Happens Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Initial Contact", desc: "We respond within 24 hours with next steps", time: "24 hours", icon: "📞" },
              { step: "02", title: "Discovery Call", desc: "Free consultation to understand your needs", time: "30 minutes", icon: "💬" },
              { step: "03", title: "Detailed Proposal", desc: "Comprehensive proposal with timeline & pricing", time: "48 hours", icon: "📋" },
              { step: "04", title: "Project Kickoff", desc: "Sign contract and begin development", time: "1 week", icon: "🚀" },
            ].map((phase, index) => (
              <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl mb-4 group-hover:animate-bounce">{phase.icon}</div>
                <div className="text-3xl font-bold text-accent mb-2 font-display">{phase.step}</div>
                <div className="text-xl font-semibold text-foreground mb-2">{phase.title}</div>
                <div className="text-sm text-muted-foreground mb-2">{phase.desc}</div>
                <div className="text-xs text-accent font-medium">{phase.time}</div>
                
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