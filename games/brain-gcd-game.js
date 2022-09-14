import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const gcd = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('Find the greatest common divisor of given numbers.');
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  const quest = () => {
    randomNumber1 = randomNumber(1, 101);
    randomNumber2 = randomNumber(1, 101);
    return `${randomNumber1} ${randomNumber2}`;
  };
  const correctAnswer = () => {
    for (let i = randomNumber1; i > 0; i -= 1) {
      if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
        return String(i);
      }
    }
    return 0;
  };
  index.cycle(quest, correctAnswer, name);
};
export default gcd;
