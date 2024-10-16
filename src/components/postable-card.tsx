import { BiSolidMessageSquare } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export const PostableAppCard = () => {
  return (
    <div className="z-20 mb-10 flex h-fit w-fit flex-col gap-4 bg-white px-5 py-4 drop-shadow-lg transition-transform duration-75 rounded-3xl">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center">
          <span className="bg-black p-2 rounded-full">
            <BiSolidMessageSquare color="pink" size={20} />
          </span>
          <div className="flex flex-col text-xs pl-2">
            <span className="flex items-center gap-x-1">
              Postable <RiVerifiedBadgeFill className="text-sky-500" />
            </span>
            <span className="text-gray-500">@PostableApp</span>
          </div>
        </div>
        <BsTwitterX className="text-gray-500" />
      </div>
      <div className="text-xs">
        Sharing your tweets across multiple platform made easy. Postable helps
        you creating engaging vis
      </div>
      <div className="min-w-fit text-[10px] text-gray-500">
        9:42 PM · Jul 29, 2024
      </div>
    </div>
  );
};
