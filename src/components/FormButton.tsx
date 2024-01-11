import { useStepContext } from "../contexts/StepContext";

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

export function FormButton({ name }: FormButtonProps) {
  const { setStep } = useStepContext();

  const updateStep = (offset: number) => {
    setStep((s) => s + offset);
  };

  const handleSubmission = () => {
    console.log("form submitted!");

    // add resetting of context state after updating form component so all buttons will have access to form context
  };

  const clickHandler = () => {
    switch (name) {
      case "Go Back":
        updateStep(-1);
        break;
      case "Next Step":
        updateStep(1);
        break;
      default:
        handleSubmission();
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={`text-md py-3 rounded-lg ${BUTTON_STYLES(name)}`}
    >
      {name}
    </button>
  );
}
