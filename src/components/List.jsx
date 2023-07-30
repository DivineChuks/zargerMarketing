import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";

const List = () => {
  return (
    <div className="px-4 md:px-16 flex flex-col items-center mt-16 w-full mb-16 md:mb-16">
      <h2 className="text-[40px] md:text-[63px] text-primary text-center font-playFair font-normal leading-[60px] md:leading-[70px] ">
        Includes EVERYTHING you need to start a thriving digitial marketing
        business in your spare time WITH NO EXPERIENCE!
      </h2>
      <div className="mt-16 px-4 md:px-16">
        <div className="flex gap-4 mb-8">
          <AiFillCheckSquare color="#0D1282" size={43} />
          <h2 className="font-raleway text-[25px] font-normal text-accent leading-[35px]">
            A comprehensive business, marketing and automation course with over
            80 in-depth, easy to follow modules WITH A COMPLETE BEGINNER IN
            MIND!
          </h2>
        </div>
        <div className="flex gap-4 mb-8">
          <AiFillCheckSquare color="#0D1282" size={30} />
          <h2 className="font-raleway text-[25px] font-normal text-accent leading-[35px]">
            Lifetime access to ongoing course updates & community support with
            absolutely no monthly fees or charges!
          </h2>
        </div>
        <div className="flex gap-4 mb-8">
          <AiFillCheckSquare color="#0D1282" size={50} />
          <h2 className="font-raleway text-[25px] font-normal text-accent leading-[35px]">
            An in-demand digital product- THE COURSE ITSELF! Done for you and
            ready to be sold for 100% profit! That profit ALWAYS goes directly
            to you because the course becomes YOURS!
          </h2>
        </div>
        <div className="flex gap-4 mb-8">
          <AiFillCheckSquare color="#0D1282" size={50} />
          <h2 className="font-raleway text-[25px] font-normal text-accent leading-[35px]">
            BONUS! I will also send you your very own digital e-book on how to
            create your own digital product to sell! This e-book can be
            rebranded and sold as one of your own products as well ($37 value)!
          </h2>
        </div>
      </div>
      <h2 className="text-center text-[28px] text-primary">
        Absolutely NO UPSELLS, ever.<br></br> One up-front price and the product is
        yours.
      </h2>
    </div>
  );
};

export default List;
