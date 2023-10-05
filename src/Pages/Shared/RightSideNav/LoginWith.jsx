import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginWith = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("You Logged in  Successfully");
      })
      .catch((error) => {
        console.log(error.massage);
        toast.error(error.massage);
      });
  };

  return (
    <div className="mb-10">
      <h2 className="font-semibold mb-2 text-2xl">Login with</h2>
      <Link>
        <button
          onClick={handleGoogleLogin}
          className="border-[1.5px] py-1 px-2 rounded-[4px] w-full flex justify-center items-center md:gap-2 border-[#3f9af5]"
        >
          <FcGoogle className="text-4xl md:text-3xl lg:text-3xl" />
          <p className="text-[#3f9af5]">Login with Google</p>
        </button>
      </Link>

      <button className="border-[1.5px] mt-2 py-1 px-2 rounded-[4px] w-full flex justify-center items-center md:gap-2 border-black">
        <BsGithub className="text-4xl md:text-3xl lg:text-3xl" />
        <p>Login with Github</p>
      </button>
    </div>
  );
};

export default LoginWith;
