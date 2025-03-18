import { useCallback } from "react";
import { FieldInput } from "./FieldInput";
import type { Dish } from "src/queries/types";
import { TrashIcon } from "../../../svg/TrashIcon";

interface DishFormProps {
  dish: Dish;
  index: number;
  updateDish: (index: number, value: string | number, type: string) => void;
  removeDish: (index: number) => void;
}

export const DishForm = ({
  dish,
  index,
  removeDish,
  updateDish,
}: DishFormProps) => {
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

  const handleDeleteDish = useCallback(() => {
    removeDish(index);
  }, [removeDish, index]);

  const heading = `Dish #${index + 1}`;

  return (
    <div>
      {index > 0 ? <hr /> : null}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{heading}</h4>
        <button
          className="delete-button"
          onClick={handleDeleteDish}
          aria-label={`Delete ${heading}`}
        >
          <TrashIcon />
        </button>
      </div>
      <FieldInput
        inputName="name"
        labelName="Dish name:"
        placeholder="As written on the menu"
        value={dish.name}
        onChange={handleChange}
      />
      <FieldInput
        inputName="description"
        labelName="Dish description:"
        placeholder="What was in the dish?"
        value={dish.description ?? ""}
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
      <FieldInput
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
