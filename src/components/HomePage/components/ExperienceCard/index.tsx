import { format } from "date-fns";
import type { Experience } from "src/types";
import "./experienceCard.scss";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { restaurantName, date, rating, reviews } = experience;
  const formattedDate = format(new Date(date), "MMM i, yyyy");

  return (
    <div className="container">
      <div className="card">
        <div>
          <h2>{restaurantName}</h2>
          <div>{formattedDate}</div>
        </div>
        <hr />
        <div>
          {reviews.map((review) => {
            const allDishes = review.dishes.reduce<string[]>(
              (acc, currentDish) => [...acc, currentDish.dishName],
              []
            );
            return (
              <>
                <h3>{review.personName}</h3>
                <div>
                  <b>Dishes eaten: </b>
                  {allDishes.join()}
                </div>
                <div>
                  <b>Rating: </b>
                  {rating} spoons
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
