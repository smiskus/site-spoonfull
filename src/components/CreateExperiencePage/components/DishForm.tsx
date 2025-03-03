import { TextFieldInput } from "./TextFieldInput";

export const DishForm = () => {
  // TODO: Upload picture feature

  return (
    <div>
      <TextFieldInput inputName="dishName" labelName="Dish name:" />
      <TextFieldInput
        inputName="dishDescription"
        labelName="Dish description:"
        placeholder="What was in the dish?"
      />
      <label>
        Rating: <input type="range"></input>
      </label>
      <TextFieldInput
        inputName="dishNotes"
        labelName="Other notes:"
        placeholder="What did you like or dislike about it?"
      />
      <div>
        <label>Upload picture</label>
        <input type="file"></input>
      </div>
    </div>
  );
};
