import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Background from "./components/layout/Background";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import CommandPalette from "./components/CommandPalette";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { scrollToId } from "./lib/utils";
import "./index.css";

function HashScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => scrollToId(id), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash, location.key]);
  return null;
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[1.5px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "/" && !e.target.matches("input, textarea")) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-dvh">
      <Background />
      <ScrollProgress />
      <Navigation onOpenPalette={() => setPaletteOpen(true)} />
      <HashScrollHandler />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
