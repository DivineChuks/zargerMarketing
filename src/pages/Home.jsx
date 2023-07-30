import React from "react";
import Hero from "../components/Hero";
import JoinNow from "../components/JoinNow";
import Accordion from "../components/Accordion";
import Info from "../components/Info";
import Video from "../components/Video";
import Testimonial from "../components/Testimonial";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <JoinNow />
      <Accordion />
      <Info />
      <Video />
      <Testimonial />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
