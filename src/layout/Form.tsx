import { FormContent } from "../components/FormContent";
import { FormHeader } from "../components/FormHeader";

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

//absolute w-5/6 top-1/4 left-1/2 md:translate-y-[-40%] translate-x-[-50%]

export function Form({ step }: FormProps) {
  return (
    <div className="rounded-xl py-5 px-5 md:py-10 md:px-20 md:relative bg-neutral-100 md:flex md:flex-col md:justify-between md:h-full md:w-auto md-bg-transparent">
      <div className="flex flex-col gap-8">
        <FormHeader
          title={FORM_HEADERS[step - 1].title}
          subtitle={FORM_HEADERS[step - 1].subtitle}
        />
        <FormContent />
      </div>
      <div className="hidden md:flex md:justify-between">
        <button>one</button>
        <button>two</button>
      </div>
    </div>
  );
}
