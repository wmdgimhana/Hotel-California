import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import HeaderImage from "./HeaderImage";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Gallary from "./Gallary";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeaderImage />
      {/* little about us */}
      <Section2 />

      {/* discover our rooms */}
      <Section3 />

      {/* testimonials  */}
      <Section4 />

      {/* video */}
      <Section5 />

      {/* gallary */}
      <Gallary />

      {/* Get in touch */}
      <Section6 />
    </div>
  );
};

export default Home;
