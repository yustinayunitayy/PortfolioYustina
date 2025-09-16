import AboutMe from "./AboutMe";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
