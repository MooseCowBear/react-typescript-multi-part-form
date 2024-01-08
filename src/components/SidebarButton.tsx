type SidebarButtonProps = {
  currentStep: number;
  num: number;
  heading: string;
  setStep: (stepNum: number) => void;
};

export function SidebarButton({
  currentStep,
  num,
  heading,
  setStep,
}: SidebarButtonProps) {
  return (
    <button onClick={() => setStep(num)} className="flex gap-7 items-center">
      <span
        className={`rounded-full w-9 h-9 flex items-center justify-center border ${
          currentStep === num
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
    </button>
  );
}
