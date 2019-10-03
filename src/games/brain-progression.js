import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const progresLength = 10;

const getProgression = (firstNum, step, hidenPosition) => {
  let progression = '';
  for (let i = 0; i < progresLength; i += 1) {
    if (i === hidenPosition) {
      progression += '.. ';
    } else {
      progression += String(firstNum + i * step);
      progression += ' ';
    }
  }
  return progression;
};

const getHiddenNumber = (firstNum, step, hidenPosition) => firstNum + hidenPosition * step;

const brainProgression = () => {
  const firstNum = getRandomInteger(100);
  const step = getRandomInteger(20);
  const hidenPosition = getRandomInteger(10);
  const question = getProgression(firstNum, step, hidenPosition);
  const rightAnswer = getHiddenNumber(firstNum, step, hidenPosition);
  return [question, rightAnswer];
};

const description = 'What number is missing in the progression?';
const game = brainProgression;

export default () => {
  engine(game, description);
};
