import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const maxValueOfNumbers = 50;

const isPrime = (num) => {
  let cdg = 0;
  if (num === 1) {
    return 'no';
  }
  for (let i = 1; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      cdg = i;
    }
  }
  if (cdg === 1) {
    return 'yes';
  }
  return 'no';
};

const brainPrime = () => {
  const number = getRandomInteger(maxValueOfNumbers);
  const question = `${number}`;
  const rightAnswer = isPrime(number);
  return [question, rightAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const game = brainPrime;

export default () => {
  engine(game, description);
};
