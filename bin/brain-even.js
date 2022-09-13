#!/usr/bin/env node
import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomNum % 2 === 0) {
      console.log('Correct!');
    }
    if (answer === 'no' && randomNum % 2 !== 0) {
      console.log('Correct!');
    }
    if (answer !== 'yes' && randomNum % 2 === 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${name}!`);
    }
    if (answer !== 'no' && randomNum % 2 !== 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
parityCheck();
