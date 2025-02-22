import "./homepage.scss";
import { Header } from "../Header";
import { LatestExperiencesCarousel } from "./components/LatestExperiencesCarousel";
import { FavoritedExperiencesCarousel } from "./components/FavoritedRestaurantsCarousel";
import axios from "axios";
import { useQuery } from "react-query";



export const HomePage = () => {
  // Make profile call
  // Make latest restaurant call
  // Make saved restaurants call



  return (
    <div className="home-container">
      <LatestExperiencesCarousel />
      <FavoritedExperiencesCarousel />
    </div>
  );
};
