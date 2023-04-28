import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Home from "./pages";
import About from "@pages/About";
import Menu from "@pages/Menu";
import Contact from "@pages/Contact";
import { Route, Routes } from "react-router-dom";
import Dropdown from "@components/Dropdown";
import { useState, useEffect } from "react";
import NoPage from "@pages/NoPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
