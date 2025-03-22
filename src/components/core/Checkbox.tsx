import { CheckboxProps } from "../../types";

export default function Checkbox({
  options,
  selectedValues,
  onChange,
  disabled,
  singleSelect=false
}: CheckboxProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type={singleSelect ? "radio" : "checkbox"}
            checked={selectedValues.includes(option.id)}
            onChange={() => onChange(option.id)}
            disabled={disabled}
            className="rounded text-primary-600 focus:ring-primary-500 disabled:cursor-not-allowed"
          />
          <span className="capitalize">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
