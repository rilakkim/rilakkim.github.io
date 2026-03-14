"use client";

import { motion } from "framer-motion";
import { useMouseDynamics } from "@/hooks/useMouseDynamics";

const PROJECTS = [
    {
        id: 1,
        title: "Know your types",
        category: "web",
        description: "A scalable web application providing diverse, customized psychological tests and social sharing capabilities.",
        tech: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        year: "2025"
    },
    {
        id: 2,
        title: "Mobile app Project",
        category: "mobile",
        description: "In Progress",
        tech: ["React", "ReactNative"],
        year: "2026"
    }
];

export default function Projects() {
    const { textShadow } = useMouseDynamics(0.5);

    return (
        <div className="min-h-[100svh] w-full flex flex-col items-center text-white pt-20 md:pt-32 font-montserrat">


            <div className="w-full px-8 md:px-0 md:w-[80%] max-w-[1200px] flex flex-col md:items-start mt-10">
                <div className="w-full max-w-[1000px]">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-playfair mb-16 tracking-tight flex gap-4">
                        <span>Selected</span>
                        <motion.span
                            className="text-[#f4f4f4] italic font-medium transition-[text-shadow] duration-100 ease-out"
                            style={{ textShadow }}
                        >
                            Works
                        </motion.span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        {PROJECTS.map((project) => (
                            <div key={project.id} className="group relative">
                                <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-white/30 transition-colors duration-300 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-mono text-blue-500 tracking-wider uppercase">{project.category}</span>
                                        <span className="text-xs font-mono text-white/40">{project.year}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[0.65rem] font-mono tracking-widest uppercase bg-white/10 text-white/70 px-3 py-1.5 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
