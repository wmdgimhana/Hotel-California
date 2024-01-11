import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="mt-[100px]">
      {/* title */}
      <div className="flex flex-col justify-center text-center items-center gap-[20px]">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="Sora uppercase  font-[700] tracking-[10px] mb-[20px]">
            Culinary Delights Await
          </span>
        </motion.div>

        {/* desc */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-[500px]"
        >
          <p className="Poppins text-[14px] text-center">
            Indulge your senses in our culinary haven. Explore a symphony of
            flavors at our restaurant, where every dish is crafted with passion
            and precision. From delectable appetizers to mouthwatering main
            courses, savor an unforgettable dining experience in an ambiance
            that complements the richness of our cuisine.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
