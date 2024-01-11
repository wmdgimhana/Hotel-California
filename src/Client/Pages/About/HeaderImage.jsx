import React from "react";
import AboutPng from "../../../assets/about.jpg";
import { motion } from "framer-motion";

const HeaderImage = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${AboutPng})` }}
      >
        {/* overlay */}
        <div className="absolute w-[100%] h-[100%] bg-black/20 flex justify-center items-center">
          <div className=" bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] px-[100px] py-[30px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="Kau md:text-[50px] text-[30px]   text-white "
            >
              About us
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
