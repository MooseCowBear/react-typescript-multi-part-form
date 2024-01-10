import { useState } from "react";
import { useFormContext } from "../contexts/FormContext";

interface AddOn {
  title: string;
  subtitle: string;
  monthly: number;
  yearly: number;
}

type AddOnChoiceProps = {
  addOn: AddOn;
};

// TODO: move the form wrapper to the form fields component 

export function AddOnChoice({ addOn }: AddOnChoiceProps) {
  const { monthly } = useFormContext();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form
      onClick={() => setIsChecked((val) => !val)}
      className={`group border rounded-lg flex items-center justify-between px-4 py-3 md:p-5 lg:gap-16 hover:border-blue-300 hover:cursor-pointer ${
        isChecked ? "bg-blue-300/5 border-blue-300" : "border-neutral-400"
      }`}
    >
      <label className="flex items-center gap-2 md:gap-6 group-hover:border-blue-300 group-hover:cursor-pointer">
        <input
          disabled={true}
          checked={isChecked}
          type="checkbox"
          className="shrink-0 group-hover:cursor-pointer relative peer appearance-none w-5 h-5 border-2 border-neutral-400 rounded checked:border-blue-300 checked:bg-blue-300"
        />
        <span className="flex flex-col items-start">
          <span className="whitespace-nowrap font-bold">{addOn.title}</span>
          <span className="whitespace-nowrap text-sm text-neutral-500">
            {addOn.subtitle}
          </span>
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="absolute w-3.5 h-3.5 translate-x-[20%] peer hidden fill-neutral-100 peer-checked:block"
        >
          <path
            fill=""
            d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
          />
        </svg>
      </label>
      <span className="whitespace-nowrap text-sm text-blue-300">{`+ $${
        monthly ? addOn.monthly : addOn.yearly
      }/${monthly ? "mo" : "yr"}`}</span>
    </form>
  );
}
