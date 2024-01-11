// will use enum to return correct form for screen
import { FormFieldsFour } from "./FormFieldsFour";
import { FormFieldsOne } from "./FormFieldsOne";
import { FormFieldsThree } from "./FormFieldsThree";
import { FormFieldsTwo } from "./FormFieldsTwo";

type FormContentProps = {
  step: number;
};

export function FormContent({ step }: FormContentProps) {
  const content = () => {
    switch(step) {
      case 1:
        return <FormFieldsOne />
      case 2:
        return <FormFieldsTwo />
      case 3:
        return <FormFieldsThree />
      default: 
        return <FormFieldsFour />
    }
  }
  return content();
}
