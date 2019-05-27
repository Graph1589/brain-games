import welcome from './utilities/welcome';
import congratulations from './utilities/congratulation';
import brainCalc from './games/brain-calc';
import brainGreatestCommonDivisor from './games/brain-gcd';
import brainProgression from './games/brain-progression';
import brainEven from './games/brain-even';
import brainPrime from './games/brain-prime';


export default (key) => {
  const userName = welcome();
  let roundCounter = 0;
  const gameName = key;

  let game;
  switch (gameName) {
    case 'prime':
      game = (round, name) => brainPrime(round, name);
      break;
    case 'progression':
      game = (round, name) => brainProgression(round, name);
      break;
    case 'gcd':
      game = (round, name) => brainGreatestCommonDivisor(round, name);
      break;
    case 'calc':
      game = (round, name) => brainCalc(round, name);
      break;
    case 'even':
      game = (round, name) => brainEven(round, name);
      break;
    default:
      break;
  }

  while (roundCounter < 3) {
    if (game(roundCounter, userName) === true) {
      roundCounter += 1;
    } else {
      break;
    }
  }
  if (roundCounter === 3) {
    congratulations(userName);
  }
};
