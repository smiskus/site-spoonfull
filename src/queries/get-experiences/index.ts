import axios from "axios";
import { useQuery } from "react-query";
import type { ExperienceResponse } from "./../types";

export const getExperiences = () => {
  const retrieveExperiences = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/experiences`,
      {
        withCredentials: false,
      }
    );
    return response.data as ExperienceResponse[];
  };

  const { data, isSuccess, isError } = useQuery(
    "getExperiences",
    retrieveExperiences,
    { retry: 2 }
  );

  return { data, isSuccess, isError };
};
