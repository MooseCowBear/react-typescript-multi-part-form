// will use enum to return correct form for screen
import { FormFieldsOne } from "./FormFieldsOne";
import { FormFieldsTwo } from "./FormFieldsTwo";

type FormContentProps = {
  step: number;
};

export function FormContent({ step }: FormContentProps) {
  const content = () => {
    switch(step) {
      case 1:
        return <FormFieldsOne />
      default:
        return <FormFieldsTwo />
    }
  }
  return content();
}
