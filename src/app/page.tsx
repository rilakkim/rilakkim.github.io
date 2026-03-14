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
    let animationFrameId: number;
    let isInteracting = false;
    let interactionTimeout: NodeJS.Timeout;
    let time = 0;

    // 모바일 등에서 터치나 기기 움직임이 없을 때 자동으로 재생될 애니메이션
    const startAutoAnimationAfterDelay = () => {
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2000); // 2초간 입력이 없으면 자연스럽게 자동 애니메이션(유영) 재개
    };

    // 1. 마우스 이동 (데스크탑)
    const handleMouseMove = (e: MouseEvent) => {
      isInteracting = true;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
      startAutoAnimationAfterDelay();
    };

    // 2. 화면 터치/스크롤 이동 (모바일)
    const handleTouchMove = (e: TouchEvent) => {
      isInteracting = true;
      if (e.touches.length > 0) {
        // 모바일에서는 움직임 범위를 25%로 축소
        const x = ((e.touches[0].clientX / window.innerWidth - 0.5) * 2) * 0.25;
        const y = ((e.touches[0].clientY / window.innerHeight - 0.5) * 2) * 0.25;
        mouseX.set(x);
        mouseY.set(y);
      }
      startAutoAnimationAfterDelay();
    };

    // 3. 기기 기울임(자이로스코프) 적용 (모바일)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      isInteracting = true;
      // 모바일에서는 움직임 범위를 25%로 축소
      const x = Math.min(Math.max(e.gamma / 45, -1), 1) * 0.25;
      const y = Math.min(Math.max((e.beta - 45) / 45, -1), 1) * 0.25;
      mouseX.set(x);
      mouseY.set(y);
      startAutoAnimationAfterDelay();
    };

    const animateAuto = () => {
      time += 0.005;
      if (!isInteracting) {
        // 모바일 자동 유영도 25%로 축소
        // 마우스 이동 시 데스크탑에서는 100% 범위이므로, isTouchDevice 같은 플래그로 데스크탑/모바일 분기하는 것이 이상적이나,
        // 현재는 기기 기울임이나 터치, 그리고 자동 유영 전체를 모바일 기준(25%)으로 조정합니다.
        // 만약 데스크탑 자동유영은 크게 하고 싶다면 별도의 window.innerWidth 체크가 필요합니다. 
        // 일단 요청하신 "모바일에서는 움직임을 25% 정도로 제한"에 맞춰 자동 유영 폭도 0.25를 곱해줍니다.
        // 단, 화면 크기가 작을 때만 25%로 줄이도록 반응형 분기를 추가합니다.
        const isMobile = window.innerWidth <= 768;
        const scale = isMobile ? 0.25 : 1;
        mouseX.set(Math.sin(time) * scale);
        mouseY.set(Math.cos(time * 0.8) * scale);
      }
      animationFrameId = requestAnimationFrame(animateAuto);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    animateAuto(); // 컴포넌트 마운트 시 자동 애니메이션 시작

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(interactionTimeout);
    };
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
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
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
