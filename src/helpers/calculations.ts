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

type AddOns = AddOn[];

export const total = (plan: Plan, addOns: AddOns, monthly: boolean) => {
  if (monthly) {
    return monthlyTotal(plan, addOns);
  } 
  return yearlyTotal(plan, addOns);
};

const monthlyTotal = (plan: Plan, addOns: AddOns) => {
  return plan.monthly + addOns.reduce((a, b) => (a + b.monthly), 0);
}

const yearlyTotal = (plan: Plan, addOns: AddOns) => {
  return plan.yearly + addOns.reduce((a, b) => a + b.yearly, 0);
}