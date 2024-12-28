import runGame from '../src/gameLogic.js';

const gcd = (a, b) => {
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
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    const correctAnswer = gcd(num1, num2).toString();
    return [`${num1} ${num2}`, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};