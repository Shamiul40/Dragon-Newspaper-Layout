import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { IoIosBookmark } from "react-icons/io";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    tags,
    id
  } = news;

  return (
    <div className="card bg-base-100 shadow-sm my-8">
      <div className="card-header flex items-center gap-4 px-6 pt-4">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">
            {format(new Date(author.published_date), "PPP")}
          </p>
        </div>
        <button className="flex items-center gap-3 ml-72 text-gray-500 hover:text-primary">
        <IoIosBookmark size={20} />
        <FaShareAlt size={20} />
        </button>
      </div>

      <div className="px-6 pt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <figure className="px-6 pt-4">
        <img src={thumbnail_url} alt={title} className="rounded-lg" />
      </figure>

      <div className="px-6 py-4 text-sm text-gray-700">
        {details.length > 250 ? details.slice(0, 250) + "..." : details}
        <Link to={`/newsDetails/${id}`} className="text-primary font-semibold cursor-pointer ml-1">Read More</Link>
      </div>

      <div className="card-actions flex justify-between items-center px-6 pb-4 text-sm">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
