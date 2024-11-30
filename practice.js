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

function isUpperCase(character) {
  if (character === character.toLowerCase()) return false;
  return true;
}

export const caesarCipher = (string, shift) => {
  const alph = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringArr = string.split("");
  let cipher = [];

  stringArr.forEach((character) => {
    const upperCase = isUpperCase(character);
    let lower = character.toLowerCase();
    if (!alph.includes(lower)) {
      cipher.push(character);
    } else {
      let shiftIndex = alph.indexOf(lower) + shift;
      while (shiftIndex > alph.length - 1) shiftIndex -= alph.length;
      upperCase === true
        ? cipher.push(alph[shiftIndex].toUpperCase())
        : cipher.push(alph[shiftIndex]);
    }
  });
  return cipher.join("");
};

export const analyzeArray = (array) => {
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  const min = array.reduce(
    (prev, curr) => (prev > curr ? (prev = curr) : prev),
    array[0]
  );
  const max = array.reduce(
    (prev, curr) => (prev < curr ? (prev = curr) : prev),
    array[0]
  );
  const length = array.length;

  return {
    average: sum / length,
    min: min,
    max: max,
    length: length,
  };
};
