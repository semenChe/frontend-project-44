import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const parityCheck = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('Answer "yes" if the number is even, otherwise answer "no".');
  const quest = () => randomNumber(1, 100);
  const correctAnswer = (anotherQuestion) => {
    if (anotherQuestion % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  index.cycle(quest, correctAnswer, name);
};
export default parityCheck;
