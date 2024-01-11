import React from "react";
import HeaderImg from "./HeaderImg";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Gallary from "../Home/Gallary";

const Restaurant = () => {
  return (
    <div className="overflow-x-hidden">
      <HeaderImg />
      <Section2 />
      <Section3 />
      <div className="mb-[100px]">
        <Gallary />
      </div>
    </div>
  );
};

export default Restaurant;
