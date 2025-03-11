import { FieldInput } from "./FieldInput";

interface RestaurantFormProps {
  hasBeen: boolean;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  restaurantName: string;
}

export const RestaurantForm = ({
  hasBeen,
  restaurantName,
  handleName,
}: RestaurantFormProps) => {
  // Need to make an API call to get all restaurants to choose from

  return (
    <div>
      {hasBeen ? (
        <>Search for the restaurant:</>
      ) : (
        <div>
          <FieldInput
            inputName="restaurantName"
            labelName="Restaurant"
            placeholder="Enter restaurant name"
            value={restaurantName}
            onChange={handleName}
          />
        </div>
      )}
    </div>
  );
};
