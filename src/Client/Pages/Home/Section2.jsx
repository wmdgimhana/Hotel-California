import React from "react";
import Pool from "../../../assets/infintypool.jpg";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="md:mb-[100px] mb-[50px] overflow-x-hidden">
      {/* little about us title */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center md:mt-[100px] mt-[50px] mb-[50px]"
      >
        <span className="Sora uppercase font-[700] tracking-[10px]">
          Little about us
        </span>
      </motion.div>

      {/* contents */}
      <div className="flex md:flex-row flex-col justify-center gap-[50px] items-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[350px] h-[360px]">
            <img
              src={Pool}
              alt="infPool"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </motion.div>

        <div>
          <div className="md:w-[400px] w-fit text-center md:text-left flex flex-col gap-[20px] ">
            {/* title */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="Play text-[40px] font-[700] text-[#176B87]">
                Luxury Living In Paradise
              </span>
            </motion.div>

            {/* desc */}
            <div className="flex flex-col gap-[20px]">
              <motion.p
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="Sora text-[14px] text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                perferendis dolore dolorum cumque adipisci doloremque rem eaque
                eius nulla numquam, consectetur aspernatur ratione quia delectus
                excepturi dolor harum, explicabo nesciunt officiis inventore
                impedit, error in exercitationem corporis! Dolorem id aliquam
                sequi excepturi voluptatem?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="Poppins"
              >
                <span className="text-[#053B50] font-[700]">John Smith </span> -{" "}
                <span className="text-[#176B87] font-[700]">
                  CEO at Hotel California
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
