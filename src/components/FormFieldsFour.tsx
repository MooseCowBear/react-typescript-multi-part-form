import { useFormContext } from "../contexts/FormContext";
import { total } from "../helpers/calculations";
import { AddOnSummary } from "./AddOnSummary";

export function FormFieldsFour() {
  const { selectedPlan, addOns, monthly } = useFormContext();

  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-blue-300/5 p-5 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="font-medium">{`${selectedPlan.title} (${
              monthly ? "Monthly" : "Yearly"
            })`}</h2>
            <button className="text-sm underline text-neutral-500">
              Change
            </button>
          </div>
          <div className="font-medium">{`$${
            monthly ? selectedPlan.monthly : selectedPlan.yearly
          }/${monthly ? "mo" : "yr"}`}</div>
        </div>
        {addOns.length > 0 && (
          <hr className="bg-neutral-400 border-none h-[2px]" />
        )}
        {addOns.map((addOn) => (
          <AddOnSummary key={addOn.title} addOn={addOn} />
        ))}
        <hr className="bg-neutral-400 border-none h-[2px]" />
        {addOns.map((addOn) => (
          <AddOnSummary key={addOn.title} addOn={addOn} />
        ))}
      </div>
      <div className="flex justify-between items-center p-5">
        <span className="text-neutral-500 text-sm">{`Total ${
          monthly ? "(per month)" : "(per year)"
        }`}</span>
        <span className="text-blue-300 font-bold">{`$${total(
          selectedPlan,
          addOns,
          monthly
        )}/${monthly ? "mo" : "yr"}`}</span>
      </div>
    </div>
  );
}
