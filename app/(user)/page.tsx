import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/services/Services";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import BlogList from "@/components/blog/BlogList";
import ContactUs from "@/components/contact/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <BlogList />
      <ContactUs />
    </>
  );
}
