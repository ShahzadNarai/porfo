import React, { useEffect, useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const router = useRouter();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header
      className={`text-white z-50 top-0 sticky p-2 ${
        scrolled ? "bg-black border-b shadow-md shadow-white" : "backdrop-brightness-100"
      }`}
    >
        <nav className="px-6 lg:px-8 py-4">
          <div className="flex flex-nowrap justify-between items-center mx-auto">
            <Link
              href="/"
              aria-label="Home"
              className="flex font-medium text-xl sm:text-2xl focus:outline-none items-center text-[#c9f31d]"
            >
              SHAHZAD ALI
            </Link>
            <div className="flex items-center lg:order-2">
            
              <Link
               href="/Resume.pdf" download="Resume" aria-label="Resume"
                className="text-white flex  hover:text-[#c9f31d] hover:scale-95 transition transform duration-500 font-medium rounded-full text-sm lg:text-lg px-3 lg:px-3 py-1 lg:py-1 mr-2 dark:bg-primary-600 hover:border-[#c9f31d] focus:outline-none "
              >
                Download Resume
              </Link>
              <Link
                href="/#"
                aria-label="Contact"
                className="text-white flex border border-[#c9f31d] hover:text-[#c9f31d] hover:scale-95 transition transform duration-500 font-medium rounded-full text-sm lg:text-lg px-3 lg:px-3 py-1 lg:py-1 mr-2 dark:bg-primary-600 hover:border-[#c9f31d] focus:outline-none "
              >
                Contact
              </Link>
              <button
                onClick={toggleMobileMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 transition duration-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <div
              className="hidden justify-between items-center w-full lg:flex lg:w-[60%] lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col justify-between mt-4 lg:flex-row lg:space-x-20 lg:mt-0">
                <li className="relative group focus:outline-none  text-lg">
                  <Link href="/" aria-label="Home" className="focus:outline-none">
                    Home
                  </Link>
                </li>

                <li className="relative group focus:outline-none  text-lg">
                  <Link href="/about" aria-label="About" className="focus:outline-none">
                    About Us
                  </Link>
                </li>
                <li className="relative group focus:outline-none text-lg">
                  <Link href="/blogs" aria-label="Blogs" className="focus:outline-none">
                    News & Blogs
                  </Link>
                </li>
              </ul>

            </div> */}
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <Box
          sx={{
            background: "rgb(31, 41, 54)",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: "999",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src="/Asset.png" width={100} height={100} alt="" />
            <CloseOutlined
              onClick={toggleMobileMenu}
              sx={{ color: "white", fontSize: "2rem" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1rem",
              height: "50%",
              width: "100%",
              fontFamily: "Poppins, Roboto, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "600",
              listStyle: "none",
              mt: "1rem",
              p: "1.44rem 0",
            }}
          >
            <ul className="flex flex-col items-start justify-start w-full">
              <li className="relative items-start justify-start">
                <Link href="/" aria-label="Home">
                  Home
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/about" aria-label="About">
                  About Us
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/blogs" aria-label="Blogs">
                  News & Blogs
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
              
            </ul>

          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
