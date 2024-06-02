import AboutMeSection from "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import RelevantCoursework from "../components/RelevantCoursework";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans-serif bg-black">
      <NavBar />
      <div className="container mt-28 mx-auto px-12 py-4">  
        <HeroSection />
        <AboutMeSection />
        <RelevantCoursework />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
