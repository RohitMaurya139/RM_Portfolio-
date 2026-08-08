import Hero from "../components/sections/Hero";
import CredibilityStrip from "../components/sections/CredibilityStrip";
import FeaturedShowcase from "../components/sections/FeaturedShowcase";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Skills from "../components/sections/Skills";
import Engineering from "../components/sections/Engineering";
import Experience from "../components/sections/Experience";
import About from "../components/sections/About";
import CurrentlyExploring from "../components/sections/CurrentlyExploring";
import GitHubSection from "../components/sections/GitHubSection";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <FeaturedShowcase />
      <FeaturedProjects />
      <Skills />
      <Engineering />
      <Experience />
      <About />
      <CurrentlyExploring />
      <GitHubSection />
      <Contact />
    </main>
  );
}
