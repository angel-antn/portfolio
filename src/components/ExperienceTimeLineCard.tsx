import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experience } from "../interfaces/Experience";
import { getDateAsString } from "../utils/getDateAsString";
import { usePortfolioStore } from "../store/portfolioStore";
import { Tags } from "./Tags";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import spinner from "../assets/spinner.svg";

interface ExperienceTimeLineCardProps {
  experience: Experience;
}

export const ExperienceTimeLineCard = ({
  experience,
}: ExperienceTimeLineCardProps) => {
  const { locale } = usePortfolioStore();
  const { t } = useTranslation();
  const { getImageFromStorage } = usePortfolio();

  const [image, setImage] = useState<string>();

  useEffect(() => {
    let wasUnmounted = false;
    getImageFromStorage(experience.imageUrl).then((image) => {
      if (wasUnmounted) return;
      setImage(image);
    });
    return () => {
      wasUnmounted = true;
    };
  }, []);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: experience.isHighlighted ? "#ac3f5e" : "#32223b",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${
          experience.isHighlighted ? "#ac3f5e" : "#32223b"
        }`,
      }}
      date={
        experience.isHighlighted
          ? getDateAsString(
              locale,
              experience.startDate.toDate().getFullYear(),
              experience.startDate.toDate().getMonth()
            )
          : undefined
      }
      iconStyle={{ backgroundColor: experience.bgColor }}
      icon={
        <img
          className="w-full h-full flex items-center justify-center p-1 lg:p-3"
          src={image ? image : spinner}
        />
      }
    >
      <h3 className="vertical-timeline-element-title text-lg font-bold">
        {experience.name}
      </h3>

      <Tags tags={experience.tags} name={experience.name} />

      <p>{experience.description[locale]}</p>

      {experience.links["web"] && (
        <a href={experience.links["web"]} target="_blank">
          <div className="bg-white bg-opacity-15 w-full py-3 mt-5 shadow hover:bg-opacity-20 hover:cursor-pointer transition-all ease-in rounded-xl flex gap-3 font-semibold justify-center items-center">
            {t("seeWebsite")}
          </div>
        </a>
      )}

      {(experience.links["googlePlay"] || experience.links["appStore"]) && (
        <div className="flex gap-3 w-full">
          {experience.links["googlePlay"] && (
            <a
              className="flex-1"
              href={experience.links["googlePlay"]}
              target="_blank"
            >
              <div className="bg-white bg-opacity-15 py-3 mt-5 shadow hover:bg-opacity-20 hover:cursor-pointer transition-all ease-in rounded-xl flex gap-3 font-semibold justify-center items-center">
                Play Store
              </div>
            </a>
          )}
          {experience.links["appStore"] && (
            <a
              className="flex-1"
              href={experience.links["appStore"]}
              target="_blank"
            >
              <div className="bg-white bg-opacity-15 py-3 mt-5 shadow hover:bg-opacity-20 hover:cursor-pointer transition-all ease-in rounded-xl flex gap-3 font-semibold justify-center items-center">
                App Store
              </div>
            </a>
          )}
        </div>
      )}
    </VerticalTimelineElement>
  );
};
