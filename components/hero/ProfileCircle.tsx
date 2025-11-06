"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ProfileCircle() {
  const controls = useAnimationControls();

  // Start continuous rotation on mount
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 60, // slow and smooth
      },
    });
  }, [controls]);

  // Function to pause/resume rotation
  const handleHover = (isHovering: boolean) => {
    if (isHovering) {
      controls.stop(); // ⛔ pauses rotation instantly
    } else {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        },
      });
    }
  };

  const socialLinks = [
    { icon: "mdi:linkedin", url: "#", color: "#0077B5" },
    { icon: "mdi:github", url: "#", color: "#ffffff" },
    { icon: "mdi:instagram", url: "#", color: "#E1306C" },
    { icon: "mdi:facebook", url: "#", color: "#1877F2" },
    { icon: "mdi:twitter", url: "#", color: "#1DA1F2" },
  ];

  return (
    <div className="relative w-[20rem] h-[20rem] flex items-center justify-center">
      {/* Main rotating orbit */}
      <motion.div
        animate={controls}
        className="absolute inset-0 rounded-full border-[3px] border-[#D12BB7]
        shadow-[0_0_40px_#D12BB7,0_0_80px_#D12BB7/30]
        flex items-center justify-center"
      >
        {socialLinks.map((item, i) => {
          const angle = (i / socialLinks.length) * 2 * Math.PI;
          const x = Math.round(Math.cos(angle) * 160 * 1000) / 1000;
          const y = Math.round(Math.sin(angle) * 160 * 1000) / 1000;
          const delay = i * 0.25;

          return (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleHover(true)} // ✅ pause
              onMouseLeave={() => handleHover(false)} // ✅ resume
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="relative w-10 h-10 rounded-full grid place-items-center cursor-pointer"
            >
              {/* Ripple 1 */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 0 2px #D12BB7 inset" }}
                initial={{ scale: 0.9, opacity: 0.6 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeOut",
                  delay,
                }}
              />
              {/* Ripple 2 */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 0 2px #D12BB7 inset" }}
                initial={{ scale: 0.9, opacity: 0.6 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeOut",
                  delay: delay + 1.1,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#101010]/90 border border-[#D12BB7]/30 shadow-[0_0_12px_#D12BB7] grid place-items-center hover:scale-125 transition-transform duration-300">
                <Icon icon={item.icon} color={item.color} width="22" height="22" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Profile image */}
      <div className="relative w-62 h-62 border-4 border-[#D12BB7] rounded-full overflow-hidden shadow-[0_0_40px_#D12BB7]">
        <Image
          src="/images/hero/profile1.jpeg"
          alt="Profile"
          height={600}
          width={600}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
