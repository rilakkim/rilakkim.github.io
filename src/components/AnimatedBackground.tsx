"use client";

import { motion } from "framer-motion";
import { useMouseDynamics } from "@/hooks/useMouseDynamics";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const { glowX, glowY, requestGyroPermission } = useMouseDynamics();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Attach gyroscope permission request to the first touch/click anywhere on the screen
        const handleInitialInteraction = () => {
            requestGyroPermission();
            document.removeEventListener('click', handleInitialInteraction);
            document.removeEventListener('touchstart', handleInitialInteraction);
        };

        document.addEventListener('click', handleInitialInteraction);
        document.addEventListener('touchstart', handleInitialInteraction, { passive: true });

        return () => {
            document.removeEventListener('click', handleInitialInteraction);
            document.removeEventListener('touchstart', handleInitialInteraction);
        };
    }, [requestGyroPermission]);

    // Prevent layout shift during SSR
    if (!mounted) return null;

    return (
        <>
            {/* Parallax Background Wrapper */}
            <div
                id="parallax-wrapper"
                className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none overflow-hidden"
            >
                <div className="absolute -inset-[5%] w-[110vw] h-[110vh]">
                    <motion.div
                        id="glow-container"
                        className="absolute inset-0 blur-[60px] md:blur-[100px] will-change-transform"
                        style={{ x: glowX, y: glowY }}
                    >
                        <div className="glow-shape absolute -top-[20vh] right-0 w-[55vw] h-[140vh]"></div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
