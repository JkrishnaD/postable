import { FaArrowRight } from "react-icons/fa6";

export const CallToAction2 = () => {
  return (
    <div className="flex mt-10">
      <div className="relative mx-auto max-w-6xl flex flex-col px-4 py-6 w-full space-y-2 mb-10">
        <div className="text-start text-3xl max-w-4xl  font-light leading-tighter tracking-tight sm:text-[40px] sm:max-w-4xl mb-5">
          <span className="text-black">
            Grow your audience with powerful visuals
          </span>
          <span className="text-gray-400">
            shared across all your social media platforms.
          </span>
        </div>
        <a href="/" className="bg-neutral-800 text-white flex items-center rounded-xl justify-center px-4 py-3 w-fit font-semibold gap-x-1 mt-5">
          Get Started for Free <FaArrowRight />
        </a>
      </div>
    </div>
  );
};
