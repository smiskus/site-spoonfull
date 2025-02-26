import axios from "axios";
import { useQuery } from "react-query";
import type { Experience } from "./types";

export const getExperiences = () => {
  const retrieveExperiences = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/experiences`,
      {
        withCredentials: false,
      }
    );
    return response.data as Experience[];
  };

  return useQuery("getExperiences", retrieveExperiences, { retry: 2 });
};
