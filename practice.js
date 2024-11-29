export const capitalise = (string) => {
  let cap = string.split("");
  cap[0] = cap[0].toUpperCase();
  return cap.join("");
};

export const reverseString = (string) => {
  let reversed = [];
  const charArray = string.split("");
  const lastIndex = charArray.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    reversed.push(charArray[i]);
  }
  return reversed.join("");
};

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
