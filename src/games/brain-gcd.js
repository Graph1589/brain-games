import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const max = 50;
const min = 1;

const getGcd = (first, second) => {
  let gcd = 1;
  const peak = first > second ? second : first;
  for (let i = 1; i <= peak; i += 1) {
    if (first % i === 0 && second % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateGameData = () => {
  const first = getRandomInteger(min, max);
  const second = getRandomInteger(min, max);
  const question = `${first} and ${second}`;
  const rightAnswer = getGcd(first, second);
  return [question, String(rightAnswer)];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(generateGameData, description);
};
