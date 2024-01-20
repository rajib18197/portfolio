import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectExplantions from "./pages/ProjectExplanations";

// TODO:
// Update to project explanation page from time to time
// add a spinner when loading and Error compnent

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectExplantions />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
