import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="my-6 flex items-center gap-2 bg-base-300 px-4 py-2 ">
      <button className="text-base-200 bg-secondary px-6 py-2 font-semibold ">Latest</button>
      <Marquee className="flex gap-24 " pauseOnHover={true} speed={100} >
        <p  className="font-semibold">
        Bangladesh's Export Earnings Show Strong Growth in Q1 2025
        </p>
        <p  className="font-semibold">
        Foreign Investment in Bangladesh Reaches Record High in Fiscal Year 2024-25
        </p>
        <p  className="font-semibold">
        Government Announces New Incentives for Small and Medium Enterprises (SMEs) 
        </p>
        <p  className="font-semibold">
        E-commerce Sector in Bangladesh Sees Rapid Expansion Amidst Digital Adoption
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
