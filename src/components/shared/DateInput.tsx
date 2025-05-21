interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const DateInput = ({ label, ...attr }: Props) => {
  return (
    <label htmlFor="date" className="block text-sm xl:text-base  font-medium">
      <span>{label}</span>
      <input
        type="date"
        id="date"
        className="shrink-0 rounded-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...attr}
      />
    </label>
  );
};

export default DateInput;
