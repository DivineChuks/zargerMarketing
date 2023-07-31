import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import { Collapse } from "react-collapse";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AccordionItem = ({ title, desc, open, toggle, component }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      data-aos-once="true"
      className='rounded-md py-[20px] px-[20px] md:px-[30px] mb-[30px] bg-primary'
    >
      <div
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-raleway text-white text-[16px]">{title}</p>
        {open ? (
          <BiSolidChevronUpCircle
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        ) : (
          <BiSolidChevronDownCircle
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        )}
      </div>
      <Collapse isOpened={open}>
        <div className="ml-0 md:ml-[30px] mt-[30px] mb-[20px] rounded-[9px] bg-secondary py-[20px] px-[30px]">
          <p className="font-raleway text-white text-[18px]">{desc}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
