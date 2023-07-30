import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import AOS from "aos";

const Accordion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    setOpen((prev) => (prev === index ? false : index));
  };

  const questions = [
    {
      title: "WHAT EXACTLY IS THIS PRODUCT?",
      desc: "This product is an extensive digital marketing course and DONE FOR YOU digital product! The course includes 80 in-depth modules that will walk you through, as a beginner, starting your own digital marketing business. You will not only learn how to brand yourself, perform well on the SEO, market on various social media channels- you will also be walked through step by step setting up your free funnels, email campaigns and other aspects to creating a successful online business. What makes this product so unique is that once you purchase the product, you own it. This means you can also add this product to your catalogue to sell and make 100% profit.",
    },
    {
      title: "HOW DO I MAKE 100% PROFIT?",
      desc: "This is what Master Resell Rights means. When you purchase this product, not only will you benefit from the robust digital marketing course, you will also own the course in and of itself and be able to sell it for 100% profit. This means that anytime someone purchases this course from you, the purchase money goes directly to you, not to a third party.",
    },
    {
      title: "WHAT DO I RECEIVE WITH MY PURCHASE?",
      desc: "Further down on this page you will see the modules included in this training course. You will receive the course itself, a free community of like minded business owners of all experience levels ready to help, and of course access to myself if you have any questions.",
    },
    {
      title: "CAN I SEND MY CUSTOMERS TO YOUR COMMUNITY?",
      desc: "Absolutely!! The community is for anyone who purchases this course! There is additional training, FREE updates as there are constantly new training modules added",
    },
    {
      title: "ARE THERE ANY HIDDEN FEES OR UPSELLS DOWN THE LINE?",
      desc: "NEVER ANY HIDDEN FEES!! You pay one price and you receive everything you need to get started. You will also receive all added training modules.",
    },
    {
      title: "DO I HAVE TO SELL THE DIGITAL PRODUCT?",
      desc: "Absolutely not. It is yours if you choose to sell it, but the digital course in itself will teach you how to sell your own product, whatever that may be. This course will teach you high income skills in order to learn how to make money online with whatever your passion might be!",
    },
  ];

  return (
    <div
      id="faqs"
      className="relative z-10 pt-[20px] md:pt-[70px] px-[20px] md:px-[70px] pb-[30px] md:pb-[150px] overflow-hidden"
    >
      {questions.map(({ title, desc }, index) => (
        <AccordionItem
          component="accordion"
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

export default Accordion;
