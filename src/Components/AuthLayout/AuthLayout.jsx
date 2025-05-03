import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto pt-3">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="my-10">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
