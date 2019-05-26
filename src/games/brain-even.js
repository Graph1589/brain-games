import readlineSync from 'readline-sync';
import getRandomInteger from '../utilities/randomizer';
import wrongAnswer from '../utilities/wrong-answer';

const maxValueOfNumbers = 100;

export default (roundNumber, userName) => {
  if (roundNumber === 0) {
    console.log('Answer "yes" if number even, otherwise answer "no"\n');
  }
  const number = getRandomInteger(maxValueOfNumbers);
  let rightAnswer = '';

  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  const answer = readlineSync.question(`Question: ${number} `);
  if (answer !== rightAnswer) {
    wrongAnswer(answer, rightAnswer, userName);
    return false;
  }
  return true;
};
