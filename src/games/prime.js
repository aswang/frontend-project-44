import runGame from '../gameLogic.js';
import { getRandomNumber } from '../utils/randomNumber.js';

const RANDOM_MIN = 1;
const RANDOM_MAX = 20;

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
        const randomNumber = getRandomNumber(RANDOM_MIN,RANDOM_MAX);
        
        const correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
        return [`${randomNumber}`, correctAnswer];
      };
    
      runGame(description, generateQuestionAndAnswer);
    };
