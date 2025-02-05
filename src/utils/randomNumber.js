const DEFAULT_MIN = 1;
const DEFAULT_MAX = 100;

export const getRandomNumber = (min = DEFAULT_MIN, max = DEFAULT_MAX) =>
  Math.floor(Math.random() * (max - min + 1)) + min;