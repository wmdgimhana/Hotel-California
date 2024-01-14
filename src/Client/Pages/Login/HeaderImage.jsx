import React from "react";

import { motion } from "framer-motion";

const HeaderImage = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        {/* overlay */}
        <div className="absolute w-[100%] h-[100%] bg-black/20 flex justify-center items-center">
          <div className=" bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] px-[100px] py-[30px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="Kau md:text-[50px] text-[30px]   text-white "
            >
              Login
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
