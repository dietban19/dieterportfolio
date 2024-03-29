import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/contact.jsx";
import Projects from "./components/pages/Projects/projects.jsx";
import FEM from "./components/pages/FEM";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout isNavOpen={isNavOpen} toggleNav={toggleNav} />}
          >
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route
            path="/FEM"
            element={<FEM isNavOpen={isNavOpen} toggleNav={toggleNav} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
