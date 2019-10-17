import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const operators = ['+', '-', '*'];
const maxValue = 35;

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
  const firstOperand = getRandomInteger(maxValue);
  const secondOperand = getRandomInteger(maxValue);
  const operator = operators[getRandomInteger(operators.length, 0)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = getRightAnswer(firstOperand, operator, secondOperand);
  return [question, String(rightAnswer)];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(runCalc, description);
};
