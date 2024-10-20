import { FaArrowRight } from "react-icons/fa6";

export const CallToAction1 = () => {
  return (
   <div className="flex pt-20 bg-white z-20">
     <div className="relative mx-auto max-w-6xl flex flex-col px-4 py-6 w-full space-y-2 mt-10">
      <div className="text-start text-3xl max-w-4xl text-gray-400 font-light leading-tighter tracking-tight sm:text-[40px] sm:max-w-4xl mb-5">
        We help you create postable content that not only{" "}
        <span className="text-black">looks great</span> but also{" "}
        <span className="text-black">engages your audience.</span>
      </div>
      <a href="/" className="bg-neutral-800 text-white flex items-center rounded-xl justify-center px-4 py-3 w-fit font-semibold gap-x-1 mt-5">
          Get Started for Free <FaArrowRight />
        </a>
    </div>
   </div>
  );
};
