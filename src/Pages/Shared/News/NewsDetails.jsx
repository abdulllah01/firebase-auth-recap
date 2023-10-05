import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-3"></div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
