import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full flex flex-col pt-0 pb-0 md:pt-[80px] md:pb-[80px] px-4 md:px-0">
      <div className="max-w-[1000px] mx-auto h-[100px] md:h-[150px] w-full bg-[#F3F1FD] relative flex justify-center">
        <div className="absolute bottom-0 bg-primary w-[70%] text-white cursor-pointer px-4 py-4 text-[25px]">
          <h2 className="text-center font-bold">Join Now!</h2>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
