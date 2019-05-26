import readlineSync from 'readline-sync';
import getRandomInteger from '../utilities/randomizer';
import wrongAnswer from '../utilities/wrong-answer';

// const progressionLength = 10;

export default (roundNumber, userName) => {
  if (roundNumber === 0) {
    console.log('What number is missing in the progression?');
  }
  const progressionStep = getRandomInteger(10);
  const hiddenNumberPosition = getRandomInteger(10);
  const progressionFirstNumber = getRandomInteger(100);


  let num1 = progressionFirstNumber + progressionStep * 0;
  let num2 = progressionFirstNumber + progressionStep * 1;
  let num3 = progressionFirstNumber + progressionStep * 2;
  let num4 = progressionFirstNumber + progressionStep * 3;
  let num5 = progressionFirstNumber + progressionStep * 4;
  let num6 = progressionFirstNumber + progressionStep * 5;
  let num7 = progressionFirstNumber + progressionStep * 6;
  let num8 = progressionFirstNumber + progressionStep * 7;
  let num9 = progressionFirstNumber + progressionStep * 8;
  let num10 = progressionFirstNumber + progressionStep * 9;

  let rightAnswer = 0;

  switch (hiddenNumberPosition) {
    case 1:
      num1 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 0;
      break;
    case 2:
      num2 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 1;
      break;
    case 3:
      num3 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 2;
      break;
    case 4:
      num4 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 3;
      break;
    case 5:
      num5 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 4;
      break;
    case 6:
      num6 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 5;
      break;
    case 7:
      num7 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 6;
      break;
    case 8:
      num8 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 7;
      break;
    case 9:
      num9 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 8;
      break;
    case 10:
      num10 = '..';
      rightAnswer = progressionFirstNumber + progressionStep * 9;
      break;
    default:
      break;
  }
  const answer = readlineSync.question(`Question: ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${num8} ${num9} ${num10} `);
  console.log(`Your answer: ${answer}`);
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, rightAnswer, userName);
  return false;
};
