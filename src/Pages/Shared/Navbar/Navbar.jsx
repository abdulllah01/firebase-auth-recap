import { NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res.user);
        toast.success("You Logged out  Successfully");
        navigate("/register");
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className=" flex justify-between items-center px-8  ">
      <div className="navbar ">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-white border-none lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 font-extrabold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" font-semibold text-2xl">Dragon News</a>
      </div>

      <div className="navbar  hidden lg:flex">
        <ul className="flex gap-4">{navLinks}</ul>
      </div>

      <div className="dropdown dropdown-bottom dropdown-end">
        <div className=" flex   justify-center items-center gap-1 pr-3">
          <button tabIndex={0}>
            {user ? (
              <img
                className="w-[120px] rounded-[50%]"
                src={user.photoURL ? user.photoURL : userDefaultPicture}
                // src={userDefaultPicture}
                // alt={user.displayName}
              />
            ) : (
              <FaUserCircle className="text-5xl" />
            )}
          </button>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded  w-52"
        >
          <h2 className="text-center text-xl font-semibold">Abdullah</h2>

          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="text-white bg-gradient-to-r mt-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Sign Out
            </button>
          ) : (
            <button
              href="/login"
              type="button"
              className="text-white bg-gradient-to-r mt-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

// <div className="flex justify-between  items-center mb-16">
// <div className=""></div>

// <nav className="text-[#706F6F] ">
//   <ul className="flex gap-4">{navLinks}</ul>
// </nav>

// <div className=" flex justify-center  items-center gap-1">
//   <FaUserCircle className="text-4xl" />

//   <button className=" px-6 py-2 bg-[#403F3F] text-white">Login</button>
// </div>
// </div>
