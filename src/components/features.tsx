import Image from "next/image";
import feature1 from "@/app/assets/feature-1.webp";
import feature2 from "@/app/assets/feature-2.webp";
import feature3 from "@/app/assets/feature-3.webp";
import feature4 from "@/app/assets/feature-4.webp";
import feature5 from "@/app/assets/feature-5.webp";

export const Features = () => {
  return (
    <div className="relative flex w-full flex-col items-start py-12 md:py-24 bg-white z-20">
      <div className="mx-auto w-full max-w-6xl px-4 text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0">
        Our Features
      </div>
      <div className="relative w-full overflow-scroll no-scrollbar">
        <div className="flex w-max-72 gap-4 pb-4 pt-3 xl:pt-4 pl-[144px]">
          <Image
            src={feature1}
            alt="Feature 1"
            className="min-w-[200px] sm:min-w-72 max-w-fit select-none md:min-w-96"
          />
          <Image
            src={feature2}
            alt="Feature 2"
            className="min-w-[200px] sm:min-w-72 max-w-fit select-none md:min-w-96"
          />
          <Image
            src={feature3}
            alt="Feature 3"
            className="min-w-[200px] sm:min-w-72 max-w-fit select-none md:min-w-96"
          />
          <Image
            src={feature4}
            alt="Feature 4"
            className="min-w-[200px] sm:min-w-72 max-w-fit select-none md:min-w-96"
          />
          <Image
            src={feature5}
            alt="Feature 5"
            className="min-w-[200px] sm:min-w-72 max-w-fit select-none md:min-w-96"
          />
        </div>
      </div>
      </div>
  );
};
