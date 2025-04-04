import axios from "axios";
import type { CreateExperience, ExperienceResponse } from "./../types";

export const createExperience = async (postObject: CreateExperience) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/experiences`,
    {
      ...postObject,
    },
    {
      withCredentials: false,
    }
  );
  return response.data as ExperienceResponse;
};
