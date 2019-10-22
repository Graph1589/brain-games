import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const max = 50;
const min = 1;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 1; i <= (num / 2); i += 1) {
    if (num % i === 0 && i > 1) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const question = getRandomInteger(min, max);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  engine(generateGameData, description);
};
