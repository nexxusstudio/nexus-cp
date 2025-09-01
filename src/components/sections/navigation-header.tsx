import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavigationHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "AI Solutions", href: "#ai-pricing", icon: "🤖" },
        { name: "Web Development", href: "#web-pricing", icon: "🌐" },
        { name: "Web3 & Blockchain", href: "#web3-pricing", icon: "⛓️" },
      ]
    },
    { name: "Client Portal", href: "/client-portal" },
    { name: "Project Management", href: "/project-management" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-lg font-bold text-primary-foreground font-display">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-display">Nexus Creative</h1>
              <p className="text-xs text-muted-foreground">Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-accent transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-card p-2 animate-fade-in">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center p-3 rounded-lg hover:bg-surface transition-colors duration-200 group"
                      >
                        <span className="text-2xl mr-3 group-hover:animate-bounce">{subItem.icon}</span>
                        <span className="text-foreground font-medium">{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              View Portfolio
            </Button>
            <Button variant="primary" size="sm" className="animate-glow">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card border border-border rounded-xl animate-slide-down">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="block text-foreground hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="mr-2">{subItem.icon}</span>
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border mt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                View Portfolio
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Start Project
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};