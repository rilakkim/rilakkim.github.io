"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement using springs for a fluid dynamic effect
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform values for background glow container movement
  const glowX = useTransform(smoothX, [-1, 1], [-100, 100]);
  const glowY = useTransform(smoothY, [-1, 1], [-100, 100]);

  // Transform values for chromatic aberration (lens aberration text shadow)
  const shiftX = useTransform(smoothX, [-1, 1], [-50, 50]);
  const shiftY = useTransform(smoothY, [-1, 1], [50, -50]); // Y axis is inverted for shadow

  // We use useTransform to compose a dynamic CSS text-shadow value based on mouse shift
  const textShadow = useTransform(
    [shiftX, shiftY],
    ([sx, sy]: number[]) => `
      ${4 - sx * 0.5}px ${sy * 0.5}px 6px rgba(0, 240, 255, 0.8),
      ${12 - sx}px ${sy}px 25px rgba(0, 0, 255, 0.6),
      ${-4 - sx * 0.5}px ${sy * 0.5}px 6px rgba(255, 220, 0, 0.8),
      ${-12 - sx}px ${sy}px 25px rgba(255, 0, 0, 0.6),
      0px 10px 30px rgba(0, 0, 0, 0.95),
      0px 25px 70px rgba(0, 0, 0, 1)
    `,
  );

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center grain-overlay">
      {/* SVG Displacement Filter for organic edges */}
      <svg width="0" height="0" className="absolute z-[-1]" aria-hidden="true">
        <defs>
          <filter
            id="organic-edge"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0025"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="250"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Fixed Navigation Menu (Top Right) */}
      <nav className="fixed top-10 right-12 z-[60] flex gap-10 md:gap-14">
        <a
          href="#about"
          className="relative text-[0.85rem] font-montserrat font-medium tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
        >
          About
          <span className="absolute -bottom-[4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="relative text-[0.85rem] font-montserrat font-medium tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
        >
          Projects
          <span className="absolute -bottom-[4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Parallax Background Wrapper */}
      <div
        id="parallax-wrapper"
        className="fixed -inset-[5%] w-[110vw] h-[110vh] z-0 pointer-events-none"
      >
        <motion.div
          id="glow-container"
          className="absolute inset-0 blur-[60px] md:blur-[100px] will-change-transform"
          style={{ x: glowX, y: glowY }}
        >
          <div className="glow-shape absolute -top-[20vh] right-0 w-[55vw] h-[140vh]"></div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-[5] select-none flex flex-col items-center md:items-start w-full px-8 md:px-0 md:w-[80%] max-w-[1200px]">
        <motion.h1
          className="flex flex-col items-center md:items-start text-[clamp(4rem,15vw,11rem)] font-playfair font-extrabold -tracking-[0.03em] mb-10 text-white leading-[0.85] transition-[text-shadow] duration-100 ease-out"
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
