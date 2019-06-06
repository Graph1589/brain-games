import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const maxValueOfNumbers = 100;

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const question = getRandomInteger(maxValueOfNumbers);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const game = brainEven;
const description = 'Answer "yes" if number even, otherwise answer "no".';

export default () => {
  engine(game, description);
};
