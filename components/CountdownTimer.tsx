"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-12-11T09:00:00+03:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
      <span className="font-bold text-3xl sm:text-5xl text-white tracking-tight mb-2">
        {display}
      </span>
      <span className="text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!isClient) return <div className="h-20 sm:h-24"></div>;

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand">
        Conference Begins In
      </p>
      <div className="flex items-center gap-2 sm:gap-6 bg-charcoal-900 border border-charcoal-800 px-6 sm:px-10 py-6 sm:py-8">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <span className="text-xl sm:text-3xl text-gray-700 pb-5">:</span>
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <span className="text-xl sm:text-3xl text-gray-700 pb-5">:</span>
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <span className="text-xl sm:text-3xl text-gray-700 pb-5">:</span>
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
