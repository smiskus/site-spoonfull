import { FieldInput } from "src/components/CreateExperiencePage/components/FieldInput";
import { ExperienceCard } from "./ExperienceCard";
import { getExperiences } from "src/queries/get-experiences";
import { SearchIcon } from "src/svg/SearchIcon";

export const LatestExperiencesCarousel = () => {
  const { data: latestExperiences } = getExperiences();

  return (
    <div>
      <div className="recent-experiences">
        <h2>Recent experiences</h2>{" "}
      </div>
      <div className="carousel">
        {latestExperiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
