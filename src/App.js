// import libaries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/home";

// import components
import Navbar from "./components/navigation/navbar";
import Sidebar from "./components/navigation/sidebar";
import Footer from "./components/footer/footer";
import { getWindowDimensions } from './components/window-dimensions/window-dimensions';

function App() {
  // show or hide sidebar
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  // get window dimensions 
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} windowDimensions={windowDimensions}/>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
