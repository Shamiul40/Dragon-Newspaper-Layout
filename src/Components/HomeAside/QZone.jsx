import React from 'react';
import swimming from "../../assets/swimming.png";
import classImg from "../../assets/class.png"
import playground from "../../assets/playground.png"
import Bg from "../../assets/bg.png"

const QZone = () => {
  return (
    <div className='bg-base-200 p-4'>
      <h1 className='font-semibold '>QZone</h1>
      <div className='space-y-5'>
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
        <img src={Bg} alt="" />
      </div>
    </div>
  );
};

export default QZone;