export const getInit = (value) =>
  value
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");

export const copy = (value) => navigator.clipboard.writeText(value);

