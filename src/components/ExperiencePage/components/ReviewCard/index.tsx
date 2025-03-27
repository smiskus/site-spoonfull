import type { Review } from "src/queries/types";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { personName, rating, dishes, notes } = review;

  return (
    <div>
      <h2>{personName}'s Review</h2>
      <div style={{ fontSize: "larger" }}>Overall Rating: {rating} spoons</div>
      <div>{notes}</div>
      <h3 style={{ marginTop: "8px" }}>Dishes</h3>
      {dishes?.map((dish) => {
        const { name, description, imageUrl, rating, notes } = dish;
        return (
          <div>
            <div>
              {name} | {rating} spoons
            </div>
            <ul>
              {description ? <li>{description}</li> : null}
              {notes ? <li>{notes}</li> : null}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
