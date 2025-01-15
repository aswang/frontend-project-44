import readlineSync from 'readline-sync';

const ANSWER_COUNT = 3;

const runGame = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  if (!name) {
    name = 'Stranger';
  }

  console.log(`Hello, ${name}!`);
  console.log(description);

  let correctAnswersCount = 0;

  while (correctAnswersCount < ANSWER_COUNT) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;