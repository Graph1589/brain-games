import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const progresLength = 10;

const getProgression = (firstNum, step, hidenPosition) => {
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

const brainProgression = () => {
  const firstNum = getRandomInteger(100);
  const step = getRandomInteger(20);
  const hidenPosition = getRandomInteger(progresLength);
  const question = getProgression(firstNum, step, hidenPosition);
  const rightAnswer = firstNum + hidenPosition * step;
  return [question, rightAnswer];
};

const description = 'What number is missing in the progression?';

export default () => {
  engine(brainProgression, description);
};
