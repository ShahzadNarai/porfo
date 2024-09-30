import Navbar from "@/components/Navbar";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {

  const ArrowSlider = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const shouldShow = window.scrollY > 100; // Adjust the scroll distance as needed
        setShowButton(shouldShow);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
      <div className="z-50" style={{ position: "relative" }}>
        <div
          className="z-50"
          style={{ position: "fixed", bottom: "15%", right: "3%" }}
        >
          <button
            id="scrollbtn"
            aria-label="Scroll to top of the page"
            className="z-50"
            style={{
              backgroundColor: "#363636",
              padding: "10px 10px",
              borderRadius: "10px",
              color: "#fff",
              transition: "0.5s ease-in-out",
              opacity: showButton ? 1 : 0,
            }}
            onClick={scrollToTop}
          >
            <KeyboardDoubleArrowUpIcon />
          </button>
        </div>
      </div>
    )
  }

  return  (
    <>
    <Navbar/>
  <Component {...pageProps} />
    <ArrowSlider/>
  <Footer/>
  </>
  )
}
