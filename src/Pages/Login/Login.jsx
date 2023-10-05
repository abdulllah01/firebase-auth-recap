import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("You Logged in  Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => setError(err.message));
    setUser("");
    setError("");
    // signIn(email, password)
    //     .then(result => {
    //         console.log(result.user);

    //         // navigate after login
    //         navigate(location?.state ? location.state : '/');

    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen ">
      <Navbar />
      <div className="py-20">
        <div className="max-w-[500px] mx-auto bg-white py-16  px-10 ">
          <h1 className="text-3xl font-bold text-center mb-8">
            Login your account
          </h1>
          <hr className="h-[2px] bg-gray-100 w-full mb-8" />
          <form onSubmit={handleLogin}>
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Email address
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-3 rounded-md mb-6"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
            <br />
            <label className="label">
              <span className="label-text text-xl text-[#403F3 font-semibold">
                Password
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-3 mb-6 rounded-md"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
            <br />

            <button className="bg-[#403F3F] mb-6 rounded-md w-full flex justify-center items-center text-white font-medium py-2 ">
              Login
            </button>
            {user && (
              <p className="text-green-600  font-medium text-center ">
                Created user Successfully
              </p>
            )}

            <p className="text-red-500 font-medium text-center"> {error}</p>

            <p className="text-[#706F6F]  font-medium text-center ">
              Dont’t Have An Account ?{" "}
              <Link to={"/register"}>
                <span className="text-[#f9645b] font-medium">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
