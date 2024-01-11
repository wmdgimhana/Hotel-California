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
        className="text-center"
      >
        <span className="Sora  uppercase font-[700] tracking-[10px]">
          Terms and Conditions
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
          Welcome to the Terms and Conditions page of Hotel California. By
          accessing and using our services, you agree to comply with the
          following terms. Please read them carefully, and if you have any
          questions, feel free to contact us at{" "}
          <a href="#">hotelcalifornia@gmail.com</a> . Your continued use of our
          website signifies your acceptance of these terms.
        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
