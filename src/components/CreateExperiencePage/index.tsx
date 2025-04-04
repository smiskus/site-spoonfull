import { useCallback, useState } from "react";
import "./create-experience.scss";
import {
  RestaurantForm,
  type RestaurantOption,
} from "./components/RestaurantForm";
import { DishForm } from "./components/DishForm";
import { FieldInput } from "./components/FieldInput";
import type {
  Dish,
  CreateExperience,
  Review,
  ExperienceResponse,
} from "src/queries/types";
import { createExperience } from "src/queries/create-experience";
import { useMutation } from "react-query";
import type { SingleValue } from "react-select";

const defaultDish: Dish = {
  name: "",
  description: "",
  rating: 0,
  notes: "",
};

const defaultReview: Review = {
  personName: "Sara",
  personId: "1",
  rating: 0,
  dishes: [],
};

export const CreateExperiencePage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [date, setDate] = useState("");
  const [restaurant, setRestaurant] = useState<RestaurantOption | undefined>(
    undefined
  );

  // TODO: We'll need to pull personName and personId from profile once auth is setup

  const [review, setReview] = useState<Review>(defaultReview);
  const [dishes, setDishes] = useState([defaultDish]);
  const { mutate } = useMutation(createExperience);

  const handleSuccess = useCallback((data: ExperienceResponse) => {
    // Reset all fields
    setDate("");
    setRestaurant(undefined);
    setReview(defaultReview);
    setDishes([defaultDish]);
    setErrorMessage("");

    setShowConfirmation(true);
    setSuccessMessage(
      `Your experience at ${data.restaurantName} has been added!`
    );
  }, []);

  const handleError = useCallback(() => {
    setErrorMessage("Sorry something went wrong, please try again!");
  }, []);

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
    mutate(newExperience, { onSuccess: handleSuccess, onError: handleError });
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

  const handleAddAnotherExperience = useCallback(
    () => setShowConfirmation(false),
    []
  );

  return (
    <div className="add-experience-container">
      {showConfirmation ? (
        <div style={{ textAlign: "center" }}>
          <h2>{successMessage}</h2>
          <a href="/" style={{ fontSize: "larger" }}>
            Return to home
          </a>
          <div>or</div>
          <div>
            <button
              className="green-button"
              style={{ width: "250px" }}
              onClick={handleAddAnotherExperience}
            >
              Add another experience
            </button>
          </div>
        </div>
      ) : (
        <div>
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
                <button className="green-button" onClick={handleAddDish}>
                  Add a dish
                </button>
              </div>
            </div>
            <div>
              <hr />
              {errorMessage ? <div color="red">{errorMessage}</div> : null}
              <button
                type="submit"
                className="green-button"
                onClick={handleSubmit}
              >
                Add experience
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
