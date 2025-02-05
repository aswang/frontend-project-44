import runGame from '../gameLogic.js';
import { getRandomNumber } from '../utils/randomNumber.js';

const MIN_START = 1;
const MAX_START = 10;
const MIN_STEP = 1;
const MAX_STEP = 6;
const MIN_TERMS = 5;
const MAX_TERMS = 15;


const generateArithmeticProgression = (start, step, numTerms, hiddenIndex) => {
    let progression = [];
    for (let i = 0; i < numTerms; i++) {
        if (i === hiddenIndex) {
            progression.push("..");
        } else {
            progression.push(start + i * step);
        }
    }
    return progression;
};

export const playProgressionGame = () => {
    const description = 'What number is missing in the progression?';
   
    const generateQuestionAndAnswer = () => {
        const start = getRandomNumber(MIN_START, MAX_START);
        const step = getRandomNumber(MIN_STEP, MAX_STEP);
        const numTerms = getRandomNumber(MIN_TERMS, MAX_TERMS);
        const hiddenIndex = getRandomNumber(0, numTerms - 1);
    
        const progression = generateArithmeticProgression(start, step, numTerms, hiddenIndex);
        const correctAnswer = String(start + hiddenIndex * step);
    
        return [progression.join(' '), correctAnswer];
    };
    
    runGame(description, generateQuestionAndAnswer);
};
