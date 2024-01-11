import { useFormContext } from "../contexts/FormContext";

interface AddOn {
  // TODO: move all the shared interfaces to file?
  title: string;
  subtitle: string;
  monthly: number;
  yearly: number;
}

type AddOnSummaryProps = {
  addOn: AddOn;
};

export function AddOnSummary({ addOn }: AddOnSummaryProps) {
  const {monthly} = useFormContext();

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-neutral-500 text-sm">{addOn.title}</h2>
      <span className="text-sm">{`+$${monthly ? addOn.monthly : addOn.yearly}/${
        monthly ? "mo" : "yr"
      }`}</span>
    </div>
  );
}
