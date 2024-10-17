import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import appScreenshot from "@/app/assets/app-screenshot.webp"
export const CallToAction3 = () => {
  return (
    <section className="rounded-[64px] overflow-hidden relative z-10 bg-neutral-900 drop-shadow-2xl text-white">
      <div className="flex flex-col items-center py-10 mt-4 ">
        <h3 className="md:text-[60px] text-2xl py-4 font-bold">One-Click to Create</h3>
        <p className="text-base leading-relaxed max-w-md text-balance md:max-w-2xl md:text-lg py-2 mt-4 text-center px-4 text-neutral-400">
          Postable is built with simplicity and fun at its core. No design
          skills? No problem. We handle the heavy lifting so you can
          effortlessly create stunning posts.
        </p>
        <a href="/" className="bg-neutral-800 text-white flex items-center rounded-xl justify-center px-4 py-3 w-fit font-semibold gap-x-1 mt-5">
          Get Started for Free <FaArrowRight />
        </a>
      </div>
      <div className="px-10 py-6 overflow-hidden">
        <Image src={appScreenshot} alt=""/>
      </div>
    </section>
  );
};
