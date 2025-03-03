interface RestaurantFormProps {
  hasBeen: boolean;
}

export const RestaurantForm = ({ hasBeen }: RestaurantFormProps) => {

    // Need to make an API call to get all restaurants to choose from

  return (
    <div>
      {hasBeen ? (
        <>
          <label>
            <input></input>
          </label>
        </>
      ) : (
        <div>
          <input></input>
        </div>
      )}
    </div>
  );
};
