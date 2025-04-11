import "./homepage.scss";
import { LatestExperiencesCarousel } from "./components/LatestExperiencesCarousel";
import { BannerSummary } from "./components/BannerSummary";

export const HomePage = () => {
  // Make profile call
  // Make latest restaurant call
  // Make saved restaurants call

  return (
    <div className="home-container">
      <BannerSummary />
      <LatestExperiencesCarousel />
    </div>
  );
};
