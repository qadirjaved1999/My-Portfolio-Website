import {BackgroundBeams} from "@/components/ui/background-beams";
// import TextReveal from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">
      <BackgroundBeams />
      {/* <TextReveal> */}
        <h1 className="text-6xl font-bold">Hi, I'm Qadir</h1>
      {/* </TextReveal> */}
      <p className="text-muted-foreground mt-4">
        Frontend Developer | Next.js | Tailwind | Shadcn UI
      </p>
      <div className="mt-8 flex gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </section>
  );
}
