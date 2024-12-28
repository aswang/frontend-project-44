import readlineSync from 'readline-sync';

const runGame = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  if (!name) {
    name = 'NoName =(';
  }

  console.log(`Hello, ${name}!`);
  console.log(description);

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
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