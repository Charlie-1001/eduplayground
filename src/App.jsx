import MainLayout from "./MainLayout";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import SelectionPage from "./pages/SelectionPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      {/* layout wrapper */}
      <Route element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/selectionPage/:id" element={<SelectionPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<h1>404 - Page not found!</h1>} />
    </Routes>
  )
}

export default App;
