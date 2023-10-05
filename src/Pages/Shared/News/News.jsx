import { AiOutlineShareAlt, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const News = ({ item }) => {
  const { _id, title, details, author, total_view, image_url } = item;

  return (
    <>
      <div className="border-[2px] mb-5 p-5 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-3 justify-center items-center ">
            <img
              className="w-[40px] h-10 rounded-[50%] "
              src={author.img}
              alt=""
            />
            <div>
              <h3>{author.name}</h3>
              <p>{author.published_date}</p>
            </div>
          </div>

          <div className="flex justify-center text-2xl items-center gap-1">
            <BiBookmark />
            <AiOutlineShareAlt />
          </div>
        </div>
        {title.length > 80 ? (
          <h2 className="font-semibold mb-3 text-2xl">
            {title.slice(0, 80)}...
          </h2>
        ) : (
          <h2 className="font-semibold mb-3 text-2xl">{title}</h2>
        )}

        <img src={image_url} alt="" />
        {details.length > 300 ? (
          <p className="mt-3">
            {details.slice(0, 300)}...
            <p className="text-blue-500 font-medium">
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More...
              </Link>
            </p>
          </p>
        ) : (
          <p className="mt-3">{details}</p>
        )}
        <br />
        <hr />
        <div className="flex justify-between items-center mt-3">
          <div className="flex  text-amber-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className=" flex justify-center  gap-1 items-center">
            <AiOutlineEye className="text-2xl" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    author: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    }).isRequired,
    total_view: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default News;
