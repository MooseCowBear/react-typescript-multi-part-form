import { useStepContext } from "../contexts/StepContext";
import { FormFieldsFour } from "./FormFieldsFour";
import { FormFieldsOne } from "./FormFieldsOne";
import { FormFieldsThree } from "./FormFieldsThree";
import { FormFieldsTwo } from "./FormFieldsTwo";
import { ThankYou } from "./ThankYou";

export function FormContent() {
  const { step } = useStepContext();

  const content = () => {
    switch (step) {
      case 1:
        return <FormFieldsOne />;
      case 2:
        return <FormFieldsTwo />;
      case 3:
        return <FormFieldsThree />;
      case 4:
        return <FormFieldsFour />;
      default:
        return <ThankYou />;
    }
  };
  return content();
}
