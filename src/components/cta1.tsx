import { FaArrowRight } from "react-icons/fa6";

export const CallToAction1 = () => {
  return (
   <div className="flex mt-20">
     <div className="relative mx-auto max-w-6xl flex flex-col px-4 py-6 w-full space-y-2 mt-10">
      <div className="text-start text-3xl max-w-4xl text-gray-400 font-light leading-tighter tracking-tight sm:text-[40px] sm:max-w-4xl mb-5">
        We help you create postable content that not only{" "}
        <span className="text-black">looks great</span> but also{" "}
        <span className="text-black">engages your audience.</span>
      </div>
      <button className="bg-black text-white flex items-center rounded-2xl justify-center px-3 py-2 w-fit font-semibold gap-x-1">
        Get Started for Free <FaArrowRight />
      </button>
    </div>
   </div>
  );
};
