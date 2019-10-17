import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const operators = ['+', '-', '*'];
const max = 35;
const min = 0;

const getRightAnswer = (firstNumber, operator, secondNumber) => {
  let rightAnswer = null;
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

const runCalc = () => {
  const firstOperand = getRandomInteger(min, max);
  const secondOperand = getRandomInteger(min, max);
  const operator = operators[getRandomInteger(0, operators.length)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = getRightAnswer(firstOperand, operator, secondOperand);
  return [question, String(rightAnswer)];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(runCalc, description);
};
