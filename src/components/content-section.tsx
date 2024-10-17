"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { PostableAppCard } from "./postable-card";
import { cn } from "@/lib/utils";

export const ContentSection = () => {
  const [isActive, setIsActive] = useState<
    "instagram-story" | "facebook-post" | "linkedin-post" | "instagram-post"
  >("facebook-post");

  const handleButton = (
    button:
      | "instagram-story"
      | "facebook-post"
      | "linkedin-post"
      | "instagram-post"
  ) => {
    setIsActive(button);
  };

  return (
    <section className="content-main z-10">
      <header className="py-6 px-4 text-white flex items-center flex-col text-xl">
        <h1 className="mx-auto max-w-xl text-balance text-center sm:text-[24px] leading-[28px] text-white font-bold sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]">
          Share Your Voice Beyond Just a Tweet
        </h1>
        <p className="text-center mx-auto my-4 text-sm max-w-xs md:max-w-xl text-[16px]">
          Keep your online presence steady and growing by creating customizable
          images from your tweets, perfect for Instagram, Facebook, and more
        </p>
      </header>
      <div className="mx-auto my-6 flex max-w-full items-center gap-3 px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5 h-fit no-scrollbar overflow-x-auto">
        <button
          onClick={() => handleButton("instagram-story")}
          className={cn(
            "content-btn",
            isActive === "instagram-story" && "bg-black/80 text-white"
          )}
        >
          <RiInstagramFill className="size-4" /> Instagram Story
        </button>
        <button
          onClick={() => handleButton("linkedin-post")}
          className={cn(
            "content-btn",
            isActive === "linkedin-post" && "bg-black/80 text-white"
          )}
        >
          <IoLogoLinkedin className="size-4" /> LinkedIn Post
        </button>
        <button
          onClick={() => handleButton("facebook-post")}
          className={cn(
            "content-btn",
            isActive === "facebook-post" && "bg-black/80 text-white"
          )}
        >
          <FaSquareFacebook className="size-4" /> Facebook Post
        </button>
        <button
          onClick={() => handleButton("instagram-post")}
          className={cn(
            "content-btn",
            isActive === "instagram-post" && "bg-black/80 text-white"
          )}
        >
          <RiInstagramFill className="size-4" /> Instagram Post
        </button>
        <span className="flex flex-row w-fit items-center text-sm text-white opacity-50 justify-center gap-x-1">
          <FaPlus /> more
        </span>
      </div>
      <div className="m-2 transform transition-all duration-500 ease-in-out">
        {isActive === "linkedin-post" && <LinkedInPost />}
        {isActive === "facebook-post" && <FacebookPost />}
        {isActive === "instagram-story" && <InstagramStory />}
        {isActive === "instagram-post" && <InstagramPost />}
      </div>
    </section>
  );
};

const LinkedInPost = () => {
  return (
    <div className="relative flex items-center justify-center top-14 mx-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="h-[400px] w-[400px]  rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="text-white text-sm flex items-center px-3 py-4 bg-white bg-opacity-30 backdrop-blur-md">
          <IoLogoLinkedin className="h-4 w-4 mr-1" />
          LinkedIn post
        </div>
        <div className="post-card">
          <div className="h-full w-full flex items-center justify-center">
            <PostableAppCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FacebookPost = () => {
  return (
    <div className="relative flex items-center justify-center top-14 mx-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="h-[300px] w-[400px]  rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="text-white text-sm flex items-center px-3 py-4 bg-white bg-opacity-30 backdrop-blur-md">
          <FaSquareFacebook className="h-4 w-4 mr-1" />
          Facebook post
        </div>
        <div className="post-card">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <PostableAppCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const InstagramStory = () => {
  return (
    <div className="relative flex items-center justify-center mx-2 top-14 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="h-[610px] w-[350px] rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="text-white text-sm flex items-center px-3 py-4 bg-white bg-opacity-30 backdrop-blur-md">
          <RiInstagramFill className="h-4 w-4 mr-1" />
          Instagram story
        </div>
        <div className="post-card">
          <div className="h-full w-full flex items-center justify-center flex-col">
            <PostableAppCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
const InstagramPost = () => {
  return (
    <div className="relative flex items-center justify-center top-14 mx-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="h-[400px] w-[400px]  rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="text-white text-sm flex items-center px-3 py-4 bg-white bg-opacity-30 backdrop-blur-md">
          <RiInstagramFill className="h-4 w-4 mr-1" />
          Instagram post
        </div>
        <div className="post-card">
          <div className="h-full w-full flex items-center justify-center">
            <PostableAppCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
