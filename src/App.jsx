import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectExplantions from "./pages/ProjectExplanations";

// TODO:
// Update your project explanation page from time to time
// add a spinner when loading and Error compnent

export default function App() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:id"
              element={<ProjectExplantions key={id} />}
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// export default function App() {
//   return (
//     <div>
//       <NavigationProvider>
//         <SideNav />
//         <Route index={true} element={Project} />
//         <Route path="/project" element={Project} />
//         <Route path="/sports" element={Sports} />
//         <Route path="/table" element={Table} />
//         <Route path="/dashboard" element={Dashboard} />
//       </NavigationProvider>
//     </div>
//   );
// }
