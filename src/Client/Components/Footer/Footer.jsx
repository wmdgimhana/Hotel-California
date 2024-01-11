import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* top */}
      <div className="bg-[#266967] h-fit md:px-[100px] px-[50px] md:pt-[100px] md:pb-[100px] pb-[50px] pt-[50px] flex-wrap flex justify-center gap-[50px]">
        {/* section 1 */}
        <div className="flex-1 flex flex-col">
          {/* Logo */}
          <div className="flex gap-[5px] text-white text-[30px]">
            <span className="Sora ">Hotel</span>
            <span className="Kau">California</span>
          </div>

          {/* about description */}
          <div className="Poppins text-gray-200">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              dolores maxime voluptatem blanditiis inventore sapiente quo,
              assumenda, repellat numquam officiis ex nostrum? Vel eaque minus
              vitae nobis, tempora dicta sunt voluptates nesciunt possimus
              officia eos molestias commodi expedita inventore, id aliquam
            </p>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col flex-1 gap-[20px]">
          {/* title */}
          <div>
            <span className="Sora uppercase text-white tracking-[7px] text-[13px]">
              Usefull links
            </span>
          </div>

          {/* links */}
          <div className="flex flex-col text-white Poppins uppercase gap-[10px]">
            <Link
              to={"/"}
              className="cursor-pointer text-gray-200 w-fit hover:text-white"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="cursor-pointer text-gray-200 w-fit hover:text-white"
            >
              about us
            </Link>
            <Link
              to={"/rooms"}
              className="cursor-pointer text-gray-200 w-fit hover:text-white"
            >
              rooms
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer text-gray-200 w-fit hover:text-white"
            >
              contact us
            </Link>
            <Link
              to={"/restaurant"}
              className="cursor-pointer text-gray-200 w-fit hover:text-white"
            >
              restaurant
            </Link>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-col gap-[20px] flex-1">
          {/* title */}
          <div>
            <span className="Sora text-white text-[13px] tracking-[7px] uppercase">
              Policy & Terms
            </span>
          </div>

          {/* rooms */}
          <div className="Poppins text-gray-200 flex flex-col gap-[10px]">
            <Link
              to={"/privacy-policy"}
              className="cursor-pointer hover:text-white w-fit"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-and-conditions"}
              className="cursor-pointer hover:text-white w-fit"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* section 4 */}
        <div className="flex-1 flex flex-col gap-[20px]">
          {/* title */}
          <div>
            <span className="Sora text-[13px] uppercase tracking-[7px] text-white">
              Contact us
            </span>
          </div>

          {/* content */}
          <div className="Poppins text-gray-200 flex flex-col gap-[5px]">
            <span>Street No 5, Toronto Canada</span>
            <span>+123 5678 910</span>
            <span>hotelcalifornia@gmail.com</span>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bg-[#30807B]">
        <div className="flex justify-center Poppins text-gray-200  p-[5px]">
          <span className="text-[700] text-center">
            Copyright © 2023 - All Rights Reserved.{" "}
            <span className="Sora">Hotel California</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
