import axios from "axios";
import type { CreateRestaurant, RestaurantResponse } from "./../types";

export const createRestaurant = async (postObject: CreateRestaurant) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/restaurants`,
    {
      ...postObject,
    },
    {
      withCredentials: false,
    }
  );
  return response.data as RestaurantResponse;
};
