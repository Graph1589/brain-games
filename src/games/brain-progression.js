import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const progresLength = 10;

const getQuestion = (firstNum, step, hidenPosition) => {
  let progression = '';
  for (let i = 0; i < progresLength; i += 1) {
    if (i === hidenPosition) {
      progression = `${progression}... `;
    } else {
      progression = `${progression}${String(firstNum + i * step)} `;
    }
  }
  return progression;
};

const runProgression = () => {
  const firstNum = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 20);
  const hidenPosition = getRandomInteger(0, progresLength);
  const question = getQuestion(firstNum, step, hidenPosition);
  const rightAnswer = firstNum + hidenPosition * step;
  return [question, String(rightAnswer)];
};

const description = 'What number is missing in the progression?';

export default () => {
  engine(runProgression, description);
};
