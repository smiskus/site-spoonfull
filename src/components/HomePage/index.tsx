import "./homepage.scss";
import { LatestExperiencesCarousel } from "./components/LatestExperiencesCarousel";

export const HomePage = () => {
  // Make profile call
  // Make latest restaurant call
  // Make saved restaurants call

  return (
    <div className="home-container">
      <LatestExperiencesCarousel />
    </div>
  );
};
