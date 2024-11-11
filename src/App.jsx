import React from "react";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <AboutUs />
      <Service />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
