import Image from "next/image";
import step1 from "@/app/assets/step-1.webp";
import step3 from "@/app/assets/step-2.webp";
import step2 from "@/app/assets/step-3.webp";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export const WorkingSection = () => {
  return (
    <div className="mx-auto flex h-fit w-full max-w-full flex-col gap-6 py-12 overflow-hidden">
      <div className="px-4 flex items-start pl-[160px] text-2xl font-medium text-neutral-800 md:text-[40px]">
        How it Works?
      </div>
      <div className="w-full px-4 flex gap-x-6 overflow-x-auto no-scrollbar items-center md:justify-center">
        <CardContainer className="flex flex-col w-[350px] max-w-md mx-auto flex-shrink-0 p-6 rounded-xl bg-gray-100 shadow-lg h-full">
          <CardItem>
            <div className="flex items-center justify-center w-full mb-4">
              <Image
                src={step1}
                alt="Step 1 Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-500 font-medium mb-1">Step-1</h1>
              <h3 className="text-base text-black font-medium mb-3">
                Copy Tweet's Link
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                On X/Twitter, click the share icon at the bottom-right of the
                tweet and select 'Copy Link.' Then, paste the link into the box
                above.
              </p>
            </div>
          </CardItem>
        </CardContainer>
        <CardContainer className="flex flex-col w-[350px] max-w-md mx-auto flex-shrink-0  p-6 rounded-xl bg-gray-100 shadow-lg h-full">
          <CardItem>
            <div className="flex items-center justify-center w-full mb-4">
              <Image
                src={step2}
                alt="Step 1 Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-500 font-medium mb-1">Step-2</h1>
              <h3 className="text-lg text-black font-medium mb-3">
                Customize Desgin
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose social media sizes, adjust the style, set the border
                radius, and customise the design to your liking and preferred
                branding—all with a single click.
              </p>
            </div>
          </CardItem>
        </CardContainer>
        <CardContainer className="flex flex-col w-[350px] max-w-md mx-auto  p-6 rounded-xl bg-gray-100 shadow-lg h-full">
          <CardItem>
            <div className="flex items-center justify-center w-full mb-4">
              <Image
                src={step3}
                alt="Step 1 Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-500 font-medium mb-1">Step-3</h1>
              <h3 className="text-lg text-black font-medium mb-3">Export!</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simply export and publish your meticulously crafted posts,
                tailored to meet each social media’s standards and format.
              </p>
            </div>
          </CardItem>
        </CardContainer>
      </div>
    </div>
  );
};
