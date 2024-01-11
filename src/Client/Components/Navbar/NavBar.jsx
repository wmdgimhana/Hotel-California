import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const NavBar = () => {
  // menu open | close trigger
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:px-[50px] relative px-[20px] md:py-[25px] py-[20px] flex items-center justify-between">
      {/* logo */}
      <NavLink to={"/"}>
        <div className="md:text-[30px] text-[25px] flex items-center cursor-pointer">
          <span className="Roboto md:text-[20px] text-[18px] text-black ">
            Hotel
          </span>
          <span className="Kau text-[#29ADB2]">California</span>
        </div>
      </NavLink>

      {/* nav items */}
      <div className="Sora Navbar  uppercase  hidden md:flex items-center gap-[25px] text-[15px]">
        <NavLink to={"/"} className="navLink">
          Home
        </NavLink>
        <NavLink to={"/about"} className="navLink">
          About us
        </NavLink>
        <NavLink to={"/rooms"} className="navLink">
          Rooms
        </NavLink>
        <NavLink to={"/contact"} className="navLink">
          Contact us
        </NavLink>
        <NavLink to={"/restaurant"} className="navLink">
          Restaurant
        </NavLink>
        <Link to={"/rooms"}>
          <button className="text-white bg-[#29ADB2] hover:bg-[#2d9ea1] text-[15px] p-[5px] rounded-md px-[15px]">
            Book Now
          </button>
        </Link>
      </div>

      {/* mobile menu icon */}
      {menuOpen ? (
        <div onClick={() => setMenuOpen(false)} className="block md:hidden">
          <CloseIcon style={{ fontSize: 40 }} />
        </div>
      ) : (
        <div onClick={() => setMenuOpen(true)} className="block md:hidden">
          <MenuIcon style={{ fontSize: 40 }} />
        </div>
      )}

      {/* mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: "0vh", opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex md:hidden absolute bg-white w-[100%] h-[100vh] top-[50px]  left-0 right-0 flex-col z-[2000] pt-[80px] text-[20px] gap-[10px] items-center"
        >
          <NavLink
            to={"/"}
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to={"/rooms"}
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/contact"}
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </NavLink>
          <NavLink
            to={"/restaurant"}
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Restaurant
          </NavLink>
          <Link to={"/rooms"} onClick={() => setMenuOpen(false)}>
            <button className="text-white bg-[#29ADB2] hover:bg-[#2d9ea1] text-[15px] p-[5px] rounded-md px-[15px]">
              Book Now
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
