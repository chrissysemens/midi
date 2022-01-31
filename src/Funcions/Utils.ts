import { WeightedChoice } from "../types";

export const weightedChoice = <T>(options: Array<WeightedChoice<T>>): T => {
  var i;

  const weights: Array<number> = [];

  for (i = 0; i < options.length; i++)
    weights[i] = options[i].weight + (weights[i - 1] || 0);

  var random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;

  return options[i].choice;
};

export const randomChoice = <T>(options: Array<T>): T => {
  return options[Math.floor(Math.random() * options.length)];
};

export const getNextLetter = (letter: string) => {
  let charCode = letter.charCodeAt(0);
  let isCapital = letter === letter.toUpperCase();

  if (isCapital === true) {
    return String.fromCharCode(((charCode - 64) % 26) + 65);
  } else {
    return String.fromCharCode(((charCode - 96) % 26) + 97);
  }
};

export const trueOrFalse = () => {
  return Math.random() < 0.5;
};
