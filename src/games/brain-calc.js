import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const operators = ['+', '-', '*'];
const max = 35;
const min = 0;

const getRightAnswer = (firstOperand, secondOperand, operator) => {
  let rightAnswer = null;
  switch (operator) {
    case '+':
      rightAnswer = firstOperand + secondOperand;
      break;
    case '-':
      rightAnswer = firstOperand - secondOperand;
      break;
    case '*':
      rightAnswer = firstOperand * secondOperand;
      break;
    default:
  }
  return rightAnswer;
};

const generateGameData = () => {
  const firstOperand = getRandomInteger(min, max);
  const secondOperand = getRandomInteger(min, max);
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = getRightAnswer(firstOperand, secondOperand, operator);
  return [question, String(rightAnswer)];
};

const description = 'What is the result of the expression?';

export default () => {
  engine(generateGameData, description);
};
