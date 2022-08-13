import { useState } from "react";
import { navLinks } from "../../constants";
import { close, logo, menu } from "../../assets";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center gap-x-10">
        {navLinks.map((link) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-white`}
            key={link.id}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      {/* Hamburger on Small Screen */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={() => setToggle((prevState) => !prevState)}>
          <img
            src={toggle ? close : menu}
            alt="hamburger"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>
      </div>
      {/* Flyout */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center gap-y-10 w-full">
          {navLinks.map((link) => (
            <li
              className={`font-poppins font-normal cursor-pointer text-white`}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
