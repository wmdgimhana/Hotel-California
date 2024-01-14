import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center gap-[10px] mt-[100px] mb-[50px]">
      {/* title */}
      <div>
        <motion.span
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Sora font-[700] uppercase tracking-[7px]"
        >
          Experience Luxury in Every Detail
        </motion.span>
      </div>

      {/* desc */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-[500px] text-center"
      >
        <p className="Poppins text-[15px]">
          Indulge in the pinnacle of luxury with our Deluxe Room. Meticulously
          designed to offer a lavish retreat, this room is a haven where
          sophistication meets comfort.
        </p>
      </motion.div>
    </div>
  );
};

export default Section1;
