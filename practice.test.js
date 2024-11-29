import {
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

//capitalise
test("Capitalised 'joseph' is 'Joseph'", () => {
  expect(capitalise("joseph")).toBe("Joseph");
});
test("Capitalised 'paige' is 'Paige'", () => {
  expect(capitalise("paige")).toBe("Paige");
});

//reverseString
test("Reversed 'Hello' is 'olleH'", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
test("Reversed 'table' is 'elbat'", () => {
  expect(reverseString("table")).toBe("elbat");
});

//calculator
test("1 + 1 equals 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
test("234 + 531 equals 765", () => {
  expect(calculator.add(234, 531)).toBe(765);
});

test("1 - 1 equals 0", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});
test("25 - 4 equals 21", () => {
  expect(calculator.subtract(25, 4)).toBe(21);
});

test("2 / 2 equals 1", () => {
  expect(calculator.add(2, 2)).toBe(1);
});
test("9 / 3 equals 3", () => {
  expect(calculator.add(9, 3)).toBe(3);
});

test("2 * 2 equals 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test("5 * 8 equals 40", () => {
  expect(calculator.add(5, 8)).toBe(40);
});

//caesar cipher
test("Caesar cipher of xyz", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("Caesar cipher of Hello", () => {
  expect(caesarCipher("Hello", 3)).toBe("Khoor");
});
test("Caesar cipher of Hello, World!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

//analyzeArray
test("Analyze [1,2,3,4,5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("Analyze [4,6,2,7,3,8,5]", () => {
  expect(analyzeArray([4, 6, 2, 7, 3, 8, 5])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 7,
  });
});
