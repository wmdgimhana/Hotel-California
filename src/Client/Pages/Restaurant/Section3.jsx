import React from "react";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="md:mt-[100px] mt-[50px] flex flex-col justify-center items-center">
      {/* items */}
      <div className="flex flex-col gap-[50px]  mb-[100px]">
        {/* item 1 */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* left */}
          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                className="w-[100%] h-[100%] object-cover rounded-md"
                alt="foodImg"
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Kau text-[18px]">
                Welcome to California Restaurant
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                At California Restaurant, we invite you on a culinary journey
                where exceptional flavors and a delightful dining experience
                await. Our restaurant is not just a place to eat; it's a haven
                for food enthusiasts seeking an exquisite blend of taste,
                ambiance, and exceptional service.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 2 */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] md:flex-row-reverse items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl  flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Our Culinary Philosophy
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Embracing a philosophy of culinary excellence, our chefs curate
                each dish with precision and creativity. We source the finest,
                locally sourced ingredients to ensure every bite is a
                celebration of flavor. From contemporary twists on classic
                favorites to innovative creations, our menu is designed to
                satisfy diverse palates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 3 */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Ambiance and Setting
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Step into an atmosphere of warmth and sophistication. Our
                restaurant is designed to create a welcoming environment for
                intimate dinners, celebratory gatherings, or casual lunches.
                Whether you're enjoying a romantic evening or a family meal, our
                ambiance complements the richness of our cuisine.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 4 */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row-reverse flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>

          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Signature Dishes
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Indulge in our chef's signature dishes, each crafted to
                perfection. From mouthwatering appetizers that awaken your taste
                buds to main courses that leave a lasting impression, every dish
                tells a story of culinary expertise and passion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 5 */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[400px] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>

          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Beverage Selection
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Complement your meal with our thoughtfully curated beverage
                selection. From fine wines to handcrafted cocktails and
                refreshing non-alcoholic options, our drink menu is as diverse
                and enticing as our culinary offerings.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 6 */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row-reverse flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1622192309746-ef474257518d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[400px] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Special Events and Catering
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Celebrate life's moments with us. Our restaurant is not only a
                dining destination but also a venue for special events. Whether
                it's a private celebration or a corporate gathering, we offer
                catering services tailored to your needs, ensuring a memorable
                experience for you and your guests.
              </p>
            </div>
          </div>
        </motion.div>

        {/* item 7 */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-[50px] items-center shadow-lg border-solid border-gray-100 border-[1px] rounded-md p-[20px] hover:shadow-2xl md:flex-row flex-col"
        >
          {/* left */}

          <div className="flex ">
            <div className="md:w-[400px] w-fit h-[200px] md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foodImg"
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[400px] text-center md:text-left w-fit p-[20px] md:p-0 flex flex-col gap-[20px]">
            {/* title */}
            <div>
              <span className="Sora uppercase tracking-[5px] font-[700]">
                Reservations and Contact
              </span>
            </div>

            {/* desc */}
            <div>
              <p className="Poppins text-[13px] text-justify">
                Ready to savor the extraordinary? Make a reservation to secure
                your spot and experience culinary delights at their finest. For
                inquiries, special requests, or event bookings, feel free to
                contact us. We look forward to hosting you at California
                Restaurant.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;
