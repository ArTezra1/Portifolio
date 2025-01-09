"use client"

import HeroSection from "./components/HeroSection";
import { FloatingNav } from "./components/ui/FloatingNav";

import { NavItens } from "../data/data";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FloatingNav navItems={NavItens}></FloatingNav>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </main>
  );
}
