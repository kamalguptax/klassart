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
}

export const SingleFeature: React.FC<SingleFeatureProps> = ({
  reverse = false,
  img,
  title,
  desc,
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
        <h4 className="font-openSans leading-[62px] text-[28px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-medium text-[rgba(85,85,255,1)] pb-4">
         <span className="text-gray-700">
            {title.first}
          </span>{" "}
          {title.second}
        </h4>
        <p className="font-openSans text-sm sm:text-base text-[#8C8B99]">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};
