import { ChangeEvent, InputHTMLAttributes } from "react";

interface CheckboxWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput: React.FC<CheckboxWithLabelProps> = ({
  id,
  label,
  checked,
  onChange,
  ...attr
}) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center space-x-1 cursor-pointer"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...attr}
        className="checkInput"
      />
      <span className="text-gray-800 dark:text-gray-300 text-sm xl:text-base ">
        {label}
      </span>
    </label>
  );
};

export default CheckboxInput;
