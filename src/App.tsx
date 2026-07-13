import Navbar from "./layout/Navbar";
import Hero from "./section/hero";
import About from "./section/about";
import Skills from "./section/skills";
import Projects from "./section/project";
import Contact from "./section/contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
