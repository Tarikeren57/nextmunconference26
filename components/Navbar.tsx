"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Details", href: "#details" },
  { label: "Committees", href: "#committees" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenApply?: () => void;
}

export default function Navbar({ onOpenApply }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-black/85 backdrop-blur-lg border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
          : "bg-transparent border-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
            className="flex items-center gap-2 group"
          >
            <span className="font-bold text-xl sm:text-2xl tracking-widest text-white transition-colors">
              NEXT
            </span>
            <span className="font-light text-xl sm:text-2xl text-brand tracking-widest">
              CONFERENCE&apos;26
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            {onOpenApply ? (
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 bg-white text-black text-xs hover:text-black hover:bg-[#00E5FF] shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold tracking-[0.15em] uppercase hover:bg-white transition-all duration-200 rounded-full cursor-pointer"
              >
                APPLY NOW
              </button>
            ) : (
              <a
                href="#apply"
                onClick={(e) => { e.preventDefault(); handleClick("#committees"); }}
                className="px-6 py-2.5 bg-white text-black text-xs hover:text-black hover:bg-[#00E5FF] shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-200 rounded-full"
              >
                APPLY NOW
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white hover:text-brand transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-brand transition-colors duration-200 text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenApply?.();
                  }}
                  className="block w-full text-center px-6 py-4 bg-white text-black text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#00E5FF] transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
