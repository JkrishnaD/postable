import Image from "next/image";
import trySmapleTweet from "@/app/assets/try-sample-tweet.png";
import { PostableAppCard } from "./postable-card";

export const SampleTweet = () => {
  return (
    <div className="bg-white group hover:bg-purple-100 px-4 pt-2 rounded-3xl transition-all">
      <div className="flex justify-center items-center flex-col max-w-xs">
        <Image src={trySmapleTweet} alt="" className="w-40 h-10 m-1" />
        <a href="/" className="-rotate-6 group-hover:rotate-0 transition-all pt-2 group-hover:cursor-pointer">
          <PostableAppCard />
        </a>
      </div>
    </div>
  );
};
