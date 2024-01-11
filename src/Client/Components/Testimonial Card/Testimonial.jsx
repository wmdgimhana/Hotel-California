import React from "react";

const Testimonial = ({ item }) => {
  return (
    <div>
      {/* details */}
      <div className="flex flex-col rounded-md   w-[350px] gap-[20px] bg-white p-[20px]">
        {/* msg */}
        <div className="flex flex-col">
          <span className="Kau text-[50px]">"</span>
          <p className="Sora text-justify">{item.msg}</p>
        </div>

        {/* profile */}
        <div className="flex items-center gap-[20px]">
          {/* img */}
          <div className="w-[50px] h-[50px] rounded-full border-gray-300 border-solid border-[1px]">
            <img
              src={item.profile}
              className="w-full h-full object-cover rounded-full "
            />
          </div>

          {/* name and about */}
          <div>
            {/* name */}
            <div className="Play text-[18px] font-[700]">{item.name}</div>
            {/* about */}
            <div className="Open">{item.about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
