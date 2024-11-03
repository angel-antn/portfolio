import { useTranslation } from "react-i18next";
import { SkillsCard } from "./SkillsCard";
import { usePortfolioStore } from "../store/portfolioStore";

export const Skills = () => {
  const { t } = useTranslation();
  const { profile } = usePortfolioStore();
  return (
    <div className="mt-16 w-full flex flex-col justify-center items-center text-center">
      <h2 className="font-black text-6xl text-white mb-12">{t("skills")}</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 text-white w-full">
        <SkillsCard
          name="Mobile"
          skills={
            (profile["skills"] as { [key: string]: unknown })["mobile"] as {
              [key: string]: { [key: string]: unknown };
            }
          }
        />
        <SkillsCard
          name="Frontend"
          skills={
            (profile["skills"] as { [key: string]: unknown })["frontend"] as {
              [key: string]: { [key: string]: unknown };
            }
          }
        />
        <SkillsCard
          name="Backend"
          skills={
            (profile["skills"] as { [key: string]: unknown })["backend"] as {
              [key: string]: { [key: string]: unknown };
            }
          }
        />
      </div>
    </div>
  );
};
