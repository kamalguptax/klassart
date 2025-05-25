"use client";
import React from "react";
import { SingleFeature } from "../SingleFeature/SingleFeature";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const DetailedFeatures = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once when in view
    threshold: 0.2, // 20% of the element must be visible before triggering
  });
  return (
    <section className="bg-[url('/assets/images/mobilebg.png')] bg-no-repeat bg-cover bg-center">
      <div
        ref={ref}
        className=" px-6 md:px-16 lg:px-36 py-20"
      >
        <div className="  px-6 md:px-16 lg:px-36 ">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }} // Start small and transparent
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Scale up when in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            className="text-center font-openSans text-3xl sm:text-4xl md:text-[66px] font-bold pt- pb-20"
          >
            Transform Ideas{" "}
            <span className="bg-gradient-to-r from-[#C289FF] to-[#5555FF] bg-clip-text text-transparent">
              {" "}
              into Reality
            </span>
          </motion.p>
          <div>
            {[
              {
                title: { first: "AI-Powered", second: "Creativity" },
                desc: "Generate any picture you can imagine with any face.",
                img: "/assets/images/product01.png",
                button: "Generate Now",
              },
              {
                title: { first: "Creative", second: "Upscale" },
                desc: "Enhance your images with any background.",
                img: "/assets/images/product02.png",
                button: "Enhance Image",
              },
              {
                title: { first: "Text Behind", second: "the Image" },
                desc: "Elevate visuals with seamless background removal for a professional touch. please discribe",
                img: "/assets/images/product03.png",
                button: "Extract Text",
              },
            ].map((item, index) => {
              return (
                <SingleFeature
                  key={index}
                  reverse={index % 2 === 1}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  button={item.button}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};