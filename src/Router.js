import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUsPage from "./pages/Contect";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AppRouter;
