"use client";
import { useEffect, useState } from "react";
import individual from "@/app/assets/Individual.webp";
import influencers from "@/app/assets/Influencers.webp";
import businesses from "@/app/assets/Businesses.webp";

import Image from "next/image";
import { cn } from "@/lib/utils";

export const Solution = () => {
  const [state, setState] = useState<
    "individuals" | "influencers" | "businesses"
  >("individuals");

  const handleState = (
    newState: "individuals" | "influencers" | "businesses"
  ) => {
    setState(newState);
  };

  useEffect(() => {
    const states = ["individuals", "influencers", "businesses"] as const;
    let index = 0;

    const interval = setInterval(() => {
      setState(states[index]);
      index = (index + 1) % states.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex relative mx-auto w-full h-full px-4 lg:pl-[144px] flex-row items-center justify-center my-16">
      <div className="relative flex items-start flex-col w-full sm:flex-row ">
        <div className="flex flex-col">
          <div className="flex items-start mt-4 flex-col">
            <h3 className="text-[40px]">One Solution for All!!</h3>
            <p className="text-[20px] tracking-normal">
              Postable helps everyone to share their thoughts across multiple
              platforms
            </p>
          </div>
          <div className="flex flex-row bg-gray-200 px-2 py-4 gap-x-16 rounded-2xl mt-5 my-4">
            <button
              className={cn(
                "solution-btn ",
                state === "individuals" && "bg-white opacity-100 rounded-xl"
              )}
              onClick={() => handleState("individuals")}
            >
              Individuals
            </button>
            <button
              className={cn(
                "solution-btn ",
                state === "influencers" && "bg-white opacity-100 rounded-xl"
              )}
              onClick={() => handleState("influencers")}
            >
              Influencers
            </button>
            <button
              className={cn(
                "solution-btn ",
                state === "businesses" && "bg-white opacity-100 rounded-xl"
              )}
              onClick={() => handleState("businesses")}
            >
              Businesses
            </button>
          </div>
          <div>
            {state === "individuals" && <IndividualContent />}
            {state === "businesses" && <BusinessContent />}
            {state === "influencers" && <InfluencerContent />}
          </div>
        </div>
        <div className="flex items-center justify-center py-4 w-full h-full mt-10">
          {state === "individuals" && (
            <Image
              src={individual}
              alt="Individual content"
              width={500}
              height={500}
              className="object-contain"
            />
          )}
          {state === "influencers" && (
            <Image
              src={influencers}
              alt="Individual content"
              width={500}
              height={500}
              className="object-contain"
            />
          )}
          {state === "businesses" && (
            <Image
              src={businesses}
              alt="Individual content"
              width={500}
              height={500}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

const IndividualContent = () => {
  return (
    <div className="me-auto max-w-xl mt-7 space-y-10">
      <p className="text-gray-500 text-base">
        Postable is perfect for individuals who want to elevate their social
        media presence without the hassle. Whether you&apos;re sharing thoughts,
        opinions, or everyday moments, Postable makes it easy to create and
        share beautiful, impactful posts from your tweets.
      </p>
      <ul className="relative flex flex-col items-start gap-2 md:gap-4 text-base text-gray-500 mt-4 list-disc pl-2">
        <li className="relative items-center gap-4">
          Effortless Post Creation
        </li>
        <li className="relative items-center gap-4">Enhanced Visual Appeal</li>
        <li className="relative items-center gap-4">
          Easy Sharing Across Platforms
        </li>
        <li className="relative items-center gap-4">
          Consistent Social Media Presence
        </li>
      </ul>
    </div>
  );
};

const InfluencerContent = () => {
  return (
    <div className="me-auto max-w-xl mt-7 space-y-10">
      <p className="text-gray-500 text-base">
        For influencers, maintaining a consistent and visually appealing social
        media presence is crucial. Postable empowers you to convert your tweets
        into captivating images that align with your brand, helping you to keep
        your content fresh and engaging across all platforms.
      </p>
      <ul className="relative flex flex-col items-start gap-2 md:gap-4 text-base text-gray-500 mt-4 list-disc pl-2">
        <li className="relative items-center gap-4">Quick Post Creation</li>
        <li className="relative items-center gap-4">
          Boosted Follower Engagement
        </li>
        <li className="relative items-center gap-4">
          Consistent Multi-Platform Presence
        </li>
        <li className="relative items-center gap-4">Content Diversification</li>
      </ul>
    </div>
  );
};

const BusinessContent = () => {
  return (
    <div className="me-auto max-w-xl mt-7 space-y-10">
      <p className="text-gray-500 text-base">
        Postable is perfect for businesses that want to maintain a strong online
        presence effortlessly. Share updates, announcements, and more across all
        platforms seamlessly.
      </p>
      <ul className="relative flex flex-col items-start gap-2 md:gap-4 text-base text-gray-500 mt-4 list-disc pl-2">
        <li className="relative items-center gap-4">
          Effortless Post Creation
        </li>
        <li className="relative items-center gap-4">Enhanced Visual Appeal</li>
        <li className="relative items-center gap-4">
          Easy Sharing Across Platforms
        </li>
        <li className="relative items-center gap-4">
          Consistent Social Media Presence
        </li>
      </ul>
    </div>
  );
};
