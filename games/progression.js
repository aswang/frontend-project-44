import runGame from '../src/gameLogic.js';

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
        const start = randomFromInterval(1, 10);
        const step = randomFromInterval(1, 6);
    
        const numTerms = randomFromInterval(5, 15);
        const hiddenIndex = randomFromInterval(0, numTerms - 1);
    
        const progression = generateArithmeticProgression(start, step, numTerms, hiddenIndex);
        const correctAnswer = String(start + hiddenIndex * step);
    
        return [progression.join(' '), correctAnswer];
      };
    
      runGame(description, generateQuestionAndAnswer);
    };
    