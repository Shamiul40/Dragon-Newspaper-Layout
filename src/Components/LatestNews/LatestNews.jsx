import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="my-6 flex items-center gap-2 bg-base-300 px-4 py-2 ">
      <button className="text-base-200 bg-secondary px-6 py-2 font-semibold ">Latest</button>
      <Marquee className="flex gap-8 " pauseOnHover={true} speed={100}>
        <p  className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nesciunt 
        </p>
        <p  className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nesciunt! 
        </p>
        <p  className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nesciunt! 
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
