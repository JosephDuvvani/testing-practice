export const capitalise = (string) => {
  let cap = string.split("");
  cap[0] = cap[0].toUpperCase();
  return cap.join("");
};
