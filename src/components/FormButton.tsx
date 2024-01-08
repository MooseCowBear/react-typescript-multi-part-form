type FormButtonProps = {
  name: string;
};

const BUTTON_STYLES = (name: string) => {
  switch(name) {
    case "Go Back":
      return "bg-transparent text-neutral-500";
    case "Next Step":
      return "bg-blue-400 text-neutral-100 px-6";
    default:
      return "bg-blue-300 text-neutral-100 px-6";
  }
}

export function FormButton({ name }: FormButtonProps) {
  return <button className={`text-md py-3 rounded-lg ${BUTTON_STYLES(name)}`}>{name}</button>;
}
