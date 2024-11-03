import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { usePortfolioStore } from "../store/portfolioStore";
import { useTranslation } from "react-i18next";
import { ExperienceTimeLineCard } from "./ExperienceTimeLineCard";

export const ExperienceTimeLine = () => {
  const { experience } = usePortfolioStore();
  const { t } = useTranslation();

  return (
    <div className="mt-16 w-full flex flex-col justify-center items-center">
      <h2 className="font-black text-6xl text-white mb-12 text-center">
        {t("experience")}
      </h2>
      <VerticalTimeline>
        {Object.keys(experience).map((key) => (
          <ExperienceTimeLineCard
            experience={experience[key]}
            key={`experience_${key}`}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};
