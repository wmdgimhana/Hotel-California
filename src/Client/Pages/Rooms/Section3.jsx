import React from "react";
import RoomItem from "./RoomItem";
import { RData } from "../../DataBase/Rooms";
import Gallary from "../Home/Gallary";

const Section3 = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      {/* rooms */}
      <div className="flex flex-col gap-[50px] mb-[100px]">
        {RData.map((item) => (
          <RoomItem item={item} key={item.id} />
        ))}
      </div>

      {/* gallary */}
      <div className="mb-[100px]">
        <Gallary />
      </div>
    </div>
  );
};

export default Section3;
