import { useCallback, useState } from "react";
import "./create-experience.scss";
import { RestaurantForm } from "./components/RestaurantForm";
import { DishForm } from "./components/DishForm";
import type { NewDish, NewExperience } from "./types";
import { TextFieldInput } from "./components/TextFieldInput";

const defaultExperience: NewExperience = {
  date: new Date().toString(),
  notes: "",
  rating: 0,
  restaurantId: "",
  newRestaurant: {},
  dishes: [
    {
      name: "",
      description: "",
      rating: 0,
      notes: "",
    },
  ],
};

export const CreateExperiencePage = () => {
  const [hasBeen, setHasBeen] = useState<boolean | undefined>(undefined);
  const [newExperience, setNewExperience] = useState(defaultExperience);

  const handleSubmit = useCallback(() => {
    console.log(newExperience);
  }, [newExperience]);

  const handleAddDish = useCallback(() => {
    const updatedExperience = {
      ...newExperience,
      dishes: [
        ...newExperience.dishes,
        {
          name: "",
          description: "",
          rating: 0,
          notes: "",
        },
      ],
    } as NewExperience;

    setNewExperience(updatedExperience);
  }, [newExperience]);

  const handleTextFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const textType = e.target.name;
      const newValue = e.target.value;
      const updatedExperience = {
        ...newExperience,
        [textType]: newValue,
      };
      setNewExperience(updatedExperience);
    },
    [newExperience]
  );

  const handleDishChange = useCallback(
    (index: number, value: string | number, type: string) => {
      const currentDish = newExperience.dishes[index];
      const newValue = type === "rating" ? Number(value) : value;
      const newDish = {
        ...currentDish,
        [type]: newValue,
      };

      const updatedExperienceDishes = [...newExperience.dishes];
      updatedExperienceDishes.splice(index, 1, newDish);
      const updatedExperience = {
        ...newExperience,
        dishes: updatedExperienceDishes,
      };
      setNewExperience(updatedExperience);
    },
    [newExperience]
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
            When did you go? <input type="date" />
          </label>
        </div>
        <div>
          <label>
            Have you been to this restaurant before?
            <input type="checkbox" onChange={handleVisitedChange} />
          </label>
        </div>
        {hasBeen !== undefined ? <RestaurantForm hasBeen={hasBeen} /> : null}
        <div>
          <label>
            What is your overall rating?
            <input type="number" />
          </label>
        </div>
        <TextFieldInput
          inputName="notes"
          value={newExperience.notes}
          labelName="Any other notes?"
          onChange={handleTextFieldChange}
        />
      </div>
      <div className="dish-section">
        <div>
          <h3>What did you eat?</h3>
        </div>
        {newExperience?.dishes?.map((dish, index) => (
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
