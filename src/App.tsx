import { useState } from "react";
import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";
import { buttons } from "./helpers/buttons";
import { FormButton } from "./components/FormButton";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Sidebar currentStep={currentStep} setStep={setCurrentStep} />
      <div className="bg-neutral-300 md:bg-neutral-100 relative md:h-full p-5 md:p-0 min-h-[520px]">
        <Form step={currentStep} />
        <div className="absolute p-3 bg-neutral-100 bottom-0 left-0 block w-full md:hidden">
          {buttons(currentStep).map((button) => (
            <FormButton key={button} name={button} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
