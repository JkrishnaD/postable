import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const faqData = [
  {
    question: "Is Postable free to use?",
    answer:
      "Yes, it’s completely free and unlimited! You can convert as many tweets into social media images as you’d like without any restrictions.",
  },
  {
    question: "What social media platforms does this tool support?",
    answer:
      "Postable currently supports Twitter, Facebook, Instagram, LinkedIn, and TikTok. We’re constantly working on adding more platforms to our list.",
  },
  {
    question: "Can I customize the created images?",
    answer:
      "Yes, you can customize the created images by adding your own text, images, and more. You can also choose from a variety of templates to make your images stand out.",
  },
  {
    question: "Do I need design skills to use this platform?",
    answer: "No, you don’t need any design skills to use this platform.",
  },
  {
    question: "Do I need to know the format or size of each social media?",
    answer:
      "No, you don’t need to know the format or size of each social media.",
  },
];

export const FAQs = () => {
  const [openState, setOpenState] = useState<number | null>(null);

  const handleButton = (index: number) => {
    setOpenState(openState === index ? null : index);
  };

  return (
    <section className="mx-auto w-full flex max-w-6xl px-4 py-10 flex-col">
      <header className="max-w-sm">
        <h3 className="text-[40px]">FAQ</h3>
        <p className="text-[20px] hidden md:flex">
          Let’s help you with some of your frequently asked questions
        </p>
      </header>
      <div className="flex flex-col sm:flex-row w-full gap-x-4 md:gap-24 my-5">
        <div className="max-w-sm hidden md:flex flex-col py-4 space-y-1">
          <p className="text-[16px]">Couldn't find your answer?</p>
          <a href="/" className="text-[14px] text-purple-500 flex items-center">
            Ask a Question <FaArrowRight className="pl-1" />
          </a>
        </div>
        <div className="w-full md:ms-auto md:max-w-xl">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => handleButton(index)}
                className="w-full flex items-center flex-row justify-between py-4 border-b font-bold md:text-[20px] text-sm transition-all"
              >
                <span className="text-base md:text-lg font-medium text-start hover:underline">
                  {item.question}
                </span>
                <motion.div
                initial={false}
                animate={{ rotate: openState === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openState === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <motion.div
                      transition={{ duration: 0.3 }}
                      className="text-sm text-neutral-500 pb-4 pe-4 md:text-lg py-1"
                    >
                      {item.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="max-w-sm flex-col py-4 space-y-1 sm:hidden flex mt-2">
            <p className="text-[16px]">Couldn't find your answer?</p>
            <a
              href="/"
              className="text-[14px] text-purple-500 flex items-center"
            >
              Ask a Question <FaArrowRight className="pl-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
