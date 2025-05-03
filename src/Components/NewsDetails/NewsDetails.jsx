import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Header from "../Header/Header ";
import RightAside from "../HomeAside/RightAside";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const singleNewsDetails = data.find((news) => news.id === id);
  // console.log(singleNewsDetails);

  const{image_url,title,details,category_id} = singleNewsDetails

  return (
    <div className="w-11/12 mx-auto my-4">
      <Header></Header>
      <div className="grid grid-cols-12 gap-6 my-16">
        <main className="col-span-9">
          <h2 className="font-bold text-center my-3 text-2xl">Dragon News</h2>
          <div>
            <div className="
             rounded-md shadow-md bg-gray-50 text-gray-800">
              <img
                src={image_url}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {title}
                  </h2>
                  <p className="text-gray-800">
                   {details}
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
                >
                  <Link to={`/category/${category_id}`}>Back to Category</Link>
                </button>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
