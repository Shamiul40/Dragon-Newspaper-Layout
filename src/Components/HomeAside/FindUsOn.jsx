import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h1 className="font-semibold gap-6 ">Find Us On</h1>
      <div className="join join-vertical w-full my-2">
        <button className="btn justify-start bg-base-100 join-item hover:bg-base-300"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn justify-start bg-base-100 join-item hover:bg-base-300"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn justify-start bg-base-100 join-item hover:bg-base-300"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
