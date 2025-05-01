import React from "react";
import Header from "../Header/Header ";
import { Outlet } from "react-router";
import LatestNews from "../LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";
import LeftAside from "../HomeAside/LeftAside";
import RightAside from "../HomeAside/RightAside";

const HomeLayout = () => {
  return (
    <div className="my-8 w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="my-3 *: grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
