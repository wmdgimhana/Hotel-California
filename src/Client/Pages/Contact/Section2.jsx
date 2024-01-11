import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-[20px]"
      >
        <span className="Sora uppercase font-[700] tracking-[10px]">
          Get in Touch
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
          Have questions, special requests, or just want to say hello? We're
          here for you. Reach out to us through the contact form or connect via
          phone or email. We look forward to hearing from you and ensuring your
          stay exceeds expectations.
        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
