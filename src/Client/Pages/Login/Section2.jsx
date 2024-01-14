import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="my-[100px] md:mx-[50px] mx-[20px]">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shadow-xl hover:shadow-2xl transition-opacity justify-center items-center md:p-[20px] p-[10px] border-solid border-gray-100 border-[1px] gap-[20px] md:gap-0 bg-white rounded-md md:flex-row flex-col"
      >
        <div className="md:p-[50px] p-[10px]  flex flex-col gap-[50px] flex-1 z-[999]">
          <div className=" h-fit ">
            {/* title */}
            <div className="Poppins flex justify-center items-center flex-col">
              <div>
                <span className="Sora uppercase font-[600] text-[14px] tracking-[5px]">
                  Nice to see you again
                </span>
              </div>
              <div>
                <span className="text-[30px] font-[500]">Welcome Back</span>
              </div>
            </div>

            <div className="mt-[25px]">
              <form>
                <div className="flex flex-col gap-[20px]">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                </div>

                <div className="flex Poppins gap-[10px] mt-[20px] ">
                  <div>
                    <span>Don't have and account?</span>
                  </div>
                  <div>
                    <Link
                      to={"/signup"}
                      className="text-[#29ADB2] hover:underline cursor-pointer"
                    >
                      Signup
                    </Link>
                  </div>
                </div>

                {/* book button */}
                <button className="p-[10px] bg-[#29ADB2] hover:bg-[#3B9B92] text-white Poppins rounded-md w-[100%] mt-[25px]">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-[2] w-[100%] h-[100%] ">
          <img
            src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Section2;
