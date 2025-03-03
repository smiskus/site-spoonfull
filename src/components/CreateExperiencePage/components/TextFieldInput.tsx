interface TextFieldInputProps {
  inputName: string;
  labelName: string;
  isRequired?: boolean;
  onChange?: () => void;
  placeholder?: string;
}

export const TextFieldInput = ({
  placeholder,
  inputName,
  labelName,
  isRequired,
  onChange,
}: TextFieldInputProps) => {
  return (
    <div>
      <label>
        {labelName}{" "}
        <input
          name={inputName}
          required={isRequired}
          onChange={onChange}
          placeholder={placeholder}
        ></input>
      </label>
    </div>
  );
};
