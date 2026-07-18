import About from "@/components/About";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CompetitiveProgramming />
        <Education />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
