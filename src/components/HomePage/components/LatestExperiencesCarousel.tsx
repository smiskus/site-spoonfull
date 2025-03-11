import { ExperienceCard } from "./ExperienceCard";
import { useCallback } from "react";
import { getExperiences } from "src/queries/get-experiences";

export const LatestExperiencesCarousel = () => {
  const { data: latestExperiences } = getExperiences();

  return (
    <div>
      <div className="recent-experiences">
        <h1>Recent experiences</h1>{" "}
        <div>
          <a href="/experience/create">Add a new experience</a>
        </div>
        <form>
          <label>Search for an experience: </label>
          <input type="text" />
        </form>
      </div>
      <div className="carousel">
        {latestExperiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
