import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const SocialNetwork = () => {
  return (
    <div className="mb-10">
      <h2 className="font-semibold mb-3 text-2xl">Find Us On</h2>
      <div className="border-[1.5px] rounded-md ">
        <a href="" className="flex justify-start items-center gap-2  p-4">
          <FaFacebookF className="text-3xl bg-gray-100 rounded-[50%] text-#[3b599c] p-1" />

          <p> Facebook</p>
        </a>
        <hr className="h-[1.5px] bg-gray-100" />

        <a href="" className="flex justify-start items-center gap-2 0  p-4">
          <BiLogoTwitter className="text-3xl bg-gray-100 rounded-[50%] text-[#58a7de] p-1" />

          <p> Twitter</p>
        </a>

        <hr className="h-[2px] bg-gray-100" />
        <a href="" className="flex justify-start items-center gap-2   p-4">
          <BiLogoInstagram className="text-3xl bg-gray-100 rounded-[50%] text-[#ee2a7b] p-1" />

          <p> Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
