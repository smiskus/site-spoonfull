import { getExperiences } from "src/queries/get-experiences";
import { SearchIcon } from "src/svg/SearchIcon";
import { ExperienceCard } from "../HomePage/components/ExperienceCard";

export const ExperiencesPage = () => {
  const { data: latestExperiences } = getExperiences();

  return (
    <div>
      <form>
        <input className="search" placeholder="Find an experience" />
        <button
          type="submit"
          className="search-button"
          aria-label="Search for experience"
        >
          <SearchIcon />
        </button>
      </form>
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
