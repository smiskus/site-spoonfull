import type { Experience } from "src/types";
import { ExperienceCard } from "./ExperienceCard";
import axios from "axios";
import { useQuery } from "react-query";

export const LatestExperiencesCarousel = () => {
  // TODO: Replace with API call
  // const latestExperiences = [
  //   {
  //     date: "2025-02-15",
  //     restaurantName: "Element Pizza",
  //     restaurantId: "12345",
  //     rating: 3.5,
  //     reviews: [
  //       {
  //         personName: "Josh",
  //         personId: "1",
  //         dishes: [
  //           {
  //             dishName: "Hot Honey",
  //           },
  //         ],
  //       },
  //     ],
  //     notes: "It was okay.",
  //   },
  // ] as Experience[];

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
    error,
    isSuccess,
    isError,
  } = useQuery("getExperiences", retrieveExperiences);

  return (
    <div className="carousel">
      <div className="recent-experiences">
        <h1>Recent experiences</h1>{" "}
        <a href="/experiences">See all experiences</a>
        <button>Add a new experience</button>
      </div>
      <div>
        {latestExperiences?.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
};
