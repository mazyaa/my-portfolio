import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu () {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="bg-gray-950 z-30 w-full fixed">
        <div data-aos="fade-in" data-aos-duration="3000" style={{ margin: '0 16px' }} className="flex justify-around h-16 items-center">
          <h1 className="flex text-white font-medium">&lt;Maz<span className="text-lime-300">yaa /&gt;</span></h1>
            <div className="flex sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="text-gray-400 hover:bg-sky-700 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}

                {/* Mobile menu */}
                {mobileMenuOpen && (
                  <div className="absolute right-5 flex rounded-md bg-slate-900 flex-col gap-4">
                      <li
                        className="list-none cursor-pointer block rounded-md px-3 hover:bg-sky-700 py-2 text-base font-medium text-gray-300"
                        aria-current="page"
                      >
                        <Link to='/'>Home</Link>
                      </li>
                      <li
                        className="list-none cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                      >
                        <Link to='/About'>About</Link>
                      </li>
                      <li
                        className="list-none cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                      >
                      <Link to='/Experience'>Experience</Link>
                      </li>
                      <li
                        className="list-none cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                      >
                      <Link to='/Projects'>Project</Link>
                      </li>
                  </div>
                )}
              </button>
            </div>
          
          <div className="hidden sm:flex">
            <div className="flex gap-6">
                <li
                  className="list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                  aria-current="page"
                >
                  <Link to='/'>Home</Link>
                </li>
                <li
                  className="list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                >
                  <Link to='/About'>About</Link>
                </li>
                <li
                  className="list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                >
                  <Link to='/Experience'>Experience</Link>
                </li>
                <li
                  className="list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-700 hover:text-white"
                >
                  <Link to='/Projects'>Projects</Link>
                </li>
            </div>
          </div>
      </div>
    </nav>
    )
}