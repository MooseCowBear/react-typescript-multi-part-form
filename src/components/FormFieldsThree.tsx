import { addOns } from "../data/data";
import { AddOnChoice } from "./addOnChoice";

type FormFieldsThreeProps = {
  monthly: boolean;
};

export function FormFieldsThree({ monthly }: FormFieldsThreeProps) {
  return (
    <div className="flex flex-col gap-4">
      {addOns.map((addOn) => (
        <AddOnChoice key={addOn.title} addOn={addOn} monthly={monthly} />
      ))}
    </div>
  );
}
