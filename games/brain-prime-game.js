import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const prime = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  const quest = () => randomNumber(2, 100);
  const correctAnswer = (anotherQuestion) => {
    for (let i = 2; i <= anotherQuestion / 2; i += 1) {
      if (anotherQuestion % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  index.cycle(quest, correctAnswer, name);
};
export default prime;
