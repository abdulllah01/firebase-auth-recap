import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-3 pl-4 pt-2 ">
      <h2 className="font-semibold mb-3 text-2xl">All Categories</h2>
      <h2 className="px-6 flex justify-center items-center py-4 text-2xl font-semibold w-full rounded-md bg-[#E7E7E7]">
        National News
      </h2>
      <div className="pl-6">
        {categories.map((category) => (
          <Link
            className="block text-[#9F9F9F] text-xl font-medium"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
