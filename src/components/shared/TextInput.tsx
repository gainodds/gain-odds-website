import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";

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
    <label htmlFor={name} className={`relative block ${extraClass}`}>
      <span className="capitalize font-medium  text-sm  ">{label}</span>
      {attr.type === "search" && (
        <MdSearch className="absolute top-2 left-2 size-6 text-[#A8B3BD]" />
      )}
      <input
        name={name}
        required
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...attr}
        className={`outline-none p-2.5 text-sm w-full rounded-lg disabled:bg-gray-200 bg-[#182A38]  dark:placeholder-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClass} ${
          attr.type === "search" && "pl-10"
        }`}
      />
    </label>
  );
};

export default TextInput;
