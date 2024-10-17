import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const Cards = () => {
  return (
    <div className="relative flex items-center justify-center h-full p-6">
      <div className="relative flex gap-x-4 flex-row">
        <div className="relative w-[200px] h-[300px] bg-blue-300 rounded-xl z-0 hover:z-20 shadow-lg transform rotate-[-5deg]  hover:rotate-[5deg] transition ease-in-out duration-200 hidden sm:inline-block">
          <div className="absolute top-2 left-2 text-white text-lg font-bold flex items-center gap-x-1">
            <IoLogoLinkedin /> LinkedIn Post
          </div>
        </div>
        <div className="relative w-[200px] h-[300px] bg-pink-300 rounded-xl z-10 hover:z-30 shadow-lg transform rotate-[-2deg] -ml-10 hover:rotate-[2deg] transition ease-in-out duration-200">
          <div className="absolute top-2 left-2 text-white text-lg font-bold flex items-center gap-x-1">
            <RiInstagramFill /> Instagram Story
          </div>
        </div>
        <div className="relative w-[200px] h-[300px] bg-green-400 rounded-xl z-20 hover:z-40 shadow-lg transform rotate-[3deg] -ml-10 hover:rotate-[-3deg] transition ease-in-out duration-200">
          <div className="absolute top-2 left-2 text-white text-lg font-bold flex items-center gap-x-1">
            <FaSquareFacebook /> Facebook Post
          </div>
        </div>
        <div className="relative w-[200px] h-[300px] bg-orange-300 rounded-xl z-30 shadow-lg transform rotate-[5deg] -ml-10 hover:rotate-[-5deg] transition ease-in-out duration-200 hidden sm:inline-block ">
          <div className="absolute top-2 left-2 text-white text-lg font-bold flex items-center gap-x-1">
            <RiInstagramFill /> Instagram Post
          </div>
        </div>
      </div>
    </div>
  );
};
