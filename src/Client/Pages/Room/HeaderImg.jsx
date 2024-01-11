import React from "react";
import { motion } from "framer-motion";

const HeaderImg = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        {/* overlay */}
        <div className="absolute w-[100%] h-[100%] bg-black/20 flex justify-center flex-col items-center">
          <div className=" bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] px-[100px] py-[30px]">
            {/* room name */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Kau text-[50px]   text-white "
            >
              Delux room
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
