import { addOns } from "../data/data";
import { AddOnChoice } from "./AddOnChoice";

export function FormFieldsThree() {
  return (
    <div className="flex flex-col gap-4">
      {addOns.map((addOn) => (
        <AddOnChoice key={addOn.title} addOn={addOn} />
      ))}
    </div>
  );
}
