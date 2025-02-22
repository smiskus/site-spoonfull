import type { Experience } from "src/types";
import { ExperienceCard } from "./ExperienceCard";

export const FavoritedExperiencesCarousel = () => {
  // TODO: Replace with API call
  const favoritedExperiences = [
    {
      date: "2025-02-15",
      restaurantName: "Element Pizza",
      restaurantId: "12345",
      rating: 3.5,
      reviews: [{
        personName: 'Josh',
        personId: '1',
              dishes: [
        {
          dishName: "Hot Honey",
        },
      ],
      }],
      notes: "It was okay.",
    },
  ] as Experience[];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Golden Spoon Restaurants</h1>{" "}
      <div className="carousel">
        {favoritedExperiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </>
  );
};
