#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInteger from '../randomnumber';
import wrongAnswer from '../wrongAnswer';

console.log('\nWelcome to the Brain games!');
console.log('Answer "yes" if number even, otherwise answer "no"\n');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let i = 0;
let rightAnswer = '';
while (i < 3) {
  const number = getRandomInteger();
  const answer = readlineSync.question(`Question: ${number} `);
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (answer === rightAnswer) {
    i += 1;
    console.log('Correct!');
  } else {
    wrongAnswer(answer, rightAnswer, userName);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
}
