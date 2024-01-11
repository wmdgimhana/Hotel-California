import React from "react";
import { motion } from "framer-motion";

const Gallary = () => {
  return (
    <div className="flex flex-col items-center md:mt-[100px] mt-[50px] justify-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-[50px] text-center"
      >
        <span className="Sora  uppercase font-[700] tracking-[10px]">
          Moments in Paradise
        </span>
      </motion.div>
      <div className="flex md:flex-row flex-col gap-[5px]">
        <div class="gallery ">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            alt="Two hands creating a heart and showing the sun"
          />
          <img
            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww"
            alt="The mountain"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww"
            alt="a river"
          />
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsfGVufDB8fDB8fHww"
            alt="a women with a camera"
          />
        </div>

        <div class="gallery">
          <img
            src="https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvdGVsfGVufDB8fDB8fHww"
            alt="Two hands creating a heart and showing the sun"
          />
          <img
            src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsfGVufDB8fDB8fHww"
            alt="The mountain"
          />
          <img
            src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdGVsfGVufDB8fDB8fHww"
            alt="a river"
          />
          <img
            src="https://images.unsplash.com/photo-1660120447916-123439b05c40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwZGlubmVyfGVufDB8fDB8fHww"
            alt="a women with a camera"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
