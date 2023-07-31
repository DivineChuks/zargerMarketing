import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import AOS from "aos";

const Questions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    setOpen((prev) => (prev === index ? false : index));
  };

  const questions = [
    {
      title: "INTRODUCTION TO DIGITAL MARKETING",
      desc: "Key fundaments to the business of digital marketing! This is a great introduction, especially for beginners, on how to begin a business in digital marketing.",
    },
    {
      title: "HOW TO BUILD YOUR OWN BRANDED SALES PROCESS",
      desc: "This course teaches you everything you know about branding yourself or your business and how to build a successful sales funnel that will convert your targeted customer.",
    },
    {
      title: "WHAT DO I RECEIVE WITH MY PURCHASE?",
      desc: "Further down on this page you will see the modules included in this training course. You will receive the course itself, a free community of like minded business owners of all experience levels ready to help, and of course access to myself if you have any questions.",
    },
    {
      title: "EMAIL MARKETING",
      desc: "You will learn how to create an effective email marketing campaign that will not only engage subscribers, but convert them. You will learn how to design your email, personalize it, automate it and check your analytics for effectiveness!",
    },
    {
      title: "BRANDING EXPANSION",
      desc: "You will learn how to develop and implement a strong branding strategy! You will learn how to pinpoint and develop your own personal brand and build a strong reputation. You will learn how to effectively communicate this brand across many channels!",
    },
    {
      title: "BUSINESS TOOLS",
      desc: "You will be introduced to a range of tools that will help you simply and effectively run your business.",
    },
    {
      title: "CONTENT STRATEGIES",
      desc: "You will learn how to effectively market your business or product across many social media outlets. You will learn how to define your target audience (or niche) and create content that speaks to them!",
    },
    {
      title: "SEO + BLOGGING",
      desc: "You will learn how to create and write blog content that is effective and captivating and performs well in the search engine. This will drive traffic to your page!",
    },
    {
      title: "PLATFORMS TO MARKET ON",
      desc: "You will learn how to leverage different social media platforms to market your business! You will learn how to create engaging content for Facebook, Instagram, Pinterest, TikTok and Youtube. You will learn how to build a following, have increased engagement and drive traffic to your site.",
    },
    {
      title: "FREE COMMUNITY",
      desc: "You will have lifetime access to a free community where students can connect with each other and instructors. You can ask questions, celebrate wins, and brainstorm!",
    },
    {
      title: "ADDITIONAL TRAINING",
      desc: "This course also has additonal training added to help you! There has been a module added for instagram and for affiliate marketing!",
    },
  ];

  return (
    <div
      id="faqs"
      className="relative z-10 pt-[30px] md:pt-[70px] px-[20px] md:px-[70px] pb-[100px] md:pb-[150px] overflow-hidden"
    >
      <div className="mb-16">
        <h2 className="text-primary font-bold text-[30px] md:text-[37px] font-playFair text-center">
          Curious about what you will get when you purchase the Learn & Earn
          Profits Course?
        </h2>
      </div>
      {questions.map(({ title, desc }, index) => (
        <AccordionItem
          component="questions"
          key={index}
          title={title}
          desc={desc}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Questions;
