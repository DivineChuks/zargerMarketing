import React from "react";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import Info from "../components/Info";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Accordion />
      <Testimonial />
      <Info />
      <Offers />
      <Footer />
    </div>
  );
};

export default Home;
