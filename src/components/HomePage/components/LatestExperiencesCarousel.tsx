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
      </div>
      <div className="carousel">
        {latestExperiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <a className="add-experience" href="/experience/create">
          Add a new experience
        </a>
      </div>
    </div>
  );
};
