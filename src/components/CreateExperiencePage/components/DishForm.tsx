import { useCallback } from "react";
import type { NewDish } from "../types";
import { TextFieldInput } from "./TextFieldInput";

interface DishFormProps {
  dish: NewDish;
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
        inputName="name"
        labelName="Dish name:"
        value={dish.name}
        onChange={handleChange}
      />
      <TextFieldInput
        inputName="description"
        labelName="Dish description:"
        placeholder="What was in the dish?"
        value={dish.description}
        onChange={handleChange}
      />
      <label>
        Rating: <input type="number"></input>
      </label>
      <TextFieldInput
        inputName="notes"
        labelName="Other notes:"
        placeholder="What did you like or dislike about it?"
        value={dish.notes}
        onChange={handleChange}
      />
      <div>
        <label>Upload picture</label>
        <input type="file"></input>
      </div>
    </div>
  );
};
