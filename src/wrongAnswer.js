const wrongAnswer = (wrong, right, userName) => {
  console.log(`"${wrong}" is wrong answer ;(. Correct answer was "${right}".`);
  console.log(`Let's try again, ${userName}!`);
};
export default wrongAnswer;
