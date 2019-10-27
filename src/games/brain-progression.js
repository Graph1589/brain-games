import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const progresLength = 10;

const getQuestion = (firstNum, step, hidenElementPosition) => {
  let progression = '';
  for (let i = 0; i < progresLength; i += 1) {
    if (i === hidenElementPosition) {
      progression = `${progression}...`;
    } else {
      progression = `${progression}${String(firstNum + i * step)}`;
    }
    if (i < progresLength - 1) {
      progression = `${progression} `;
    }
  }
  return progression;
};

const generateGameData = () => {
  const first = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 20);
  const hiddenElementPosition = getRandomInteger(0, progresLength - 1);
  const question = getQuestion(first, step, hiddenElementPosition);
  const rightAnswer = first + hiddenElementPosition * step;
  return [question, String(rightAnswer)];
};

const description = 'What number is missing in the progression?';

export default () => {
  engine(generateGameData, description);
};
