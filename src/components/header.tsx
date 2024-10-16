import { BiSolidMessageSquare } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="my-4 flex w-full flex-col items-center fixed z-50">
      <nav className="flex items-center rounded-2xl w-fit bg-neutral-800 text-white my-3 left-1/2 justify-between z-20 gap-x-2 px-4 py-4 shadow-[0px_3.35px_2.21px_#0000001c,0px_8.05px_5.32px_#00000014,0px_15.15px_10.02px_#00000011,0px_27.03px_17.87px_#0000000e,0px_50.55px_33.42px_#0000000b,0px_121px_80px_#00000008]">
        <div className="flex items-center justify-between w-fit gap-x-4 px-4 py-1">
          <BiSolidMessageSquare className="size-6" />
          <p className="font-sans font-bold text-2xl">Postable</p>
        </div>
      </nav>
    </header>
  );
};