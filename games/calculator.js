import runGame from '../src/gameLogic.js';

export const playCalcGame = () => {
  const description = 'What is the result of the expression?';

  const generateQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    let question;
    let correctAnswer;

    switch (operation) {
      case '+':
        question = `${num1} + ${num2}`;
        correctAnswer = (num1 + num2).toString();
        break;
      case '-':
        question = `${num1} - ${num2}`;
        correctAnswer = (num1 - num2).toString();
        break;
      case '*':
        question = `${num1} * ${num2}`;
        correctAnswer = (num1 * num2).toString();
        break;
      default:
        break;
    }

    return [question, correctAnswer];
  };

  runGame(description, generateQuestionAndAnswer);
};
