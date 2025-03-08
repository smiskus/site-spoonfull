import { useCallback } from "react";
import { TextFieldInput } from "./TextFieldInput";
import type { Dish } from "src/queries/types";

interface DishFormProps {
  dish: Dish;
  index: number;
  updateDish: (index: number, value: string | number, type: string) => void;
}

export const DishForm = ({ dish, index, updateDish }: DishFormProps) => {
  // TODO: Upload picture feature

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const type = e.target.name;
      const value = e.target.value;
      updateDish(index, value, type);
    },
    [updateDish, index]
  );

  const heading = `Dish #${index + 1}`;

  return (
    <div>
      {index > 0 ? <hr /> : null}
      <h4>{heading}</h4>
      <TextFieldInput
        inputName="dishName"
        labelName="Dish name:"
        value={dish.dishName}
        onChange={handleChange}
      />
      <TextFieldInput
        inputName="dishDescription"
        labelName="Dish description:"
        placeholder="What was in the dish?"
        value={dish.dishDescription ?? ""}
        onChange={handleChange}
      />
      <label>
        Rating:{" "}
        <input
          name="rating"
          type="number"
          value={dish.rating ?? 0}
          onChange={handleChange}
        ></input>
      </label>
      <TextFieldInput
        inputName="notes"
        labelName="Other notes:"
        placeholder="What did you like or dislike about it?"
        value={dish.notes ?? ""}
        onChange={handleChange}
      />
      <div>
        <label>Upload picture</label>
        <input type="file"></input>
      </div>
    </div>
  );
};
