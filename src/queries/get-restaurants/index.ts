import axios from "axios";
import { useQuery } from "react-query";
import type { RestaurantResponse } from "./../types";

export const getRestaurants = () => {
  const retrieveRestaurants = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/restaurants`,
      {
        withCredentials: false,
      }
    );
    return response.data as RestaurantResponse[];
  };

  const { data, isSuccess, isError } = useQuery(
    "getRestaurants",
    retrieveRestaurants,
    { retry: 2 }
  );

  return { data, isSuccess, isError };
};
