import { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import sun from "../assets/sun.svg";

export const HeroParallaxBanner = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1.25 + scrollY / 1000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ParallaxBanner
        layers={[
          {
            speed: -20,
            children: (
              <div className=" absolute bg-gradient-to-b from-[#fca9ac] to-[#fc9a6e] w-full h-full top-0 aspect-[1/1] bg-top"></div>
            ),
          },
          {
            speed: 15,
            children: (
              <img
                src={sun}
                alt="Sun"
                className="absolute w-1/4 left-1/2 transform -translate-x-1/2 bottom-[20%] sm:bottom-[25%]"
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.25s ease-out",
                }}
              />
            ),
          },
          {
            speed: 15,
            children: (
              <div className="hidden sm:block bg-mountains_bg absolute bg-no-repeat bg-contain w-full bottom-0 aspect-[1.25/1] sm:aspect-[1.65/1] bg-right-bottom"></div>
            ),
          },
          {
            speed: 5,
            children: (
              <div className="block sm:hidden bg-mountains_bg absolute bg-no-repeat bg-contain w-full bottom-0 aspect-[1.25/1] sm:aspect-[1.65/1] bg-right-bottom"></div>
            ),
          },
          {
            speed: 0,
            children: (
              <div className="bg-forest_bg absolute bg-no-repeat bg-contain w-full bottom-0 aspect-[1/1] sm:aspect-[1.5/1]  bg-right-bottom"></div>
            ),
          },
        ]}
        className="aspect-[1/1] sm:aspect-[1.8/1]"
      />
    </>
  );
};
