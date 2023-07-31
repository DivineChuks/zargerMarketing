import React from "react";
import { SiGooglemarketingplatform } from "react-icons/si";
import { TbBrandEdge } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {MdContentCopy, MdOutlineAlternateEmail} from "react-icons/md"
import {BsTools} from "react-icons/bs"
import {FaBloggerB} from "react-icons/fa"

const Offers = () => {
  return (
    <div className="bg-[#F3F1FD] px-4 md:px-16 py-[80px] w-full">
      <h2 className="text-[40px] mb-16 font-playFair font-bold text-primary text-center">
        What You'll Gain
      </h2>
      <div className="grid grid-col md:grid-cols-4 gap-8 ">
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <SiGooglemarketingplatform size={20} color="#0D1282" />
          </div>
          <h2 className="font-bold font-playFair mb-4">
            INTRODUCTION TO DIGITAL MARKETING
          </h2>
          <p>
            Key fundaments to the business of digital marketing! This is a great
            introduction, especially for beginners, on how to begin a business
            in digital marketing.
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <TbBrandEdge size={20} color="#0D1282" />
          </div>
          <h2 className="font-playFair font-bold mb-4">
            HOW TO BUILD YOUR OWN BRANDED SALES PROCESS
          </h2>
          <p>
            This course teaches you everything you know about branding yourself
            or your business and how to build a successful sales funnel that
            will convert your targeted customer.
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <BsBook size={20} color="#0D1282" />
          </div>
          <h2 className="font-playFair font-bold mb-4">
            WHAT DO I RECEIVE WITH MY PURCHASE?
          </h2>
          <p>
            Further down on this page you will see the modules included in this
            training course. You will receive the course itself, a free
            community of like minded business owners of all experience levels
            ready to help, and of course access to myself if you have any
            questions.
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <AiOutlineMail size={20} color="#0D1282" />
          </div>
          <h2 className="font-playFair font-bold mb-4">EMAIL MARKETING</h2>
          <p>
            You will learn how to create an effective email marketing campaign
            that will not only engage subscribers, but convert them. You will
            learn how to design your email, personalize it, automate it and
            check your analytics for effectiveness!
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <MdOutlineAlternateEmail size={20} color="#0D1282"  />
          </div>
          <h2 className="font-playFair font-bold mb-4">BRANDING EXPANSION</h2>
          <p>
            You will learn how to develop and implement a strong branding
            strategy! You will learn how to pinpoint and develop your own
            personal brand and build a strong reputation. You will learn how to
            effectively communicate this brand across many channels!
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <BsTools size={20} color="#0D1282"/>
          </div>
          <h2 className="font-playFair font-bold mb-4">BUSINESS TOOLS</h2>
          <p>
            You will be introduced to a range of tools that will help you simply
            and effectively run your business.
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <MdContentCopy size={20} color="#0D1282" />
          </div>
          <h2 className="font-playFair font-bold mb-4">CONTENT STRATEGIES</h2>
          <p>
            You will learn how to effectively market your business or product
            across many social media outlets. You will learn how to define your
            target audience (or niche) and create content that speaks to them!
          </p>
        </div>
        <div className="py-8 px-6 bg-white rounded-md">
          <div className="w-16 h-16 mb-4 bg-[#F3F1FD] rounded-full flex justify-center items-center">
            <FaBloggerB size={20} color="#0D1282" />
          </div>
          <h2 className="font-playFair font-bold mb-4">SEO + BLOGGING</h2>
          <p>
            You will learn how to create and write blog content that is
            effective and captivating and performs well in the search engine.
            This will drive traffic to your page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
