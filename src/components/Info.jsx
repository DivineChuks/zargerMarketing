import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col w-full md:max-w-[1128px] h-screen px-[20px] md:px-0 mx-auto py-[60px] md:py-[40px] justify-center items-center">
      <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-0 items-center">
        <div className="flex-1 h-full">
        <iframe
          src="https://www.youtube.com/embed/lb1_jZIb-kk"
          style={{
            width: "90%",
            height: "100%",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        </div>
        <div className="flex-1">
          <h2 className="text-[31px] font-bold mb-4">A little Bit About Me</h2>
          <p className="text-[20px]">
            Hi and welcome to my Revenue Revolution digital marketing course! My
            name is Francesca and I am really excited that you are here. First
            and foremost, I am a wife and mom to 4 sweet kids. We live on the
            beach in Florida and it is the GOOD LIFE! When I was younger, I
            struggled with a drug and alcohol addiction. I was sent to a
            treatment center in my teens and was there for a year. After that, I
            learned that the key to a fulfilling life was finding ways to help
            others. I decided early on in my college career that I wanted to
            help children, so I got my Masters degree in Social Work and worked
            as a child protection caseworker for years. When I had my first
            baby, I decided to stay at home. My wonderful husband was a drug
            addiction counselor at the time for troubled young men. He is also
            an entrepreneur and now a successful podcaster as well!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
