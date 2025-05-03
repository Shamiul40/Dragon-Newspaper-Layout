import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const {user, logOut }= use(AuthContext);
  console.log(user)

  const HandleLogOut=()=>{
    logOut().then(() => {
     alert("log out successfull")
    }).catch((error) => {
      console.log(error)
    });
    
  }

  return (
    <div className='flex justify-between items-center'>
      <section className="left">
        <div>{user && user.email}</div>
      </section>
      <section className="midlle flex items-center gap-5 text-accent ml-45 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </section>
      <section className="right flex items-center gap-3">
        <img src={userImg} alt="" />
       {
        user ? <button onClick={HandleLogOut} className='btn btn-primary px-10'><Link>Logout</Link></button> :  <button className='btn btn-primary px-10'><Link to="/auth/login">Login</Link></button>
       }
      </section>

    </div>
  );
};

export default Navbar;