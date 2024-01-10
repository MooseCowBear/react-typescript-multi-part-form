import { createContext, useContext, ReactNode, useState } from "react";

type StepContextProviderProps = {
  children: ReactNode;
};

type StepContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const StepContext = createContext<StepContextType | null>(null);

export function useFormContext() {
  const value = useContext(StepContext);
  if (value === null) throw Error("Can't be used outside FormContextProvider");
  return value;
}

export function FormProvider({ children }: StepContextProviderProps) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}
