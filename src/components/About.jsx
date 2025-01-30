import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image3 from "../assets/image3.jpg";
import jsIcon from "../assets/icon/js.svg";
import nodeJsIcon from "../assets/icon/nodeJs.svg";
import expressJsIcon from "../assets/icon/expressJs.svg";
import postgreIcon from "../assets/icon/postgre.svg";
import prismaIcon from "../assets/icon/prisma.svg";
import mySqlIcon from "../assets/icon/mySql.svg";
import postmanIcon from "../assets/icon/postman.svg";
import awsIcon from "../assets/icon/aws.svg";
import swaggerIcon from "../assets/icon/swagger.svg";
import githubIcon from "../assets/icon/github.svg";
import htmlIcon from "../assets/icon/html.svg";
import cssIcon from "../assets/icon/css.svg";
import tailwindIcon from "../assets/icon/tailwind.svg";
import bootstrapIcon from "../assets/icon/bootstrap.svg";
import reactIcon from "../assets/icon/react.svg";
import viteIcon from "../assets/icon/vite.svg";
import vercelIcon from "../assets/icon/vercel.svg";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${image3})`,
        }}
        className="flex  items-center w-full justify-center bg-fixed bg-cover"
      >
        {/** About Me */}
        {/** Desktop View */}
        <div className="hidden my-24 lg:flex bg-black/70 backdrop-blur-md w-190 rounded-[2rem]">
          <div className="flex py-12 px-5 text-center flex-col gap-6 items-center justify-center">
            <h1
              data-aos="fade-in"
              data-aos-duration="3000"
              className="text-3xl font-bold text-white"
            >
              About Me
            </h1>
            <p
              data-aos="fade-in"
              data-aos-duration="3000"
              style={{ padding: "0 4rem" }}
              className="text-white text-justify"
            >
              I&apos;M a passionate Backend JavaScript Developer with over a
              year of experience in creating server-side applications. I&apos;m
              proficient in JavaScript and have practical experience working
              with frameworks like Node.js and Express.js. I&apos;m also
              familiar with database management tools such as PostgreSQL and
              Prisma, and I&apos;m eager to continue improving my skills in
              building secure and efficient back-end systems.
            </p>
            <div className="flex-col items-center justify-center">
              <h1
                data-aos="fade-right"
                data-aos-duration="3000"
                className="text-3xl font-bold text-white"
              >
                Backend Tech Stack And Tools
              </h1>
              <div>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  style={{ padding: "0 11rem" }}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  <li>
                    <img src={jsIcon} alt="Javascript" />
                  </li>
                  <li>
                    <img src={nodeJsIcon} alt="NodeJs" />
                  </li>
                  <li>
                    <img src={expressJsIcon} alt="ExpressJs" />
                  </li>
                  <li>
                    <img src={postgreIcon} alt="Postgree" />
                  </li>
                  <li>
                    <img src={prismaIcon} alt="Prisma" />
                  </li>
                  <li>
                    <img src={mySqlIcon} alt="MySql" />
                  </li>
                  <li>
                    <img src={postmanIcon} alt="postman" />
                  </li>
                  <li>
                    <img src={awsIcon} alt="aws" />
                  </li>
                  <li>
                    <img src={swaggerIcon} alt="swagger" />
                  </li>
                  <li>
                    <img src={githubIcon} alt="github" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-col items-center justify-center">
              <p
                data-aos="fade-in"
                data-aos-duration="3000"
                style={{ padding: "0 4rem 1.5rem 4rem" }}
                className="text-white text-justify"
              >
                Besides that, I&apos;M a passionate Frontend Developer with
                experience in building modern and responsive web applications. I
                specialize in React with Vite for fast and efficient
                development, and I have expertise in styling frameworks like
                Tailwind CSS and Bootstrap. I focus on creating intuitive user
                interfaces and ensuring a seamless user experience while
                continuously improving my front-end development skills.
              </p>

              <h1
                data-aos="fade-right"
                data-aos-duration="3000"
                className="text-3xl font-bold text-white"
              >
                Frontend Tech Stack And Tools
              </h1>
              <div>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  style={{ padding: "0 11rem" }}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  <li>
                    <img src={htmlIcon} alt="htmlIcon" />
                  </li>
                  <li>
                    <img src={cssIcon} alt="cssIcon" />
                  </li>
                  <li>
                    <img src={jsIcon} alt="jsIcon" />
                  </li>
                  <li>
                    <img src={tailwindIcon} alt="tailwindIcon" />
                  </li>
                  <li>
                    <img src={bootstrapIcon} alt="bootstrapIcon" />
                  </li>
                  <li>
                    <img src={reactIcon} alt="reactIcon" />
                  </li>
                  <li>
                    <img src={viteIcon} alt="viteIcon" />
                  </li>
                  <li>
                    <img src={vercelIcon} alt="vercel" />
                  </li>
                  <li>
                    <img src={githubIcon} alt="github" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${image3})`,
        }}
        className="flex  items-center w-full justify-center bg-fixed bg-cover"
      >
        {/** Mobile View */}
        <div
          className="flex lg:hidden my-24 mx-7 py-12 px-5 w-full bg-black/70 backdrop-blur-md rounded-[3rem]"
        >
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1
              data-aos="fade-in"
              data-aos-duration="3000"
              className="text-[20px] font-bold text-white"
            >
              About Me
            </h1>
            <p
              data-aos="fade-in"
              data-aos-duration="3000"
              style={{ padding: "0 12px" }}
              className="text-white text-sm text-justify"
            >
              I&apos;M a passionate Backend JavaScript Developer with over a
              year of experience in creating server-side applications. I&apos;m
              proficient in JavaScript and have practical experience working
              with frameworks like Node.js and Express.js. I&apos;m also
              familiar with database management tools such as PostgreSQL and
              Prisma, and I&apos;m eager to continue improving my skills in
              building secure and efficient back-end systems.
            </p>
            <div className="flex- flex-col gap-4 items-center justify-center">
              <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                className="text-[20px] text-center font-bold text-white"
              >
                Backend Tech Stack And Tools
              </h1>
              <div>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  style={{ padding: "0 1rem" }}
                  className="flex gap-2 flex-wrap justify-center"
                >
                  <li>
                    <img src={jsIcon} alt="Js" />
                  </li>
                  <li>
                    <img src={nodeJsIcon} alt="NodeJs" />
                  </li>
                  <li>
                    <img src={expressJsIcon} alt="ExpressJs" />
                  </li>
                  <li>
                    <img src={postgreIcon} alt="Postre" />
                  </li>
                  <li>
                    <img src={prismaIcon} alt="Prisma" />
                  </li>
                  <li>
                    <img src={mySqlIcon} alt="MySql" />
                  </li>
                  <li>
                    <img src={postmanIcon} alt="postman" />
                  </li>
                  <li>
                    <img src={awsIcon} alt="aws" />
                  </li>
                  <li>
                    <img src={swaggerIcon} alt="swagger" />
                  </li>
                  <li>
                    <img src={githubIcon} alt="github" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-col items-center justify-center">
              <p
                data-aos="fade-in"
                data-aos-duration="3000"
                style={{ padding: "1rem 1rem" }}
                className="text-white text-justify"
              >
                Besides that, I&apos;M a passionate Frontend Developer with
                experience in building modern and responsive web applications. I
                specialize in React with Vite for fast and efficient
                development, and I have expertise in styling frameworks like
                Tailwind CSS and Bootstrap. I focus on creating intuitive user
                interfaces and ensuring a seamless user experience while
                continuously improving my front-end development skills.
              </p>
              <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                className="text-[20px] text-center font-bold text-white"
              >
                Frontend Tech Stack And Tools
              </h1>
              <div>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  style={{ padding: "0 1rem" }}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  <li>
                    <img src={htmlIcon} alt="htmlIcon" />
                  </li>
                  <li>
                    <img src={cssIcon} alt="cssIcon" />
                  </li>
                  <li>
                    <img src={jsIcon} alt="jsIcon" />
                  </li>
                  <li>
                    <img src={tailwindIcon} alt="tailwindIcon" />
                  </li>
                  <li>
                    <img src={bootstrapIcon} alt="bootstrapIcon" />
                  </li>
                  <li>
                    <img src={reactIcon} alt="reactIcon" />
                  </li>
                  <li>
                    <img src={viteIcon} alt="viteIcon" />
                  </li>
                  <li>
                    <img src={vercelIcon} alt="vercel" />
                  </li>
                  <li>
                    <img src={githubIcon} alt="github" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
