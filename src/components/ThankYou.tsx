import thankYouIcon from "../assets/icon-thank-you.svg";
import { useStepContext } from "../contexts/StepContext";

export function ThankYou() {
  const { step } = useStepContext();

  if (step < 5) return null;

  // MARK: not ideal. want to constrain width for all large cards...

  return (
    <div className="bg-neutral-300 md:bg-neutral-100 relative md:h-full p-5 md:p-0 min-h-[520px]">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 px-5 py-20 md:px-12 max-w-[35rem] absolute w-11/12 top-[-4.5rem] md:top-0 left-1/2 translate-x-[-50%] rounded-xl py-8 px-6 md:left-0 md:translate-x-[0%] md:py-10 md:px-20 md:relative bg-neutral-100 md:h-full md:w-auto md-bg-transparent">
        <img
          className="max-h-14 md:max-h-fit mb-4"
          src={thankYouIcon}
          alt="check mark"
        />
        <h1 className="text-2xl md:text-4xl font-bold leading-none">
          Thank you!
        </h1>
        <p className="text-neutral-500 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support&#64;loremgaming.com.
        </p>
      </div>
    </div>
  );
}
