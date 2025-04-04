import { format, parseISO } from "date-fns";
import { useParams } from "react-router";
import "./experiencePage.scss";
import { getExperience } from "src/queries/get-experience";
import { ReviewCard } from "./components/ReviewCard";

export const ExperiencePage = () => {
  const { experienceId } = useParams();
  const { data: experience } = getExperience(experienceId ?? "");

  const { date, restaurantName, reviews } = experience ?? {};
  const parsedDate = parseISO(date ?? "");
  const formattedDate = date ? format(parsedDate, "MMM dd, yyyy") : "";

  return (
    <div className="experience-container">
      <h1>{restaurantName}</h1>
      <div>{formattedDate}</div>
      <hr />
      {reviews?.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};
