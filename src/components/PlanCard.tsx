import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

interface Plan {
  title: string;
  monthly: number;
  yearly: number;
  promo: string;
}

type PlanCardProps = {
  plan: Plan;
  monthly: boolean;
};

export function PlanCard({ plan, monthly }: PlanCardProps) {
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

  // TODO: need state update 

  return (
    <button className="flex flex-col items-start justify-between border border-neutral-400 rounded-lg p-5 gap-10 hover:cursor-pointer">
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
