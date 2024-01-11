import React from "react";
import HeaderImg from "./HeaderImg";
import Section2 from "./Section2";
import ContactForm from "./ContactForm";
import Section4 from "./Section4";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <HeaderImg />
      <Section2 />
      <ContactForm />
      <Section4 />
    </div>
  );
};

export default Contact;
