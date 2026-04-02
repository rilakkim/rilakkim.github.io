import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useMouseDynamics(intensityMultiplier: number = 1) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out mouse movement using springs for a fluid dynamic effect
    const springConfig = { damping: 25, stiffness: 120 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        let animationFrameId: number;
        let isInteracting = false;
        let time = 0;
        let lastInteractionTime = 0;

        // Cache window dimensions to prevent layout thrashing on every mouse move or frame
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let isMobile = winWidth <= 768;

        const handleResize = () => {
            winWidth = window.innerWidth;
            winHeight = window.innerHeight;
            isMobile = winWidth <= 768;
        };
        window.addEventListener("resize", handleResize, { passive: true });

        // 1. 마우스 이동 (데스크탑)
        const handleMouseMove = (e: MouseEvent) => {
            isInteracting = true;
            lastInteractionTime = performance.now();
            const x = (e.clientX / winWidth - 0.5) * 2;
            const y = (e.clientY / winHeight - 0.5) * 2;
            mouseX.set(x);
            mouseY.set(y);
        };

        // 2. 화면 터치/스크롤 이동 (모바일)
        const handleTouchMove = (e: TouchEvent) => {
            isInteracting = true;
            lastInteractionTime = performance.now();
            if (e.touches.length > 0) {
                // 모바일에서는 움직임 범위를 25%로 축소
                const x = ((e.touches[0].clientX / winWidth - 0.5) * 2) * 0.25;
                const y = ((e.touches[0].clientY / winHeight - 0.5) * 2) * 0.25;
                mouseX.set(x);
                mouseY.set(y);
            }
        };

        // 3. 기기 기울임(자이로스코프) 적용 (모바일)
        const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
            if (e.gamma === null || e.beta === null) return;
            isInteracting = true;
            lastInteractionTime = performance.now();
            // 모바일에서는 움직임 범위를 50%로 설정 (기존 25% 대비 효과 2배)
            const x = Math.min(Math.max(e.gamma / 45, -1), 1) * 0.5;
            const y = Math.min(Math.max((e.beta - 45) / 45, -1), 1) * 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        const animateAuto = (timestamp: number) => {
            if (isInteracting) {
                // Check if 2 seconds have passed since last interaction without using costly setTimeout pools
                if (timestamp - lastInteractionTime > 2000) {
                    isInteracting = false;
                }
            } else {
                time += 0.005;
                const scale = isMobile ? 0.25 : 1;
                mouseX.set(Math.sin(time) * scale);
                mouseY.set(Math.cos(time * 0.8) * scale);
            }
            animationFrameId = requestAnimationFrame(animateAuto);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("deviceorientation", handleDeviceOrientation);

        animationFrameId = requestAnimationFrame(animateAuto); // 컴포넌트 마운트 시 자동 애니메이션 시작

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("deviceorientation", handleDeviceOrientation);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouseX, mouseY]);

    // Transform values for background glow container movement
    const glowX = useTransform(smoothX, [-1, 1], [-100, 100]);
    const glowY = useTransform(smoothY, [-1, 1], [-100, 100]);

    // Transform values for chromatic aberration (lens aberration text shadow)
    const shiftX = useTransform(smoothX, [-1, 1], [-50 * intensityMultiplier, 50 * intensityMultiplier]);
    const shiftY = useTransform(smoothY, [-1, 1], [50 * intensityMultiplier, -50 * intensityMultiplier]); // Y axis is inverted for shadow

    // We use useTransform to compose a dynamic CSS text-shadow value based on mouse shift
    const textShadow = useTransform(
        [shiftX, shiftY],
        ([sx, sy]: number[]) => `
      ${4 - sx * 0.5}px ${sy * 0.5}px 6px rgba(59, 130, 246, 0.8),
      ${12 - sx}px ${sy}px 25px rgba(0, 0, 255, 0.6),
      ${-4 - sx * 0.5}px ${sy * 0.5}px 6px rgba(255, 220, 0, 0.8),
      ${-12 - sx}px ${sy}px 25px rgba(255, 0, 0, 0.6),
      0px 10px 30px rgba(0, 0, 0, 0.95),
      0px 25px 70px rgba(0, 0, 0, 1)
    `
    );

    const requestGyroPermission = async () => {
        if (typeof window !== "undefined" && typeof (window as any).DeviceOrientationEvent !== "undefined" && typeof (window.DeviceOrientationEvent as any).requestPermission === 'function') {
            try {
                const permissionState = await (window.DeviceOrientationEvent as any).requestPermission();
                if (permissionState === 'granted') {
                    console.log('Gyroscope permission granted');
                }
            } catch (error) {
                console.error('Error requesting gyroscope permission:', error);
            }
        }
    };

    return { glowX, glowY, textShadow, requestGyroPermission };
}
