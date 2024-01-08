type TextInputProps = {
  name: string;
  label: string;
  placeholder: string;
};

export function TextInput({ name, label, placeholder }: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">{label}</label>
      <input className="border border-neutral-400 rounded-md py-2 px-3" type="text" id={name} placeholder={placeholder}/>
    </div>
  );
}
