import { useFormContext } from "../contexts/FormContext";
import { priceFormat } from "../utils/price";

type AddOnSummaryProps = {
  addOn: AddOn;
};

export function AddOnSummary({ addOn }: AddOnSummaryProps) {
  const { monthly } = useFormContext();

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-neutral-500 text-sm">{addOn.title}</h2>
      <span className="text-sm">{`+${
        monthly
          ? priceFormat(addOn.monthly, monthly)
          : priceFormat(addOn.yearly, monthly)
      }
      `}</span>
    </div>
  );
}
