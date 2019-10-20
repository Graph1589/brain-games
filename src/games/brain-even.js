import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const max = 100;
const min = 0;

const isEven = number => number % 2 === 0;

const generateQuestion = () => {
  const question = getRandomInteger(min, max);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const description = 'Answer "yes" if number even, otherwise answer "no".';

export default () => {
  engine(generateQuestion, description);
};
