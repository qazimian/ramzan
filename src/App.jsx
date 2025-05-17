import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Project/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
