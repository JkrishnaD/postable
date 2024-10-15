import contentBg from "@/app/assets/bg.png";
import Image from "next/image";

export const ContentSection = () => {
  const Buttons = [""]
  return (
    <div className="relative mx-auto mb-12 mt-14 w-fit max-w-full rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-12 lg:px-24 lg:pt-12 bg-gradient-to-br from-green-400 via-blue-500 to-purple-400 h-full">
      <header className="py-6 px-4 text-white flex items-center flex-col">
        <h1 className="mx-auto max-w-xl text-balance text-center text-[60px] leading-[28px] text-white font-bold sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]">
          Share Your Voice Beyond Just a Tweet
        </h1>
        <p className="text-center mx-auto my-4 text-sm max-w-xs md:max-w-xl text-[16px]">
          Keep your online presence steady and growing by creating customizable
          images from your tweets, perfect for Instagram, Facebook, and more
        </p>
      </header>
    </div>
  );
};
