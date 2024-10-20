import { TiTick } from "react-icons/ti";

export const OptimizationSection = () => {
  return (
    <div className=" bg-white z-20 w-full">
      <section className="mx-auto flex flex-col max-w-6xl w-full py-10 bg-white z-20">
        <div className="flex flex-col justify-items-start">
          <div className="font-medium text-black lg:text-[40px] lg:max-w-sm max-w-xl px-2 text-[25px]">
            Optimized for all social media
          </div>
          <div className="flex md:flex-row flex-col space-y-2 px-2 py-4">
            <div className="text-[14px] w-fit max-w-3xl leading-[20px md:text-balance md:text-base">
              We&apos;ve meticulously designed each template to meet the
              specific guidelines and format requirements of all social media
              platforms. By preserving safe zones and adhering to platform
              standards, we ensure that your posts will always be visually
              striking, no matter where you share them.
            </div>
            <div className="text-[16px] flex md:flex-col space-x-2 lg:space-x-0 h-full ">
              <span className="flex items-center">
                <TiTick color="purple" /> Readable
              </span>
              <span className="flex items-center">
                <TiTick color="purple" /> Visible
              </span>
              <span className="flex items-center">
                <TiTick color="purple" /> Accessible
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
