import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const max = 100;

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const question = getRandomInteger(max);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const description = 'Answer "yes" if number even, otherwise answer "no".';

export default () => {
  engine(brainEven, description);
};
