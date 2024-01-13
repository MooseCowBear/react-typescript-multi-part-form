import { useStepContext } from "../contexts/StepContext";

type SidebarButtonProps = {
  num: number;
  heading: string;
};

export function StepIndicator({
  num,
  heading,
}: SidebarButtonProps) {
  const {step } = useStepContext();

  return (
    <div className="flex gap-7 items-center">
      <span
        className={`rounded-full w-9 h-9 flex items-center justify-center border ${
          step === num || step === 5 && num === 4
            ? "bg-blue-100 border-blue-100 text-blue-400"
            : "bg-transparent border-neutral-100 text-neutral-400"
        }`}
      >
        {num}
      </span>
      <h2 className="hidden md:flex flex-col items-start leading-tight tracking-wider">
        <span className="uppercase text-neutral-400/80 text-sm">{`Step ${num}`}</span>
        <span className="uppercase whitespace-nowrap text-neutral-100 font-semibold">
          {heading}
        </span>
      </h2>
    </div>
  );
}
