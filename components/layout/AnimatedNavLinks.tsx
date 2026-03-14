"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function AnimatedNavLinks() {
    const links = ["home", "about", "services", "experience", "projects", "skills", "blog"];
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // Animate underline on mount & change
    useLayoutEffect(() => {
        const activeBtn = btnRefs.current[activeIndex];
        if (!activeBtn || !navRef.current || !lineRef.current) return;
        const navRect = navRef.current.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();
        const x = btnRect.left - navRect.left;
        const width = btnRect.width;

        gsap.to(lineRef.current, {
            x,
            width,
            duration: 0.4,
            ease: "power3.out",
        });
    }, [activeIndex]);

    // Smooth scroll behavior
    const handleClick = (index: number, id: string) => {
        setActiveIndex(index);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative" ref={navRef}>
            <div className="flex gap-8">
                {links.map((link, index) => (
                    <a
                        key={link}
                        ref={(el) => {
                            btnRefs.current[index] = el;
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick(index, link);
                        }}
                        href={`/#${link}`}
                        className={`relative font-medium capitalize text-foreground/90 hover:text-[#D12BB7] transition-colors cursor-pointer`}
                    >
                        {link}
                    </a>
                ))}
            </div>

            {/* Animated underline */}
            <div
                ref={lineRef}
                className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#D12BB7] via-[#f28ce6] to-white rounded-full shadow-[0_0_8px_#D12BB7]"
                style={{ width: 0 }}
            />
        </div>
    );
}
