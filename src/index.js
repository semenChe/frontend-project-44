import readlineSync from 'readline-sync';

const roundCount = 3;
export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i <= roundCount; i += 1) {
    const [anotherGameQuestion, expectedAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${anotherGameQuestion}`);
    const playerResponse = readlineSync.question('Your answer: ');
    if (playerResponse === expectedAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
            Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
