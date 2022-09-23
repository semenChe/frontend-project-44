import readlineSync from 'readline-sync';

const gameEngine = (description, dataGeneration) => {
  const gameStart = () => {
    console.log('Welcome to the Brain Games!');
  };
  let userName = '';
  const nameCreation = () => {
    userName = readlineSync.question('May I have your name? ');
    return userName;
  };
  const greetings = () => {
    console.log(`Hello, ${userName}!`);
  };
  const whatAreTheRulesOfTheGame = () => {
    console.log(description);
  };
  const cycle = () => {
    const numberOfRounds = 3;
    for (let i = 1; i <= numberOfRounds; i += 1) {
      const [anotherGameQuestion, correctAnswer] = dataGeneration();
      console.log(`Question: ${anotherGameQuestion}`);
      const playerResponse = readlineSync.question('Your answer: ');
      if (playerResponse === correctAnswer) {
        console.log('Correct!');
      } else {
        return console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
              Let's try again, ${userName}!`);
      }
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  gameStart();
  nameCreation();
  greetings(userName);
  whatAreTheRulesOfTheGame();
  cycle();
};

export default gameEngine;
