import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {

    if(id === "0") {
      setCategoryNews(data)
      return
    } else if(
      id ==="1"
    ) {
      const filterNews = data.filter(news=>news.others.is_today_pick === true)
      setCategoryNews(filterNews)
    } else {
      const filterNews = data.filter((news) => news.category_id === parseInt(id));
    setCategoryNews(filterNews);
    }

    
  }, [data, id]);

  console.log(categoryNews)
 
  return (
    <div>
      <h1 className="text-center font-semibold my-3">Total <span className="text-secondary">{categoryNews.length}</span> news found</h1>
      <div >
        {
          categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>

    </div>
  );
};

export default CategoryNews;
