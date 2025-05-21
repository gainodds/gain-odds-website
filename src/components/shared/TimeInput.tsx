interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  range?: boolean;
  time1: string;
  time2?: string;
  timezone: string;
  onTime1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTime2Change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTimezoneChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeInput = ({
  label,
  range = false,
  time1,
  time2 = "",
  timezone,
  onTime1Change,
  onTime2Change,
  onTimezoneChange,
  ...attr
}: Props) => {
  return (
    <div className="">
      <label
        htmlFor="time"
        className="block mb-1 text-sm xl:text-base font-medium"
      >
        {label || "Select time"}:
      </label>
      <div className="flex">
        <input
          type="time"
          id="time1"
          value={time1}
          onChange={onTime1Change}
          className="shrink-0 rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...attr}
          required
        />
        {range && (
          <input
            type="time"
            id="time2"
            value={time2}
            onChange={onTime2Change}
            className="shrink-0 rounded-none bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        )}
        <select
          id="timezones"
          name="timezone"
          value={timezone}
          onChange={onTimezoneChange}
          className="bg-gray-50 border border-s-0 border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Select your timezone
          </option>
          <option value="GMT-5 New York">GMT-5 New York</option>
          <option value="GMT-8 Los Angeles">GMT-8 Los Angeles</option>
          <option value="GMT+0 London">GMT+0 London</option>
          <option value="GMT+1 Paris">GMT+1 Paris</option>
          <option value="GMT+9 Tokyo">GMT+9 Tokyo</option>
          <option value="GMT+11 Sydney">GMT+11 Sydney</option>
          <option value="GMT-7 Canada">GMT-7 Canada</option>
          <option value="GMT-6 Canada">GMT-6 Canada</option>
          <option value="GMT-5 Canada">GMT-5 Canada</option>
          <option value="GMT+1 Berlin">GMT+1 Berlin</option>
          <option value="GMT+4 Dubai">GMT+4 Dubai</option>
          <option value="GMT+8 Singapore">GMT+8 Singapore</option>
        </select>
      </div>
      {/* <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={range}
            onChange={(e) => setRange(e.target.checked)}
            className="mr-2"
          />
          Enable Range
        </label>
      </div> */}
    </div>
  );
};

export default TimeInput;
