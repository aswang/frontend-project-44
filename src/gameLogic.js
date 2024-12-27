import greetingUser from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = greetingUser();
  let correctAnswers = 0;
  const questionCount = 3;

  for (let i = 0; i < questionCount; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers+=1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }
  }
  if (correctAnswers === questionCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playEvenGame;