import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users, Award } from "lucide-react";

export const EnhancedHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(263, 70%, 60%, ${particle.alpha})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Projects Delivered", value: "1000+" },
    { icon: Zap, label: "Average Delivery", value: "7-14 Days" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)" }}
      />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4 py-32 text-center">
        {/* Animated Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-surface/80 backdrop-blur px-6 py-3 text-sm text-muted-foreground animate-bounce-in border border-border/50">
          <Sparkles className="h-4 w-4 text-accent animate-glow" />
          <span className="font-medium">Transforming Ideas Into Digital Reality</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="mb-8 text-6xl font-bold leading-tight text-foreground md:text-8xl font-display animate-fade-in">
          Build. Deploy.
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
            Dominate
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="mb-12 text-xl text-muted-foreground md:text-2xl max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          We craft cutting-edge AI, Web3, and software solutions that drive unprecedented growth. 
          From MVP to market leader in just 7-14 days.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={scrollToServices} 
            variant="primary" 
            size="lg" 
            className="group text-lg px-8 py-4 h-auto animate-pulse-glow"
          >
            Explore Services
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto backdrop-blur"
            onClick={() => window.open("https://calendly.com/nexuscreative", "_blank")}
          >
            Book Strategy Call
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-primary transition-all duration-300 hover:scale-105"
              >
                <Icon className="h-8 w-8 text-accent mx-auto mb-3 group-hover:animate-float" />
                <div className="text-3xl font-bold text-foreground font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};