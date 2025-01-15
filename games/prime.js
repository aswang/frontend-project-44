import runGame from '../src/gameLogic.js';

const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
  
    const sqrt = Math.sqrt(number);
    for (let i = 2; i <= sqrt; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };

export const playPrimeGame = () => {
    const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
   
    const generateQuestionAndAnswer = () => {
        const randomNumber = Math.floor(Math.random() * 20);
        
        const correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
        return [`${randomNumber}`, correctAnswer];
      };
    
      runGame(description, generateQuestionAndAnswer);
    };