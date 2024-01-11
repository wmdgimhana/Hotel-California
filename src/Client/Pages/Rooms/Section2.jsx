import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div>
      <div className="md:mt-[100px] mt-[50px] flex flex-col justify-center items-center">
        {/* title */}
        <motion.span
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Sora uppercase font-[700] text-center tracking-[10px] mb-[20px]"
        >
          Luxurious Retreats by the Sea
        </motion.span>

        {/* desc */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-[500px]"
        >
          <p className="Poppins text-[14px] text-center">
            Welcome to the heart of indulgence at Hotel California. Our rooms
            and suites are meticulously designed to offer you an unparalleled
            experience of comfort and style, with the soothing soundtrack of
            ocean waves just steps away.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
