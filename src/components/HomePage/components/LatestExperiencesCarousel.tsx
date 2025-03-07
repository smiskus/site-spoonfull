import { ExperienceCard } from "./ExperienceCard";
import { useCallback, useState } from "react";
import { getExperiences } from "src/queries/get-experiences";

export const LatestExperiencesCarousel = () => {
  const { data: latestExperiences } = getExperiences();

  const handleClick = useCallback(() => {
    // open drawer
  }, []);

  return (
    <div>
      <div className="recent-experiences">
        <h1>Recent experiences</h1>{" "}
        <div>
          <a onClick={handleClick}>Add a new experience</a>
        </div>
        <form>
          <label>Search for an experience: </label>
          <input type="text" />
        </form>
      </div>
      <div className="carousel">
        {latestExperiences?.map((experience) => (
          <ExperienceCard
            experience={experience}
            key={experience.experienceId}
          />
        ))}
      </div>
    </div>
  );
};
