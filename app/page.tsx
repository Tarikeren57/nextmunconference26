"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import CommitteesSection from "@/components/CommitteesSection";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";

export default function Home() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <main className="relative bg-black text-white overflow-x-hidden selection:bg-brand selection:text-black">
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />
      <HeroSection onOpenApply={() => setIsApplyOpen(true)} />
      <DetailsSection />
      <CommitteesSection />
      <Footer />
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </main>
  );
}
