import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src="/images/athletica.svg"
            alt="Athletica"
            className="h-8 w-auto filter drop-shadow-[0_0_10px_rgba(90,11,251,0.5)] transition-transform group-hover:scale-105"
          />
          <span className="font-['Cervino'] font-black text-xl tracking-[0.14em] text-white">
            ATHLETICA
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B8B9E]">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#problem" className="hover:text-white transition-colors">
            Why Athletica
          </a>
          <a href="#solution" className="hover:text-white transition-colors">
            Platform
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-br from-[#5A0BFB] to-[#7B2FFF] hover:from-[#4908D4] hover:to-[#6A28E5] text-white font-semibold shadow-[0_0_20px_rgba(90,11,251,0.3)] border-none"
          >
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-1.5 w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#8B8B9E] hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1E1E2E] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-[#5A0BFB] py-2 border-b border-white/5"
          >
            Home
          </a>
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-[#5A0BFB] py-2 border-b border-white/5"
          >
            Why Athletica
          </a>
          <a
            href="#solution"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-[#5A0BFB] py-2 border-b border-white/5"
          >
            Platform
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-[#5A0BFB] py-2 border-b border-white/5"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/90 hover:text-[#5A0BFB] py-2 border-b border-white/5"
          >
            FAQ
          </a>

          <Button
            asChild
            className="w-full h-12 mt-2 bg-gradient-to-br from-[#5A0BFB] to-[#7B2FFF] text-white font-bold"
          >
            <a href="#waitlist" onClick={() => setMobileMenuOpen(false)}>
              Join Pilot Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
