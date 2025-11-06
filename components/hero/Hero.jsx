"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProfileCircle from "@/components/hero/ProfileCircle";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-20 px-6 lg:px-16 py-20 min-h-[100vh] overflow-hidden bg-background">
      {/* Background Beams */}
      <BackgroundBeams />

      {/* Left Section - Text */}
      <div className="relative z-10 max-w-xl text-center lg:text-left space-y-5">
        <p className="uppercase tracking-widest text-sm text-muted-foreground">
          Hello!
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          I&apos;m <span className="text-[#D12BB7]">Qadir Javed</span>
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#D12BB7]">
          Full-stack Web Developer
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
          Passionate about building modern, responsive, and performant web
          applications using Next.js, TailwindCSS, and Shadcn UI.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
          <Button className="bg-[#D12BB7] hover:bg-[#b4229b] text-white rounded-full px-6">
            Let’s Talk
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-[#D12BB7] text-[#D12BB7] hover:bg-[#D12BB7]/10"
          >
            View Projects
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center lg:justify-start pt-6 text-[#D12BB7]">
          <i className="ri-facebook-circle-fill text-2xl hover:scale-110 transition-transform"></i>
          <i className="ri-instagram-fill text-2xl hover:scale-110 transition-transform"></i>
          <i className="ri-github-fill text-2xl hover:scale-110 transition-transform"></i>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">
        <ProfileCircle />
      </div>
    </section>
  );
}
