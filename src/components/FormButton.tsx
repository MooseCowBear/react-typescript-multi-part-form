type FormButtonProps = {
  name: string;
};

const BUTTON_STYLES = (name: string) => {
  switch (name) {
    case "Go Back":
      return "bg-transparent text-neutral-500 float-left";
    case "Next Step":
      return "bg-blue-400 text-neutral-100 px-6 float-right";
    default:
      return "bg-blue-300 text-neutral-100 px-6 float-right";
  }
};

// TODO: click handlers
/* if step 1 & "Next Step", need validation of name, email, phone! else won't 
if confirm, then 1. console.log submitted or something as a placeholder for actual submission
also reset the context to the initial values
*/

export function FormButton({ name }: FormButtonProps) {
  return (
    <button className={`text-md py-3 rounded-lg ${BUTTON_STYLES(name)}`}>
      {name}
    </button>
  );
}
