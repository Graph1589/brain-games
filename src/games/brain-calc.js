import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const operators = ['+', '-', '*'];
const maxValue = 35;

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
  const firstNumber = getRandomInteger(maxValue);
  const secondNumber = getRandomInteger(maxValue);
  const operator = operators[getRandomInteger(operators.length, 0)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, operator, secondNumber);
  return [question, rightAnswer];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(brainCalc, description);
};
