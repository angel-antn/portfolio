import { mdiCheckDecagram } from "@mdi/js";
import Icon from "@mdi/react";

interface SkillsCardProps {
  name: string;
  skills: { [key: string]: { [key: string]: unknown } };
}

export const SkillsCard = ({ name, skills }: SkillsCardProps) => {
  return (
    <div className="w-full bg-secondary_color p-5 rounded-lg pb-12 shadow-lg">
      <h4 className="text-xl font-bold">{name}</h4>
      {Object.keys(skills).map((skill) => {
        return (
          <div
            className="flex flex-col mt-8 items-start w-full"
            key={`skill_${skill}`}
          >
            <div className="flex flex-col w-full gap-3">
              <div className="flex gap-3">
                <Icon path={mdiCheckDecagram} size={1} color={"#2196f3"} />
                <span>{skills[skill]["name"] as string}</span>
              </div>
              <div className="flex gap-2 w-full">
                <div
                  className={`bg-white ${
                    (skills[skill]["skill"] as number) >= 0
                      ? "bg-opacity-70"
                      : "bg-opacity-20"
                  } p-1 w-1/3 rounded-full`}
                ></div>
                <div
                  className={`bg-white ${
                    (skills[skill]["skill"] as number) >= 1
                      ? "bg-opacity-70"
                      : "bg-opacity-20"
                  } p-1 w-1/3 rounded-full`}
                ></div>
                <div
                  className={`bg-white ${
                    (skills[skill]["skill"] as number) >= 2
                      ? "bg-opacity-70"
                      : "bg-opacity-20"
                  } p-1 w-1/3 rounded-full`}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
