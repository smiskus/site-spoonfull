import { ExperienceCard } from "./ExperienceCard";
import { useCallback, useState } from "react";
import { getExperiences } from "src/queries/get-experiences";

export const LatestExperiencesCarousel = () => {
  const [pageNum, setPageNum] = useState(0);
  const { data: latestExperiences } = getExperiences();

  const handleClick = useCallback(() => {
    // open drawer
  }, []);

  return (
    <div>
      <div className="recent-experiences">
        <h1>Recent experiences</h1>{" "}
        <a href="/experiences">See all experiences</a> |{" "}
        <a onClick={handleClick}>Add a new experience</a>
      </div>
      <div className="carousel">
        {latestExperiences
          ?.slice(pageNum * 3, pageNum * 3 + 3)
          .map((experience) => (
            <ExperienceCard experience={experience} />
          ))}
      </div>
    </div>
  );
};
