import readlineSync from 'readline-sync';

const gameStart = () => {
  console.log('Welcome to the Brain Games!');
};
const nameCreation = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};
const greetings = (name) => {
  console.log(`Hello, ${name}!`);
};
const whatAreTheRulesOfTheGame = (rulesOfTheGame) => {
  console.log(rulesOfTheGame);
};
const cycle = (quest, correctAnswer, name) => {
  for (let i = 0; i < 3; i += 1) {
    const anotherQuestion = quest();
    const answerToQuestion = correctAnswer(anotherQuestion);
    console.log(`Question: ${anotherQuestion}`);
    const playerResponse = readlineSync.question('Your answer: ');
    if (playerResponse === answerToQuestion) {
      console.log('Correct!');
    } else {
      return console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${answerToQuestion}'.
            Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export {
  gameStart, greetings, nameCreation, whatAreTheRulesOfTheGame, cycle,
};
