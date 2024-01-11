export const buttons = (step: number) => {
  switch (step) {
    case 1:
      return ["Next Step"];
    case 4:
      return ["Go Back", "Confirm"];
    default:
      return ["Go Back", "Next Step"];
  }
};