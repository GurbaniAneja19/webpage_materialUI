import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import BootstrapSection from "./BootstrapSection";
import MaterialSection from "./MaterialSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/bootstrap" element={<BootstrapSection />} />
        <Route path="/material" element={<MaterialSection />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
