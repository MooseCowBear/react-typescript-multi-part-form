import { FormContent } from "../components/FormContent";
import { FormHeader } from "../components/FormHeader";
import { FormButtonsWrapper } from "../components/FormButtonsWrapper";
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

export function Form() {
  const { step } = useStepContext();

  if (step > 4) return null;

  return (
    <FormProvider>
      <div className="bg-neutral-300 md:bg-neutral-100 relative md:h-full p-5 md:p-0 min-h-[520px]">
        <div className="absolute w-11/12 top-[-4.5rem] left-1/2 translate-x-[-50%] rounded-xl py-8 px-6 md:left-0 md:translate-x-[0%] md:top-0 md:py-10 md:px-20 md:relative bg-neutral-100 md:flex md:flex-col md:justify-between md:h-full md:w-auto md-bg-transparent">
          <div className="flex flex-col gap-6 md:gap-8">
            <FormHeader
              title={FORM_HEADERS[step - 1].title}
              subtitle={FORM_HEADERS[step - 1].subtitle}
            />
            <FormContent />
          </div>
          <FormButtonsWrapper classes="hidden md:block w-full" />
        </div>
        <FormButtonsWrapper classes="absolute p-3 bg-neutral-100 bottom-0 left-0 block w-full md:hidden" />
      </div>
    </FormProvider>
  );
}
