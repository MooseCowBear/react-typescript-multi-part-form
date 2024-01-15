type AddOns = AddOn[];

export const total = (plan: Plan, addOns: AddOns, monthly: boolean) => {
  const key = monthly ? "monthly" : "yearly";
  return plan[key] + addOns.reduce((a, b) => a + b[key], 0);
};
