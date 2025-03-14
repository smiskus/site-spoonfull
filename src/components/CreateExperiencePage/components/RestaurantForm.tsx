import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import type { SingleValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import { createRestaurant } from "src/queries/create-restaurant";
import { getRestaurants } from "src/queries/get-restaurants";
import type { RestaurantResponse } from "src/queries/types";

export interface RestaurantOption {
  value: string;
  label: string;
}

interface RestaurantFormProps {
  restaurant?: RestaurantOption;
  setRestaurant: (newRestaurant: SingleValue<RestaurantOption>) => void;
}

export const RestaurantForm = ({
  restaurant,
  setRestaurant,
}: RestaurantFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: restaurants } = getRestaurants();
  const restaurantOptions =
    restaurants?.map((restaurant) => ({
      value: restaurant.id,
      label: restaurant.name,
    })) ?? [];

  const { mutate } = useMutation(createRestaurant);

  const handleSuccess = useCallback((data: RestaurantResponse) => {
    setRestaurant({ value: data.id, label: data.name });
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleAddNewRestaurant = useCallback(
    async (newRestaurant: string) => {
      setIsLoading(true);
      mutate(
        { name: newRestaurant },
        {
          onSuccess: handleSuccess,
          onError: handleError,
        }
      );
    },
    [mutate, setIsLoading]
  );

  return (
    <div>
      <div>What restaurant did you dine at?</div>
      <CreatableSelect
        className="restaurant-select"
        isClearable
        options={restaurantOptions}
        isDisabled={isLoading}
        isLoading={isLoading}
        onCreateOption={handleAddNewRestaurant}
        value={restaurant}
        onChange={setRestaurant}
      />
    </div>
  );
};
