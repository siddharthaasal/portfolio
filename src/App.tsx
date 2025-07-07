import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
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
