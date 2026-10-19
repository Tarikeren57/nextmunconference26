"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Users, ShieldAlert, Award } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const applicationOptions = [
  {
    title: "Individual",
    description: "Apply as a single delegate",
    url: "https://docs.google.com/forms/d/1kzXLkG4CGN6Q-W-DKaTn13ctuMr4MK4nXAMRncXhqYc/viewform",
    icon: User,
  },
  {
    title: "Delegation",
    description: "Apply as a delegation group",
    url: "https://docs.google.com/forms/d/1oe3BOEsuCTw7-1P7t6vlAXvVfRL3mpqKizQylQ3WnZw/viewform",
    icon: Users,
  },
  {
    title: "Board Member",
    description: "Apply as an academic or organizational board member",
    url: "https://docs.google.com/forms/d/1jrLskVLTbHWWwSIuqD6gfIx6w8fsqoa4iPoZW_UMUoA/viewform",
    icon: Award,
  },
  {
    title: "Crisis Team",
    description: "Apply to join the crisis simulation and management team",
    url: "https://docs.google.com/forms/d/1n2u15uj9v8mA9ZS88EWWd9byx1tut6rMOsDYKOHcjKU/viewform",
    icon: ShieldAlert,
  },
];

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-charcoal-950/95 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden"
          >
            {/* Subtle Cyan Glow Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="text-center w-full">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-white">
                  Apply Now
                </h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                  NEXT CONFERENCE'26 Applications
                </p>
              </div>
              <button
                onClick={onClose}
                className="absolute right-0 top-1 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applicationOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={opt.title}
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between p-5 rounded-xl bg-charcoal-900/80 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-white/5 text-gray-300 group-hover:text-brand group-hover:bg-brand/10 transition-colors">
                            <Icon size={18} />
                          </div>
                          <h4 className="font-serif text-lg font-semibold text-white group-hover:text-brand transition-colors">
                            {opt.title}
                          </h4>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-500 group-hover:text-brand group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {opt.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold tracking-wider text-brand/80 uppercase group-hover:text-brand transition-colors">
                      <span>Open Form</span>
                      <span className="text-xs">↗</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Note / Help */}
            <div className="mt-6 text-center text-xs text-gray-500">
              Need assistance? Contact our team via WhatsApp in the footer.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
