import { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import { getValidator } from "../utils/validations";

type FormInputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

export function FormInput({
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) {
  const { personalInfo, setPersonalInfo } = useFormContext();
  const [valid, setValid] = useState(true);

  const validator = getValidator(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((val) => {
      const data = { ...val };
      data[name] = e.target.value;
      return data;
    });
  };

  const handleBlur = () => {
    setValid(validator(personalInfo[name]));
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-baseline">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        <span className={`text-red text-xs font-bold ${valid ? "hidden" : "block"}`}>
          This field is required
        </span>
      </div>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border font-medium ${valid ? "border-neutral-400" : "border-red"} rounded-md py-2 px-3 focus:outline-none focus:border-blue-400`}
        type={type}
        id={name}
        placeholder={placeholder}
        value={personalInfo[name]}
      />
    </div>
  );
}
