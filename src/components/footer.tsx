import { AiFillDiscord } from "react-icons/ai";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-[url('https://res.cloudinary.com/dzv61qpeu/image/upload/v1726153159/footer-background_nfg8rf.webp')] bg-cover bg-center h-full w-full relative z-0 -mt-20 -bottom-4">
      <div className="mx-auto mt-12 w-full max-w-6xl flex-col px-4 pt-48 sm:px-12 md:pb-24 xl:pe-4 xl:ps-0 text-white">
        <div className="text-xl font-bold ">Postable</div>
        <div className="flex flex-col md:flex-row sm:mt-10 gap-4 py-5">
          <div className="flex flex-col items-start opacity-75 max-w-lg">
            <h3 className=" text-2xl font-semibold ">
              We help you to create postable content!
            </h3>
            <p className="text-sm py-2 w-fit max-w-md md:text-balance md:text-base">
              Postable is a free, unlimited tool designed to empower
              individuals, influencers, and businesses to amplify their voice
              and effortlessly create engaging content that go beyond the
              ordinary.
            </p>
          </div>
          <div className="flex flex-col text-base min-w-72 md:mx-10">
            <h3 className="font-bold mb-2">Products</h3>
            <div className="flex flex-col mt-1 font-medium opacity-70 space-y-2">
              <span>Tweet converter</span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Post scheduler
                <span className="px-2 py-1 rounded-xl text-sm font-semibold ml-2 bg-white/10">
                  COMING SOON
                </span>
              </span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Screenshot Desginer
                <span className="px-2 py-1 rounded-xl text-sm font-semibold ml-2 bg-white/10">
                  COMING SOON
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-base">
            <h3 className="font-bold mb-2">Company</h3>
            <div className="flex flex-col items-start mt-1 font-medium opacity-70 space-y-2">
              <button>Privacy policy</button>
              <button>Terms and conditions</button>
              <button>Refund policy</button>
            </div>
          </div>
        </div>
        <div className="my-9 h-0.5 w-full bg-black/5" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            <button className="flex min-w-32 items-center gap-3 rounded-xl bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40">
              <FaSquareXTwitter color="white" className="size-7" />X / Twitter
            </button>
            <button className="flex min-w-32 items-center gap-3 rounded-xl bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40">
              <FaInstagram className="size-7" />
              Instagram
            </button>
            <button className="flex min-w-32 items-center gap-3 rounded-xl bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40">
              <AiFillDiscord color="white" className="size-7" /> Discord
            </button>
            <button className="flex min-w-32 items-center gap-3 rounded-xl bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40">
              <SiBuymeacoffee color="white" className="size-7" />
              Buy Coffee
            </button>
          </div>
          <div className="mt-5 text-sm text-white/50 py-2 flex items-center">Copyright 2024 Postable</div>
        </div>
      </div>
    </footer>
  );
};
