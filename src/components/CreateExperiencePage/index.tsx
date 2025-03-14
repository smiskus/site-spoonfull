import { useCallback, useState } from "react";
import "./create-experience.scss";
import {
  RestaurantForm,
  type RestaurantOption,
} from "./components/RestaurantForm";
import { DishForm } from "./components/DishForm";
import { FieldInput } from "./components/FieldInput";
import type { Dish, CreateExperience, Review } from "src/queries/types";
import { createExperience } from "src/queries/create-experience";
import { useMutation } from "react-query";
import type { SingleValue } from "react-select";

const defaultDish: Dish = {
  name: "",
  description: "",
  rating: 0,
  notes: "",
};

export const CreateExperiencePage = () => {
  const [date, setDate] = useState("");
  const [restaurant, setRestaurant] = useState<RestaurantOption | undefined>(
    undefined
  );
  const [review, setReview] = useState<Review>({
    personName: "Sara",
    personId: "1",
    rating: 0,
    dishes: [],
  });
  const [dishes, setDishes] = useState([defaultDish]);
  const { mutate } = useMutation(createExperience);

  const handleSubmit = useCallback(() => {
    const newExperience = {
      date,
      restaurantId: restaurant?.value,
      reviews: [
        {
          ...review,
          dishes,
        },
      ],
    } as CreateExperience;
    mutate(newExperience);
  }, [date, restaurant, review, dishes]);

  const handleAddDish = useCallback(() => {
    const updatedDishes = [...dishes, defaultDish] as Dish[];
    setDishes(updatedDishes);
  }, [dishes]);

  const handleRestaurantChange = useCallback(
    (newRestaurant: SingleValue<RestaurantOption>) => {
      if (newRestaurant) {
        setRestaurant({
          value: newRestaurant.value,
          label: newRestaurant.label,
        });
      }
    },
    [setRestaurant]
  );

  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setDate(e.target.value);
    },
    [setDate]
  );

  const handleReviewFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const textType = e.target.name;
      const newValue = e.target.value;
      const updatedReview = {
        ...review,
        [textType]: newValue,
      };
      setReview(updatedReview);
    },
    [review]
  );

  const handleDishChange = useCallback(
    (index: number, value: string | number, type: string) => {
      const currentDish = dishes[index];
      const newValue = type === "rating" ? Number(value) : value;
      const newDish = {
        ...currentDish,
        [type]: newValue,
      };

      const updatedDishes = [...dishes];
      updatedDishes.splice(index, 1, newDish);
      setDishes(updatedDishes);
    },
    [dishes]
  );

  const handleRemoveDish = useCallback(
    (index: number) => {
      const updatedDishes = [...dishes];
      updatedDishes.splice(index, 1);
      setDishes(updatedDishes);
    },
    [dishes]
  );

  return (
    <div className="add-experience-container">
      <h2>Add an experience</h2>
      <div className="form-section">
        <FieldInput
          inputName="date"
          value={date}
          labelName="When did you go?"
          inputType="date"
          onChange={handleDateChange}
        />
        <RestaurantForm
          restaurant={restaurant}
          setRestaurant={handleRestaurantChange}
        />
        <FieldInput
          inputName="rating"
          value={review.rating}
          labelName="What is your overall rating?"
          inputType="number"
          onChange={handleReviewFieldChange}
        />
        <FieldInput
          inputName="notes"
          value={review.notes ?? ""}
          labelName="Any other notes?"
          placeholder="Service? Atmosphere? Vibes?"
          onChange={handleReviewFieldChange}
        />
      </div>
      <div className="form-section">
        <div>
          <div>
            <h3>What did you eat?</h3>
          </div>
          {dishes?.map((dish, index) => (
            <DishForm
              key={index}
              dish={dish}
              index={index}
              updateDish={handleDishChange}
              removeDish={handleRemoveDish}
            />
          ))}
          <div>
            <button className="add-button" onClick={handleAddDish}>
              Add a dish
            </button>
          </div>
        </div>
        <div>
          <hr />
          <button type="submit" className="add-button" onClick={handleSubmit}>
            Add experience
          </button>
        </div>
      </div>
    </div>
  );
};
