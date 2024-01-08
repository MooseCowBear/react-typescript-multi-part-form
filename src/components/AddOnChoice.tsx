import { useState } from "react";

interface AddOn {
  title: string;
  subtitle: string;
  monthly: number;
  yearly: number;
}

type AddOnChoiceProps = {
  addOn: AddOn;
  monthly: boolean;
};

export function AddOnChoice({ addOn, monthly }: AddOnChoiceProps) {
  const [selected, setSelected] = useState(false);

  return (
    <form className="border border-neutral-400 rounded-lg flex items-center justify-between p-5 gap-12">
      <div className="flex items-center gap-6">
        <input type="checkbox" />
        <label className="flex flex-col">
          <span className="font-bold">{addOn.title}</span>
          <span className="text-neutral-500">{addOn.subtitle}</span>
        </label>
      </div>
      <span>{`+ $${monthly ? addOn.monthly : addOn.yearly}/${monthly ? "mo" : "yr"}`}</span>
    </form>
  );
}
