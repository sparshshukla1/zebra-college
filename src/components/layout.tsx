import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X, ChevronUp, ChevronRight } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admissions" },
  { href: "/placements", label: "Placements" },
  { href: "/faculty", label: "Faculty" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"}`}>
      <div className="h-1 bg-primary/20 w-full absolute top-0 left-0">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between mt-1">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-foreground' : 'text-primary dark:text-white'}`}>Zebra College</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary font-semibold" : scrolled ? "text-muted-foreground" : "text-foreground/80 dark:text-white/80"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={scrolled ? "" : "text-foreground dark:text-white hover:bg-white/20"}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg flex flex-col p-4 gap-2"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`p-3 rounded-md text-sm font-medium transition-colors ${location === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">Z</div>
            <span className="font-bold text-xl tracking-tight text-foreground">Zebra College</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Empowering students to become future leaders through quality education, innovation, and an inclusive campus environment.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.slice(0, 5).map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Academics</h3>
          <ul className="space-y-2">
            {['Undergraduate', 'Postgraduate', 'Research', 'Faculty', 'Placements'].map(item => (
              <li key={item}>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Email:</strong> info@zebracollege.edu</li>
            <li><strong>Address:</strong> Zebra College Campus, Education City, New Delhi - 110001</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Zebra College. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
            <Link key={social} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{social}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      variant="default"
      size="icon"
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 animate-in fade-in"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp className="w-5 h-5" />
    </Button>
  );
}

export function LoadingSplash({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-white text-4xl font-bold tracking-tight flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-lg bg-white text-primary flex items-center justify-center">Z</div>
        Zebra College
      </motion.div>
    </motion.div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatePresence>
        {loading && <LoadingSplash onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
