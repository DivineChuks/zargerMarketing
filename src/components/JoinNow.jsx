import React from "react";
import List from "./List";

const JoinNow = () => {
  return (
    <div className="py-[50px] flex flex-col w-full">
      <div className="max-w-[1200px] mx-auto bg-secondary h-[150px] px-8 py-3 relative w-full flex flex-col items-center">
        <div className="bg-primary absolute bottom-0 h-[70px] w-[70%] mx-auto flex justify-center items-center text-white text-center">
          <h2 className="text-[37px] font-raleway font-normal">Join Now!</h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto w-full mt-16 py-[50px]">
        <hr className="border-t border-primary" />
        <List />
        <hr className="border-t border-primary" />
      </div>
    </div>
  );
};

export default JoinNow;
