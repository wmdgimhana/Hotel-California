import React from "react";
import PoolVideo from "../../../assets/Bluepool.mp4";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh] relative">
        <video
          src={PoolVideo}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100%] object-cover"
        />
        {/* overlay */}
        <div className="w-[100%] h-[100%] flex justify-center items-center absolute bg-black/20 top-0">
          {/* content */}
          <div className=" rounded-full bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10  overflow-hidden border-solid border-gray-50/20 border-[1px]">
            <span className="capitalize text-white flex flex-col md:p-[50px] p-[20px]">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="Sora md:text-[50px] text-[25px] text-center font-[100]"
              >
                "Escape to serenity, <br /> where the waves meet luxury"
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex gap-[5px] text-[20px] Poppins justify-center"
              >
                -Hotel <span className="Kau">California</span>-
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
