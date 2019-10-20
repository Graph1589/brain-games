import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const max = 50;
const min = 1;

const isPrime = (num) => {
  let cdg = 0;
  if (num <= 1) {
    return false;
  }
  for (let i = 1; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      cdg = i;
    }
  }
  return (cdg === 1);
};

const generateQuestion = () => {
  const question = getRandomInteger(min, max);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  engine(generateQuestion, description);
};
