import { ChangeEvent } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  extraClass?: string;
  inputClass?: string;
}

const TextInput = ({
  name,
  label,
  value,
  onChange,
  disabled,
  extraClass,
  inputClass,
  ...attr
}: Props) => {
  return (
    <label htmlFor={name} className={`block ${extraClass}`}>
      <span className="capitalize font-medium  text-sm xl:text-base ">
        {label}
      </span>
      <input
        name={name}
        required
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...attr}
        className={`outline-none p-2.5 text-sm w-full border border-gray-300 rounded-lg bg-gray-50 disabled:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClass}`}
      />
    </label>
  );
};

export default TextInput;
