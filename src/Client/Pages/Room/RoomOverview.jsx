import React from "react";
import { motion } from "framer-motion";

const RoomOverview = () => {
  return (
    <div className="my-[100px] mx-[50px]">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shadow-xl hover:shadow-2xl transition-opacity justify-center items-center p-[20px] border-solid border-gray-100 border-[1px] bg-white rounded-md"
      >
        <div className="p-[50px]  flex flex-col gap-[50px] flex-1 z-[999]">
          {/* title */}
          <div className="flex flex-col gap-[10px]">
            <span className="Kau font-[700] text-[18px] text-center">
              {" "}
              Elegance Redefined
            </span>
            {/* desc */}
            <span className="Poppins text-[13px] text-center">
              Welcome to a space where every detail exudes elegance. Our Deluxe
              Room is a sanctuary of refined luxury, featuring exquisite
              furnishings and upscale amenities.
            </span>
          </div>

          {/* overview */}
          <div className=" h-fit ">
            {/* title */}
            <div className="flex justify-center items-center">
              <span className="Sora uppercase font-[700] tracking-[3px] text-[13px]">
                Room Overview
              </span>
            </div>

            {/* items */}
            <div className="mt-[20px]">
              {/* item 1 */}
              <div className="flex flex-col gap-[5px]">
                {/* title */}
                <div>
                  <span className="Poppins font-[700]">
                    1.Sumptuous Bedding
                  </span>
                </div>

                {/* desc */}
                <div>
                  <p className="Poppins text-[13px] text-justify">
                    Sink into the embrace of a luxurious king-size bed, adorned
                    with plush linens for a restful and rejuvenating sleep.
                  </p>
                </div>
              </div>

              {/* item 2 */}
              <div className="flex flex-col gap-[5px]">
                {/* title */}
                <div>
                  <span className="Poppins font-[700]">2.Panoramic Views</span>
                </div>

                {/* desc */}
                <div>
                  <p className="Poppins text-[13px] text-justify">
                    Enjoy breathtaking views of the surroundings from the
                    comfort of your Deluxe Room, providing a visual feast for
                    the senses.
                  </p>
                </div>
              </div>

              {/* item 1 */}
              <div className="flex flex-col gap-[5px]">
                {/* title */}
                <div>
                  <span className="Poppins font-[700]">3.Spacious Living</span>
                </div>

                {/* desc */}
                <div>
                  <p className="Poppins text-[13px] text-justify">
                    Revel in the spaciousness of your Deluxe Room, designed to
                    offer ample room for relaxation, work, or simply unwinding
                    in style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] w-[100%] h-[100%] ">
          <img
            src="https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RoomOverview;
