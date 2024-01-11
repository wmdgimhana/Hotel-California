import React from "react";
import HImg from "../../../assets/privacy.jpg";
import { motion } from "framer-motion";

const HeaderImg = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${HImg})` }}
      >
        {/* overlay */}
        <div className="absolute w-[100%] h-[100%] bg-black/20 flex justify-center flex-col items-center">
          <div className=" bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] md:px-[100px] px-[50px] md:py-[30px] py-[20px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="Kau md:text-[50px] text-[25px]   text-white "
            >
              Privacy Policy
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
