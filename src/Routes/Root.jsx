import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl py-10  mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
