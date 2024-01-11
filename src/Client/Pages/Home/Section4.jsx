import React from "react";
import Sand from "../../../assets/sand.jpg";
import Testimonial from "../../Components/Testimonial Card/Testimonial";
import { TestiD } from "../../DataBase/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Section4 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className="md:h-[90vh] pb-[20px] md:pb-0 h-fit flex flex-col md:pt-[100px] pt-[50px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Sand})` }}
      >
        {/* title */}
        <div className="flex flex-col text-center justify-center items-center">
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="Sora uppercase font-[700] tracking-[10px]"
          >
            testimonials
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="Play font-[700] text-[40px] text-[#176B87]"
          >
            Our Happy Clients
          </motion.span>
        </div>

        {/* testi */}
        <div className="overflow-hidden mt-[50px]">
          <Slider {...settings}>
            {TestiD.map((item) => (
              <Testimonial item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section4;
