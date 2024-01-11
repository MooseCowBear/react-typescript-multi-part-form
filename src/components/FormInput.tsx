import { useFormContext } from "../contexts/FormContext";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((val) => {
      const data = { ...val };
      data[name] = e.target.value;
      return data;
    });
  };

  // TODO: validations on blur

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        onChange={handleChange}
        className="border border-neutral-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
        type={type}
        id={name}
        placeholder={placeholder}
        value={personalInfo[name]}
      />
    </div>
  );
}
