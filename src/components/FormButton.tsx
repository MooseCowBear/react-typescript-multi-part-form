import { useFormContext } from "../contexts/FormContext";
import { useStepContext } from "../contexts/StepContext";
import { plans } from "../data/data";
import {
  validateEmail,
  validateName,
  validatePhone,
  validated,
} from "../utils/validations";

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
  const {
    personalInfo,
    setPersonalInfo,
    setSelectedPlan,
    setAddOns,
    setValid,
  } = useFormContext();

  const updateStep = (offset: number) => {
    setStep((s) => s + offset);
  };

  const advanceStep = () => {
    if (validated(personalInfo.name, personalInfo.email, personalInfo.phone)) {
      updateStep(1);
    } else {
      setValid((curr) => {
        const data = { ...curr };
        data.name = validateName(personalInfo.name);
        data.email = validateEmail(personalInfo.email);
        data.phone = validatePhone(personalInfo.phone);
        return data;
      });
    }
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
        advanceStep();
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
