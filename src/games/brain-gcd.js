import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const maxValueOfNumbers = 50;

const getGcd = (first, second) => {
  let gcd = 1;
  const maxNumber = first > second ? second : first;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (first % i === 0 && second % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const brainGcd = () => {
  const firstNumber = getRandomInteger(maxValueOfNumbers);
  const secondNumber = getRandomInteger(maxValueOfNumbers);
  const question = `${firstNumber} and ${secondNumber}`;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(brainGcd, description);
};
