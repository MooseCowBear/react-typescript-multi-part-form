import { useFormContext } from "../contexts/FormContext";
import { useStepContext } from "../contexts/StepContext";
import { plans } from "../data/data";

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
  const { setPersonalInfo, setSelectedPlan, setAddOns } = useFormContext();

  const updateStep = (offset: number) => {
    setStep((s) => s + offset);
  };

  const handleSubmission = () => {
    console.log("form submitted!");

    setPersonalInfo({ name: "", email: "", phone: "" });
    setSelectedPlan(plans[0]);
    setAddOns([]);
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
        updateStep(1); 
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
