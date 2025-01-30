import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";
import AOS from "aos";
import { useState, useEffect } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftPosition = Math.min(scroll, window.innerWidth);

  const leftStyle = {
    left: `${leftPosition}px`,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/** Desktop View */}
      <section
        style={{
          backgroundImage: `url(${image1})`,
          height: "300vh",
        }}
        className="hidden lg:block w-full bg-cover bg-center bg-fixed"
      ></section>

      {/** Mobile View */}
      <section
        style={{
          backgroundImage: `url(${image1})`,
          height: "190vh",
        }}
        className="block lg:hidden w-full bg-cover bg-center bg-fixed"
      ></section>

      {/** Curtain */}
      {/** Desktop View */}
      <div
        style={leftStyle}
        className="hidden w-full lg:flex z-10 gap-6 fixed top-0 h-full justify-around items-center h-screen bg-gray-950 text-white"
      >
        <div data-aos="fade-in" data-aos-duration="3000">
          <h2 className="text-3xl font-medium">
            <span className="text-lime-300">Hello,</span> <br /> I&apos;M
            Muhamad Azi Sudarya
          </h2>
          <h1
            style={{
              backgroundImage: `url(${image1})`,
            }}
            className="bg-fixed py-5 bg-cover bg-center font-black text-7xl bg-clip-text text-transparent"
          >
            BACKEND JAVASCRIPT <br /> DEVELOPER
          </h1>
          <div className="flex flex-row items-center gap-2">
            <h3
              style={{
                backgroundImage: `url(${image1})`,
              }}
              className="bg-fixed bg-cover bg-center font-medium text-2xl bg-clip-text text-transparent"
            >
              Scroll To See More
            </h3>
            <span>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
                />
              </svg>
            </span>
          </div>
        </div>
        <div data-aos="fade-in" data-aos-duration="3000">
          <img
            className="w-64 rounded-full border-4"
            src={image2}
            alt="Muhamad Azi Sudarya"
          />
        </div>
      </div>

      {/** Mobile View */}
      <div
        style={leftStyle}
        className="flex w-full gap-5 flex-col align-center h-full justify-center lg:hidden z-10 fixed top-0 items-center bg-gray-950 text-white"
      >
        <div
          data-aos="fade-in"
          data-aos-duration="3000"
          style={{ paddingTop: "8rem" }}
        >
          <img
            className="w-45 rounded-full border-4"
            src={image2}
            alt="Muhamad Azi Sudarya"
          />
        </div>
        <div data-aos="fade-in" data-aos-duration="3000">
          <h2 className="text-1xl font-medium text-center">
            <span className="text-lime-300">Hello,</span> <br /> I&apos;M
            Muhamad Azi Sudarya
          </h2>
          <h1
            style={{
              backgroundImage: `url(${image1})`,
              backgroundAttachment: "fixed",
            }}
            className="p-3 text-center bg-cover bg-center font-black text-4xl bg-clip-text text-transparent"
          >
            BACKEND JAVASCRIPT <br /> DEVELOPER
          </h1>
        
          <div className="flex flex-row justify-center gap-2">
          <h3
            style={{
              backgroundImage: `url(${image1})`,
              backgroundAttachment: "fixed",
            }}
            className="mb-24 bg-fixed text-center bg-cover bg-center font-medium text-1xl bg-clip-text text-transparent"
          >
            Scroll To See More
          </h3>
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
          </span>
          </div>
        </div>
      </div>

      <About />
      <Experiences />
      <Projects />
    </>
  );
}
