import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
        h-screen
        overflow-hidden
        bg-[#fffdf8]
        text-[#0f1f3d]
        transition-colors
        duration-300
        dark:bg-[#0b1220]
        dark:text-white
      "
    >
      <Navbar />

      <main
        id="main-scroll"
        aria-label="Talent English Classes website"
        className="
          h-screen
          w-full
          overflow-x-hidden
          overflow-y-auto
          scroll-smooth
          overscroll-y-contain
        "
      >
        <Hero />

        <About />

        <Courses />

        <WhyUs />

        <Gallery />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;