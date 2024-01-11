import React from "react";
import Story from "../../../assets/story.jpg";
import Mission from "../../../assets/mission.jpg";
import Vision from "../../../assets/vision.jpg";
import Come from "../../../assets/come.mp4";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="md:mt-[100px] mt-[50px]">
      {/* section 1 */}
      <div className="flex flex-col justify-center items-center ">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[20px] text-center"
        >
          <motion.span className="Sora uppercase tracking-[10px] font-[700]">
            Welcome to Hotel California
          </motion.span>
        </motion.div>

        {/* desc */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[500px] text-center"
        >
          <p className="Poppins text-[14px]">
            At Hotel California, we believe in creating more than just a place
            to stay – we craft experiences that linger in your memories. Nestled
            on the picturesque beachside, our hotel is a testament to luxury,
            comfort, and the allure of coastal living.
          </p>
        </motion.div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col md:gap-[100px] gap-[50px] justify-center items-center md:mt-[100px] mt-[50px] p-[20px] md:p-0">
        {/* part 1 */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* content */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[10px] font-[700]">
                our story
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[14px]">
                Founded in 2018, Hotel California is the vision of a passionate
                team dedicated to curating an environment that harmonizes with
                the beauty of nature. With a commitment to excellence, we've
                transformed dreams of an idyllic beachside retreat into a
                reality.
              </p>
            </div>
          </div>

          {/* image */}
          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src={Story}
                alt="story"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
        </motion.div>

        {/* part 2 */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex md:flex-row-reverse gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl flex-col"
        >
          {/* content */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[10px] font-[700]">
                Mission
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[14px]">
                Our mission is to provide an escape from the ordinary, offering
                guests a sanctuary where the waves meet sophistication. We aim
                to exceed expectations, ensuring every moment at Hotel
                California is marked by tranquility, luxury, and personalized
                service.
              </p>
            </div>
          </div>

          {/* image */}
          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src={Mission}
                alt="story"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
        </motion.div>

        {/* part 3 */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* content */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[10px] font-[700]">
                Vision
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[14px]">
                Hotel California envisions being the premier destination for
                those seeking a blend of coastal charm and refined hospitality.
                We aspire to be the epitome of relaxation, where the rhythm of
                the ocean becomes a backdrop to unforgettable experiences.
              </p>
            </div>
          </div>

          {/* image */}
          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src={Vision}
                alt="story"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* section 4 */}
      <div className="w-[100%] md:mt-[100px] mt-[50px]">
        {/* video */}
        <div className="relative">
          <video src={Come} autoPlay loop muted className="w-[100%] h-[100%]" />

          {/* overlay */}
          <div className="w-[100%] h-[100%]  bg-black/20 top-0 absolute justify-center items-center flex">
            <div className="bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg overflow-hidden border-solid border-gray-50/10 border-[1px] w-fit md:p-[20px] p-[10px] flex flex-col md:mx-[50px] mx-[10px] ">
              {/* title */}
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="Kau text-white md:text-[50px] text-center text-[25px]"
                >
                  Come, Experience Hotel California – Your Home by the Sea
                </motion.span>

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-[80%] Poppins md:text-[15px] md:block hidden text-gray-200 text-center"
                >
                  We invite you to be a part of our story, to immerse yourself
                  in the tranquility of our surroundings, and to create memories
                  that will last a lifetime. At Hotel California, every guest is
                  not just a visitor but a cherished member of our beachside
                  family.
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
