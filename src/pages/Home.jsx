import React from "react";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import Info from "../components/Info";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Offers from "../components/Offers";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <CallToAction />
      <Features />
      <Accordion />
      <Testimonial />
      <Info />
      <Offers />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
