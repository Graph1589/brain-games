import readlineSync from 'readline-sync';

export default (game, description) => {
  console.log('\nWelcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
