import Lottie from "lottie-react";
import foxLottie from "../assets/fox_lottie.json";
import downloadIcon from "../assets/download.svg";
import { usePortfolioStore } from "../store/portfolioStore";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { locale, profile } = usePortfolioStore();
  const { t } = useTranslation();

  return (
    <div className="text-white flex flex-col-reverse lg:flex-row gap-5 items-center justify-center mt-6 lg:mt-10">
      <div className="w-3/4 lg:w-2/5 flex justify-center items-center flex-col gap-3">
        <Lottie className="" animationData={foxLottie} loop={true} />
        <button className="px-16 py-3 bg-primary_color hover:bg-primary_color_hover transition-all ease-in rounded-xl flex gap-3 font-semibold justify-center items-center shadow-lg">
          <img src={downloadIcon} /> {t("downloadCV")}
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:w-3/5">
        <h1 className="italic font-black text-7xl">{t("greetings")}</h1>
        <h2 className="font-black text-4xl">
          {t("presentation")}{" "}
          <span className="text-primary_color">{t("ocupation")}</span>
        </h2>
        <p className="text-lg">
          {(profile["resume"] as { [key: string]: string[] })[locale][0]}
        </p>
        <p className="text-lg">
          {(profile["resume"] as { [key: string]: string[] })[locale][1]}
        </p>
      </div>
    </div>
  );
};
