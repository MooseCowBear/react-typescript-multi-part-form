export const priceFormat = (price: number, monthly: boolean) => {
  return `$${price}/${monthly ? "mo" : "yr"}`;
};