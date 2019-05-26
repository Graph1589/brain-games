import readlineSync from 'readline-sync';
import getRandomInteger from '../utilities/randomizer';
import wrongAnswer from '../utilities/wrong-answer';

const maxNumber = 300;

const isNumberPrime = (num) => {
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

export default (roundNumber, userName) => {
  if (roundNumber === 0) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  }
  const number = getRandomInteger(maxNumber);
  const rightAnswer = isNumberPrime(number);
  const answer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${answer}`);
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, rightAnswer, userName);
  return false;
};
