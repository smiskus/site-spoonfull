import axios from "axios";
import type { Experience } from "./../types";

export const createExperience = async (postObject: Experience) => {
  const response = await axios.post(
    ` https://spoonfull.joshua-m-baker.com/experiences`,
    {
      ...postObject,
    },
    {
      withCredentials: false,
    }
  );
  return response.data as Experience[];
};
