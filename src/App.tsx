import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import NavbarDemo from './components/NavbarDemo';
import "./App.css";

function App() {
  return (
    <>
      {/* <NavbarDemo /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
