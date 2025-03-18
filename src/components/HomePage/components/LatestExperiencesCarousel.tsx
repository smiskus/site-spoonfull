import { ExperienceCard } from "./ExperienceCard";
import { getExperiences } from "src/queries/get-experiences";

export const LatestExperiencesCarousel = () => {
  const { data: latestExperiences } = getExperiences();

  return (
    <div>
      <div className="recent-experiences">
        <h1>Recent experiences</h1>{" "}
        <form>
          <label>Find an experience: </label>
          <input type="text" className="search" />
        </form>
        <div>
          <a href="/experience/create">Add a new experience</a>
        </div>
      </div>
      <div className="carousel">
        {latestExperiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
