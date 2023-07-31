import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-black pt-[80px] px-[20px] md:px-[70px] overflow-hidden">
      <div className="hidden md:grid md:grid-cols-5 text-white">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-[40px]">
            <h2>Zarger</h2>
          </div>
          <p className="font-glacial text-[#A3A3A3] text-[20px] mb-8">
            Zarger Marketing LLC
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="font-nohemi text-[30px] mb-[36px]">Subscribe</h2>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent w-[145px] focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-white"
            />
            <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-lg justify-center items-center flex">
              <BiChevronRight size={30} color="#000" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="font-raleway text-[30px] mb-[36px]">Company</h2>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            License
          </p>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            Income disclosure
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="font-raleway text-[30px] mb-[36px]">Legal</h2>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            Privacy
          </p>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            Terms & Condition
          </p>
        </div>
      </div>
      <hr className="w-full hidden md:block my-[50px]" />
      <div className="w-full hidden md:flex justify-end mt-[16px]">
        <p className="text-[20px] text-[#A3A3A3] font-glacial mb-[70px]">
          © Copyright 2023. Zarger Marketing LLC
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <div className="">
          <h2 className="font-nohemi text-white text-[26px] mb-[36px]">
            Company
          </h2>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            License
          </p>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
            Income disclosure
          </p>
        </div>
        <div>
          <h2 className="font-nohemi text-[26px] text-white mb-[36px]">
            Legal
          </h2>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
            Privacy policy
          </p>
          <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
            Terms
          </p>
        </div>
      </div>
      <div className="grid mt-[20px] grid-cols-2 md:hidden">
        <div className="">
          <div className="mb-[40px]">
            <h2>Zarger</h2>
          </div>
          <p className="font-glacial text-[#A3A3A3] text-[20px] mb-8">
            Zarger Marketing
          </p>
          {/* <div className="flex gap-4">
            <a
              href="https://facebook.com/mixship.africa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/facebook.svg"
                className="cursor-pointer"
                alt="Facebook logo"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://instagram.com/mixship.africa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/instagram.svg"
                className="cursor-pointer"
                alt="Instagram logo"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://twitter.com/mixship.africa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/twitter.svg"
                className="cursor-pointer"
                alt="Twitter logo"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/mixship/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/linkedin.svg"
                className="cursor-pointer"
                alt="Linkedin logo"
                width={18}
                height={18}
              />
            </a>
          </div> */}
        </div>
        <div className="">
          <h2 className="font-nohemi text-white text-[26px] mb-[36px]">
            Subscribe
          </h2>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent w-[120px] focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-white"
            />
            <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-lg justify-center items-center flex">
              <BiChevronRight size={30} color="#000" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full md:hidden mt-[50px] mb-[20px]" />
      <div className="w-full flex md:hidden justify-end mt-[16px]">
        <p className="text-[25px] text-[#A3A3A3] font-glacial mb-[70px]">
          © Copyright 2023. Zarger Marketing LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
