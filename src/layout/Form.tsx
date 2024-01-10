import { FormButton } from "../components/FormButton";
import { FormContent } from "../components/FormContent";
import { FormHeader } from "../components/FormHeader";
import { FormProvider } from "../contexts/FormContext";
import { buttons } from "../helpers/buttons";

type FormProps = {
  step: number;
};

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

// MARK: form content needs form info and step/monthly information
// MARK: form buttons AND sidebar buttons need step information (but not monthly information) 
// but confirm would want to have form info if we were really submitting the form to a backend

// so form info & monthly will belong to FORM 
// step will belong to APP

export function Form({ step }: FormProps) {
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
        <div className="hidden md:block w-full">
          {buttons(step).map((button) => (
            <FormButton key={button} name={button} />
          ))}
        </div>
      </div>
    </FormProvider>
  );
}
