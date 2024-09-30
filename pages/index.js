import Head from "next/head";
import { useEffect, useState, useRef, TouchEvent } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import How from "@/components/How";
import Image from "next/image";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Link from "next/link";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpeedIcon from "@mui/icons-material/Speed";
import ErrorIcon from "@mui/icons-material/Error";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GroupsIcon from "@mui/icons-material/Groups";
import ShieldIcon from "@mui/icons-material/Shield";
import SettingsIcon from "@mui/icons-material/Settings";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { Roboto, Lato } from "next/font/google";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TypeAnimation } from "react-type-animation";
import Marquee from "@/components/Marquee";
import CallIcon from "@mui/icons-material/Call";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const IntroSection = () => {
  return (
    <Box
      className="block object-cover w-[100vw] h-[100vh] max-w-[100vw] top-0 left-0 right-0 overflow-hidden pesudoMyClass"
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",

          zIndex: 1,
          transition: "all 0.5s ease-in-out",
        },
      }}
    >
      <section className=" body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row  items-center">
          <div className="md:w-3/5 w-full lg:pr-0 pr-0">
            <div className="wrapper text-3xl md:text-3xl focus:outline-none text-center justify-start leading-10 font-bold mb-2">
              <p className="hide">Hello, I am a</p>
              <div className="words">
                <span className="span"> Web Developer</span>
                <span className="span"> Web Designer</span>
                <span className="span"> UI/UX Designer</span>
                <span className="span"> Software Developer</span>
                <span className="span"> Web Developer</span>
              </div>
            </div>

            {/*             
              <TypeAnimation
                sequence={[
                  'I am a Web Developer',
                  1000,
                  'I am a Software Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', color: "#c9f31d" }}
                repeat={Infinity}
              /> */}
          </div>
          <div className="md:w-2/5 border-2 border-[#c9f31d] rounded-full px-4 flex flex-col md:ml-auto w-full h-full md:mt-0">
            <Image
              width={400}
              height={600}
              className="object-cover rounded-full w-full h-full object-center"
              src={"/Sir.png"}
            />
          </div>
        </div>
      </section>
    </Box>
  );
};

