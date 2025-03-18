import { format } from "date-fns";
import type { ExperienceResponse } from "../../../../queries/types";
import "./experienceCard.scss";

export const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceResponse;
}) => {
  const { restaurantName, date, reviews, id } = experience;
  const formattedDate = format(new Date(date), "MMM i, yyyy");

  // TODO: Pull from profile name
  const userReview = reviews[0];

  if (!userReview) {
    return null;
  }

  const allDishes = userReview?.dishes?.reduce<string[]>(
    (acc, currentDish) => [...acc, currentDish.name],
    []
  );

  const experienceLink = `/experience/${id}`;

  return (
    <div className="card">
      <div className="heading">
        <h2>
          <a href={experienceLink}>{restaurantName}</a>
        </h2>
        <div>{formattedDate}</div>
      </div>
      <hr />
      <div className="details">
        <div>
          <b>Rating: </b>
          {userReview.rating} spoons
        </div>
        <div>
          <b>Dishes eaten: </b>
          {allDishes?.join()}
        </div>
      </div>
    </div>
  );
};
