import { FormContent } from "../components/FormContent";
import { FormHeader } from "../components/FormHeader";
import { FormButtonsWrapper } from "../components/FromButtonsWrapper";
import { FormProvider } from "../contexts/FormContext";
import { useStepContext } from "../contexts/StepContext";

const FORM_HEADERS = [
  {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing Up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];

// TODO: make sure size of card doesn't change screen to screen (on large screens)

export function Form() {
  const { step } = useStepContext();

  return (
    <FormProvider>
      <div className="absolute w-11/12 top-0 left-1/2 translate-x-[-50%] translate-y-[-15%] rounded-xl py-8 px-6 md:left-0 md:translate-x-[0%] md:translate-y-[0%] md:py-10 md:px-20 md:relative bg-neutral-100 md:flex md:flex-col md:justify-between md:h-full md:w-auto md-bg-transparent">
        <div className="flex flex-col gap-6 md:gap-8">
          <FormHeader
            title={FORM_HEADERS[step - 1].title}
            subtitle={FORM_HEADERS[step - 1].subtitle}
          />
          <FormContent step={step} />
        </div>
        <FormButtonsWrapper classes="hidden md:block w-full" />
      </div>
    </FormProvider>
  );
}
