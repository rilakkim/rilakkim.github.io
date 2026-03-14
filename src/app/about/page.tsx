"use client";

import { motion } from "framer-motion";
import { useMouseDynamics } from "@/hooks/useMouseDynamics";

export default function About() {
    const { textShadow } = useMouseDynamics(0.5);

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-[#000108] text-white pt-20 md:pt-32 font-montserrat selection:bg-blue-500/30">


            <div className="w-full px-8 md:px-0 md:w-[80%] max-w-[1200px] flex flex-col md:items-start mt-10">
                <div className="w-full max-w-[800px]">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-playfair mb-8 tracking-tight flex gap-4">
                        <span>About</span>
                        <motion.span
                            className="text-[#f4f4f4] italic font-medium transition-[text-shadow] duration-100 ease-out"
                            style={{ textShadow }}
                        >
                            Me
                        </motion.span>
                    </h1>

                    <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                        <p>
                            Hello, I'm Hyungjun Kim, a passionate Frontend Engineer dedicated to crafting intuitive and dynamic user experiences. With a keen eye for design and a strong foundation in modern web technologies, I bridge the gap between aesthetics and functionality.
                        </p>
                        <p>
                            I specialize in React, Next.js, and TypeScript, building scalable architectures for complex web applications. My philosophy is simple: write clean code, design for the user, and never stop learning.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new design trends, or optimizing application performance. I believe in the power of motion and interaction to tell a compelling story on the web.
                        </p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-6 tracking-widest uppercase text-white/90">Experience</h2>
                        <div className="space-y-8">
                            <div className="pl-6 relative">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[1.5px] top-1.5 translate-x-[-50%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                <h3 className="text-xl font-medium text-white">Senior Frontend Engineer</h3>
                                <p className="text-sm text-blue-500 mb-2 mt-1 font-mono">Nord Security | Berlin, Germany | Remote | 2022 - Present</p>
                                <p className="text-white/70 text-sm leading-relaxed">Building checkout experience and internal tools with Next.js and TypeScript.</p>
                            </div>

                            <div className="pl-6 relative">
                                <div className="absolute w-3 h-3 bg-white/50 rounded-full -left-[1.5px] top-1.5 translate-x-[-50%]"></div>
                                <h3 className="text-xl font-medium text-white">Senior Frontend Developer</h3>
                                <p className="text-sm text-white/50 mb-2 mt-1 font-mono">Contorion | Berlin, Germany | 2018 - 2022</p>
                                <p className="text-white/70 text-sm leading-relaxed">Developed e-commerce web application with inhouse frontend framework.</p>
                            </div>

                            <div className="pl-6 relative">
                                <div className="absolute w-3 h-3 bg-white/50 rounded-full -left-[1.5px] top-1.5 translate-x-[-50%]"></div>
                                <h3 className="text-xl font-medium text-white">Frontend Developer</h3>
                                <p className="text-sm text-white/50 mb-2 mt-1 font-mono">Samsung SDS | Seoul, South Korea | 2014 - 2017</p>
                                <p className="text-white/70 text-sm leading-relaxed">Developed collaboration tools with real-time file sharing and editing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
