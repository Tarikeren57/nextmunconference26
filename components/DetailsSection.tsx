"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar, MapPin, Building2, Users } from "lucide-react";

interface DetailItem {
  icon: any;
  label: string;
  value: string;
  sub: string;
  href?: string;
}

const details: DetailItem[] = [
  {
    icon: Calendar,
    label: "Conference Dates",
    value: "December 11–14, 2026",
    sub: "4 Days of Diplomacy",
  },
  {
    icon: MapPin,
    label: "Main Venue",
    value: "İbn Haldun Üniversitesi",
    sub: "Istanbul, Türkiye",
    href: "https://www.google.com/maps/search/?api=1&query=%C4%B0bn+Haldun+%C3%9Cniversitesi+Ba%C5%9Fak%C5%9Fehir+Yerle%C5%9Fkesi",
  },
  {
    icon: Building2,
    label: "Organizer",
    value: "15 Temmuz Şehitleri AİHL",
    sub: "Host Institution",
  },
  {
    icon: Users,
    label: "Committees",
    value: "7 Active Committees",
    sub: "Crisis · Historical · Modern",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function DetailsSection() {
  return (
    <section id="details" className="relative py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-start border-l-2 border-brand pl-6 sm:pl-8"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-2">
            Event Information
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Where & When
          </h2>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((item, i) => {
            const Icon = item.icon;
            const CardContent = (
              <>
                <div className="mb-6 p-4 rounded-full bg-charcoal-900 text-gray-300">
                  <Icon size={24} />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand mb-3">
                  {item.label}
                </p>
                <p className={`font-bold text-lg leading-tight mb-2 ${item.href ? 'text-white group-hover:text-brand transition-colors' : 'text-white'}`}>
                  {item.value}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.sub}
                </p>
              </>
            );

            return (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="dossier-card p-8 flex flex-col items-start h-full group block cursor-pointer">
                    {CardContent}
                  </a>
                ) : (
                  <div className="dossier-card p-8 flex flex-col items-start h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Date timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-charcoal-800 bg-black p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex-1 w-full text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Official Schedule</h3>
            <p className="text-gray-400 text-sm">Four days of rigorous debate and international collaboration.</p>
          </div>
          <div className="flex-1 w-full flex justify-between items-center">
            {["Dec 11", "Dec 12", "Dec 13", "Dec 14"].map((day, i) => (
              <div key={day} className="flex flex-col items-center relative group w-1/4">
                <div className="w-3 h-3 rounded-full bg-charcoal-700 group-hover:bg-brand transition-colors mb-4 z-10 relative" />
                <p className="font-bold text-gray-300 text-xs sm:text-sm tracking-wider">{day}</p>
                <p className="text-gray-600 text-[10px] sm:text-xs mt-1">2026</p>
                {i < 3 && (
                  <div className="absolute top-1.5 left-[50%] w-full h-px bg-charcoal-800" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
