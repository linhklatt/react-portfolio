import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { OrbitSpace } from "orbit-space";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <OrbitSpace />
    </div>
  );
}

export default App;
