import { useCallback, useState } from "react";
import "./create-experience.scss";
import { RestaurantForm } from "./components/RestaurantForm";
import { DishForm } from "./components/DishForm";
import { TextFieldInput } from "./components/TextFieldInput";
import type { Dish, Experience, Review } from "src/queries/types";
import { createExperience } from "src/queries/create-experience";
import { useMutation } from "react-query";

const defaultDish: Dish = {
  dishName: "",
  dishDescription: "",
  rating: 0,
  notes: "",
};

export const CreateExperiencePage = () => {
  const [hasBeen, setHasBeen] = useState<boolean | undefined>(undefined);
  const [date, setDate] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
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
      // Temporary this field will be unrequired
      rating: 5,
      // Temporary this field will be unrequired
      restaurantId: "b01cddf3-728f-4623-9ca2-e1b9faed0191",
      restaurantName,
      reviews: [
        {
          ...review,
          dishes,
        },
      ],
    } as Experience;
    mutate(newExperience);
  }, [date, restaurantName, review, dishes]);

  const handleAddDish = useCallback(() => {
    const updatedDishes = [...dishes, defaultDish] as Dish[];
    setDishes(updatedDishes);
  }, [dishes]);

  const handleRestaurantNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const newValue = e.target.value;
      setRestaurantName(newValue);
    },
    [setRestaurantName]
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

  const handleVisitedChange = useCallback(() => {
    setHasBeen(!hasBeen);
  }, [hasBeen]);

  return (
    <div>
      <h2>Add an experience</h2>
      <div className="restaurant-section">
        <div>
          <label>
            When did you go?{" "}
            <input type="date" value={date} onChange={handleDateChange} />
          </label>
        </div>
        <div>
          <label>
            Have you been to this restaurant before?
            <input type="checkbox" onChange={handleVisitedChange} />
          </label>
        </div>
        {hasBeen !== undefined ? (
          <RestaurantForm
            hasBeen={hasBeen}
            restaurantName={restaurantName}
            handleName={handleRestaurantNameChange}
          />
        ) : null}
        <div>
          <label>
            What is your overall rating?
            <input type="number" />
          </label>
        </div>
        <TextFieldInput
          inputName="notes"
          value={review.notes ?? ""}
          labelName="Any other notes?"
          onChange={handleReviewFieldChange}
        />
      </div>
      <div className="dish-section">
        <div>
          <h3>What did you eat?</h3>
        </div>
        {dishes?.map((dish, index) => (
          <DishForm
            key={index}
            dish={dish}
            index={index}
            updateDish={handleDishChange}
          />
        ))}
        <div>
          <button onClick={handleAddDish}>Add a dish</button>
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add experience
        </button>
      </div>
    </div>
  );
};
