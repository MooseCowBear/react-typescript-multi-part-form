import { useState } from "react";
import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  //

  return (
    <>
      <Sidebar currentStep={currentStep} setStep={setCurrentStep} />
      <div className="bg-blue-100 md:bg-neutral-100 relative h-full border p-5 md:p-0">
        <Form step={currentStep} />
      </div>
    </>
  );
}

export default App;
