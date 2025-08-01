import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import "./App.css"; // basic global styles
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
