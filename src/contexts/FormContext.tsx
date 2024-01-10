import { createContext, ReactNode, useContext, useState } from "react";
import { plans } from "../data/data";

// interface PersonalInfo {
//   "name": string;
//   "email": string;
//   "phone": string;
// }

// bc form input passes the string name of the property it updates
interface Map {
  [key: string]: string | undefined;
}

interface AddOn {
  title: string;
  subtitle: string;
  monthly: number;
  yearly: number;
}

interface Plan {
  title: string;
  monthly: number;
  yearly: number;
  promo: string;
}

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  personalInfo: Map;
  setPersonalInfo: React.Dispatch<React.SetStateAction<Map>>;
  monthly: boolean;
  setMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addOns: AddOn[];
  setAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>;
};

const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const value = useContext(FormContext);
  if (value === null) throw Error("Can't be used outside FormContextProvider");
  return value;
}

export function FormProvider({ children }: FormContextProviderProps) {
  const intialPersonalInfo: Map = {
    name: "",
    email: "",
    phone: "",
  };
  const [personalInfo, setPersonalInfo] = useState(intialPersonalInfo);
  const [monthly, setMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const initialAddOns: AddOn[] = []; // Q: is there a better way to do this?
  const [addOns, setAddOns] = useState(initialAddOns);

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
