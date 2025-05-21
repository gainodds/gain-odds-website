type Option = {
  value: string;
  label: string;
};

import { ChangeEvent, SelectHTMLAttributes } from "react";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  ...attr
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm xl:text-base  font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        {...attr}
        className="selectInput capitalize"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white dark:bg-gray-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
