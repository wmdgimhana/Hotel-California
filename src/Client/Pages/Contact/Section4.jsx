import React from "react";
import ContactV from "../../../assets/contactV.mp4";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div>
      <div className="w-[100%] mt-[100px]">
        {/* video */}
        <div className="relative">
          <video
            src={ContactV}
            autoPlay
            loop
            muted
            className="w-[100%] h-[100%]"
          />

          {/* overlay */}
          <div className="w-[100%] h-[100%]  bg-black/20 top-0 absolute justify-center items-center flex">
            <div className="bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] w-fit md:p-[20px] p-[5px] flex flex-col md:mx-[50px] mx-[20px] ">
              {/* title */}
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="Kau text-white md:text-[50px] text-[25px] text-center"
                >
                  Come, Experience Hotel California – Your Home by the Sea
                </motion.span>

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-[80%] Poppins text-[15px] md:block hidden text-gray-200 text-center"
                >
                  We invite you to be a part of our story, to immerse yourself
                  in the tranquility of our surroundings, and to create memories
                  that will last a lifetime. At Hotel California, every guest is
                  not just a visitor but a cherished member of our beachside
                  family.
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
