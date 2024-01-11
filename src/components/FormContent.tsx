import { useStepContext } from "../contexts/StepContext";
import { FormFieldsFour } from "./FormFieldsFour";
import { FormFieldsOne } from "./FormFieldsOne";
import { FormFieldsThree } from "./FormFieldsThree";
import { FormFieldsTwo } from "./FormFieldsTwo";

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
      default:
        return <FormFieldsFour />;
    }
  };
  return content();
}
