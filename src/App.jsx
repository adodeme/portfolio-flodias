import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Background from "./components/Background";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      
      <ScrollTop />
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;