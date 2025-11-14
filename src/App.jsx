import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Tech from "./components/Tech";
import "./index.css";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        {/* Enhanced Animated Background */}
        <div className="fixed inset-0 -z-10">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Radial gradient spotlight */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

          {/* Noise texture overlay for depth */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <NavBar />

          {/* Main Content Sections with IDs for navigation */}
          <main>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center">
              <Hero />
            </section>

            {/* Decorative Divider */}
            <div className="relative py-16">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </span>
              </div>
            </div>

            {/* About Section */}
            <section
              id="about"
              className="min-h-screen flex items-center"
            >
              <div className="w-full">
                <About />
              </div>
            </section>

            {/* Decorative Divider with Gradient */}
            <div className="relative py-16">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-6 py-2 rounded-full border border-gray-800">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <div
                      className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </span>
              </div>
            </div>

            {/* Skills/Tech Section */}
            <section id="skills" className="py-12">
              <Tech />
            </section>

            {/* Decorative Divider */}
            <div className="relative ">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4">
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Projects Section */}
            <section id="projects" className="py-12">
              <Project />
            </section>

            {/* Final Decorative Divider */}
            <div className="relative ">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-6 py-2 rounded-full border border-pink-500/30 shadow-lg shadow-pink-500/20">
                  <span className="text-sm font-medium text-pink-400">
                    Let's Connect
                  </span>
                </span>
              </div>
            </div>

            {/* Contact Section */}
            <section id="contact" className="py-12">
              <Contact />
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-800 py-1">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  RM
                </div>
                <div>
                  <p className="text-white font-semibold">Rohit Maurya</p>
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
                <span>•</span>
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <span>•</span>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
                <span>•</span>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </div>
            </div>

            {/* Back to top button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group px-6 py-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple-500/20"
              >
                <span className="text-sm font-medium">Back to Top</span>
                <svg
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </footer>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-150"
            style={{
              width: `${
                (window.pageYOffset /
                  (document.documentElement.scrollHeight -
                    window.innerHeight)) *
                100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
