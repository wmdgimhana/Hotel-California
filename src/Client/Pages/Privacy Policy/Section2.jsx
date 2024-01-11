import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-[100px] mt-[50px] gap-[20px] mb-[100px]">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="Sora uppercase font-[700] tracking-[10px]">
          Privacy Policy
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
          Welcome to our Privacy Policy page. Your privacy is important to us.
          This document outlines the types of personal information we collect,
          how we use it, and the choices you have regarding your information.
          Please take a moment to review our practices and contact us if you
          have any questions or concerns.
        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
