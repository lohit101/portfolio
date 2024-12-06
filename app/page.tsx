import Header from "@/components/Header";
import Jobs from "@/components/Jobs";
import Letter from "@/components/Letter";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoCarousel />
      <Projects />
      <Jobs />
      <Letter />

      {/* A typewriter letter at the end for personalization. mono font for typewriter
      effect, add a contact button within the letter for easy access */}
    </>
  );
}
