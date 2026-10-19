"use client";

import { Phone, Mail, ChevronRight } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const contacts = [
  {
    role: "Secretary General",
    phone: "+90 542 529 05 69",
    href: "https://wa.me/905425290569",
  },
  {
    role: "Deputy Secretary General",
    phone: "+90 536 017 03 39",
    href: "https://wa.me/905360170339",
  },
  {
    role: "Director General",
    phone: "+90 554 134 34 66",
    href: "https://wa.me/905541343466",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Event Details", href: "#details" },
  { label: "Committees", href: "#committees" },
  { label: "Apply Now", href: "#apply" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-charcoal-950 border-t border-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="mb-6 flex items-baseline gap-2">
              <p className="font-bold text-2xl text-white tracking-widest uppercase">
                NEXT
              </p>
              <p className="font-light text-2xl text-brand tracking-widest uppercase">
                CONFERENCE&apos;26
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Where the future meets diplomacy. A Model United Nations conference bringing
              together delegates to debate, negotiate, and shape tomorrow.
            </p>
            <div className="space-y-2 border-l-2 border-charcoal-800 pl-4">
              <p className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">December 11–14, 2026</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=%C4%B0bn+Haldun+%C3%9Cniversitesi+Ba%C5%9Fak%C5%9Fehir+Yerle%C5%9Fkesi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-500 hover:text-brand transition-colors text-[10px] tracking-widest uppercase font-semibold"
              >
                İbn Haldun Üniversitesi
              </a>
              <p className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">Istanbul, Türkiye</p>
            </div>
          </div>

          {/* Spacer for grid */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-[10px] tracking-[0.2em] uppercase text-gray-600 mb-6 border-b border-charcoal-800 pb-3">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider group"
                  >
                    <ChevronRight size={12} className="text-charcoal-700 group-hover:text-brand transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-bold text-[10px] tracking-[0.2em] uppercase text-gray-600 mb-6 border-b border-charcoal-800 pb-3">
              Direct Contact
            </h3>
            <div className="space-y-6">
              {contacts.map((c) => (
                <div key={c.role} className="group">
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-gray-600 mb-1.5">
                    {c.role}
                  </p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Phone size={14} className="text-charcoal-700 group-hover:text-brand transition-colors" />
                    {c.phone}
                  </a>
                </div>
              ))}

              <div className="group">
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-gray-600 mb-1.5">
                  Official Email
                </p>
                <a
                  href="mailto:nextmunpr@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Mail size={14} className="text-charcoal-700 group-hover:text-brand transition-colors" />
                  nextmunpr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-charcoal-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase font-semibold">
            &copy; 2026 NEXT CONFERENCE — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/next.mun/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-gray-400 hover:border-brand hover:text-white hover:bg-brand-muted transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
