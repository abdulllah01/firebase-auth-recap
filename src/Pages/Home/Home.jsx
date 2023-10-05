import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import News from "../Shared/News/News";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
        <div className="">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2  pt-2 lg:col-span-2 ">
          <h2 className="font-semibold mb-3 text-2xl">Dragon News Home</h2>

          {news.map((item) => (
            <News key={item.id} item={item}></News>
          ))}

          {/* <News /> */}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
