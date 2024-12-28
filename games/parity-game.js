import runGame from '../src/gameLogic.js';

export const playEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [`${randomNumber}`, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};
