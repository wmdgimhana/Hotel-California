import React from "react";
import Insta from "../../../assets/instagram.png";
import FB from "../../../assets/facebook.png";
import WA from "../../../assets/whatsapp.png";
import TW from "../../../assets/twitter.png";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <div className="md:mt-[100px] md:mb-[100px] mt-[50px] mb-[50px]">
      <div className="flex flex-col items-center justify-center">
        {/* title */}
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Sora uppercase font-[700] text-center tracking-[10px] mb-[50px]"
        >
          get in touch with us
        </motion.span>

        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Your Email Address"
            className="outline-none border-solid rounded-tl-md rounded-bl-md  border-[1px] md:w-[400px] w-[200px] border-[#29ADB2] p-[10px]"
          />
          <button className="text-white p-[11px] px-[20px] rounded-tr-md rounded-br-md bg-[#29ADB2] hover:bg-[#22989c]">
            Subscribe
          </button>
        </div>

        {/* social icons */}
        <div className="flex items-center gap-[20px] mt-[50px]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={Insta}
            alt="sIco"
            className="w-[40px] h-[40px] object-cover cursor-pointer"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={FB}
            alt="sIco"
            className="w-[40px] h-[40px] object-cover cursor-pointer"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src={TW}
            alt="sIco"
            className="w-[40px] h-[40px] object-cover cursor-pointer"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            src={WA}
            alt="sIco"
            className="w-[40px] h-[40px] object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
