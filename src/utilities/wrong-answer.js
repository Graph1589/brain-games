export default (wrongAnswer, rightAnswer, userName) => {
  console.log(`"${wrongAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};
