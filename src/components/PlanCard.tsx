import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import { useFormContext } from "../contexts/FormContext";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  const { monthly, selectedPlan, setSelectedPlan } = useFormContext();

  const icon = () => {
    switch (plan.title) {
      case "Arcade":
        return arcadeIcon;
      case "Advanced":
        return advancedIcon;
      default:
        return proIcon;
    }
  };

  const isSelectedPlan = () => {
    return selectedPlan.title === plan.title;
  }

  const clickHandler = () => {
    setSelectedPlan(plan);
  }

  return (
    <button
      onClick={clickHandler}
      className={`flex md:flex-col items-start md:justify-between border rounded-lg py-4 px-5 md:py-5 md:px-[clamp(2px,_1vw,_1.25rem)] lg:p-5 gap-3 md:gap-10 hover:cursor-pointer hover:border-blue-300 ${
        isSelectedPlan()
          ? "bg-blue-300/5 border-blue-300"
          : "border-neutral-400"
      }`}
    >
      <img src={icon()} />
      <div className="flex flex-col items-start">
        <h3 className="font-medium leading-tight">{plan.title}</h3>
        <p className="text-neutral-500">{`$${
          monthly ? plan.monthly : plan.yearly
        }/${monthly ? "mo" : "yr"}`}</p>
      </div>
    </button>
  );
}
