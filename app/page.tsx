import Header from "@/components/Header";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoCarousel />

      {/* A typewriter letter at the end for personalization. mono font for typewriter
      effect, add a contact button within the letter for easy access */}
    </>
  );
}
