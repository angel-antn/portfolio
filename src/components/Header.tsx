import { TypeAnimation } from "react-type-animation";
import { usePortfolioStore } from "../store/portfolioStore";

export const Header = () => {
  const { locale, setLocale } = usePortfolioStore();
  return (
    <div className="absolute top-0 left-0 w-full z-50 py-5 px-4 md:px-7 flex justify-between items-start">
      <TypeAnimation
        sequence={[
          "Hello World!",
          1000,
          "¡Hola Mundo!",
          1000,
          "Ciao Mondo!",
          1000,
          "Bonjour le Monde!",
          1000,
          "你好，世界",
          1000,
          "こんにちは、世界",
          1000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-bold italic"
      />
      <div>
        <div className="py-1 md:py-2 px-2 md:px-7 bg-gray-400 rounded-full bg-opacity-10 border-2 border-gray-100 border-opacity-50 flex gap-1 md:gap-3 justify-center items-center">
          <button
            onClick={() => setLocale("es")}
            className={`rounded-full py-1 px-3 md:px-5 hover:bg-white ${
              locale == "es" ? "text-afternoon_orange" : "text-white"
            } hover:text-afternoon_orange transition-all ease-in ${
              locale == "es" && "bg-white"
            }`}
          >
            <span className="text-xl font-bold">ES</span>
          </button>
          <button
            onClick={() => setLocale("en")}
            className={`rounded-full py-1 px-3 md:px-5 hover:bg-white ${
              locale == "en" ? "text-afternoon_orange" : "text-white"
            } hover:text-afternoon_orange transition-all ease-in ${
              locale == "en" && "bg-white"
            }`}
          >
            <span className="text-xl font-bold">EN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
