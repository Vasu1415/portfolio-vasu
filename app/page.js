import AboutMeSection from "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black font-serif">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">  
        <HeroSection />
        <AboutMeSection />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
