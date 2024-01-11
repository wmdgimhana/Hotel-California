import React from "react";
import BoyIcon from "@mui/icons-material/Boy";
import AirIcon from "@mui/icons-material/Air";
import WifiIcon from "@mui/icons-material/Wifi";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { Link } from "react-router-dom";

const RoomItem = ({ item }) => {
  return (
    <div className="flex flex-1 md:flex-row flex-col gap-[20px] p-[20px] bg-white shadow-lg border-solid border-gray-100 rounded-md border-[1px] hover:shadow-2xl transition-shadow">
      {/* content */}
      <div className="flex flex-col gap-[20px] md:w-[100%] w-fit">
        {/* title */}
        <div className="text-center md:text-left">
          <span className="Kau text-[25px]">{item.name} Room</span>

          {/* desc */}
          <div>
            <span className="Poppins text-[15px]">{item.desc}</span>
          </div>
        </div>

        {/* highlights */}
        <div className="flex flex-col mt-[25px] gap-[10px]">
          <span className="Sora uppercase text-center md:text-left font-[700] tracking-[7px]">
            Rooms & Suites Highlights
          </span>

          <div className="Poppins mt-[20px] flex justify-center items-center flex-col  text-[15px] md:grid md:grid-cols-2  gap-[10px]">
            {/* room capacity */}
            <div className="flex gap-[10px] items-center text-gray-500">
              <div className="flex gap-[5px] items-center">
                <BoyIcon />
                <span>Standard occupancy - </span>
              </div>

              <div>
                <span className="Poppins  font-[500  ]">{item.capacity}</span>
              </div>
            </div>

            {/* air conditioning*/}
            {item.air && (
              <div>
                <div className="flex items-center gap-[5px] text-gray-500">
                  <AirIcon />
                  <span>Air Conditioning</span>
                </div>
              </div>
            )}

            {/* wi fi */}
            {item.wifi && (
              <div>
                <div className="flex items-center gap-[5px] text-gray-500">
                  <WifiIcon />
                  <span>Wi-Fi</span>
                </div>
              </div>
            )}

            {/* amenities */}
            {item.luxuryAmenities && (
              <div>
                <div className="flex items-center gap-[5px] text-gray-500">
                  <BathtubIcon />
                  <span>Luxury Amenities</span>
                </div>
              </div>
            )}

            {/* price */}
            <div className="mt-[10px]">
              <div>
                <span className="text-[20px]">$ {item.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* book button */}
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Link to={`/room/${item.id}`} className="w-fit">
            <div className="Poppins text-white cursor-pointer rounded-md   bg-[#29ADB2] hover:bg-[#3B9B92] w-fit p-[10px] px-[50px]">
              <span>Explore Now</span>
            </div>
          </Link>
        </div>
      </div>

      {/* img */}
      <div className="flex-[2]">
        <div className="md:w-[500px] w-[300px] h-[100%]">
          <img
            src={item.img}
            alt="roomImg"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
