import React, { use } from 'react';
import { NavLink } from 'react-router';

const fetchPromise = fetch("/categories.json").then(res=>res.json())

const Categories = () => {
  const categories = use(fetchPromise)
  // console.log(categories)
  return (
    <div className='grid grid-cols-1 gap-3 mt-4'>
      <h1 className='font-bold text-center'>All Categories ({categories.length})</h1>
      {
        categories.map(category=><NavLink key={category.id} className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent " to={`/category/${category.id}`}>{category.name}</NavLink>)
      }
    </div>
  );
};

export default Categories;