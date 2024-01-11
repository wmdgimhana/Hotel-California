import React from "react";
import HeaderImg from "../../../assets/mainHeader.jpg";
import RoomChecker from "../../Components/Room Checker/RoomChecker";
import { motion } from "framer-motion";

const HeaderImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeaderImg})` }}
      className="md:h-[90vh] h-fit bg-center bg-cover bg-no-repeat"
    >
      <div className="w-full h-full p-[50px] flex flex-col justify-center items-center bg-black/25">
        {/* welcome */}
        <div className="text-white  flex flex-col justify-center items-center">
          {/* title */}
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className=" Poppins md:text-[50px] text-[30px] text-center font-[500] md:font-[700]"
          >
            <span className="font-[200]">Welcome To </span> Hotel{" "}
            <span className="Kau">California</span>
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className="Sora uppercase   text-[13px] md:text-[15px] md:w-[500px] w-[300px] text-center text-gray-200"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            consequuntur ad id odio Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </motion.p>
        </div>

        {/* checking box */}
        <RoomChecker />
      </div>
    </div>
  );
};

export default HeaderImage;
