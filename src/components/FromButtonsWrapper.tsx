import { useStepContext } from "../contexts/StepContext";
import { buttons } from "../helpers/buttons";
import { FormButton } from "./FormButton";

type FormButtonsWrapperProps = {
  classes: string;
};

export function FormButtonsWrapper({ classes }: FormButtonsWrapperProps) {
  const { step } = useStepContext();

  return (
    <>
      <div className={classes}>
        {buttons(step).map((button) => (
          <FormButton key={button} name={button} />
        ))}
      </div>
    </>
  );
}
