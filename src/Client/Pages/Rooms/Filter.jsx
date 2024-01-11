import { Select, Slider } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Filter = () => {
  // options for amenities filter
  const amentOptions = [
    {
      label: "Free Wi-Fi",
      value: "freewifi",
    },

    {
      label: "Air Conditioning/Heating",
      value: "aircon",
    },

    {
      label: "TV and Entertainment",
      value: "tv",
    },

    {
      label: "Minibar",
      value: "minibar",
    },

    {
      label: "Coffee/Tea Maker",
      value: "coffeteamaker",
    },
    {
      label: "Work Desk",
      value: "workdesk",
    },
  ];

  //   options for Occupancy
  const occOptions = [
    {
      label: "1",
      value: "1",
    },

    {
      label: "2",
      value: "2",
    },

    {
      label: "4",
      value: "4",
    },
  ];

  //   options for bed
  const bedOptions = [
    {
      label: "Single",
      value: "Single",
    },

    {
      label: "Double",
      value: "Double",
    },
  ];

  //   setting price
  const [price, setPrice] = useState(50);

  const onChange = (newValue) => {
    setPrice(newValue);
  };

  //   setting Amenities
  const [amenities, setAmenities] = useState([]);

  const handleAmenitChange = (value) => {
    setAmenities(value);
  };

  // setting occupancy
  const [occupancy, setOccupancy] = useState(1);

  const handleOccupancy = (value) => {
    setOccupancy(value);
  };

  //   setting bed type
  const [bedType, setBedType] = useState("single");

  const handleBedType = (value) => {
    setBedType(value);
  };

  //   clear filters
  const clearHandle = () => {
    setPrice(50);
    setAmenities([]);
    setOccupancy(1);
    setBedType("single");
  };

  return (
    <div className="md:w-[100%] w-fit">
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white shadow-lg p-[20px] w-[100%] border-solid border-gray-100 border-[1px] rounded-md flex justify-between flex-wrap"
      >
        {/* filter item 1 */}
        <div className="w-[250px]">
          {/* price range filter */}
          {/* title */}
          <div className="mb-[10px]">
            <span className="Sora uppercase text-[14px] font-[700] tracking-[2px]">
              Price Range
            </span>
          </div>
          {/* filter */}
          <div className="flex gap-[10px] items-center">
            <div>${price}</div>
            <div className="w-[100%]">
              <Slider max={500} onChange={onChange} value={price} />
            </div>
            <div>$500</div>
          </div>
        </div>

        {/* filter item 2 */}
        <div className="w-[250px]">
          {/* amenities filter */}
          {/* title */}
          <div className="mb-[10px]">
            <span className="Sora uppercase text-[14px] font-[700] tracking-[2px]">
              Amenities
            </span>
          </div>

          {/* filter */}
          <div>
            <div>
              <Select
                mode="tags"
                placeholder="Please select"
                style={{
                  width: "100%",
                }}
                options={amentOptions}
                onChange={handleAmenitChange}
                value={amenities}
              />
            </div>
          </div>
        </div>

        {/* filter item 3 */}
        <div className="w-[250px]">
          {/* title */}
          <div className="mb-[10px]">
            <span className="Sora uppercase text-[14px] font-[700] tracking-[2px]">
              Occupancy
            </span>
          </div>

          {/* filter */}
          <div>
            <div>
              <Select
                placeholder="Please select"
                defaultValue={"1"}
                style={{
                  width: "100%",
                }}
                options={occOptions}
                onChange={handleOccupancy}
                value={occupancy}
              />
            </div>
          </div>
        </div>

        {/* filter item 4 */}
        <div className="w-[250px]">
          {/* title */}
          <div className="mb-[10px]">
            <span className="Sora uppercase text-[14px] font-[700] tracking-[2px]">
              Bed type
            </span>
          </div>

          {/* filter */}
          <div>
            <div>
              <Select
                placeholder="Please select"
                defaultValue={"single"}
                style={{
                  width: "100%",
                }}
                options={bedOptions}
                onChange={handleBedType}
                value={bedType}
              />
            </div>
          </div>
        </div>

        {/* clear button */}
        <div className="w-[100%] flex justify-center mt-[20px]">
          <div
            className="bg-[#29ADB2] px-[50px] Poppins text-white py-[10px] cursor-pointer hover:bg-[#3B9B92] rounded-md w-fit"
            onClick={clearHandle}
          >
            <span>Clear</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Filter;
