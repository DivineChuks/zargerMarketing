import React from "react";

const Video = () => {
  return (
    <div className="w-full h-screen flex flex-col py-[80px]">
      <div className="max-w-[1250px] mx-auto w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/lb1_jZIb-kk"
          style={{
            width: "100%",
            height: "100%",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Video;
