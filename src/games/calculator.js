import runGame from '../gameLogic.js';
import { getRandomNumber } from '../utils/randomNumber.js';

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

export const playCalcGame = () => {
  const description = 'What is the result of the expression?';

  const generateQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];
    const operation =  operations[getRandomNumber(0, operations.length - 1)];
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = calculateResult(num1, num2, operation).toString();

    return [question, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};
