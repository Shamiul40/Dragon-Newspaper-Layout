import React from 'react';
import Header from '../Header/Header ';
import { Outlet } from 'react-router';


const HomeLayout = () => {
  return (
    <div className='my-8'>
        <header>
          <Header></Header>
        </header>
        <main>
       
          <section className="left-side"></section>
          <section className="main">
           <Outlet></Outlet>
          </section>
          <section className="right-side"></section>
        </main>
    </div>
  );
};

export default HomeLayout;