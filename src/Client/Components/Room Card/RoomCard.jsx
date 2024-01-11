import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ item }) => {
  return (
    <div>
      <Link to={`/room/${item.id}`}>
        <div className="flex items-center gap-[10px] md:gap-[20px] hover:bg-gray-200 cursor-pointer p-[10px]">
          {/* img */}
          <div className="md:w-[200px] md:h-[120px] w-[100px] h-[100px]">
            <img
              src={item.img}
              alt="roomImg"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          {/* room details */}
          <div className="flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Play font-[700] text-[20px] border-b-black border-solid border-b-[1px]">
                {item.name} Room
              </span>
            </div>

            {/* price */}
            <div className="flex gap-[10px] items-center">
              <span className="Sora text-[14px] text-gray-500">
                Starting from
              </span>

              <div className="Poppins flex gap-[2px] font-[500]">
                {/* price */}
                <span>${item.price}</span>
                <span>/</span>
                {/* time */}
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
