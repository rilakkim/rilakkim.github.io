"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useMouseDynamics } from "@/hooks/useMouseDynamics";

export default function Home() {
  const { textShadow } = useMouseDynamics();

  return (
    <div className="h-[100svh] w-full flex items-center justify-center">
      {/* Main Content Container */}
      <div className="container relative z-[5] select-none flex flex-col items-center md:items-start w-full px-8 md:px-0 md:w-[80%] max-w-[1200px]">
        <motion.h1
          className="flex flex-col items-center md:items-start text-[clamp(4rem,15vw,11rem)] landscape:text-[clamp(3rem,16vh,8rem)] font-playfair font-extrabold -tracking-[0.03em] mb-10 landscape:mb-4 text-white leading-[0.85] transition-[text-shadow] duration-100 ease-out"
          style={{ textShadow }}
        >
          <span>Think</span>
          <span className="italic font-semibold text-[#f4f4f4]">Make</span>
          <span>Play</span>
        </motion.h1>

        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 ml-0 md:ml-[0.5vw] border-t border-white/30">
          <span className="text-[clamp(0.7rem,1.5vw,1rem)] font-montserrat font-medium tracking-[0.2em] uppercase text-white/60 mb-2">
            Portfolio of
          </span>
          <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-montserrat font-medium tracking-[0.3em] uppercase text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
            Hyungjun Kim
          </h2>
        </div>
      </div>
    </div>
  );
}
