import Image from "next/image";
import engaging from "@/app/assets/engaging.webp";
export const Engaging = () => {
  return (
    <div className="z-20 bg-white">
      <Image src={engaging} className="w-full" alt={""} />
    </div>
  );
};
