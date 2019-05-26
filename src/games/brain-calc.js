import readlineSync from 'readline-sync';
import getRandomInteger from '../utilities/randomizer';
import wrongAnswer from '../utilities/wrong-answer';

export default (roundNumber, userName) => {
  if (roundNumber === 0) {
    console.log('What is the result of the expression?');
  }
  const maxValueForNumber = 35;
  const maxValueForOperator = 3;
  const firstNumber = getRandomInteger(maxValueForNumber);
  const secondNumber = getRandomInteger(maxValueForNumber);
  const operatorNumber = getRandomInteger(maxValueForOperator);
  let rightAnswer = 0;
  let operatorChar = '';
  switch (operatorNumber) {
    case 1:
      operatorChar = '+';
      rightAnswer = firstNumber + secondNumber;
      break;
    case 2:
      operatorChar = '-';
      rightAnswer = firstNumber - secondNumber;
      break;
    case 3:
      operatorChar = '*';
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const answer = Number(readlineSync.question(`Question: ${firstNumber} ${operatorChar} ${secondNumber} `));
  console.log(`Your answer: ${answer}`);
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, rightAnswer, userName);
  return false;
};
