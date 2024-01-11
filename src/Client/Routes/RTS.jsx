import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import Contact from "../Pages/Contact/Contact";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Room from "../Pages/Room/Room";
import PrivacyPolicy from "../Pages/Privacy Policy/PrivacyPolicy";
import TermsAndConditions from "../Pages/Terms And Conditions/TermsAndConditions";

const RTS = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurant" element={<Restaurant />} />
      <Route path="room/:id" element={<Room />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default RTS;
