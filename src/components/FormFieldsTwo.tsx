// TODO: loop plans
import { useState } from "react";
import { plans } from "../data/data";
import { PlanCard } from "./PlanCard";

// TODO: lift state up bc third screen needs it too

export function FormFieldsTwo() {
  const [monthly, setMonthly] = useState(true);

  return (
    <div className="flex flex-col items-stretch gap-6 md:gap-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-[9rem,_9rem,_9rem] gap-2 md:gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} monthly={monthly} />
        ))}
      </div>
      <div className="rounded-lg bg-blue-300/5 flex items-center justify-center p-4">
        <div className="relative">
          <label className="grid grid-cols-[1fr,_100px,_1fr]">
            <span className={`${monthly ? "font-bold" : "text-neutral-500"}`}>
              Monthly
            </span>
            <span></span>
            <span className={`${!monthly ? "font-bold" : "text-neutral-500"}`}>
              Yearly
            </span>
          </label>
          <button
            onClick={() => setMonthly((val) => !val)}
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-400 rounded-full h-6 w-12 px-1"
          >
            <div
              className={`bg-neutral-100 h-4 w-4 rounded-full ${
                !monthly && "float-right"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
