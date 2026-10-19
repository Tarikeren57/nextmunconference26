"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
  }),
};

const backgroundImages = [
  "/NextMun - 23.jpg",
  "/NextMun - 22.jpg",
  "/NextMun - 20.jpg",
  "/NextMun - 24.jpg",
  "/NextMun(1).jpg",
  "/NextMun.jpg",
  "/NextMun - 27.jpg"
];

interface HeroSectionProps {
  onOpenApply?: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.25, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImg]}
              alt="Committee Background"
              fill
              className="object-cover object-center grayscale"
              priority={currentImg === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-muted/80 via-black/90 to-black pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-24 pb-16">
        
        {/* Logo */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8"
        >
          <Image 
            src="/logo-perfect-v2.png" 
            alt="Next Conference'26 Logo" 
            width={180} 
            height={180} 
            className="w-32 sm:w-40 md:w-48 h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Catchphrase */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <p className="font-serif italic text-brand text-xl sm:text-2xl tracking-wide opacity-90">
            "Where the future meets diplomacy"
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide mb-10 sm:mb-12 leading-[1.2] sm:leading-[1.15]">
            WELCOME TO NEXT <br className="hidden sm:block" />
            CONFERENCE'26
          </h1>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {onOpenApply ? (
            <button
              onClick={onOpenApply}
              className="inline-block bg-white text-black font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-brand hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] mb-16 sm:mb-24 cursor-pointer"
            >
              APPLY NOW
            </button>
          ) : (
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block bg-white text-black font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-brand hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] mb-16 sm:mb-24"
            >
              APPLY NOW
            </a>
          )}
        </motion.div>

        {/* Countdown */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl mx-auto mt-auto"
        >
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  );
}
