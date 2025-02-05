import runGame from '../gameLogic.js';
import { getRandomNumber } from '../utils/randomNumber.js';

const defineGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const playGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAndAnswer = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const correctAnswer = defineGcd(num1, num2).toString();
    return [`${num1} ${num2}`, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};