import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center gap-x-10 items-center text-white">
        <li className="text-[20px] font-semibold hover:text-gray-300">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-[20px] font-semibold hover:text-gray-300">
          <NavLink to={"/form"}>Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
