import React from "react";
import HeaderImg from "./HeaderImg";
import Section1 from "./Section1";
import RoomOverview from "./RoomOverview";
import RoomFacilities from "./RoomFacilities";
import BookNow from "./BookNow";

const Room = () => {
  return (
    <div>
      <HeaderImg />
      <Section1 />

      {/* overview */}
      <RoomOverview />

      {/* facilities */}
      <RoomFacilities />

      {/* book now */}
      <BookNow />
    </div>
  );
};

export default Room;
