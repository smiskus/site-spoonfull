import { format } from "date-fns";
import type { Experience } from "../../../../queries/get-experiences/types";
import "./experienceCard.scss";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { restaurantName, date, reviews, experienceId } = experience;
  const formattedDate = format(new Date(date), "MMM i, yyyy");

  // TODO: Pull from profile name
  const userReview = reviews.find((review) => review.personName === "Josh");

  if (!userReview) {
    return null;
  }

  const allDishes = userReview?.dishes?.reduce<string[]>(
    (acc, currentDish) => [...acc, currentDish.dishName],
    []
  );

  const experienceLink = `/experience/${experienceId}`;

  return (
    <div className="card">
      <div>
        <h2>{restaurantName}</h2>
        <div>{formattedDate}</div>
      </div>
      <hr />
      <div>
        <div>
          <b>Dishes eaten: </b>
          {allDishes?.join()}
        </div>
        {userReview.notes ? (
          <div>
            <b>Notes: </b>
            {userReview.notes}
          </div>
        ) : null}
        <div>
          <b>Rating: </b>
          {userReview.rating} spoons
        </div>
        <div className="details-link">
          <a href={experienceLink}>See full details</a>
        </div>
      </div>
    </div>
  );
};
