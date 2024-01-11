import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="md:my-[100px] my-[50px] md:mx-[50px] mx-[25px]">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shadow-xl hover:shadow-2xl transition-opacity justify-center items-center p-[20px] border-solid border-gray-100 border-[1px] bg-white rounded-md"
      >
        <div className="p-[50px]  flex flex-col gap-[50px] flex-1 z-[999]">
          {/* overview */}
          <div className=" h-fit ">
            {/* items */}
            <div className="mt-[20px]">
              <form>
                <div className="flex flex-col gap-[20px]">
                  <motion.input
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    type="text"
                    placeholder="Your First Name"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <motion.input
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    type="text"
                    placeholder="Your Last Name"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <motion.input
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    type="text"
                    placeholder="Your Phone Number"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />
                  <motion.input
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    type="email"
                    placeholder="Your Email Address"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                  />

                  <motion.textarea
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    name="msg"
                    id="msg"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins resize-none"
                  ></motion.textarea>
                </div>

                {/* Submit button */}
                <motion.button
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="p-[10px] bg-[#29ADB2] hover:bg-[#3B9B92] text-white Poppins rounded-md w-[100%] mt-[50px]"
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-[2] w-[100%] h-[100%] ">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bluesea"
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
