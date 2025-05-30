import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// Props type definition
type TitleType = {
  first: string;
  second: string;
};

interface SingleFeatureProps {
  reverse?: boolean;
  img: string;
  title: TitleType;
  desc: string;
  button: string;
}

export const SingleFeature: React.FC<SingleFeatureProps> = ({
  reverse = false,
  img,
  title,
  desc,
  button,
}) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 lg:gap-16 mb-16 lg:mb-24`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 150 : -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <img
          src={img}
          alt="Feature"
          className="w-full h-auto max-w-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -150 : 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <p className="font-openSans text-2xl sm:text-3xl md:text-4xl font-semibold pb-4">
          <span className="bg-gradient-to-r from-[#C289FF] to-[#5555FF] bg-clip-text text-transparent">
            {title.first}
          </span>{" "}
          {title.second}
        </p>
        <p className="font-openSans text-sm sm:text-base text-[#8C8B99]">
          {desc}
        </p>

        <button className="font-openSans mt-6 text-sm sm:text-base flex items-center gap-3 text-white bg-gradient-to-r from-[#3BAAFF] to-[#5556FF] px-6 py-3 rounded-full transition-all duration-300 hover:from-[#5556FF] hover:to-[#3BAAFF]">
          {button} <ArrowUpRight size={16} strokeWidth={1.5} />
        </button>
      </motion.div>
    </div>
  );
};
