import runGame from '../gameLogic.js';
import { getRandomNumber } from '../utils/randomNumber.js';

export const playEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const randomNumber = getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [`${randomNumber}`, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};
