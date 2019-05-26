import readlineSync from 'readline-sync';
import getRandomInteger from '../utilities/randomizer';
import wrongAnswer from '../utilities/wrong-answer';

const maxValueOfNumbers = 100;

const findGreatestCommonDivisor = (num1, num2) => {
  let gcd = 0;
  if ((num1 === 1 && num2 !== 0) || (num2 === 1 && num1 !== 0)) {
    gcd = 1;
  } else {
    for (let i = 1; i <= num1 / 2 && i <= num2; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
  }
  return gcd;
};

export default (roundNumber, userName) => {
  if (roundNumber === 0) {
    console.log('Find the greatest common divisor of given numbers.');
  }
  const firstNumber = getRandomInteger(maxValueOfNumbers);
  const secondNumber = getRandomInteger(maxValueOfNumbers);
  const answer = Number(readlineSync.question(`Question: ${firstNumber} ${secondNumber} `));
  console.log(`Your answer: ${answer}`);
  const rightAnswer = findGreatestCommonDivisor(firstNumber, secondNumber);
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, rightAnswer, userName);
  return false;
};
