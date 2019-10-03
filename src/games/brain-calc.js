import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const numberOfOperators = 3;
const maxValueOfNumbers = 35;

const getRandomOperator = (number) => {
  let operatorChar = '';
  switch (number) {
    case 1:
      operatorChar = '+';
      break;
    case 2:
      operatorChar = '-';
      break;
    case 3:
      operatorChar = '*';
      break;
    default:
      break;
  }
  return operatorChar;
};

const getRightAnswer = (firstNumber, operator, secondNumber) => {
  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
  }
  return rightAnswer;
};

const brainCalc = () => {
  const firstNumber = getRandomInteger(maxValueOfNumbers);
  const secondNumber = getRandomInteger(maxValueOfNumbers);
  const operator = getRandomOperator(numberOfOperators);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, operator, secondNumber);
  return [question, rightAnswer];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(brainCalc, description);
};
