import React from "react";
import { motion } from "framer-motion";

const BookNow = () => {
  return (
    <div className="my-[100px] mx-[50px]">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shadow-xl hover:shadow-2xl transition-opacity justify-center items-center p-[20px] border-solid border-gray-100 border-[1px] bg-white rounded-md"
      >
        <div className="p-[50px]  flex flex-col gap-[50px] flex-1 z-[999]">
          {/* title */}
          <div className="flex flex-col gap-[10px]">
            <span className="Kau font-[700] text-[18px] text-center">
              {" "}
              Book Your Deluxe Retreat
            </span>
            {/* desc */}
            <span className="Poppins text-[13px] text-center">
              Secure your exclusive Deluxe Room experience now. Choose luxury,
              comfort, and unparalleled amenities. Your deluxe retreat
              awaits—reserve your stay for a truly exceptional escape.
            </span>
          </div>

          {/* overview */}
          <div className=" h-fit ">
            {/* items */}
            <div className="mt-[20px]">
              <form>
                <div className="flex flex-col gap-[20px]">
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                </div>

                <div className="flex flex-col gap-[10px] mt-[20px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="Sora uppercase tracking-[2px] text-[13px] font-[700]">
                      Room Price:
                    </span>
                    <span className="Poppins">$150</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="Sora uppercase tracking-[2px] text-[13px] font-[700]">
                      Tax:
                    </span>
                    <span className="Poppins">$10</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="Sora uppercase tracking-[2px] text-[13px] font-[700]">
                      Total:
                    </span>
                    <span className="Poppins">$160</span>
                  </div>
                  <div className="flex items-center gap-[10px] text-[20px] p-[7px] shadow-md border-solid border-gray-100 border-[1px] rounded-md w-fit font-[500]">
                    <span>Pay at Hotel:</span>
                    <span>$160</span>
                  </div>
                </div>

                {/* book button */}
                <button className="p-[10px] bg-[#29ADB2] hover:bg-[#3B9B92] text-white Poppins rounded-md w-[100%] mt-[50px]">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-[2] w-[100%] h-[100%] ">
          <img
            src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BookNow;
