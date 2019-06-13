import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('\nWelcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const wrongAnswer = (wrong, right, userName) => {
  console.log(`"${wrong}" is wrong answer ;(. Correct answer was "${right}".`);
  console.log(`Let's try again, ${userName}!`);
};

const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export default (game, description) => {
  const userName = welcome();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const message = game();
    const question = message[0];
    const rightAnswer = message[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (String(rightAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      wrongAnswer(userAnswer, rightAnswer, userName);
      return;
    }
  }
  congratulation(userName);
};
