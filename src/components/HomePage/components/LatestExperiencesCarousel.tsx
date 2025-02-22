import type { Experience } from "src/types";
import { ExperienceCard } from "./ExperienceCard";
import axios from "axios";
import { useQuery } from "react-query";
import { useCallback, useState } from "react";

export const LatestExperiencesCarousel = () => {
  const [pageNum, setPageNum] = useState(0);
  const retrieveExperiences = async () => {
    const response = await axios.get(
      "https://spoonfull.joshua-m-baker.com/experiences",
      {
        withCredentials: false,
      }
    );
    return response.data as Experience[];
  };

  const {
    data: latestExperiences,
    isSuccess,
    isError,
  } = useQuery("getExperiences", retrieveExperiences, { retry: 2 });

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
