import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const progresLength = 10;

const getQuestion = (firstNum, step, hidenPosition) => {
  let progression = '';
  for (let i = 0; i < progresLength; i += 1) {
    if (i === hidenPosition) {
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

const generateQuestion = () => {
  const firstNum = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 20);
  const hiddenElementPosition = getRandomInteger(0, progresLength);
  const question = getQuestion(firstNum, step, hiddenElementPosition);
  const rightAnswer = firstNum + hiddenElementPosition * step;
  return [question, String(rightAnswer)];
};

const description = 'What number is missing in the progression?';

export default () => {
  engine(generateQuestion, description);
};
