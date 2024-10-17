import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiSolidMessageSquare } from "react-icons/bi";

export const Header = () => {
  const [inputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    const input = document.getElementById("input");
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInputVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (input) {
      observer.observe(input);
    }
    return () => {
      if (input) {
        observer.unobserve(input);
      }
    };
  }, []);

  return (
    <header className="flex w-full flex-col items-center fixed z-50">
      <nav className="flex items-center rounded-2xl w-fit bg-neutral-800 text-white my-3 left-1/2 justify-between z-20 gap-x-2 px-3 py-3 shadow-[0px_3.35px_2.21px_#0000001c,0px_8.05px_5.32px_#00000014,0px_15.15px_10.02px_#00000011,0px_27.03px_17.87px_#0000000e,0px_50.55px_33.42px_#0000000b,0px_121px_80px_#00000008]">
        <div className="flex items-center justify-between w-full gap-x-4 px-3 py-1">
          <BiSolidMessageSquare className="size-6" />
          <p className="font-sans font-bold text-2xl">Postable</p>
        </div>
        <AnimatePresence>
          {inputVisible && (
            <div className="bg-neutral-800 hidden sm:flex">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mx-auto max-w-xl items-center gap-1 rounded-2xl bg-neutral-700 pl-5 pr-3 sm:flex lg:max-w-3xl shadow-lg"
              >
                <input
                  type="url"
                  className="flex-1 py-3 focus-visible:outline-none bg-transparent w-[410px]"
                  placeholder="Paste the url..."
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
