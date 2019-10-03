import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const operators = ['+', '-', '*'];
const maxValueOfNumbers = 35;

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
  const operator = operators[getRandomInteger(operators.length)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, operator, secondNumber);
  return [question, rightAnswer];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(brainCalc, description);
};
