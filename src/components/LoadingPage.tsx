import Lottie from "lottie-react";
import loadingFoxLottie from "../assets/loading_fox_lottie.json";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const LoadingPage = () => {
  return (
    <motion.div
      className="absolute top-0 bottom-0 w-full flex flex-col justify-center items-center gap-5 bg-[#1e032c] z-[100]"
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -300 }}
    >
      <Lottie
        className="w-[15rem]"
        animationData={loadingFoxLottie}
        loop={true}
      />
      <TypeAnimation
        sequence={["Loading", 1000, "", 1000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-6xl lg:text-8xl text-white font-bold italic"
      />
    </motion.div>
  );
};
