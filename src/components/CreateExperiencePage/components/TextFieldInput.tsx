interface TextFieldInputProps {
  value?: string;
  inputName: string;
  labelName: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextFieldInput = ({
  placeholder,
  inputName,
  labelName,
  isRequired,
  value,
  onChange,
}: TextFieldInputProps) => {
  return (
    <div>
      <div>
        <label>{labelName}</label>
      </div>
      <input
        name={inputName}
        required={isRequired}
        onChange={onChange}
        onBlur={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
