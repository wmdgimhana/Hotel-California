import React from "react";
import HeaderImage from "./HeaderImage";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Filter from "./Filter";

const Rooms = () => {
  return (
    <div className="overflow-x-hidden">
      <HeaderImage />
      <Section2 />
      <div className="flex flex-col mt-[50px] justify-center px-[100px]">
        <div className="w-[100%] flex justify-center md:sticky top-[0] z-[1000]">
          <Filter />
        </div>

        <div>
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
