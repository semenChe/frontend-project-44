import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const gcd = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('Find the greatest common divisor of given numbers.');
  let number1 = 0;
  let number2 = 0;
  const quest = () => {
    number1 = randomNumber(1, 101);
    number2 = randomNumber(1, 101);
    return `${number1} ${number2}`;
  };
  const correctAnswer = () => {
    for (let i = number1; i > 0; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        return String(i);
      }
    }
    return 0;
  };
  index.cycle(quest, correctAnswer, name);
};
export default gcd;
