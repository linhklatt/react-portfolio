import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../style/index.css";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={(page) => setCurrentPage(page)}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
