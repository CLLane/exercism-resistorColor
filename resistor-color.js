//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const colorCode = (color) => {
   return COLORS.reduce((acc,currentColor, i) => {
      if(currentColor === color) {
        acc = i
      }
      return acc
    }, null)
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
