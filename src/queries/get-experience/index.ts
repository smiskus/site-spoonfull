import axios from "axios";
import { useQuery } from "react-query";
import type { ExperienceResponse } from "./../types";

export const getExperience = (experienceId: string) => {
  const retrieveExperience = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/experiences/${experienceId}`,
      {
        withCredentials: false,
      }
    );
    return response.data as ExperienceResponse;
  };

  const { data, isSuccess, isError } = useQuery(
    "getExperience",
    retrieveExperience,
    { retry: 2 }
  );

  return { data, isSuccess, isError };
};
