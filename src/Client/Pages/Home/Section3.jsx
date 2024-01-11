import React from "react";
import RoomCard from "../../Components/Room Card/RoomCard";
import { RData } from "../../DataBase/Rooms";
import BlueSea from "../../../assets/blueSea.jpg";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="pt-[50px]  ">
      <div className="flex md:flex-row flex-col shadow-2xl">
        <motion.div className="md:p-[50px] p-[10px]  flex flex-col gap-[50px] flex-1 z-[999]">
          {/* title */}
          <div className="flex flex-col text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="Sora uppercase font-[700] tracking-[7px] text-[13px]"
            >
              discover our rooms
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="Kau text-[35px] text-[#176B87]"
            >
              California Rooms
            </motion.span>
          </div>

          {/* rooms */}
          <div className="rooms md:h-[320px] h-[200px] overflow-y-scroll">
            <div className="flex flex-col gap-[10px]">
              {RData.map((item) => (
                <RoomCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </motion.div>
        <div className="flex-[2] w-[100%] h-[100%] relative">
          <img
            src={BlueSea}
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover"
          />

          {/* enjoy */}
          <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit flex justify-center items-center">
            <div className="p-[20px] md:px-[50px] text-center bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/20 border-[1px]">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="Kau text-white md:text-[50px] text-[30px]"
              >
                Enjoy your Vacation
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
