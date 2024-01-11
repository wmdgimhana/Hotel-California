import React from "react";
import { DatePicker, Select } from "antd";

const RoomChecker = () => {
  return (
    <div>
      <div className="flex justify-center md:mt-[30px] mt-[10px]">
        <div className="flex w-fit justify-center h-auto  bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px]">
          <div className="flex flex-col items-center md:flex-row md:gap-[50px]  md:p-[50px] p-[20px] gap-[5px]">
            {/* dates and rooms */}
            <div className="flex  flex-col md:flex-row justify-center items-center md:gap-[20px] gap-[5px] ">
              {/* checkin date */}
              <div>
                <DatePicker
                  className="h-[50px] w-[150px]  Roboto cursor-pointer"
                  placeholder="Check in"
                />
              </div>

              {/* checkout date */}
              <div>
                <DatePicker
                  className="h-[50px] w-[150px] cursor-pointer"
                  placeholder="Check out"
                />
              </div>

              {/* room */}
              <div>
                <Select
                  defaultValue="Rooms"
                  style={{
                    width: "150px",
                    height: 50,
                  }}
                  options={[
                    {
                      label: "Delux Room",
                      value: "delux",
                    },

                    {
                      label: "Standard Room",
                      value: "standard",
                    },

                    {
                      label: "Superior Room",
                      value: "superior",
                    },
                  ]}
                />
              </div>
            </div>

            {/* check button */}
            <div>
              <div className="h-[50px] w-[150px] flex text-white bg-[#29ADB2] hover:bg-[#2d9ea1] justify-center items-center rounded-md Poppins cursor-pointer">
                <span>Check Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChecker;
