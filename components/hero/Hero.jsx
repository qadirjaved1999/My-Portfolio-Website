"use client";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProfileCircle from "@/components/hero/ProfileCircle";
import GradientText from "../ui/GradientText";
import TypingText from "@/components/ui/TypingText";
import StarBorder from "../ui/StarBorder";

export default function Hero() {
  return (
    <section id="home" className="hero relative">
      {/* Background Beams */}
      <BackgroundBeams />
      <div className="max-w-[1440px] m-auto flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-20 px-6 lg:px-16 py-20 min-h-[100vh] overflow-hidden bg-background">
        {/* Left Section - Text */}
        <div className="relative z-10 max-w-xl text-center lg:text-left space-y-5">
          <p className="uppercase tracking-widest text-sm text-muted-foreground">
            👋Hello, there
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            I&apos;m{" "}
            <GradientText
              text="Qadir Javed"
              gradient="linear-gradient(90deg, #F09EDC, #D12BB7, #8C167F)"
              animationSpeed={6}
              className="ml-1"
            />
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-[#D12BB7]">
            <TypingText
              texts={[
                "Full-stack Web Developer",
                "MERN Stack Engineer",
                "React & Next.js Specialist",
                "Passionate Problem Solver",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
            Passionate about building modern, scalable, and responsive web
            applications using Next.js, TailwindCSS, and Shadcn UI. I focus on
            crafting elegant front-ends and robust back-end systems for seamless
            user experiences.
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
            <StarBorder
              color="#D12BB7"
              speed="5s"
              className="rounded-full"
            >
              Hire Me
            </StarBorder>
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
      </div>
    </section>
  );
}
