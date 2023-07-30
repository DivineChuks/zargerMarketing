import React from "react";

const Navbar = () => {
  return (
      <div className="flex flex-col w-full absolute top-5 px-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[25px] font-playFair text-primary font-bold">
            Zarger
          </h2>
          <button className="bg-secondary px-4 md:px-8 py-3 text-white rounded-md text-base">Join Now</button>
        </div>
      </div>
  );
};

export default Navbar;
