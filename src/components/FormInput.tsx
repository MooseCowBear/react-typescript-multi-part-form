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
  const { personalInfo, setPersonalInfo, valid, setValid } = useFormContext();

  const validator = getValidator(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((val) => {
      const data = { ...val };
      data[name as keyof PersonalInfo] = e.target.value;
      return data;
    });
  };

  const handleBlur = () => {
    setValid((curr) => {
      const data = { ...curr };
      data[name as keyof InputValidity] = validator(
        personalInfo[name as keyof PersonalInfo]
      );
      return data;
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-baseline">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        <span
          className={`text-red text-xs font-bold ${
            valid[name as keyof InputValidity] ? "hidden" : "block"
          }`}
        >
          This field is required
        </span>
      </div>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border font-medium ${
          valid[name as keyof InputValidity]
            ? "border-neutral-400"
            : "border-red"
        } rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 hover:border-blue-400 cursor-pointer`}
        type={type}
        id={name}
        placeholder={placeholder}
        value={personalInfo[name as keyof PersonalInfo]}
      />
    </div>
  );
}
