import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import image4 from "../assets/image4.jpg";

export default function Experiences() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${image4})`,
        height: "220vh",
      }}
      className="flex items-center w-full justify-center items-center bg-fixed bg-cover"
    >
      <div className="divider-horizontal flex-col px-12 pb-12 hidden lg:flex bg-black/70 backdrop-blur-md w-3/5 rounded-[2rem]">
        <h1
          data-aos="fade-in"
          data-aos-duration="300"
          className="text-3xl font-bold text-white text-center py-12"
        >
          Experience
        </h1>
        <ol
          data-aos="fade-in"
          data-aos-duration="2000"
          className="relative border-l border-white"
        >
          <li className="mb-3 ml-4 ">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              September 2022 - Now
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              Informatics Engineering Students | Universitas Banten Jaya
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              I am an undergraduate student in my fifth semester at Universitas
              Banten Jaya, a private university in Banten...
            </p>
            <button
              className="btn"
              onClick={() =>
                document.getElementById("my_modal_mobile_2").showModal()
              }
            >
              Show More
            </button>
            <dialog
              id="my_modal_mobile_2"
              className="modal sm:modal-middle backdrop-blur-md bg-white/10"
            >
              <div className="modal-box w-full max-w-3xl">
                <h3 className="font-bold pb-3 text-lg text-center">
                  Informatics Engineering Students | Universitas Banten Jaya
                </h3>
                <p className="py-4 px-5 text-justify break-words whitespace-normal">
                  I am an undergraduate student in my fifth semester at
                  Universitas Banten Jaya, a private university in Banten.
                  Throughout my studies, I have gained extensive experience and
                  skills in various technological fields, particularly in
                  programming and microcontroller-based systems. I am proficient
                  in using Arduino Uno for IoT projects and have strong
                  expertise in C# and VB .NET for application development. These
                  experiences have enriched my understanding of technology and
                  programming, providing a solid foundation for my future
                  career.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          <li className="mb-3 ml-4">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              September 2024 - December 2024
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              BACKEND JAVASCRIPT - With AI Literacy & Global Certification |
              MSIB Studi Independen di BINAR ACADEMY
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              Successfully developed a web-based application called Terbangin...
            </p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_6").showModal()}
            >
              Show More
            </button>
            <dialog
              id="my_modal_6"
              className="modal sm:modal-middle backdrop-blur-md bg-white/10"
            >
              <div className="modal-box w-full max-w-3xl">
                <h3 className="font-bold pb-3 text-lg text-center">
                  BACKEND JAVASCRIPT - With AI Literacy & Global Certification |
                  MSIB Studi Independen di BINAR ACADEMY
                </h3>
                <p className="py-4 px-5 text-justify break-words whitespace-normal">
                  Successfully developed a web-based application called
                  Terbangin, a flight ticket booking platform that simplifies
                  searching, booking, and managing flight tickets while building
                  and managing deployment automation workflows using Google
                  Cloud to ensure a fast, reliable, and efficient application
                  release process. Developed CRUD features for aircraft data
                  management and notification management to keep users informed
                  with the latest updates while implementing an image upload
                  feature using ImageKit to support visual needs such as
                  aircraft images within the application. Conducted
                  comprehensive unit testing on Controllers, Services, and
                  Repositories to ensure system reliability, performance, and
                  minimize potential bugs while coordinating with the Back-End
                  team consisting of Muhamad Azi Sudarya, Joy Winata, Gilang
                  Rizki Putra, and Muhammad Adib Najwan, as well as the
                  Front-End team consisting of Rheno Julius Andreas, Mohamad
                  Ferdy Alviansyah, Jovina Juwita, and Bamaramzy Rakan Faishal
                  to ensure seamless API integration according to application
                  requirements.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          <li className="mb-3 ml-4">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              July 2024 - Now
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              Head Of Departement PMB | Himpunan Mahasiswa Teknik Informatika
              (HUMANIKA) Universitas Banten Jaya
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              Led the PMB department with a focus on developing members
              interests and talents in HUMANIKA....
            </p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_7").showModal()}
            >
              Show More
            </button>
            <dialog
              id="my_modal_7"
              className="modal sm:modal-middle backdrop-blur-md bg-white/10"
            >
              <div className="modal-box w-full max-w-3xl">
                <h3 className="font-bold text-lg text-center">
                  Informatics Engineering Students | Universitas Banten Jaya
                </h3>
                <p className="py-4 px-5 text-justify break-words whitespace-normal">
                  Led the PMB department with a focus on developing members
                  interests and talents in HUMANIKA, designed a learning
                  syllabus covering UI/UX skills using Figma, Front-End
                  development with React.js, and Back-End development with
                  Express.js, mentored and managed a team of seven members to
                  ensure the success of the learning program and project
                  implementation, actively ensured that each member understood
                  and mastered the learning materials for real-world
                  applications, and fostered effective communication and
                  collaboration among team members to create a productive and
                  innovative work environment.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ol>
      </div>

      {/** mobile view */}
      <div className="divider-horizontal mt-24 px-12 py-12 flex lg:hidden bg-black/70 backdrop-blur-md w-4/5 rounded-[2rem]">
        <h1
          data-aos="fade-in"
          data-aos-duration="300"
          className="text-2xl font-bold text-white text-center py-7"
        >
          Experience
        </h1>
        <ol
          data-aos="fade-in"
          data-aos-duration="2000"
          className="relative border-l border-white"
        >
          <li className="mb-3 ml-4">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              September 2024 - Now
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              Informatics Engineering Students | Universitas Banten Jaya
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              I am an undergraduate student in my fifth semester at Universitas
              Banten Jaya, a private university in Banten....
            </p>
            <button
              className="btn"
              onClick={() =>
                document.getElementById("my_modal_mobile_1").showModal()
              }
            >
              Show More
            </button>
            <dialog
              id="my_modal_mobile_1"
              className="modal sm:modal-middl backdrop-blur-md bg-white/10"
            >
              <div className="modal-box">
                <h3 className="font-bold pb-3 text-lg text-center">
                  Informatics Engineering Students | Universitas Banten Jaya
                </h3>
                <p className="py-4 text-justify break-words whitespace-normal">
                  I am an undergraduate student in my fifth semester at
                  Universitas Banten Jaya, a private university in Banten.
                  Throughout my studies, I have gained extensive experience and
                  skills in various technological fields, particularly in
                  programming and microcontroller-based systems. I am proficient
                  in using Arduino Uno for IoT projects and have strong
                  expertise in C# and VB .NET for application development. These
                  experiences have enriched my understanding of technology and
                  programming, providing a solid foundation for my future
                  career.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          <li className="mb-3 ml-4">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              September 2022 - December 2024
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              BACKEND JAVASCRIPT - With AI Literacy & Global Certification |
              MSIB Studi Independen di BINAR ACADEMY
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              Successfully developed a web-based application called
              Terbangin....
            </p>
            <button
              className="btn"
              onClick={() =>
                document.getElementById("my_modal_mobile_4").showModal()
              }
            >
              Show More
            </button>
            <dialog
              id="my_modal_mobile_4"
              className="modal sm:modal-middle backdrop-blur-md bg-white/10"
            >
              <div className="modal-box">
                <h3 className="font-bold pb-3 text-lg text-center">
                  BACKEND JAVASCRIPT - With AI Literacy & Global Certification |
                  MSIB Studi Independen di BINAR ACADEMY
                </h3>
                <p className="py-4  text-justify break-words whitespace-normal">
                  Successfully developed a web-based application called
                  Terbangin, a flight ticket booking platform that simplifies
                  searching, booking, and managing flight tickets while building
                  and managing deployment automation workflows using Google
                  Cloud to ensure a fast, reliable, and efficient application
                  release process. Developed CRUD features for aircraft data
                  management and notification management to keep users informed
                  with the latest updates while implementing an image upload
                  feature using ImageKit to support visual needs such as
                  aircraft images within the application. Conducted
                  comprehensive unit testing on Controllers, Services, and
                  Repositories to ensure system reliability, performance, and
                  minimize potential bugs while coordinating with the Back-End
                  team consisting of Muhamad Azi Sudarya, Joy Winata, Gilang
                  Rizki Putra, and Muhammad Adib Najwan, as well as the
                  Front-End team consisting of Rheno Julius Andreas, Mohamad
                  Ferdy Alviansyah, Jovina Juwita, and Bamaramzy Rakan Faishal
                  to ensure seamless API integration according to application
                  requirements.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          <li className="mb-3 ml-4">
            <span className="absolute inline-flex w-3 h-3 animate-ping rounded-full mt-1.5 -left-1.5 bg-sky-400 opacity-75"></span>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-sm font-normal leading-none text-gray-200">
              July 2024 - Now
            </time>
            <h3 className="text-lg pb-3 font-semibold text-white">
              Head Of Departement PMB | Himpunan Mahasiswa Teknik Informatika
              (HUMANIKA) Universitas Banten Jaya
            </h3>
            <p className="mb-3 text-base font-normal text-gray-200">
              Led the PMB department with a focus on developing members
              interests and talents in HUMANIKA....
            </p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Show More
            </button>
            <dialog
              id="my_modal_5"
              className="modal sm:modal-middle backdrop-blur-md bg-white/10"
            >
              <div className="modal-box">
                <h3 className="font-bold pb-3 text-lg text-center">
                  Informatics Engineering Students | Universitas Banten Jaya
                </h3>
                <p className="py-4 text-justify break-words whitespace-normal">
                  Led the PMB department with a focus on developing members
                  interests and talents in HUMANIKA, designed a learning
                  syllabus covering UI/UX skills using Figma, Front-End
                  development with React.js, and Back-End development with
                  Express.js, mentored and managed a team of seven members to
                  ensure the success of the learning program and project
                  implementation, actively ensured that each member understood
                  and mastered the learning materials for real-world
                  applications, and fostered effective communication and
                  collaboration among team members to create a productive and
                  innovative work environment.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ol>
      </div>
    </section>
  );
}
