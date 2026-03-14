"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
    ];

    return (
        <nav className="fixed top-6 right-6 md:top-10 md:right-12 z-[60] flex gap-6 md:gap-10 px-6 py-3 md:px-8 md:py-4 bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-black/20">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[0.85rem] font-montserrat font-medium tracking-[0.3em] uppercase transition-colors duration-300 group ${pathname === link.href ? "text-blue-500" : "text-white/60 hover:text-white"
                        }`}
                >
                    {link.label}
                    <span
                        className={`absolute -bottom-[4px] left-0 h-[1px] transition-all duration-300 ${pathname === link.href ? "w-full bg-blue-500" : "w-0 bg-white group-hover:w-full"
                            }`}
                    ></span>
                </Link>
            ))}
        </nav>
    );
}
