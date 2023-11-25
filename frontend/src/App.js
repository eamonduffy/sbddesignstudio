import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Pequot from "./pages/Pequot";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pequot" element={<Pequot />} />

                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
