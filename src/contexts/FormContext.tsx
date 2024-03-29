import { createContext, ReactNode, useContext, useState } from "react";
import { plans } from "../data/data";

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  monthly: boolean;
  setMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addOns: AddOn[];
  setAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>;
  valid: InputValidity;
  setValid: React.Dispatch<React.SetStateAction<InputValidity>>;
};

const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const value = useContext(FormContext);
  if (value === null) throw Error("Can't be used outside FormContextProvider");
  return value;
}

export function FormProvider({ children }: FormContextProviderProps) {
  const intialPersonalInfo: PersonalInfo = {
    name: "",
    email: "",
    phone: "",
  };
  const intitialValidity: InputValidity = {
    name: true,
    email: true,
    phone: true,
  };
  const [personalInfo, setPersonalInfo] = useState(intialPersonalInfo);
  const [monthly, setMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const initialAddOns: AddOn[] = []; // Q: is there a better way to do this?
  const [addOns, setAddOns] = useState(initialAddOns);
  const [valid, setValid] = useState(intitialValidity);

  return (
    <FormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        monthly,
        setMonthly,
        selectedPlan,
        setSelectedPlan,
        addOns,
        setAddOns,
        valid,
        setValid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
