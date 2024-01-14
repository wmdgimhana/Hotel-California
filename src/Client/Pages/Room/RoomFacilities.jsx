import React from "react";
import BoyIcon from "@mui/icons-material/Boy";
import AirIcon from "@mui/icons-material/Air";
import WifiIcon from "@mui/icons-material/Wifi";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { motion } from "framer-motion";

const RoomFacilities = () => {
  // facilities data
  const facilities = [
    {
      id: 1,
      icon: <BoyIcon />,
      name: "Room Capacity - 1",
    },

    {
      id: 2,
      icon: <AirIcon />,
      name: "Air conditions",
    },

    {
      id: 3,
      icon: <WifiIcon />,
      name: "Free Wi-Fi",
    },

    {
      id: 4,
      icon: <BathtubIcon />,
      name: "Luxury Bathroom",
    },

    {
      id: 1,
      icon: <TvIcon />,
      name: "32 Inch TV",
    },

    {
      id: 1,
      icon: <CoffeeMakerIcon />,
      name: "Coffee Maker",
    },
  ];

  return (
    <div className="my-[100px] md:mx-[50px] mx-[20px]">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shadow-xl transition-opacity md:flex-row-reverse hover:shadow-2xl justify-center items-center md:p-[20px] p-[10px] border-solid border-gray-100 border-[1px] gap-[10px] md:gap-0 bg-white rounded-md flex-col "
      >
        <div className="md:p-[50px] p-[10px]  flex flex-col gap-[50px] flex-1 z-[999]">
          {/* title */}
          <div className="flex flex-col gap-[10px]">
            <span className="Kau font-[700] text-[18px] text-center">
              {" "}
              Unparalleled Luxury
            </span>
            {/* desc */}
            <span className="Poppins text-[13px] text-center">
              Immerse yourself in the lap of luxury with our Deluxe Room, where
              every amenity is thoughtfully curated to enhance your stay.
            </span>
          </div>

          {/* overview */}
          <div className=" h-fit ">
            {/* title */}
            <div className="flex justify-center items-center">
              <span className="Sora uppercase font-[700] tracking-[3px] text-[13px]">
                Room Facilities
              </span>
            </div>

            {/* items */}
            <div className="mt-[25px]">
              {/* item */}
              <div className="flex flex-col gap-[15px]">
                {facilities.map((item) => (
                  <div key={item.id} className="flex items-center gap-[10px]">
                    <div>{item.icon}</div>
                    <span className="Poppins font-[500]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] w-[100%] h-[100%] ">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RoomFacilities;
