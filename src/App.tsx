import { useState } from "react";
import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Sidebar currentStep={currentStep} setStep ={setCurrentStep}/>
      <Form />
    </>
  );
}

export default App;
