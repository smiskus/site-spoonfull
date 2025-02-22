import { format } from "date-fns";
import { useParams } from "react-router";
import './experiencePage.scss'
import type { Experience } from "src/types";

export const ExperiencePage = () => {
  const { experienceId } = useParams();

  const experience = {
    date: "2025-02-15",
    restaurantName: "Element Pizza",
    restaurantId: "12345",
    rating: 3.5,
    dishes: [
      {
        dishName: "Earth",
      },
    ],
    notes: "It was okay.",
  } as Experience;

  const {date, restaurantName, rating, dishes, notes} = experience;
    const formattedDate = format(new Date(date), "MMM i, yyyy");

  return (
    <div className='experience-container'>
      <h1>{restaurantName}</h1>
      <div>Visited 6 times</div>
      <div>{formattedDate}</div>
      <div>{rating} Spoons</div>
      <hr />
    </div>
  );
};
