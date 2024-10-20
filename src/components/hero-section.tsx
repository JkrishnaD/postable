import { FaDesktop } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { SampleTweet } from "./sample";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-full top-20 w-full bg-white z-20">
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-5 px-4 py-8 text-center md:mt-0 md:py-28 xl:pe-4 xl:ps-0">
        <div className="mx-auto w-full max-w-5xl text-balance px-8 text-center text-[28px] sm:font-bold leading-[30px] tracking-tight text-[#252424] md:px-0 md:text-[80px] md:leading-[80px] font-extrabold">
          Convert <div className="relative inline-block pr-2">Tweets </div>
          into Engaging Social Media Posts, Instantly!
        </div>
        <div className="text-xl font-light hidden sm:block mt-7 leading-7">
          Paste your tweet link below to get started for FREE
        </div>
        <div className="mt-4">
          <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-neutral-100 bg-white pl-5 pr-3 sm:flex lg:max-w-3xl shadow-lg">
            <input
            id="input"
              type="url"
              className="flex-1 py-5 focus-visible:outline-none"
              placeholder="Paste the url..."
            />
            <button className="flex items-center bg-neutral-100 text-neutral-900 p-2 rounded-xl gap-x-1 text-sm">
              Paste <TbClipboardText />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-fit space-y-1 mx-auto rounded-2xl bg-neutral-50 text-neutral-500 max-w-xl border border-dashed py-6 px-9 sm:hidden">
            <FaDesktop className="size-3.5 mb-2" />
            <h3 className="text-[13px] text-neutral-600">
              Please visit Desktop
            </h3>
            <p className="text-[12px]">Postable mobile is under construction</p>
          </div>
          <div className="text-sm text-neutral-400 sm:mt-6 mt-6">
            No signup, no credit card, no crap!
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center scale-75">
          <SampleTweet />
        </div>
      </div>
    </section>
  );
};