const FeatureSection = () => {
  const data = [
    {
      svg: <SpeedIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "AI-Assisted Labeling",
      desc: "Fast AI-assisted labeling streamlines the annotation process, harnessing the power of artificial intelligence to swiftly and accurately label images.",
    },
    {
      title: "Plug & Play",
      desc: 'Enables easy "Plug n Play" integration for a hassle-free setup. Effortless deployment with a user-friendly interface.',
      svg: <ElectricalServicesIcon fontSize="large" sx={{ fill: "#fff" }} />,
    },

    {
      title: "No Expertise Required",
      svg: <SettingsIcon fontSize="large" sx={{ fill: "#fff" }} />,
      desc: "User-friendly design, no technical expertise needed. Intuitive interface for easy deployment of tailored solutions.",
    },
  ];

  const data2 = [
    {
      svg: <ShieldIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Edge Device Compatible",
      desc: "Utilizing edge computing, data is processed locally near its generation point, reducing latency, improving efficiency, and enhancing overall system performance.",
    },
    {
      svg: <GroupsIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Collaborative Platform",
      desc: "A centralized hub that facilitates seamless interaction and information sharing among individuals or teams, fostering synergies in various domains.",
    },

    {
      title: "Fully Customizable",
      desc: "We offer a fully customizable solution that can be tailored to meet your specific needs.",
      svg: <DashboardCustomizeIcon fontSize="large" sx={{ fill: "#fff" }} />,
    },
  ];

  return (
    // <section className="text-white bg-[#111] block relative "
    // >
    //   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    //     <div className="w-full flex flex-col lg:items-center lg:text-center  items-center text-center">
    //       <h3
    //         className={`${roboto.className} title-font text-5xl font-bold mb-10`}
    //       >
    //         Projects
    //       </h3>
    //     </div>
    //   </div>
    //   <section className="text-white hiddenn block -my-1">
    //     <div className="container px-5 pb-24 mx-auto  ">
    //       <div className="flex flex-wrap sm:-m-4 pb-28  -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    //         {data.map((item, index) => {
    //           return (
    //             <div className="p-4 lg:w-1/3 flex" key={index}>
    //               <div
    //                 className="inline-flex h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0"

    //               >
    //                 {item.svg}
    //               </div>
    //               <div className="flex-grow pl-6">
    //                 <p
    //                   className={`${roboto.className} text-xl md:text-2xl font-medium mb-4`}
    //                 >
    //                   {item.title}
    //                 </p>
    //                 <span className="leading-relaxed text-sm md:text-base">{item.desc}</span>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="flex flex-wrap sm:-m-4 pb-28  -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    //         {data2.map((item, index) => {
    //           return (
    //             <div className="p-4 lg:w-1/3 flex" key={index}>
    //               <div
    //                 className="inline-flex h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
    //                 {item.svg}
    //               </div>
    //               <div className="flex-grow pl-6">
    //                 <p
    //                   className={`${roboto.className} text-xl md:text-2xl font-medium mb-4`}
    //                 >
    //                   {item.title}
    //                 </p>
    //                 <span className="leading-relaxed text-sm md:text-base">{item.desc}</span>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>
    // </section>
    <section className="text-white bg-[#111] block relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-52 h-full bg-[#c9f31d]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 font-medium title-font text-3xl mb-2 sm:mb-0">
              Projects
            </h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Link href="https://xis.ai/" target="_blank">
                {" "}
                <img
                  alt="project1"
                  className="object-cover object-center h-full w-full"
                  src="/xis-ai.png"
                />
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Link href="https://roboct.netlify.app/" target="_blank">
                {" "}
                <img
                  alt="projects2"
                  className="object-cover object-center h-full w-full"
                  src="/roboct.png"
                />
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Link href="https://clotheswear.netlify.app/" target="_blank">
                {" "}
                <img
                  alt="projects3"
                  className="object-cover object-center h-full w-full"
                  src="/cloths.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const screenNames = [
    "defect-detection",
    "object-defect",
    "text-detection",
    "performance",
    "product-sorting",
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setMobile(screenNames[index]);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    setMobile(screenNames[(currentSlide + 1) % totalSlides]);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
    setMobile(screenNames[(currentSlide - 1 + totalSlides) % totalSlides]);
  };

  const [mobile, setMobile] = useState("defect-detection");

  const [screen, setScreen] = useState("defect-detection");

  const handleButtonClick = (clickedScreen) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const nextSection = document.getElementById(clickedScreen);
      if (nextSection) {
        const additionalHeight = 1000; // Adjust the value as needed
        const offsetBottom =
          nextSection.offsetTop + nextSection.offsetHeight + additionalHeight;
        window.scrollTo({
          top: offsetBottom,
          behavior: "smooth",
        });
      }
    } else {
      setScreen(clickedScreen);
    }
  };

  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showw");
          entry.target.classList.add("showCase");
          entry.target.classList.add("showFit");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".hiddenn, .hiddenCase, .hiddenFit"
    );
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  return (
    <section className="text-white block bg-[#111] relative mt-0">
      {screenSize < 768 ? (
        <div className="relative">
          <div className="flex relative mt-0 lg:-mt-[90px] z-10 rounded">
            <div className="w-full h-1/2 py-6 flex justify-center text-black items-center text-center mb-10 bg-[#c9f31d] lg:mb-0">
              <div className="w-full px-1 items-center justify-center text-center font-medium sm:font-bold text-xs sm:text-base ">
                Web Developer
              </div>
              <div className="w-full items-center justify-center text-center font-medium sm:font-bold text-xs  sm:text-base ">
                Web Designer
              </div>
              <div className="w-full items-center justify-center text-center font-medium sm:font-bold text-xs  sm:text-base">
                UI/UX Designer
              </div>
              <div className="w-full items-center justify-center text-center font-medium sm:font-bold text-xs  sm:text-base ">
                Software Dev
              </div>
            </div>
          </div>
          {mobile === "defect-detection" && <DefectDetection />}
          {mobile === "object-defect" && <CountingDefects />}
          {mobile === "text-detection" && <TextDetection />}
          {mobile === "performance" && <PerformanceAnalytics />}
          <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-0 left-1/2">
            <button
              type="button"
              className=" py-2 px-2 bg-[#182A2F] rotate-180 absolute -left-10 -top-4 rounded-full"
              aria-current="true"
              aria-label="Next Slide"
              onClick={prevSlide}
            >
              <ArrowForwardIosIcon
                sx={{
                  fill: "#fff",
                }}
              />
            </button>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3  rounded-full ${
                  currentSlide === index ? "bg-[#182A2F]" : "bg-white"
                }`}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
            <button
              type="button"
              className="py-2 px-2 bg-[#182A2F] absolute -right-14 -top-4 rounded-full"
              aria-current="true"
              aria-label="Next Slide"
              onClick={nextSlide}
            >
              <ArrowForwardIosIcon
                sx={{
                  fill: "#fff",
                }}
              />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex relative mt-0 lg:-mt-[70px] z-10 rounded">
            <div className="w-full flex items-center px-6 mb-10  transition-all shadow lg:mb-0">
              <Marquee />
            </div>
          </div>
          <div className="px-4 mx-auto container">
            <div className="py-12">
              <div className="flex w-full hiddenn justify-center items-center text-center pb-10">
                <h1 className="text-4xl font-medium leading-[60px]">
                  I'm Shahzad Ali, I'm a Brand & Webflow Designer, Currently
                  residing in the Hyderabad Sindh, Shahzad operates globally and
                  is ready to take on any design challenge.
                </h1>
              </div>
              <div className="my-4 flex w-full flex-col justify-center items-center pt-8 md:flex-row lg:pt-0">
                <div className="mb-2 w-[60%] rounded-full py-2 px-2 lg:mb-0 ">
                  <div className="flex flex-col md:flex-row justify-center text-center gap-2 lg:gap-2 shadow-sm h-[100%] md:h-14 items-center rounded-full w-full list-none relative">
                    <li
                      id="defect-detection"
                      aria-label="defect-detection"
                      className={`lg:text-lg text-sm text-white w-[50%] bg-black hover:bg-[#c9f31d] hover:text-black  border-[#c9f31d] border items-center  md:text-sm rounded-full py-3 px-1 cursor-pointer leading-relaxed  relative focus:outline-none text-center duration-[0.4s] transition-all  ${
                        screen === "defect-detection" &&
                        "  border-2 border-[#c9f31d] !bg-[#c9f31d] !text-black duration-[0.4s] transition-all font-medium "
                      } `}
                      onClick={() => handleButtonClick("defect-detection")}
                    >
                      ABOUT ME
                    </li>
                    <li
                      id="object-defect"
                      aria-label="object-defect"
                      className={`lg:text-lg w-[50%] text-white bg-black hover:text-black border border-[#c9f31d] hover:bg-[#c9f31d] focus:outline-none rounded-full items-center px-1 md:text-sm  py-3  cursor-pointer leading-relaxed relative text-center duration-[0.4s] transition-all  ${
                        screen === "object-defect" &&
                        " border border-[#c9f31d] !bg-[#c9f31d] !text-black duration-[0.4s] transition-all  font-medium"
                      }`}
                      onClick={() => handleButtonClick("object-defect")}
                    >
                      EXPERIENCE
                    </li>
                    <li
                      id="text-detection"
                      aria-label="text-detection"
                      className={`lg:text-lg text-sm w-[50%] text-white  bg-black hover:text-black border border-[#c9f31d] hover:bg-[#c9f31d]  items-center md:text-sm rounded-full py-3 px-1 cursor-pointer leading-relaxed focus:outline-none relative text-center duration-[0.4s] transition-all ${
                        screen === "text-detection" &&
                        "border border-[#c9f31d] !bg-[#c9f31d] !text-black duration-[0.4s] transition-all  font-medium"
                      }`}
                      onClick={() => handleButtonClick("text-detection")}
                    >
                      EDUCATION
                    </li>
                    <li
                      id="performance"
                      aria-label="performance"
                      className={`lg:text-lg text-sm w-[50%]  text-white bg-black hover:text-black border border-[#c9f31d] hover:bg-[#c9f31d] items-center md:text-sm rounded-full py-3 px-1 cursor-pointer leading-relaxed focus:outline-none relative text-center duration-[0.4s] transition-all ${
                        screen === "performance" &&
                        "border border-[#c9f31d] !bg-[#c9f31d] !text-black duration-[0.4s] transition-all font-medium"
                      }`}
                      onClick={() => handleButtonClick("performance")}
                    >
                      SKILLS
                    </li>
                  </div>
                </div>
              </div>
              {screen === "defect-detection" && <DefectDetection />}
              {screen === "object-defect" && <CountingDefects />}
              {screen === "text-detection" && <TextDetection />}
              {screen === "performance" && <PerformanceAnalytics />}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

const DefectDetection = () => {
  return (
    <section className="hiddenn">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg h-full lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/aboutimg.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2
            className={` ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            Personal Info
          </h2>
          <p className="mb-8 leading-relaxed">
            Hello, I’m Shahzad Ali, Website & User Interface Designer based in
            Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-500 text-lg title-font font-medium">
                    Email
                  </h2>
                  <p className="text-gray-100 font-medium text-lg">
                    Shahzadnarainarai@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-500 text-lg title-font font-medium">
                    Phone
                  </h2>
                  <p className="text-gray-100 font-medium text-lg">
                    +92331-3666399
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-500 text-lg title-font font-medium">
                    Address
                  </h2>
                  <p className="text-gray-100 font-medium text-lg">
                    Hyderabad, Sindh
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-500 text-lg title-font font-medium">
                    Follow
                  </h2>
                  <div className="cursor-pointer w-full flex justify-center md:justify-start items-center">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61552506112246"
                      aria-label="Facebook"
                    >
                      <FacebookOutlinedIcon fontSize="large" />{" "}
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/xis.ai.official/"
                      aria-label="Instagram"
                    >
                      <InstagramIcon fontSize="large" />{" "}
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/xis-ai/mycompany/"
                      aria-label="Linkedin"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://medium.com/@xis.ai"
                      aria-label="Medium"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="7.5"
                          cy="12.5"
                          r="2.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <ellipse
                          cx="13.5"
                          cy="12.5"
                          rx="1.5"
                          ry="2.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <ellipse
                          cx="18"
                          cy="12.5"
                          rx="1"
                          ry="2.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@xisaiofficial"
                      aria-label="Youtube"
                    >
                      <YouTubeIcon fontSize="large" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountingDefects = () => {
  return (
    <section className="hiddenn">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg h-full lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/aboutimg.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2
            className={` ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            My Experience
          </h2>
          {/* <p className="mb-8 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil
          </p> */}
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  1 Year
                </h2>
                <p className="leading-relaxed text-base">
                  Experience as a Full-Stack/MERN Stack Developer, Web Design
                  and Development.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  6 Months
                </h2>
                <p className="leading-relaxed text-base">
                  Experience as a Front-End Developer in AliTech Solutions
                  Jamshoro.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  6 Months
                </h2>
                <p className="leading-relaxed text-base">
                  Experience as a Full-Stack/MERN Stack Developer Remotely in
                  Xray-lab Industrial Services Germany.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TextDetection = () => {
  return (
    <section className="hiddenn">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg h-full lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/aboutimg.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2
            className={` ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            My Education
          </h2>
          {/* <p className="mb-8 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil
          </p> */}
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  2011
                </h2>
                <p className="leading-relaxed text-base">Matriculation</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  2011-2013
                </h2>
                <p className="leading-relaxed text-base">Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex items-center w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow w-full sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#c9f31d] text-lg title-font font-medium mb-2">
                  2015-2019
                </h2>
                <p className="leading-relaxed text-base">
                  Sir Syed University of Engineering and Technology Karachi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceAnalytics = () => {
  return (
    <section className="hiddenn">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg h-full lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/aboutimg.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2
            className={` ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            My Skills
          </h2>
          {/* <p className="mb-8 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil
          </p> */}
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex">
                  <img
                    src="/react.png"
                    className="h-full w-[130px] object-contain object-center "
                    alt=""
                  />
                  <p className="text-gray-100 font-medium text-lg">ReactJs</p>
                </div>
                <p className="text-gray-100 font-medium text-lg">98%</p>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex">
                  <img src="/word.png" alt="" />
                  <p className="text-gray-100 font-medium text-lg">Word</p>
                </div>
                <p className="text-gray-100 font-medium text-lg">75%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex">
                  <img src="/bootstrap.png" alt="bootstrap" />
                  <p className="text-gray-100 font-medium text-lg">Bootstrap</p>
                </div>
                <p className="text-gray-100 font-medium text-lg">98%</p>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full result flex items-center p-4 rounded-lg">
                <div className="flex">
                  <img src="/tailwindcss.png" alt="tailwind" className="w-28" />
                  <p className="text-gray-100 font-medium text-lg">
                    TailwindCSS
                  </p>
                </div>
                <p className="text-gray-100 font-medium text-lg">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showw");
          entry.target.classList.add("showCase");
          entry.target.classList.add("showFit");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".hiddenn, .hiddenCase, .hiddenFit"
    );
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  return (
    <>
      <Head>
        <title>Shahzad - Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Portfolio" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>

      <div className=" text-white relative overflow-hidden">
        <IntroSection />
        <About />
        <FeatureSection />
      </div>
    </>
  );
}
