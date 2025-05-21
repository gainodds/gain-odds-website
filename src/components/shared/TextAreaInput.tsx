interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  subLabel?: string;
  disabled?: boolean;
}
const TextAreaInput = ({ label, subLabel, name, ...attr }: Props) => {
  return (
    <label htmlFor={name} className="block space-y-1">
      <div className="leading-none">
        <span className="text-sm xl:text-base font-medium">{label}</span>
        {subLabel && <span className="text-xs xl:text-sm"> - {subLabel}</span>}
      </div>
      <textarea className="input" name={name} id={name} {...attr} rows={5} />
    </label>
  );
};

export default TextAreaInput;
