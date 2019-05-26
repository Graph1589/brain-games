import readlineSync from 'readline-sync';

export default () => {
  console.log('\nWelcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
