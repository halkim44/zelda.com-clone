import { useState } from "react";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const handleClick = () => {
    setIsNavHidden(false);
    setIsNavOpen(!isNavOpen);
  };

  const handleTransitionEnd = () => {
    if (!isNavOpen) {
      setIsNavHidden(true);
    }
  };
  return (
    <div className="nav-wrapper space-between relative box-content flex h-7 justify-between bg-black bg-opacity-60 p-2.5">
      <a href="#">
        <img
          src="/src/assets/img/common/logo-loz.png"
          alt="Legend Of Zelda"
          className="box-content h-8"
        />
      </a>

      <button
        className="mt-[-2px] flex h-8 w-8 flex-col items-center justify-center rounded-md"
        onClick={handleClick}
      >
        <span
          className={`mb-1 h-1 w-6 rounded-full bg-white ${
            isNavOpen ? "origin-top-right -rotate-45 transform" : ""
          }`}
        ></span>
        <span
          className={`mb-1 h-1 w-6 rounded-full bg-white ${
            isNavOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 rounded-full bg-white ${
            isNavOpen ? "origin-bottom-right rotate-45 transform" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`absolute top-full left-0 right-0 bg-black bg-opacity-80 py-2.5 px-3.5 tracking-widest text-white transition-opacity duration-500 ${
          isNavOpen ? "opacity-100" : "opacity-0"
        } ${isNavHidden ? "h-0 overflow-hidden" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <ul>
          <li className="p-2.5 text-center">
            <a href="#" className="px-6">
              HOME
            </a>
          </li>
          <li className="p-2.5 text-center">
            <a href="#" className="px-6">
              ABOUT
            </a>
          </li>
          <li className="p-2.5 text-center">
            <a href="#" className="px-6">
              NEWS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
