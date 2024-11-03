import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experience } from "../interfaces/Experience";
import { getDateAsString } from "../utils/getDateAsString";
import { usePortfolioStore } from "../store/portfolioStore";
import { Tags } from "./Tags";
import { useTranslation } from "react-i18next";

interface ExperienceTimeLineCardProps {
  experience: Experience;
}

export const ExperienceTimeLineCard = ({
  experience,
}: ExperienceTimeLineCardProps) => {
  const { locale } = usePortfolioStore();
  const { t } = useTranslation();

  console.log(experience);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: experience.isHighlighted ? "#ac3f5e" : "#32223b",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #32223b" }}
      iconClassName="rounded-full"
      date={
        experience.isHighlighted
          ? getDateAsString(
              locale,
              experience.startDate.toDate().getFullYear(),
              experience.startDate.toDate().getMonth()
            )
          : undefined
      }
      icon={
        <img
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68-Xe224AWCGkDp7owND2JBGkV8l8KrPdqg&s"
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
