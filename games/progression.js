import runGame from '../src/gameLogic.js';

const MIN_START = 1;
const MAX_START = 10;
const MIN_STEP = 1;
const MAX_STEP = 6;
const MIN_TERMS = 5;
const MAX_TERMS = 15;

const randomFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

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
        const start = randomFromInterval(MIN_START, MAX_START);
        const step = randomFromInterval(MIN_STEP, MAX_STEP);
        const numTerms = randomFromInterval(MIN_TERMS, MAX_TERMS);
        const hiddenIndex = randomFromInterval(0, numTerms - 1);
    
        const progression = generateArithmeticProgression(start, step, numTerms, hiddenIndex);
        const correctAnswer = String(start + hiddenIndex * step);
    
        return [progression.join(' '), correctAnswer];
    };
    
    runGame(description, generateQuestionAndAnswer);
};
