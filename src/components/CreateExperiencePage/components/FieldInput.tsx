interface FieldInputProps {
  value?: string | number;
  inputType?: string;
  inputName: string;
  labelName: string;
  isRequired?: boolean;
  list?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const FieldInput = ({
  inputType = "text",
  placeholder,
  inputName,
  labelName,
  isRequired,
  value,
  list,
  onChange,
}: FieldInputProps) => {
  return (
    <div>
      <div>
        <label>{labelName}</label>
      </div>
      <input
        type={inputType}
        name={inputName}
        required={isRequired}
        onChange={onChange}
        onBlur={onChange}
        placeholder={placeholder}
        value={value}
        list={list}
      />
    </div>
  );
};
