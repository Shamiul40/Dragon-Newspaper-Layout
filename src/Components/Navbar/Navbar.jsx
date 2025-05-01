import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../../assets/user.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <section className="left"></section>
      <section className="midlle flex items-center gap-5 text-accent ml-45 ">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </section>
      <section className="right flex items-center gap-3">
        <img src={userImg} alt="" />
        <button className='btn btn-primary px-10'>Login</button>
      </section>

    </div>
  );
};

export default Navbar;