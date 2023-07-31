import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F3F1FD] relative z-20 flex-col pt-[80px] pr-[20px] pl-[20px] md:pr-0 md:pl-[4px] overflow-hidden">
      <h2
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
        className="text-center text-[35px] md:text-[55px] leading-[50px] md:leading-[70px] font-nohemi text-accent px-0 md:px-16"
      >
        Start a thriving digitial marketing business <br></br> WITH NO
        EXPERIENCE!
      </h2>
      <div
        className="hidden md:block"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}
          navigation={false}
          draggable={true}
          style={{ marginTop: "53px", paddingBottom: "117px" }}
        >
          <SwiperSlide>
            <div className="border-[1.5px] flex-1 bg-white border-dashed py-[30px] px-[28px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314] flex flex-col justify-center items-center h-[180px]">
              <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
                A comprehensive business, marketing and automation course with
                over 80 in-depth, easy to follow modules WITH A COMPLETE
                BEGINNER IN MIND!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1.5px] flex-1 bg-white border-dashed py-[30px] px-[28px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314] flex flex-col justify-center items-center h-[180px]">
              <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
                Lifetime access to ongoing course updates & community support
                with absolutely no monthly fees or charges!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1.5px] flex-1 bg-white border-dashed py-[30px] px-[28px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314] flex flex-col justify-center items-center h-[180px]">
              <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
                An in-demand digital product- THE COURSE ITSELF! Done for you
                and ready to be sold for 100% profit! That profit ALWAYS goes
                directly to you because the course becomes YOURS!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1.5px] flex-1 bg-white border-dashed py-[30px] px-[28px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314] flex flex-col justify-center items-center h-[180px]">
              <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
                BONUS! You'll receive a digital e-book on how to create your own
                digital product to sell! This e-book can be rebranded and sold
                as one of your own products as well ($37 value)
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex md:hidden flex-col mt-[40px] gap-[20px] pb-[70px]">
        <div className="border-[1.5px] flex-1 bg-white border-dashed border-spacing-x-1.5 pt-[17px] pb-[15px] px-[20px] md:pt-[51px] md:pb-[38px] md:px-[45px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314]">
          <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
            A comprehensive business, marketing and automation course with over
            80 in-depth, easy to follow modules WITH A COMPLETE BEGINNER IN
            MIND!
          </p>
        </div>
        <div className="border-[1.5px] flex-1 bg-white border-dashed pt-[17px] pb-[15px] px-[20px] md:pt-[51px] md:pb-[38px] md:px-[30px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314]">
          <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
            Lifetime access to ongoing course updates & community support with
            absolutely no monthly fees or charges!
          </p>
        </div>
        <div className="border-[1.5px] flex-1 bg-white border-dashed pt-[17px] pb-[15px] px-[20px] md:pt-[51px] md:pb-[38px] md:px-[45px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314]">
          <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
            An in-demand digital product- THE COURSE ITSELF! Done for you and
            ready to be sold for 100% profit! That profit ALWAYS goes directly
            to you because the course becomes YOURS!
          </p>
        </div>
        <div className="border-[1.5px] flex-1 bg-white border-dashed pt-[17px] pb-[15px] px-[20px] md:pt-[51px] md:pb-[38px] md:px-[45px] rounded-[30px] border-[#440B86] shadow-xl shadow-[#5617a314]">
          <p className="text-[18px] text-center md:text-left text-lightTextPurple font-glacial leading-[27px]">
            BONUS! You'll receive a digital e-book on how to create your own
            digital product to sell! This e-book can be rebranded and sold as
            one of your own products as well ($37 value)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
