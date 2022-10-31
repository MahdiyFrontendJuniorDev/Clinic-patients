import { Routes, Route, Link } from "react-router-dom";
import Company from "./pages/Company";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import PressPage from "./pages/Presss";
import ResourcesPage from "./pages/Resourses";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App;
