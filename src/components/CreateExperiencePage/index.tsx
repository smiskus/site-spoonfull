import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./create-experience.scss";
import { RestaurantForm } from "./components/RestaurantForm";
import type { Dish } from "src/queries/types";
import { DishForm } from "./components/DishForm";

export const CreateExperiencePage = () => {
  const [hasBeen, setHasBeen] = useState<boolean | undefined>(undefined);
  const [dishes, setDishes] = useState<Dish[]>([]);

  return (
    <div>
      <h2>Add an experience</h2>
      <div className="restaurant-section">
        <div>
          <label>
            When did you go? <input type="date"></input>
          </label>
        </div>
        <div>
          <label>
            Have you been to this restaurant before?
            <input type="checkbox"></input>
          </label>
        </div>
        {hasBeen !== undefined ? <RestaurantForm hasBeen={hasBeen} /> : null}
        <label>How would you rate your overall experience?</label>
        <div>
          <label>
            Any other notes? <input name="restaurantNotes"></input>
          </label>
        </div>
      </div>
      <div className="dish-section">
        <div>
          <h3>What did you eat?</h3>
        </div>
        <DishForm key={uuidv4()} />
        {dishes?.map(() => (
          <DishForm key={uuidv4()} />
        ))}
        <div>
          <button>Add a dish</button>
        </div>
      </div>
      <div>
        <button type="submit">Add experience</button>
      </div>
    </div>
  );
};
